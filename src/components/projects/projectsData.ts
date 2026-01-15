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
      urlBanner: '',
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
      projectLink: 'https://tripper-landing.netlify.app/',
    },
  },
  {
    slug: 'toro-token',
    card: {
      src: '/img/projects/banner/project_toro_banner_8.png',
      title: { en: 'TORO token', pt: 'TORO token' },
      text: {
        en: 'Tokenized portfolio with automated active/passive strategies in a single asset.',
        pt: 'Portfólio tokenizado com estratégias ativas e passivas automatizadas em um único ativo.',
      },
    },
    info: {
      title: { en: 'TORO token', pt: 'TORO token' },
      firstDescription: {
        en: 'TORO  programmed to execute active and passive strategies—stop loss, stop buy, shorting, and network distributions—helping holders build a single digital asset portfolio while mitigating risk.',
        pt: 'O TORO programado para executar estratégias ativas e passivas — stop loss, stop buy, shorting e distribuições de rede — ajudando detentores a construir um portfólio de ativos digitais em um único token, mitigando riscos.',
      },
      projectDate: { en: 'Published Jul 2022', pt: 'Publicado em jul 2022' },
      urlBanner: '/img/projects/banner/project_toro_banner_8.png',
      problemDescription: {
        title: { en: 'The challenge', pt: 'O desafio' },
        description: {
          en: 'Explain a multi-strategy token (stop loss/stop buy/short) in a way that is clear and trustworthy for investors.',
          pt: 'Explicar um token multi-estratégia (stop loss/stop buy/short) de forma clara e confiável para investidores.',
        },
      },
      solutionDescription: {
        title: { en: 'Approach', pt: 'Abordagem' },
        description: {
          en: 'We Tech structured the narrative and site experience to present automated strategies, risk controls, and benefits in one concise page.',
          pt: 'A We Tech estruturou a narrativa e a experiência do site para apresentar estratégias automatizadas, controles de risco e benefícios em uma página concisa.',
        },
      },
      exampleDescription: {
        title: { en: 'Result', pt: 'Resultado' },
        description: {
          en: 'Hero sections highlight the token story and strategy mix, with visuals that reinforce performance tracking.',
          pt: 'Seções de destaque apresentam a história do token e o mix de estratégias, com visuais que reforçam o acompanhamento de performance.',
        },
        imageUrl: '/img/projects/banner/toro_token_web_site.png',
      },
      finalDescription: {
        title: { en: 'Impact', pt: 'Impacto' },
        description: {
          en: 'Clear communication increased trust and provided a single entry point to TORO’s tokenized strategies.',
          pt: 'A comunicação clara aumentou a confiança e forneceu um ponto único de entrada para as estratégias tokenizadas do TORO.',
        },
      },
      projectLink: 'https://torotoken.io/',
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
      projectLink: 'https://bluetoken.io/homepage',
    },
  },
  {
    slug: 'genesis-bank',
    card: {
      src: '/img/projects/banner/project_genesis_banner_10.png',
      title: { en: 'Genesis Bank', pt: 'Genesis Bank' },
      text: {
        en: 'Corporate site that translates banking products into a clear digital experience.',
        pt: 'Site institucional que traduz produtos bancários em uma experiência digital clara.',
      },
    },
    info: {
      title: { en: 'Genesis Bank', pt: 'Genesis Bank' },
      firstDescription: {
        en: 'We Tech crafted the Genesis Bank experience to present services, credibility, and onboarding paths in a streamlined way.',
        pt: 'A We Tech desenhou a experiência da Genesis Bank para apresentar serviços, credibilidade e caminhos de onboarding de forma simples.',
      },
      projectDate: { en: 'Published Oct 2023', pt: 'Publicado em out 2023' },
      urlBanner: '/img/projects/banner/project_genesis_banner_10.png',
      problemDescription: {
        title: { en: 'The challenge', pt: 'O desafio' },
        description: {
          en: 'Translate banking offerings into a digital narrative that balances trust, compliance, and conversion.',
          pt: 'Traduzir ofertas bancárias em uma narrativa digital que equilibre confiança, compliance e conversão.',
        },
      },
      solutionDescription: {
        title: { en: 'Approach', pt: 'Abordagem' },
        description: {
          en: 'We Tech organized content blocks for products, benefits, and calls to action, using a visual language aligned to finance.',
          pt: 'A We Tech organizou blocos de conteúdo para produtos, benefícios e chamadas para ação, usando linguagem visual alinhada a finanças.',
        },
      },
      exampleDescription: {
        title: { en: 'Result', pt: 'Resultado' },
        description: {
          en: 'The page highlights brand authority and guides users to contact and service flows with clear CTAs.',
          pt: 'A página destaca autoridade da marca e conduz usuários para contato e fluxos de serviço com CTAs claros.',
        },
        imageUrl: '/img/projects/banner/genesis_bank_web_site.png',
      },
      finalDescription: {
        title: { en: 'Impact', pt: 'Impacto' },
        description: {
          en: 'Improved clarity and trust for prospects exploring Genesis Bank’s digital presence.',
          pt: 'Maior clareza e confiança para prospects que exploram a presença digital da Genesis Bank.',
        },
      },
      projectLink: 'https://www.genesisbank.com.br/',
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
