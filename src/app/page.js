/* eslint-disable react/jsx-no-comment-textnodes, @next/next/no-img-element */
"use client";

import { useState } from 'react';

// ==========================================
// 1. DICIONÁRIO DE IDIOMAS & ESTRUTURAS
// ==========================================

const TRANSLATIONS = {
  PT: {
    navSobre: "SOBRE",
    navProjetos: "PROJETOS",
    navStack: "STACK",
    navCv: "Currículo",
    navContato: "CONTATO",
    badgeHero: "> ENGENHARIA DE SOFTWARE & AUTOMAÇÃO",
    heroTitle: "SOFTWARE ENGINEER | FULL STACK",
    heroDesc: "Desenvolvimento Python, C++ e ecossistema TypeScript/Node. Foco em resolver gargalos sistêmicos através de lógica algorítmica rigorosa e entrega de soluções práticas.",
    aboutSub: "/* um pouco sobre mim */",
    aboutTitle: "Quem está por trás da arquitetura.",
    aboutText1: "Sou Patryck, tenho 22 anos e estudo Ciência da Computação na UTP. Sou apaixonado por construir sistemas estruturalmente sólidos, lidando desde a lógica de baixo nível até interfaces web completas.",
    aboutText2: "Para mim, a engenharia é sobre alavancagem e eficiência. Aplico essa mesma busca por desempenho fora das telas: seja na otimização cirúrgica de hardware para competir em eSports, ou na disciplina inegociável de 6 dias semanais dedicados à musculação de alta intensidade.",
    aboutText3: "Mergulho fundo em cibersegurança e fundamentos arquitetónicos porque entender como as coisas quebram é a melhor forma de construí-las. Com foco no longo prazo, estudo ativamente Italiano, Alemão e Japonês para atuar num mercado sem fronteiras.",
    statYears: "Anos de Estudo",
    statProjects: "Sistemas Reais",
    statTech: "Tecnologias",
    statGym: "Dias na Semana",
    trajectoryTitle: "> Trajetória_Profissional //",
    t1Title: "Engenharia Web & Expansão (2026 - Atual)",
    t1Desc: "Desenvolvimento do TCC focado numa extensão de navegador para auditoria e automação de formulários web. Aprofundamento contínuo no ecossistema React/Node.js e estudo ativo de idiomas estratégicos visando integração arquitetónica global.",
    t2Title: "Sistemas Embarcados & Hardware (2025)",
    t2Desc: "Arquitetura e programação de baixo nível em C/C++ (Arduino) no Projeto Spider. Construção de um robô autônomo, exigindo calibração física de sensores ultrassônicos e desenvolvimento de algoritmos para cálculo de trajetória e evasão em tempo real.",
    t3Title: "Resiliência & Operação (2024 - Presente)",
    t3Desc: "Atendente Operacional na Famiglia Fadanelli. Atuação num ambiente de extrema pressão logística, comprovando alta resiliência, rápida resolução de conflitos e tomada de decisão ágil sob stress operacional.",
    t4Title: "Fundação Acadêmica & Cibersegurança",
    t4Desc: "Início do Bacharelado em Ciência da Computação (UTP). Consolidação da base de infraestrutura através das certificações Cisco Networking Academy: CCNA, Segurança de Endpoint e Introdução à Cibersegurança.",
    projectsTitle: "> Projetos_em_Destaque //",
    repo: "[ Repositório ]",
    inspect: "[ Inspecionar Blueprint ]",
    demo: "[ Demonstração ]",
    stackTitle: "> Tecnologias_e_Ferramentas //",
    contactSub: "/ contato",
    contactTitle: "Vamos Trabalhar Juntos?",
    contactDesc: "Tem um projeto em mente ou quer conversar sobre tecnologia e engenharia? Me Mande uma mensagem.",
    formName: "nome",
    formEmail: "email",
    formSubject: "assunto",
    formMsg: "mensagem",
    formBtn: "Enviar Mensagem",
    cvTitle: "Dossier_Profissional.sys",
    cvSub: "Engenheiro de Software • UTP",
    cvBtnPdf: "[ BAIXAR PDF ]"
  },
  EN: {
    navSobre: "ABOUT",
    navProjetos: "PROJECTS",
    navStack: "STACK",
    navCv: "Resume",
    navContato: "CONTACT",
    badgeHero: "> SOFTWARE ENGINEERING & AUTOMATION",
    heroTitle: "SOFTWARE ENGINEER | FULL STACK",
    heroDesc: "Python, C++, and TypeScript/Node ecosystem development. Focused on solving systemic bottlenecks through rigorous algorithmic logic and delivering practical solutions.",
    aboutSub: "/* a bit about me */",
    aboutTitle: "Who is behind the architecture.",
    aboutText1: "I am Patryck, 22 years old, studying Computer Science at UTP. I am passionate about building structurally solid systems, dealing with everything from low-level logic to complete web interfaces.",
    aboutText2: "For me, engineering is about leverage and efficiency. I apply this same pursuit of performance outside the screen: whether in surgical hardware optimization to compete in eSports, or the non-negotiable discipline of 6 days a week dedicated to high-intensity bodybuilding.",
    aboutText3: "I dive deep into cybersecurity and architectural fundamentals because understanding how things break is the best way to build them. Focusing on the long term, I actively study Italian, German, and Japanese to operate in a borderless market.",
    statYears: "Years of Study",
    statProjects: "Real Systems",
    statTech: "Technologies",
    statGym: "Days a Week",
    trajectoryTitle: "> Professional_Trajectory //",
    t1Title: "Web Engineering & Expansion (2026 - Present)",
    t1Desc: "Capstone project focused on a browser extension for web form auditing and automation. Continuous deepening in the React/Node.js ecosystem and active study of strategic languages for global architectural integration.",
    t2Title: "Embedded Systems & Hardware (2025)",
    t2Desc: "Low-level architecture and programming in C/C++ (Arduino) in the Spider Project. Construction of an autonomous robot requiring physical calibration of ultrasonic sensors and algorithms for real-time trajectory calculation and obstacle evasion.",
    t3Title: "Resilience & Operation (2024 - Present)",
    t3Desc: "Operational Attendant at Famiglia Fadanelli. Operating in an environment of extreme logistical pressure, proving high resilience, rapid conflict resolution, and agile decision-making under operational stress.",
    t4Title: "Academic Foundation & Cybersecurity",
    t4Desc: "Started Bachelor's in Computer Science (UTP). Consolidation of infrastructure foundations through Cisco Networking Academy certifications: CCNA, Endpoint Security, and Introduction to Cybersecurity.",
    projectsTitle: "> Featured_Projects //",
    repo: "[ Repository ]",
    inspect: "[ Inspect Blueprint ]",
    demo: "[ Demonstration ]",
    stackTitle: "> Technologies_&_Tools //",
    contactSub: "/ contact",
    contactTitle: "Let's Work Together?",
    contactDesc: "Have a project in mind or want to talk about tech and engineering? Send me a message.",
    formName: "name",
    formEmail: "email",
    formSubject: "subject",
    formMsg: "message",
    formBtn: "Send Message",
    cvTitle: "Professional_Dossier.sys",
    cvSub: "Software Engineer • UTP",
    cvBtnPdf: "[ DOWNLOAD PDF ]"
  }
};

