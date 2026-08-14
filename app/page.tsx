const whatsappUrl =
  "https://wa.me/5562920032193?text=Oi%2C%20Podium!%20Quero%20agendar%20a%20lavagem%20do%20meu%20carro.";

const services = [
  ["01", "Lavagem externa e tapetes"],
  ["02", "Cera líquida"],
  ["03", "Aspiração completa"],
  ["04", "Painel e portas higienizados"],
  ["05", "Pneus com pretinho"],
  ["06", "Caixas e rodas pulverizadas"],
  ["07", "Aromatizante + lixeira Podium"],
];

const steps = [
  ["01", "Você chama", "Conte onde seu carro está e escolha o melhor horário."],
  ["02", "A gente busca", "Mediante agendamento e disponibilidade, retiramos seu veículo."],
  ["03", "Você recebe", "Seu carro volta limpo, cuidado e pronto para a rotina."],
];

const serviceCategories = [
  ["Ducha na máquina", "A partir de R$ 15", "Lavagem externa prática para o dia a dia."],
  ["Combos rápidos", "A partir de R$ 35", "Lavagem, secagem e pretinho; opções com cuidado interno."],
  ["Pré-lavagem", "A partir de R$ 25", "Limpeza manual de longarinas e rodas antes da máquina."],
  ["Geral completa", "A partir de R$ 60", "Exterior, interior, cera, aspiração e acabamento completo."],
  ["Higienização", "A partir de R$ 200", "Opções para teto, bancos de tecido ou couro."],
  ["Serviços adicionais", "A partir de R$ 8", "Tapetes, aspiração, pretinho, aromas, cera e outros."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Podium Lava Rápido — início">
          <img src="/brand/logo-dark.png" alt="Podium Lava Rápido" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#localizacao">Localização</a>
        </nav>
        <a className="button button-small" href={whatsappUrl} target="_blank" rel="noreferrer">
          Agendar agora <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Mais de 10 anos cuidando do seu carro</p>
          <h1>Seu carro limpo.<br /><em>Seu tempo livre.</em></h1>
          <p className="hero-text">
            A lavagem completa que cabe na sua rotina. Agende, a gente busca e entrega seu
            veículo — sem custo adicional.
          </p>
          <div className="hero-actions">
            <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">
              Agendar pelo WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#servicos">Ver o que está incluso <span>↓</span></a>
          </div>
          <p className="microcopy">Busca e entrega mediante agendamento e disponibilidade.</p>
        </div>

        <div className="hero-visual" aria-label="Identidade visual Podium Lava Rápido">
          <div className="brand-stage">
            <div className="hero-photo" />
            <p>Lavagem automotiva <span>•</span> Aparecida de Goiânia</p>
          </div>
          <div className="speed-lines" aria-hidden="true"><i /><i /><i /></div>
          <div className="price-chip">
            <span>A partir de</span>
            <strong>R$ 60</strong>
            <small>lavagem geral</small>
          </div>
        </div>

        <div className="hero-proof">
          <div><strong>10+</strong><span>anos de<br />experiência</span></div>
          <div><strong>7</strong><span>cuidados em<br />uma lavagem</span></div>
          <div><strong>0</strong><span>tempo perdido<br />na sua rotina</span></div>
        </div>
      </section>

      <section className="promise-section">
        <p className="section-kicker">Podium é mais que lavagem</p>
        <div className="promise-heading">
          <h2>Enquanto você resolve a vida,<br /><span>seu carro fica limpo.</span></h2>
          <p>Praticidade de verdade para quem trabalha muito, vive com a agenda cheia e ainda gosta do carro bem cuidado.</p>
        </div>
        <div className="benefit-strip">
          <article><span>01</span><h3>Você ganha tempo</h3><p>Sem fila e sem precisar parar o seu dia.</p></article>
          <article><span>02</span><h3>A gente cuida</h3><p>Experiência, atenção e confiança em cada detalhe.</p></article>
          <article><span>03</span><h3>Seu carro volta pronto</h3><p>Limpo, cheiroso e preparado para a próxima viagem.</p></article>
        </div>
      </section>

      <section className="services-section" id="servicos">
        <div className="services-intro">
          <p className="section-kicker light">Lavagem completa</p>
          <h2>O cuidado que<br /><em>seu carro merece.</em></h2>
          <p>Do lado de fora aos detalhes que você toca todos os dias. Um serviço completo, sem complicação.</p>
          <div className="service-price"><span>Lavagem geral completa</span><strong>Promoção a partir de R$ 60,00</strong></div>
          <div className="service-price"><span>Ducha na máquina</span><strong>Promoção a partir de R$ 15,00</strong></div>
        </div>
        <div className="service-list">
          {services.map(([number, name]) => (
            <div className="service-row" key={number}>
              <span>{number}</span><h3>{name}</h3><b aria-hidden="true">✓</b>
            </div>
          ))}
          <a className="button button-full" href={whatsappUrl} target="_blank" rel="noreferrer">Quero agendar minha lavagem <span>↗</span></a>
        </div>
      </section>

      <section className="price-guide-section" id="tabela">
        <div className="price-guide-heading">
          <div>
            <p className="section-kicker">Escolha seu cuidado</p>
            <h2>Tem um serviço<br /><em>para cada rotina.</em></h2>
          </div>
          <p>
            O valor varia conforme o porte do veículo e o nível de cuidado escolhido.
            Veja um resumo abaixo ou abra a tabela completa para consultar todas as opções.
          </p>
        </div>
        <div className="category-grid">
          {serviceCategories.map(([title, price, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <strong>{price}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="table-access-card">
          <div className="table-preview" aria-hidden="true" />
          <div>
            <p className="section-kicker light">Tabela Podium 2026</p>
            <h3>Consulte todos os serviços e valores.</h3>
            <p>A tabela reúne preços por porte de veículo, combos, higienizações e adicionais. Os valores destacados em amarelo são promocionais.</p>
            <a className="button button-yellow" href="/brand/tabela-podium-2026.jpg" target="_blank" rel="noreferrer">
              Abrir tabela completa <span>↗</span>
            </a>
          </div>
        </div>
        <p className="price-note">Valores promocionais informados na tabela vigente de 2026. Confirme disponibilidade e condições no agendamento.</p>
      </section>

      <section className="pickup-section" id="como-funciona">
        <div className="pickup-copy">
          <p className="section-kicker">Busca e entrega</p>
          <h2>Seu carro vai.<br /><span>Seu dia continua.</span></h2>
          <p>Tem coisa melhor do que cuidar do carro sem sair de casa ou do trabalho? A gente busca, lava e entrega para você.</p>
          <div className="route-line" aria-hidden="true"><span>VOCÊ</span><i /><b>➜</b><i /><span>PODIUM</span><i /><b>➜</b><i /><span>VOCÊ</span></div>
        </div>
        <div className="step-list">
          {steps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
          <p className="availability">* Serviço sem custo adicional, sujeito à área atendida, agendamento e disponibilidade.</p>
        </div>
      </section>

      <section className="real-podium-section">
        <div className="real-photo wash-photo" role="img" aria-label="Profissional da Podium lavando um veículo" />
        <div className="real-podium-copy">
          <p className="section-kicker light">Gente de verdade, cuidado de perto</p>
          <h2>Quem cuida do seu carro<br /><em>tem nome e experiência.</em></h2>
          <p>
            A Podium é uma empresa local, feita por uma equipe que entende a rotina da região
            e trata cada veículo com atenção — por dentro e por fora.
          </p>
          <div className="team-photo" role="img" aria-label="Equipe da Podium Lava Rápido" />
        </div>
        <div className="real-photo interior-photo" role="img" aria-label="Limpeza interna de um veículo na Podium" />
      </section>

      <section className="local-section" id="localizacao">
        <div className="local-card">
          <p className="section-kicker light">Perto de você</p>
          <h2>Seu lava rápido<br />em <em>Aparecida.</em></h2>
          <p>Estamos em frente ao Tatico Papillon, atendendo quem vive e trabalha na região.</p>
          <div className="hours">
            <div><span>Segunda a sábado</span><strong>08h às 18h</strong></div>
            <div><span>Domingo</span><strong>08h às 13h</strong></div>
          </div>
          <a className="button" href="https://www.google.com/maps/search/?api=1&query=Podium+Lava+R%C3%A1pido+Aparecida+de+Goi%C3%A2nia" target="_blank" rel="noreferrer">Abrir no mapa <span>↗</span></a>
        </div>
        <div className="map-art" aria-label="Referência de localização da Podium Lava Rápido em Aparecida de Goiânia">
          <div className="map-grid" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <div className="map-pin"><b>P</b><span>Podium Lava Rápido<small>Unidade Aparecida</small></span></div>
          <p>Em frente ao<br /><strong>Tatico Papillon</strong></p>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="section-kicker light">Poucos minutos para agendar</p>
          <h2>Seu carro merece.<br /><em>Sua rotina agradece.</em></h2>
        </div>
        <div>
          <p>Chame a Podium e encontre o melhor horário para deixar seu carro limpo sem perder tempo.</p>
          <a className="button button-yellow" href={whatsappUrl} target="_blank" rel="noreferrer">Falar com a Podium <span>↗</span></a>
        </div>
      </section>

      <footer>
        <img src="/brand/logo-dark.png" alt="Podium Lava Rápido" />
        <p>Praticidade, confiança e cuidado há mais de 10 anos.</p>
        <div className="footer-links">
          <a href="tel:+5562920032193">(62) 92003-2193</a>
          <a href="https://www.instagram.com/podiumlavarapido.ap" target="_blank" rel="noreferrer">@podiumlavarapido.ap</a>
        </div>
        <small>© 2026 Podium Lava Rápido</small>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp">
        <span>WhatsApp</span><b>↗</b>
      </a>
    </main>
  );
}
