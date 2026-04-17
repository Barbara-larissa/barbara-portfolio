import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./App.css";
import minhaFoto from "./foto-profissional.png";
// Componente dos Meteoros (Estilo Shadcn/Aceternity)
import videoBurguer from "./burguer-do-bom.mp4"
const Meteors = ({ number = 90 }) => {
  const [meteorStyles, setMeteorStyles] = useState([]);
  useEffect(() => {
    const styles = new Array(number).fill(true).map(() => {
      // 50% de chance de vir do topo, 50% de vir da lateral
      const spawnFromTop = Math.random() > 0.5
      return {
        // Se vier do topo, top é -20. Se vier da lateral, sorteia a altura (y).
        top: spawnFromTop ? "-20px" : Math.floor(Math.random() * window.innerHeight) + "px",
        // Se vier do topo, sorteia a largura (x). Se vier da lateral, left é -20.
        left: spawnFromTop ? Math.floor(Math.random() * window.innerWidth) + "px" : "-20px",

        animationDelay: Math.random() * 8 + "s", // Delays variados para não saírem juntos
        // VELOCIDADE: Entre 10s e 18s para cruzar a tela bem devagar
        animationDuration: Math.floor(Math.random() * (20 - 18) + 5) + "s",
      };
    });
    setMeteorStyles(styles);
  }, [number]);
  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span key={idx} className="meteor" style={style}></span>
      ))}
    </>
  );
};
export default function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: true, zIndex: 0 },
    fpsLimit: 120,
    particles: {
      number: { value: 100, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: { enable: true, speed: 1 }
      },
      size: { value: { min: 1, max: 3 } }, // Tamanho original/normal
      move: { enable: true, speed: 0.2, direction: "none" },
    },
    detectRetina: true,
  }), []);
  return (
    <div className="app-container">
      {init && <Particles options={particlesOptions} />}
      {/* Camada de Meteoros */}
      <Meteors number={15} />
      <main className="main-content">
        <h1 className="title">Barbara Larissa</h1>
        <p className="subtitle">FRONT-END ENGINEER & UI DEVELOPER</p>
        <div className="main-container-hero">
          {/* 🚀 NOVO GRUPO PARA OS BOTÕES FICAREM LADO A LADO */}
          <div className="button-group">
            <button
              className="btn-primary"
              onClick={() => document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </button>
            <a
              /* Substitua o  pelo seu número real */
              href="https://wa.me/5543996818242?text=Olá%20Barbara!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-hero"
            >
              <i className="fa-brands fa-whatsapp"></i>
              WhatsApp
            </a>
          </div>
          {/* Ícones Sociais continuam aqui embaixo */}
          <div className="social-icons-row">
            <a href="https://github.com/Barbara-larissa" target="_blank" rel="noreferrer" className="icon-link-minimal">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="icon-only-github" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/barbara-larissa/" target="_blank" rel="noreferrer" className="icon-link-minimal">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="icon-only-linkedin" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </main>
      {/* ACRESCENTAR ABAIXO DO </main> */}
      <section className="diferenciais-section">
        <div className="diferenciais-grid">
          <div className="diferencial-card">
            <div className="icon-box">⚡</div>
            <h3>Foco em Performance</h3>
            <p>Desenvolvimento otimizado para garantir carregamento rápido e fluidez.</p>
          </div>
          <div className="diferencial-card">
            <div className="icon-box">🎨</div>
            <h3>UI/UX Estratégico</h3>
            <p>Interfaces modernas projetadas para a melhor experiência.</p>
          </div>
          <div className="diferencial-card">
            <div className="icon-box">🛠️</div>
            <h3>Código Limpo</h3>
            <p>Estruturas organizadas e escaláveis para facilitar a manutenção.</p>
          </div>

        </div>
      </section>
      {/* --- SEÇÃO SOBRE MIM --- */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2 className="about-title">Sobre Mim</h2>
            <p>
              Desenvolvedora focada em construir soluções funcionais e eficientes.
              Com formação técnica em Web Development, foco minha atuação em criar
              interfaces que unem performance e uma experiência intuitiva.
            </p>
            <p>
              Minha abordagem é prática: resolver problemas complexos com código limpo
              e design estratégico, garantindo resultados reais para o negócio.
            </p>
          </div>

          <div className="about-image-area">
            <div className="image-frame">
              <img src={minhaFoto} alt="Barbara Larissa" className="about-profile-img" />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
      </section>
      {/* --- SEÇÃO STACKS --- */}
      <section className="stacks-section">
        <h2 className="section-title">Minhas Stacks</h2>
        <div className="stacks-grid">
          <div className="stack-card">
            <span className="stack-icon">⚛️</span>
            <p>React</p>
          </div>
          <div className="stack-card">
            <span className="stack-icon">JS</span>
            <p>JavaScript</p>
          </div>

          <div className="stack-card">
            <span className="stack-icon">🎨</span>
            <p>CSS3 / UI UX</p>
          </div>

          <div className="stack-card">
            <span className="stack-icon">🌊</span>
            <p>Tailwind CSS</p>
          </div>
          <div className="stack-card">
            <span className="stack-icon">🔥</span>
            <p>Firebase</p>
          </div>
          <div className="stack-card">
            <span className="stack-icon">🐘</span>
            <p>PHP / MySQL</p>
          </div>

        </div>
      </section>

      {/* --- SEÇÃO MEUS PROJETOS --- */}
      <section id="projetos" className="projects-section">
        <h2 className="section-title">Projetos em Destaque</h2>
        <div className="projects-grid">
          {/* Card 1: Burguer do Bom (Delivery) */}
          <div className="project-card">
            {/* Etiqueta de Lançamento */}
            <div className="badge-soon">Lançamento em Breve</div>
            <div className="video-container local-video">
              {/* 🌟 USANDO VÍDEO LOCAL: Importe o arquivo antes ou use a pasta public */}
              <video
                src={videoBurguer}  /* A variável importada SEM aspas */
                controls
                className="project-video-element"
                preload="metadata"
              >
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
            <div className="project-content">
              <h3>Burguer do Bom</h3>
              <p>Sistema de delivery completo com integração de pagamentos e WhatsApp.</p>
              <div className="tags">
                <span>React</span>
                <span>Firebase</span>
                <span>Mercado Pago</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Barbara-larissa" target="_blank" rel="noreferrer" className="btn-secondary">
                  Ver Código
                </a>

                {/* 🌟 Adicione este botão aqui */}
                <button className="btn-soon" disabled>
                  Em Breve
                </button>
              </div>
            </div>
          </div>
          {/* Card 2: Sistema Financeiro */}
          <div className="project-card">
            {/* 🌟 Etiqueta Comercial: Posicionada no topo do card */}
            <div className="badge-comercial">Disponível para Licença</div>

            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/hMQYXhc1-2A"
                title="Sistema de Controle Financeiro"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
              </iframe>
            </div>
            <div className="project-content">
              <h3>Sistema de Controle Financeiro</h3>
              <p>Gestão financeira completa com PHP e MySQL.</p>
              <div className="tags">
                <span>PHP</span>
                <span>MySQL</span>
                <span>Lógica</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Barbara-larissa/Sistema-Financeiro"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  GitHub
                </a>

                {/* 🌟 Novo botão de venda integrado */}
                <a
                  href="https://wa.me/5543999999999" /* Coloque seu número aqui */
                  target="_blank"
                  rel="noreferrer"
                  className="btn-venda"
                >
                  Adquirir Projeto
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}