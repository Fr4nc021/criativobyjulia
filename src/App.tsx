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

function Icon({ name }: { name: LinkItem['icon'] }) {
  switch (name) {
    case 'portfolio':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 6a3 3 0 0 1 6 0v1h4a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2h4V6Zm2 1h2V6a1 1 0 1 0-2 0v1Zm-6 4v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7H5Z" />
        </svg>
      )
    case 'contact':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6Zm3-1a1 1 0 0 0-1 1v.3l6 4.2 6-4.2V6a1 1 0 0 0-1-1H7Zm11 4.4-5.4 3.78a1 1 0 0 1-1.2 0L6 9.4V18a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9.4Z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2Zm5-2.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
        </svg>
      )
    case 'playlist':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 5h10v2H10V5ZM10 9h10v2H10V9ZM10 13h6v2h-6v-2ZM4 6h4v2H4V6Zm0 4h4v2H4v-2Zm0 4h4v2H4v-2Zm0 4h4v2H4v-2Z" />
        </svg>
      )
  }
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
          Curadoria de presença digital, narrativa visual e estratégia criativa.
          Bem-vinda ao meu espaço.
        </p>
      </section>

      <div className="linksHeader" aria-hidden="true">
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
