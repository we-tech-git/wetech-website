export type LocalizedText = {
  en: string
  pt: string
}

export type ProjectSection = {
  title: LocalizedText
  description: LocalizedText
}

export type ProjectInfo = {
  title: LocalizedText
  firstDescription: LocalizedText
  projectDate: LocalizedText
  urlBanner: string
  problemDescription: ProjectSection
  solutionDescription: ProjectSection
  exampleDescription: ProjectSection & { imageUrl: string }
  finalDescription: ProjectSection
  projectLink: string
}

export type ProjectEntry = {
  slug: string
  info: ProjectInfo
  card: {
    src: string
    title: LocalizedText
    text: LocalizedText
  }
}

const placeholderImage = (label: string) =>
  `https://placehold.co/1600x800/003d70/ffffff?text=${encodeURIComponent(label)}`

export const projects: ProjectEntry[] = [
  {
    slug: 'triper',
    card: {
      src: placeholderImage('Triper'),
      title: { en: 'Triper', pt: 'Projeto Triper' },
      text: {
        en: 'Travel experience designed by We Tech, connecting users to inspiring routes.',
        pt: 'Experiência de viagem criada pela We Tech, conectando usuários a roteiros inspiradores.',
      },
    },
    info: {
      title: { en: 'Triper', pt: 'Projeto Triper' },
      firstDescription: {
        en: 'We Tech was responsible for designing and developing Triper’s landing page, transforming the concept of a travel platform into a digital product ready to receive new customers.',
        pt: 'A We Tech foi responsável por idealizar e desenvolver a landing page da Triper, transformando o conceito da plataforma de viagens em um produto digital pronto para receber novos clientes.',
      },
      projectDate: { en: 'Published Jan 2025', pt: 'Publicado em jan 2025' },
      urlBanner: '/img/projects/project_gallery_banner_1.png',
      problemDescription: {
        title: { en: 'The challenge', pt: 'O desafio' },
        description: {
          en: 'Triper needed a modern digital presence to present its value proposition in a clear and attractive way, turning an initial idea into a website capable of communicating with different traveler profiles.',
          pt: 'A Triper precisava de uma presença digital moderna que apresentasse sua proposta de valor de forma clara e atrativa, transformando uma ideia inicial em um site capaz de se comunicar com diferentes perfis de viajantes.',
        },
      },
      solutionDescription: {
        title: { en: 'Solutions and applications', pt: 'Soluções e aplicações' },
        description: {
          en: 'We Tech structured the front-end with current best practices in performance, accessibility, and component organization, exploring animations and transitions that reinforce the Triper brand while keeping navigation light and intuitive.',
          pt: 'A We Tech estruturou o front-end com as melhores práticas atuais de performance, acessibilidade e organização de componentes, explorando animações e transições que reforçam a identidade da Triper e mantêm a navegação leve e intuitiva.',
        },
      },
      exampleDescription: {
        title: { en: 'The project', pt: 'O Projeto' },
        description: {
          en: 'The final layout highlights the Triper brand, presents the service proposal in a single-page experience, and guides the user through sections focused on benefits, differentials, and a clear call to action.',
          pt: 'O layout final destaca a marca Triper, apresenta a proposta do serviço em uma experiência de página única e conduz o usuário por seções focadas em benefícios, diferenciais e uma chamada clara para ação.',
        },
        imageUrl: '/img/projects/banner/tripper_web_site.png',
      },
      finalDescription: {
        title: { en: 'Triper today', pt: 'Triper atualmente' },
        description: {
          en: 'Today the Triper project serves as a reference for We Tech in travel interfaces, receiving punctual visual and code improvements and being used as a base for studies, experiments, and conversations with new partners.',
          pt: 'Atualmente o projeto Triper serve como referência interna na We Tech para interfaces de viagem, recebendo melhorias visuais e de código pontuais e sendo utilizado como base para estudos, experimentos e conversas com novos parceiros.',
        },
      },
      projectLink: 'https://wetechhub.com.br',
    },
  },
  {
    slug: 'the-chat',
    card: {
      src: '/img/projects/banner/project_thechat_banner_2.png',
      title: { en: 'The Chat', pt: 'O Projeto Chat' },
      text: {
        en: 'Prototype chat application created by We Tech to explore real-time communication patterns.',
        pt: 'Aplicação de chat criada pela We Tech para estudar e aplicar conceitos de comunicação em tempo real.',
      },
    },
    info: {
      title: { en: 'The Chat', pt: 'O Projeto Chat' },
      firstDescription: {
        en: 'The Chat was developed by We Tech as a learning project focused mainly on back-end and real-time communication logic, turning experiments with tools and protocols into a complete product with interface and API.',
        pt: 'O projeto The Chat foi desenvolvido pela We Tech como um estudo focado principalmente em back-end e lógicas de comunicação em tempo real, transformando pesquisas e testes com ferramentas e protocolos em um produto completo, com interface e API.',
      },
      projectDate: { en: 'Published Nov 2024', pt: 'Publicado em nov 2024' },
      urlBanner: '/img/projects/banner/project_thechat_banner_2.png',
      problemDescription: {
        title: { en: 'The project The Chat', pt: 'O projeto The Chat' },
        description: {
          en: 'From visual references of popular messaging apps, We Tech structured a simple but complete environment where users can log in, access their conversations and exchange messages in real time through a dedicated interface.',
          pt: 'A partir de referências visuais de aplicativos de conversa já conhecidos, a We Tech estruturou um ambiente simples, mas completo, onde os usuários podem se cadastrar, acessar suas conversas e trocar mensagens em tempo real por meio de uma interface dedicada.',
        },
      },
      solutionDescription: {
        title: { en: 'Challenges', pt: 'Desafios' },
        description: {
          en: 'The main technical challenge for We Tech was to use Socket.IO to maintain a real-time session between two logged-in users, while Express and a database handled secure routes, file uploads and message storage without interrupting the conversation flow.',
          pt: 'O maior desafio técnico para a We Tech foi utilizar Socket.IO para manter uma sessão em tempo real entre dois usuários logados, enquanto o Express e o banco de dados cuidavam de rotas seguras, upload de imagens e armazenamento das mensagens sem interromper o fluxo da conversa.',
        },
      },
      exampleDescription: {
        title: { en: 'Project intent', pt: 'Intuito do projeto' },
        description: {
          en: 'The Chat landing page created by We Tech explains the project, presents its features and future roadmap and serves as an entry point for new users and experiments.',
          pt: 'A landing page do The Chat, criada pela We Tech, explica o projeto, apresenta suas funcionalidades e próximos passos e serve como porta de entrada para novos usuários e experimentos.',
        },
        imageUrl: '/img/projects/banner/the_chat_web_site.png',
      },
      finalDescription: {
        title: { en: 'The Chat today', pt: 'The Chat atualmente' },
        description: {
          en: 'Today The Chat remains as a We Tech internal reference for socket communication, authentication and messaging UI, and is frequently revisited to test new ideas and improvements.',
          pt: 'Atualmente o The Chat permanece como uma referência interna da We Tech para comunicação via sockets, autenticação e interfaces de mensageria, sendo frequentemente revisitado para testes de novas ideias e melhorias.',
        },
      },
      projectLink: 'https://wetechhub.com.br',
    },
  },
  {
    slug: 'blue-token',
    card: {
      src: '/img/projects/banner/project_bluetoken_banner_6.png',
      title: { en: 'Blue Token', pt: 'BLUE Token' },
      text: {
        en: 'Landing crafted by We Tech to present BLUE, a digital token backed by a basket of crypto assets.',
        pt: 'Landing criada pela We Tech para apresentar o BLUE, token digital baseado em uma cesta de criptoativos.',
      },
    },
    info: {
      title: { en: 'Blue Token', pt: 'BLUE Token' },
      firstDescription: {
        en: 'We Tech designed the BLUE site to explain the token as a basket of cryptocurrencies on BSC, giving users a single token that represents multiple assets with convenience and diversification.',
        pt: 'A We Tech concebeu o site do BLUE para explicar o token como uma cesta de criptomoedas na BSC, oferecendo aos usuários um único token que representa vários ativos, com conveniência e diversificação.',
      },
      projectDate: { en: 'Published Aug 2024', pt: 'Publicado em ago 2024' },
      urlBanner: '/img/projects/banner/project_bluetoken_banner_6.png',
      problemDescription: {
        title: { en: 'Engineering notes', pt: 'Relatos da engenharia' },
        description: {
          en: 'We Tech rebuilt the BLUE website to refresh the brand and highlight token characteristics, giving a broad view of features and benefits users get when acquiring BLUE.',
          pt: 'A We Tech reconstruiu o site do BLUE para renovar a marca e destacar as características do token, oferecendo uma visão ampla das funcionalidades e dos benefícios que os usuários têm ao adquirir BLUE.',
        },
      },
      solutionDescription: {
        title: { en: 'Current BLUE token', pt: 'BLUE token atualmente' },
        description: {
          en: 'The product today is maintained with performance benchmarks in the crypto market; We Tech uses the project as an example of clarity in token presentation and continues to evolve the experience.',
          pt: 'Hoje o produto é mantido com referências de performance no mercado cripto; a We Tech usa o projeto como exemplo de clareza na apresentação do token e segue evoluindo a experiência.',
        },
      },
      exampleDescription: {
        title: { en: 'Landing preview', pt: 'Visão do site' },
        description: {
          en: 'The BLUE landing created by We Tech presents the token story, benefits, and visuals aligned with the new brand direction.',
          pt: 'A landing do BLUE criada pela We Tech apresenta a história do token, benefícios e visuais alinhados à nova direção de marca.',
        },
        imageUrl: '/img/projects/banner/blue_token_web_site.png',
      },
      finalDescription: {
        title: { en: 'Results and next steps', pt: 'Resultados e próximos passos' },
        description: {
          en: 'With the new site, BLUE communicates its proposition more clearly; We Tech keeps iterating to showcase performance and expand the roadmap for new users and investors.',
          pt: 'Com o novo site, o BLUE comunica sua proposta de forma mais clara; a We Tech segue iterando para evidenciar performance e ampliar o roadmap para novos usuários e investidores.',
        },
      },
      projectLink: 'https://wetechhub.com.br',
    },
  },
  {
    slug: 'match-coder',
    card: {
      src: placeholderImage('Match Coder'),
      title: { en: 'Match Coder UX/UI', pt: 'Match Coder UX/UI' },
      text: {
        en: 'Hiring platform that pairs developers and companies through challenges.',
        pt: 'Plataforma de contratação que conecta devs e empresas por desafios técnicos.',
      },
    },
    info: {
      title: { en: 'Match Coder UX/UI', pt: 'Match Coder UX/UI' },
      firstDescription: {
        en: 'Product design for skill-matching with bias-safe scoring.',
        pt: 'Design do produto para matchmaking de habilidades com score imparcial.',
      },
      projectDate: { en: 'Published May 2024', pt: 'Publicado em mai 2024' },
      urlBanner: '/img/projects/banner/match_coder_banner.png',
      problemDescription: {
        title: { en: 'The challenge', pt: 'O desafio' },
        description: {
          en: 'Recruiters struggled to compare candidates fairly across stacks.',
          pt: 'Recrutadores tinham dificuldade de comparar candidatos de forma justa entre stacks.',
        },
      },
      solutionDescription: {
        title: { en: 'Our approach', pt: 'Nossa abordagem' },
        description: {
          en: 'Challenge templates, anonymized profiles, and consistent scoring models.',
          pt: 'Templates de desafios, perfis anonimizados e modelos de pontuação consistentes.',
        },
      },
      exampleDescription: {
        title: { en: 'Experience snapshot', pt: 'Visão da experiência' },
        description: {
          en: 'Candidates complete timed challenges; reviewers get structured insights.',
          pt: 'Candidatos realizam desafios cronometrados; revisores recebem insights estruturados.',
        },
        imageUrl: '/img/projects/exemple/match_coder_example.png',
      },
      finalDescription: {
        title: { en: 'Impact', pt: 'Impacto' },
        description: {
          en: 'Reduced hiring cycle by 27% with better candidate acceptance rates.',
          pt: 'Ciclo de contratação 27% mais curto com maior taxa de aceite de candidatos.',
        },
      },
      projectLink: 'https://wetechhub.com.br',
    },
  },
  {
    slug: 'pet-care',
    card: {
      src: placeholderImage('Pet Care'),
      title: { en: 'Pet Care UX/UI', pt: 'Pet Care UX/UI' },
      text: {
        en: 'Wellness platform for pet clinics with reminders and teleconsults.',
        pt: 'Plataforma de bem-estar para clínicas pet com lembretes e teleconsulta.',
      },
    },
    info: {
      title: { en: 'Pet Care UX/UI', pt: 'Pet Care UX/UI' },
      firstDescription: {
        en: 'End-to-end experience for appointments, vaccines, and remote triage.',
        pt: 'Experiência ponta a ponta para consultas, vacinas e triagem remota.',
      },
      projectDate: { en: 'Published Feb 2024', pt: 'Publicado em fev 2024' },
      urlBanner: '/img/projects/banner/pet_care_banner.png',
      problemDescription: {
        title: { en: 'The challenge', pt: 'O desafio' },
        description: {
          en: 'Clinics had high no-show rates and fragmented medical histories.',
          pt: 'Clínicas sofriam com altas faltas e históricos médicos fragmentados.',
        },
      },
      solutionDescription: {
        title: { en: 'Our approach', pt: 'Nossa abordagem' },
        description: {
          en: 'Unified record, proactive reminders, and clear care plans per pet.',
          pt: 'Prontuário unificado, lembretes proativos e planos de cuidado por pet.',
        },
      },
      exampleDescription: {
        title: { en: 'Experience snapshot', pt: 'Visão da experiência' },
        description: {
          en: 'Owners book visits, share labs, and start teleconsults in a single flow.',
          pt: 'Tutores agendam, compartilham exames e iniciam teleconsultas no mesmo fluxo.',
        },
        imageUrl: '/img/projects/exemple/pet_care_example.png',
      },
      finalDescription: {
        title: { en: 'Impact', pt: 'Impacto' },
        description: {
          en: 'No-shows dropped by 33% and clinic follow-ups improved retention.',
          pt: 'Faltas reduziram 33% e retornos de clínica aumentaram a retenção.',
        },
      },
      projectLink: 'https://wetechhub.com.br',
    },
  },
]

export const galleryImages = projects.map((project) => ({
  slug: project.slug,
  src: project.card.src,
  title: project.card.title,
  text: project.card.text,
  url: `/projects/${project.slug}`,
}))