const PROJECTS = [
  {
    id: 'spider',
    title: 'Projeto Spider (C/C++)',
    badge: 'HARDWARE',
    description: 'Sistema embarcado autônomo com evasão de obstáculos via sensor ultrassônico. Lógica de baixo nível e controlo de motores.',
    tags: ['C/C++', 'Arduino', 'Tinkercad'],
    repoLink: 'https://github.com/PatryckFdias/robo-autonomo-cpp',
    modalType: 'rich',
    modalData: {
      title: 'Spider - Sistema Embarcado Autônomo',
      description: 'Análise estrutural e lógica de um veículo autônomo com mapeamento de ambiente.',
      views: [
        { name: 'Protótipo', src: '/images/robo_foto.jpeg', desc: 'Montagem final no chassi com Arduino Uno, ponte H dupla e cablagem.' },
        { name: 'Simulação', src: '/images/robo_tinkercad.png', desc: 'Diagrama lógico no TinkerCad para validação do circuito elétrico.' },
        { name: 'Vista Frontal', src: '/images/robo_frente.png', desc: 'Posicionamento do sensor HC-SR04 para emissão de ondas de evasão.' },
        { name: 'Vista Lateral', src: '/images/robo_lado.png', desc: 'Distribuição de peso e alinhamento dos motores DC de tração.' },
        { name: 'Planta Topo', src: '/images/robo_cima.png', desc: 'Mapeamento espacial da breadboard e portas lógicas utilizadas.' },
        { name: 'Execução', src: '/gifs/robo.gif', desc: 'Teste de execução demonstrando a eficácia do código C/C++.' }
      ]
    }
  },
  {
    id: 'gympass',
    title: 'Rest API - Gympass',
    badge: 'BACKEND',
    description: 'Arquitetura orientada a testes com repositórios in-memory. Integração completa via Docker com BD relacional.',
    tags: ['Node.js', 'Fastify', 'Docker'],
    repoLink: '#',
    modalType: 'simple',
    modalSrc: '/gifs/solidApi.gif'
  },
  {
    id: 'nodenotes',
    title: 'Node Notes (Full Stack)',
    badge: 'FULLSTACK',
    description: 'API Web com Express e Knex consumida por um frontend React. Autenticação via JWT e Bcrypt.',
    tags: ['React', 'Express', 'SQLite'],
    repoLink: 'https://github.com/PatryckFdias/node-notes',
    modalType: 'simple',
    modalSrc: '/gifs/nodeNotes.gif'
  },
  {
    id: 'spotify',
    title: 'Clone Spotify',
    badge: 'FRONTEND',
    description: 'Interface construída com Next.js e TypeScript. Foco em componentização escalável e TailwindCSS.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    repoLink: 'https://github.com/PatryckFdias/spotify-tailwind',
    modalType: 'simple',
    modalSrc: '/gifs/spotifyTailwind.gif'
  },
  {
    id: 'financas',
    title: 'Organizador Financeiro',
    badge: 'FRONTEND',
    description: 'Gestão de reembolsos e rastreamento mensal de despesas com manipulação direta de DOM.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    repoLink: 'https://github.com/PatryckFdias/organizador-financeiro',
    modalType: 'simple',
    modalSrc: '/gifs/organizador.gif'
  },
  {
    id: 'pokedex',
    title: 'Pokédex Interativa',
    badge: 'API REST',
    description: 'Aplicação front-end para consumo dinâmico da PokeAPI. Foco em requisições assíncronas e manipulação de estado.',
    tags: ['JavaScript', 'API REST', 'CSS3'],
    repoLink: '#',
    modalType: 'simple',
    modalSrc: '/gifs/pokedex.gif'
  },
  {
    id: 'github',
    title: 'Buscador GitHub',
    badge: 'API REST',
    description: 'Integração com a API REST do GitHub para busca e listagem de utilizadores e repositórios em tempo real.',
    tags: ['JavaScript', 'Fetch API', 'HTML5'],
    repoLink: 'https://github.com/PatryckFdias/github-api-integration',
    modalType: 'simple',
    modalSrc: '/gifs/github.gif'
  },
  {
    id: 'php',
    title: 'Sistema Gestão PHP',
    badge: 'BACKEND',
    description: 'Aplicação renderizada no servidor. Implementação de operações CRUD e autenticação conectada a banco de dados relacional.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    repoLink: '#',
    modalType: 'simple',
    modalSrc: '/gifs/projetophp.gif'
  }
];

