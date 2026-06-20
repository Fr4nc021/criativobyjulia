import profileImg from './assets/Perfil.jpeg'
import './App.css'

type LinkItem = {
  id: string
  title: string
  subtitle: string
  href: string
  icon: 'portfolio' | 'contact' | 'instagram' | 'playlist'
}

const LINKS: LinkItem[] = [
  {
    id: '01',
    title: 'Portfólio',
    subtitle: 'Trabalhos selecionados',
    href: 'https://drive.google.com/file/d/1yK5bd3UQbSRVF_1pz23-wMAyOjE6aUzl/view?usp=drivesdk',
    icon: 'portfolio',
  },
  {
    id: '02',
    title: 'Contato',
    subtitle: 'Vamos conversar',
    href: 'https://wa.me/5554991529516',
    icon: 'contact',
  },
  {
    id: '03',
    title: 'Instagram',
    subtitle: '@criativobyjulia',
    href: 'https://www.instagram.com/criativobyjulia?igsh=cG8zM3d2anRiYThu&utm_source=qr',
    icon: 'instagram',
  },
  {
    id: '04',
    title: 'Playlist',
    subtitle: 'Trilha do momento',
    href: 'https://open.spotify.com/playlist/3s8UYhJbjfaQYEXhqdtbbm?si=SqzqnzVgST6aqLzdloEyKg&pi=K4HnSmn7SPG9O',
    icon: 'playlist',
  },
]

const ICON_SRC: Record<LinkItem['icon'], string> = {
  portfolio: '/portfolio.png',
  contact: '/fone.png',
  instagram: '/insta.png',
  playlist: '/playlist.png',
}

function Icon({ name }: { name: LinkItem['icon'] }) {
  return <img src={ICON_SRC[name]} alt="" />
}

export default function App() {
  return (
    <main className="page">
      <header className="top">
        <span className="topTag">@criativobyjulia</span>
        <span className="topTag">est. 2025</span>
      </header>

      <section className="hero">
        <div className="avatarWrap" aria-hidden="true">
          <img className="avatar" src={profileImg} alt="" />
        </div>

        <h1 className="title">
          Olá, eu sou <span>Júlia</span>
        </h1>

        <p className="subtitle">
        Narrativa criativa com estética que comunica.
          <br />
          <span className="subtitleHighlight">Bem-vinda ao meu espaço.</span>
        </p>
      </section>

      <div className="sectionHeader" aria-hidden="true">
        <span className="line" />
        <span className="label">Links</span>
        <span className="line" />
      </div>

      <section className="links" aria-label="Links">
        {LINKS.map((item) => (
          <a
            key={item.id}
            className="linkCard"
            data-kind={item.icon}
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="iconCircle" aria-hidden="true">
              <Icon name={item.icon} />
            </span>

            <span className="linkText">
              <span className="linkTitle">{item.title}</span>
              <span className="linkSubtitle">{item.subtitle}</span>
            </span>

            <span className="linkMeta" aria-hidden="true">
              <span className="linkId">{item.id}</span>
              <span className="arrow">→</span>
            </span>
          </a>
        ))}
      </section>

      <div className="sectionHeader" aria-hidden="true">
        <span className="line" />
        <span className="label">Quem sou</span>
        <span className="line" />
      </div>

      <section className="about" aria-label="Quem sou">
        <p className="aboutLead">
          Prazer, sou <span>Júlia</span>.
        </p>

        <p className="aboutText">
          Estudante de Relações Públicas, atuo com marketing, estratégia e
          produção de conteúdo. Ajudo marcas a comunicarem com mais clareza,
          estética, presença e intenção, transformando ideias em resultados
          concretos.
        </p>

        <p className="aboutText">
          Para mim, comunicação vai muito além de posts bonitos. Ela cria
          conexão, fortalece identidades e move negócios.
        </p>

        <p className="aboutText">
          Cada projeto nasce sob medida, respeitando a essência e os objetivos
          de quem confia no meu trabalho.
        </p>
      </section>

      <footer className="footer" aria-label="Rodapé">
        <div className="footerText">obrigada por estar aqui</div>
        <div className="footerCopy">© 2025 - todos os direitos</div>
        <div className="footerDev">
          Página desenvolvida por{' '}
          <a
            className="footerDevLink"
            href="https://www.instagram.com/codebyfranco/"
            target="_blank"
            rel="noreferrer"
          >
            codebyfranco
          </a>
        </div>
      </footer>
    </main>
  )
}
