import { defineConfig } from "vite";
import vinext from "vinext";
import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite";
import hostingConfig from "./.openai/hosting.json";
import { sites } from "./build/sites-vite-plugin";

const SITE_CREATOR_PLACEHOLDER_DATABASE_ID =
  "00000000-0000-4000-8000-000000000000";

export default defineConfig(async () => {
  if (process.env.SITES_BUILD === "1") {
    const { cloudflare } = await import("@cloudflare/vite-plugin");
    const { d1, r2 } = hostingConfig;

    return {
      plugins: [
        vinext(),
        sites(),
        cloudflare({
          viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
          config: {
            main: "./worker/index.ts",
            compatibility_flags: ["nodejs_compat"],
            d1_databases: d1
              ? [{ binding: d1, database_name: "site-creator-d1", database_id: SITE_CREATOR_PLACEHOLDER_DATABASE_ID }]
              : [],
            r2_buckets: r2 ? [{ binding: r2, bucket_name: "site-creator-r2" }] : [],
          },
        }),
      ],
    };
  }

  return { plugins: [vinext(), tailwindcss(), nitro()] };
});