const STACK = [
  { name: 'JavaScript', img: '/images/slider/js-logo.svg', fallback: 'JS' },
  { name: 'TypeScript', img: '/images/slider/typescript-icon.svg', fallback: 'TS' },
  { name: 'React / Next', img: '/images/slider/react-icon.svg', fallback: 'RE' },
  { name: 'Tailwind', img: '/images/slider/tailwind-icon.svg', fallback: 'TW' },
  { name: 'Node.js', img: '/images/node_logo.webp', fallback: 'ND' },
  { name: 'Python', img: '/images/Python-logo.webp', fallback: 'PY' },
  { name: 'C / C++', img: '/images/c-logo.webp', fallback: 'C++' },
  { name: 'SQL DBs', img: '/images/slider/sql-logo.svg', fallback: 'SQL' },
  { name: 'Linux/Docker', img: '/images/linux-logo.webp', fallback: 'LNX' },
  { name: 'Git / GitHub', img: '/images/slider/github-icon.svg', fallback: 'GIT' },
  { name: 'HTML5', img: '/images/slider/html-icon.svg', fallback: 'HTML' },
  { name: 'CSS3', img: '/images/slider/css-icon.svg', fallback: 'CSS' }
];

// ==========================================
// 2. COMPONENTE PRINCIPAL
// ==========================================

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0); 
  const [activeCvTab, setActiveCvTab] = useState(0);
  
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('PT');

  const t = TRANSLATIONS[language];

  const closeModal = () => {
    setActiveModal(null);
    setActiveMediaIndex(0);
    setActiveCvTab(0);
  };

  const theme = {
    bg: darkMode ? 'bg-[#030712]' : 'bg-slate-50',
    textMain: darkMode ? 'text-hud-cyan' : 'text-slate-900',
    textSec: darkMode ? 'text-slate-400' : 'text-slate-600',
    border: darkMode ? 'border-hud-cyan/30' : 'border-slate-300',
    cardBg: darkMode ? 'bg-[#030712]/90' : 'bg-white',
    navBg: darkMode ? 'bg-[#030712]/90' : 'bg-slate-50/90',
    accent1: darkMode ? 'border-hud-red text-hud-red' : 'border-red-600 text-red-600',
    accent2: darkMode ? 'border-hud-cyan text-hud-cyan' : 'border-blue-600 text-blue-600',
    hoverBg: darkMode ? 'hover:bg-hud-cyan/10' : 'hover:bg-slate-100',
  };

  return (
    <main className={`min-h-screen flex flex-col items-center justify-start relative transition-colors duration-300 scroll-smooth ${theme.bg} ${theme.textMain}`}>
      
      {/* NAVBAR FIXA */}
      <nav className={`w-full sticky top-0 z-50 flex flex-col xl:flex-row items-center justify-between py-4 px-6 md:px-12 backdrop-blur-md border-b transition-colors duration-300 ${theme.border} ${theme.navBg}`}>
        
        {/* ESQUERDA: Logo */}
        <div className="w-full xl:flex-1 flex justify-center xl:justify-start mb-4 xl:mb-0">
          <span className={`font-black text-2xl tracking-tighter ${theme.textMain}`}>
            PATRYCK.DEV
          </span>
        </div>

        {/* CENTRO: Links de Navegação */}
        <div className="flex-none flex flex-wrap justify-center gap-4 sm:gap-6 font-mono text-xs font-bold tracking-widest mb-4 xl:mb-0">
          <a href="#sobre" className={`hover:opacity-100 transition-opacity ${theme.textSec}`}>{t.navSobre}</a>
          <a href="#projetos" className={`hover:opacity-100 transition-opacity ${theme.textSec}`}>{t.navProjetos}</a>
          <a href="#stack" className={`hover:opacity-100 transition-opacity ${theme.textSec}`}>{t.navStack}</a>
          <button 
            onClick={() => {
              setActiveCvTab(0);
              setActiveModal({ type: 'cv', title: 'Curriculum Vitae - System Profile' });
            }}
            className={`hover:opacity-100 transition-opacity uppercase ${theme.textSec}`}
          >
            {t.navCv}
          </button>
          <a href="#contato" className={`hover:opacity-100 transition-opacity ${theme.textSec}`}>{t.navContato}</a>
        </div>

        {/* DIREITA: Controlos de Interface (Open to Work travado estaticamente) */}
        <div className="w-full xl:flex-1 flex justify-center xl:justify-end items-center gap-2 font-mono text-xs">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${theme.border} ${theme.hoverBg}`}
            title="Alternar Tema"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button 
            onClick={() => setLanguage(language === 'PT' ? 'EN' : 'PT')}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all font-bold ${theme.border} ${theme.hoverBg}`}
            title="Alterar Idioma"
          >
            {language}
          </button>
          <div className="h-8 px-4 rounded-full border flex items-center gap-2 border-emerald-500/50 text-emerald-500 cursor-default select-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            OPEN TO WORK
          </div>
        </div>
      </nav>

      {/* CONTAINER GLOBAL DE CONTEÚDO */}
      <div className="w-full flex flex-col items-center px-4 sm:px-8 pt-12 pb-20">
        
        {/* HERO SECTION */}
        <div className={`w-full max-w-5xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-20 z-10 p-8 relative border transition-colors ${theme.border} ${theme.cardBg} shadow-lg`}>
          <div className={`absolute top-[-1px] left-[-1px] w-3 h-3 border-t-2 border-l-2 ${darkMode ? 'border-hud-red' : 'border-red-600'}`}></div>
          <div className={`absolute top-[-1px] right-[-1px] w-3 h-3 border-t-2 border-r-2 ${darkMode ? 'border-hud-cyan' : 'border-blue-600'}`}></div>
          <div className={`absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b-2 border-l-2 ${darkMode ? 'border-hud-cyan' : 'border-blue-600'}`}></div>
          <div className={`absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-2 border-r-2 ${darkMode ? 'border-hud-red' : 'border-red-600'}`}></div>

          <div className="max-w-2xl">
            <div className={`text-xs font-mono mb-2 uppercase tracking-widest font-bold ${darkMode ? 'text-hud-red' : 'text-red-600'}`}>{t.badgeHero}</div>
            <h1 className={`text-4xl sm:text-6xl font-black mb-4 tracking-tighter uppercase ${theme.textMain}`}>
              {t.heroTitle}
            </h1>
            <p className={`text-base sm:text-lg font-mono leading-relaxed ${theme.textSec}`}>
              {t.heroDesc}
            </p>
          </div>
        </div>

        {/* SECÇÃO SOBRE MIM */}
        <div id="sobre" className="w-full max-w-5xl mt-10 mb-20 scroll-mt-32 z-10 font-mono">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="flex-1 flex flex-col gap-6">
              <span className={`text-xs font-bold tracking-widest uppercase ${theme.textSec}`}>{t.aboutSub}</span>
              <h2 className={`text-4xl sm:text-5xl font-black tracking-tighter uppercase leading-tight ${theme.textMain}`}>
                {t.aboutTitle}
              </h2>
              
              <div className={`space-y-4 text-sm leading-relaxed mt-2 ${theme.textSec}`}>
                <p>{t.aboutText1}</p>
                <p>{t.aboutText2}</p>
                <p>{t.aboutText3}</p>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                {['C/C++', 'Python', 'TypeScript', 'Node.js', 'React', 'Tailwind CSS', 'UI/UX', 'SQL', 'Docker', 'Git / GitHub'].map((tech) => (
                  <span key={tech} className={`px-4 py-1.5 rounded-full border text-xs font-bold transition-colors ${theme.border} ${theme.textMain} ${theme.hoverBg}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <span className={`text-xs font-bold tracking-widest text-right hidden lg:block uppercase mb-6 ${theme.textSec}`}>
                métricas_do_sistema
              </span>
              <div className={`grid grid-cols-2 gap-px bg-hud-cyan/20 border ${darkMode ? 'border-hud-cyan/30' : 'border-slate-300'}`}>
                <div className={`p-6 flex flex-col justify-center transition-colors ${theme.cardBg} ${theme.hoverBg}`}>
                  <span className={`text-[10px] uppercase tracking-wider mb-2 ${theme.textSec}`}>years_of_code</span>
                  <span className={`text-4xl font-black mb-1 ${theme.textMain}`}>3+</span>
                  <span className={`text-xs uppercase tracking-widest ${theme.textSec}`}>{t.statYears}</span>
                </div>
                <div className={`p-6 flex flex-col justify-center transition-colors ${theme.cardBg} ${theme.hoverBg}`}>
                  <span className={`text-[10px] uppercase tracking-wider mb-2 ${theme.textSec}`}>projects_built</span>
                  <span className={`text-4xl font-black mb-1 ${theme.textMain}`}>8</span>
                  <span className={`text-xs uppercase tracking-widest ${theme.textSec}`}>{t.statProjects}</span>
                </div>
                <div className={`p-6 flex flex-col justify-center transition-colors ${theme.cardBg} ${theme.hoverBg}`}>
                  <span className={`text-[10px] uppercase tracking-wider mb-2 ${theme.textSec}`}>tech_stacks</span>
                  <span className={`text-4xl font-black mb-1 ${theme.textMain}`}>12</span>
                  <span className={`text-xs uppercase tracking-widest ${theme.textSec}`}>{t.statTech}</span>
                </div>
                <div className={`p-6 flex flex-col justify-center transition-colors ${theme.cardBg} ${theme.hoverBg}`}>
                  <span className={`text-[10px] uppercase tracking-wider mb-2 ${theme.textSec}`}>gym_sessions</span>
                  <span className={`text-4xl font-black mb-1 ${theme.textMain}`}>6/7</span>
                  <span className={`text-xs uppercase tracking-widest ${theme.textSec}`}>{t.statGym}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SECÇÃO TRAJETÓRIA PROFISSIONAL */}
        <div className="w-full max-w-5xl mt-10 mb-20 scroll-mt-32 z-10 font-mono">
          <h2 className={`text-2xl font-bold mb-10 tracking-tight uppercase ${theme.textMain}`}>{t.trajectoryTitle}</h2>
          <div className={`border-l ml-4 pl-8 space-y-12 relative ${theme.border}`}>
            
            <div className="relative">
              <span className={`absolute -left-[37px] top-1.5 h-3 w-3 rounded-full ${darkMode ? 'bg-hud-cyan shadow-[0_0_10px_#00f0ff]' : 'bg-blue-600'}`}></span>
              <h3 className={`text-lg font-bold ${theme.textMain}`}>{t.t1Title}</h3>
              <p className={`text-sm mt-2 ${theme.textSec}`}>{t.t1Desc}</p>
            </div>

            <div className="relative">
              <span className={`absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border ${darkMode ? 'bg-[#030712] border-hud-cyan' : 'bg-white border-blue-600'}`}></span>
              <h3 className={`text-lg font-bold ${theme.textMain}`}>{t.t2Title}</h3>
              <p className={`text-sm mt-2 ${theme.textSec}`}>{t.t2Desc}</p>
            </div>

            <div className="relative">
              <span className={`absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border ${darkMode ? 'bg-[#030712] border-hud-red' : 'bg-white border-red-600'}`}></span>
              <h3 className={`text-lg font-bold ${theme.textMain}`}>{t.t3Title}</h3>
              <p className={`text-sm mt-2 ${theme.textSec}`}>{t.t3Desc}</p>
            </div>

            <div className="relative">
              <span className={`absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border ${darkMode ? 'bg-[#030712] border-slate-500' : 'bg-white border-slate-500'}`}></span>
              <h3 className={`text-lg font-bold ${theme.textMain}`}>{t.t4Title}</h3>
              <p className={`text-sm mt-2 ${theme.textSec}`}>{t.t4Desc}</p>
            </div>

          </div>
        </div>

        {/* SECÇÃO DE PROJETOS */}
        <div id="projetos" className="w-full max-w-5xl mt-10 mb-20 scroll-mt-32 z-10">
          <h2 className={`text-2xl font-bold mb-6 tracking-tight uppercase ${theme.textMain}`}>{t.projectsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className={`p-6 flex flex-col justify-between transition-all group border relative ${theme.border} ${theme.cardBg} ${theme.hoverBg}`}>
                <div className={`absolute top-[-1px] left-[-1px] w-2 h-2 border-t-2 border-l-2 ${darkMode ? 'border-hud-cyan' : 'border-blue-600'}`}></div>
                <div className={`absolute bottom-[-1px] right-[-1px] w-2 h-2 border-b-2 border-r-2 ${darkMode ? 'border-hud-cyan' : 'border-blue-600'}`}></div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className={`text-xl font-bold ${theme.textMain}`}>{proj.title}</h3>
                    <span className={`text-[10px] font-mono border px-2 py-0.5 ${proj.badge === 'HARDWARE' ? theme.accent1 : theme.accent2}`}>{proj.badge}</span>
                  </div>
                  <p className={`text-sm font-mono mb-4 ${theme.textSec}`}>{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6 font-mono">
                    {proj.tags.map(tag => (
                      <span key={tag} className={`px-2 py-1 text-xs border ${theme.border} ${theme.textSec}`}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={`flex gap-4 mt-auto pt-4 border-t font-mono ${theme.border}`}>
                  <a href={proj.repoLink} target="_blank" rel="noreferrer" className={`text-sm hover:underline ${theme.textSec}`}>{t.repo}</a>
                  <button 
                    onClick={() => {
                      if (proj.modalType === 'rich') {
                        setActiveMediaIndex(0);
                        setActiveModal({ type: 'rich', ...proj.modalData });
                      } else {
                        setActiveModal({ type: 'simple', src: proj.modalSrc });
                      }
                    }} 
                    className={`text-sm ml-auto font-bold cursor-pointer hover:underline ${theme.textMain}`}
                  >
                    {proj.modalType === 'rich' ? t.inspect : t.demo}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECÇÃO STACK TECNOLÓGICA */}
        <div id="stack" className="w-full max-w-5xl mt-10 mb-20 scroll-mt-32 z-10">
          <h2 className={`text-2xl font-bold mb-6 tracking-tight uppercase ${theme.textMain}`}>{t.stackTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
            {STACK.map((item) => (
              <div key={item.name} className={`p-4 flex flex-col items-center justify-center gap-3 border transition-colors ${theme.border} ${theme.cardBg} ${theme.hoverBg}`}>
                {item.img ? (
                  <img src={item.img} alt={item.name} className={`w-10 h-10 object-contain transition-all ${darkMode ? 'opacity-60 grayscale hover:grayscale-0' : ''}`} 
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                  />
                ) : null}
                <div className={`w-10 h-10 items-center justify-center font-bold text-xl ${theme.textMain} ${item.img ? 'hidden' : 'flex'}`}>{item.fallback}</div>
                <span className={`text-xs ${theme.textSec}`}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECÇÃO DE CONTATO TÁTICO */}
        <div id="contato" className={`w-full max-w-5xl mt-10 mb-10 p-8 sm:p-16 scroll-mt-32 z-10 transition-colors shadow-lg border relative ${theme.border} ${theme.cardBg}`}>
          <div className={`absolute top-[-1px] left-[-1px] w-3 h-3 border-t-2 border-l-2 ${darkMode ? 'border-hud-red' : 'border-red-600'}`}></div>
          <div className={`absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-2 border-r-2 ${darkMode ? 'border-hud-cyan' : 'border-blue-600'}`}></div>

          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1 flex flex-col gap-6">
              <span className={`font-mono text-xs font-bold tracking-widest uppercase ${theme.textSec}`}>{t.contactSub}</span>
              <h2 className={`text-4xl sm:text-5xl font-black tracking-tighter uppercase leading-none ${theme.textMain}`}>{t.contactTitle}</h2>
              <p className={`font-mono text-sm max-w-md mt-2 ${theme.textSec}`}>
                {t.contactDesc}
              </p>
              
              <div className="flex flex-col gap-4 font-mono text-sm mt-6 font-bold">
                <a href="mailto:patryckdias@outlook.com.br" className={`hover:opacity-70 transition-opacity flex items-center gap-3 ${theme.textMain}`}>
                  <span className="text-lg">✉</span> patryckdias@outlook.com.br
                </a>
                <a href="https://github.com/PatryckFdias" target="_blank" rel="noreferrer" className={`hover:opacity-70 transition-opacity flex items-center gap-3 ${theme.textMain}`}>
                  <span className="text-lg">⎇</span> github.com/PatryckFdias
                </a>
                <a href="https://www.linkedin.com/in/patryckfragosodias/" target="_blank" rel="noreferrer" className={`hover:opacity-70 transition-opacity flex items-center gap-3 ${theme.textMain}`}>
                  <span className="text-lg">in</span> linkedin.com/in/patryckfragosodias
                </a>
                <a href="tel:+5541995877237" className={`hover:opacity-70 transition-opacity flex items-center gap-3 ${theme.textMain}`}>
                  <span className="text-lg">☏</span> (41) 99587-7237
                </a>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-6">
              <span className={`font-mono text-xs font-bold tracking-widest text-right hidden md:block uppercase ${theme.textSec}`}>fale comigo</span>
              
              <form action="https://formspree.io/f/xppzlapl" method="POST" className="flex flex-col gap-8 font-mono text-sm mt-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className={`text-xs ${theme.textSec}`}>{t.formName}</label>
                  <input type="text" name="name" id="name" required placeholder="Seu nome" className={`bg-transparent border-b pb-2 focus:outline-none transition-colors border-hud-cyan/30 placeholder-slate-600 focus:border-hud-cyan text-hud-cyan`} />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className={`text-xs ${theme.textSec}`}>{t.formEmail}</label>
                  <input type="email" name="email" id="email" required placeholder="seu@email.com" className={`bg-transparent border-b pb-2 focus:outline-none transition-colors border-hud-cyan/30 placeholder-slate-600 focus:border-hud-cyan text-hud-cyan`} />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className={`text-xs ${theme.textSec}`}>{t.formSubject}</label>
                  <input type="text" name="subject" id="subject" required placeholder="Assunto do projeto" className={`bg-transparent border-b pb-2 focus:outline-none transition-colors border-hud-cyan/30 placeholder-slate-600 focus:border-hud-cyan text-hud-cyan`} />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className={`text-xs ${theme.textSec}`}>{t.formMsg}</label>
                  <textarea rows="3" name="message" id="message" required placeholder="Sua mensagem..." className={`bg-transparent border-b pb-2 focus:outline-none transition-colors resize-none border-hud-cyan/30 placeholder-slate-600 focus:border-hud-cyan text-hud-cyan`}></textarea>
                </div>
                
                <button type="submit" className={`self-start px-8 py-4 font-bold text-xs uppercase tracking-widest border transition-all cursor-pointer ${theme.border} ${theme.textMain} ${theme.hoverBg}`}>
                  {t.formBtn}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>

      {/* MODAL UNIVERSAL / CURRÍCULO */}
      {activeModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8" onClick={closeModal}>
          <div className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto border flex flex-col shadow-2xl ${theme.border} ${theme.cardBg}`} onClick={(e) => e.stopPropagation()}>
            <div className={`flex justify-between items-center border-b p-3 sticky top-0 z-10 font-mono text-xs backdrop-blur-md ${theme.border} ${theme.navBg}`}>
              <span className={theme.textMain}>&gt; [MODAL_ACTIVE]</span>
              <button onClick={closeModal} className="text-red-500 hover:underline font-bold px-2 py-1">[ FECHAR ]</button>
            </div>
            
            {activeModal.type === 'cv' && (
              <div className="p-4 sm:p-8 flex flex-col gap-6 font-mono">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className={`text-2xl font-bold tracking-tight ${theme.textMain}`}>&gt; {t.cvTitle}</h2>
                    <p className={`mt-1 text-xs ${theme.textSec}`}>{t.cvSub}</p>
                  </div>
                  <a 
                    href="/Curriculo.pdf" 
                    download="Curriculo_Patryck_Dias.pdf"
                    className={`border px-4 py-2 text-xs font-bold transition-all ${theme.border} ${theme.hoverBg} ${theme.textMain}`}
                  >
                    {t.cvBtnPdf}
                  </a>
                </div>

                <div className={`grid grid-cols-2 sm:grid-cols-4 gap-2 border-b pb-4 mt-2 ${theme.border}`}>
                  {['01. Resumo', '02. Exp. & Formação', '03. Projetos Reais', '04. Certificações'].map((label, idx) => (
                    <button key={idx} onClick={() => setActiveCvTab(idx)} className={`py-2 px-3 text-xs border transition-all ${activeCvTab === idx ? `${theme.border} ${theme.textMain} font-bold bg-slate-500/10` : `border-transparent ${theme.textSec} hover:border-slate-500/30`}`}>
                      {label}
                    </button>
                  ))}
                </div>

                <div className={`border p-6 min-h-[300px] text-sm flex flex-col gap-4 ${theme.border}`}>
                  {activeCvTab === 0 && (
                    <>
                      <h3 className={`font-bold ${theme.textMain}`}>Resumo Profissional</h3>
                      <p className={theme.textSec}>
                        Engenheiro de Software focado em desenvolvimento Python, C++ e ecossistema TypeScript/Node. 
                        Experiência técnica no mapeamento e desenvolvimento de ferramentas de automação, estruturação de banco de dados e programação de sistemas embarcados.
                      </p>
                      <p className={theme.textSec}>
                        Focado em resolver gargalos sistêmicos através de lógica algorítmica rigorosa e entrega de soluções práticas para o usuário final.
                      </p>
                    </>
                  )}
                  {activeCvTab === 1 && (
                    <>
                      <div className="mb-4">
                        <h3 className={`font-bold ${theme.textMain}`}>Formação Acadêmica</h3>
                        <p className={`font-bold mt-1 ${theme.textSec}`}>Bacharelado em Ciência da Computação - Universidade Tuiuti do Paraná (UTP)</p>
                        <p className={`text-xs ${theme.textSec}`}>Curitiba, PR | Cursando o 6º Período</p>
                      </div>
                      <div className={`border-t pt-4 ${theme.border}`}>
                        <h3 className={`font-bold ${theme.textMain}`}>Experiência Operacional</h3>
                        <p className={`font-bold mt-1 ${theme.textSec}`}>Atendente Operacional - Famiglia Fadanelli (2024 - Presente)</p>
                        <ul className={`list-disc pl-5 mt-2 space-y-1 text-xs ${theme.textSec}`}>
                          <li>Atendimento sob alta demanda, garantindo controle logístico rápido e resolução imediata de conflitos.</li>
                          <li>Atuação direta em ambiente de alta pressão focado em resiliência e tomada de decisão ágil.</li>
                        </ul>
                      </div>
                    </>
                  )}
                  {activeCvTab === 2 && (
                    <div className="space-y-4">
                      <div>
                        <h3 className={`font-bold ${theme.textMain}`}>Integração de API REST (GitHub)</h3>
                        <p className={`text-xs mt-1 ${theme.textSec}`}>Desenvolvimento de interface para consumo de dados assíncronos (Fetch/Axios, JSON), com parser e renderização condicional de dados e repositórios.</p>
                      </div>
                      <div>
                        <h3 className={`font-bold ${theme.textMain}`}>Robótica Autônoma (C++, Arduino)</h3>
                        <p className={`text-xs mt-1 ${theme.textSec}`}>Arquitetura e programação de robô com calibração de sensores ultrassônicos. Algoritmo base para cálculo de trajetória e evasão em tempo real.</p>
                      </div>
                      <div>
                        <h3 className={`font-bold ${theme.textMain}`}>Plataforma de Gestão Financeira</h3>
                        <p className={`text-xs mt-1 ${theme.textSec}`}>Aplicação web (React, Node.js, SQL) para controle de fluxo de caixa pessoal. Lógicas para conciliação de listas de reembolsos e otimização da interface.</p>
                      </div>
                    </div>
                  )}
                  {activeCvTab === 3 && (
                    <>
                      <div className="mb-4">
                        <h3 className={`font-bold ${theme.textMain}`}>Certificações Técnicas - Cisco Networking Academy</h3>
                        <ul className={`list-disc pl-5 mt-2 space-y-1 text-xs ${theme.textSec}`}>
                          <li>Segurança de Endpoint</li>
                          <li>Percurso de Cibersegurança</li>
                          <li>Suporte e Segurança de Rede</li>
                          <li>Introdução à Cibersegurança</li>
                          <li>CCNA</li>
                        </ul>
                      </div>
                      <div className={`border-t pt-4 ${theme.border}`}>
                        <h3 className={`font-bold ${theme.textMain}`}>Habilidades Técnicas & Idiomas</h3>
                        <p className={`text-xs mt-2 ${theme.textSec}`}><strong>Linguagens:</strong> JavaScript, TypeScript, C, C++, Python, HTML5, CSS3</p>
                        <p className={`text-xs mt-1 ${theme.textSec}`}><strong>Ecossistema:</strong> React, Tailwind CSS, Node.js, MySQL, PostgreSQL, SQLite</p>
                        <p className={`text-xs mt-1 ${theme.textSec}`}><strong>Ferramentas:</strong> Git, Docker, Linux, Windows, Administração de Servidores</p>
                        <p className={`text-xs mt-1 ${theme.textSec}`}><strong>Idiomas:</strong> Inglês (Intermediário), Espanhol (Intermediário)</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {activeModal.type === 'simple' && (
              <div className="p-2 flex justify-center items-center">
                <img src={activeModal.src} alt="Demo" className="w-full h-auto max-h-[80vh] object-contain" />
              </div>
            )}

            {activeModal.type === 'rich' && (
              <div className="p-4 sm:p-8 flex flex-col gap-6 font-mono">
                <div>
                  <h2 className={`text-2xl font-bold ${theme.textMain}`}>{activeModal.title}</h2>
                  <p className={`text-xs mt-1 ${theme.textSec}`}>{activeModal.description}</p>
                </div>
                <div className={`border p-4 flex flex-col items-center ${theme.border}`}>
                  <img src={activeModal.views[activeMediaIndex].src} alt="Blueprint" className="w-full h-auto max-h-[50vh] object-contain" />
                  <div className={`w-full mt-4 p-3 border-t ${theme.border}`}>
                    <span className={`font-bold text-xs uppercase ${theme.textMain}`}>&gt; {activeModal.views[activeMediaIndex].name}</span>
                    <p className={`text-xs mt-1 ${theme.textSec}`}>{activeModal.views[activeMediaIndex].desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {activeModal.views.map((view, index) => (
                    <button key={index} onClick={() => setActiveMediaIndex(index)} className={`border p-1 transition-all flex flex-col items-center ${activeMediaIndex === index ? theme.border : `border-transparent opacity-50 hover:opacity-100 ${theme.hoverBg}`}`}>
                      <img src={view.src} alt={view.name} className="w-full h-12 object-cover grayscale" />
                      <span className={`text-[9px] mt-1 truncate w-full text-center ${theme.textSec}`}>{view.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </main>
  );
}