import { TripperInfo } from './Triper'
import { BlueTokenInfo } from './BlueToken'
import { LinkLeitoInfo } from './LinkLeito'
import { PetSystemInfo } from './PetSystem'
import { ToroTokennInfo } from './ToroToken'
import { GenesisBanknInfo } from './GenesisBank'

// Helper types for the structure
export type ProjectInfo = {
  title: string
  firstDescription: string
  projectDate: string
  urlBanner: string
  problemDescription: {
    title: string
    description: string
  }
  solutionDescription: {
    title: string
    description: string
  }
  exampleDescription: {
    title: string
    description: string
    imageUrl: string
  }
  finalDescription: {
    title: string
    description: string
  }
  projectLink: string
}

export type ProjectEntry = {
  slug: string
  info: ProjectInfo
  card: {
    src: string
    // We will use the main title/description from info for the card too, or specific keys if needed
    title: string
    text: string
  }
}

// Convert the imported *Info objects (which have typo 'fisrtDescription' and some structure diffs) to our clean ProjectInfo
const mapToInfo = (raw: any): ProjectInfo => ({
  title: raw.projectInfo.title,
  firstDescription: raw.projectInfo.fisrtDescription, // fixing typo mapping
  projectDate: raw.projectInfo.projectDate,
  urlBanner: raw.projectInfo.urlBanner,
  problemDescription: raw.projectInfo.problemDescription,
  solutionDescription: raw.projectInfo.solutionDescription,
  exampleDescription: raw.projectInfo.exampleDescription,
  finalDescription: raw.projectInfo.finalDescription,
  projectLink: raw.projectInfo.projectLink,
})

// Define the projects list
export const projects: ProjectEntry[] = [
  // Existing from imports
  {
    slug: 'triper',
    info: mapToInfo(TripperInfo),
    card: {
      src: TripperInfo.projectInfo.urlBanner,
      title: TripperInfo.projectInfo.title,
      text: TripperInfo.projectInfo.fisrtDescription,
    },
  },
  {
    slug: 'blue-token',
    info: mapToInfo(BlueTokenInfo),
    card: {
      src: BlueTokenInfo.projectInfo.urlBanner,
      title: BlueTokenInfo.projectInfo.title,
      text: BlueTokenInfo.projectInfo.fisrtDescription,
    },
  },
  {
    slug: 'link-leito',
    info: mapToInfo(LinkLeitoInfo),
    card: {
      src: LinkLeitoInfo.projectInfo.urlBanner,
      title: LinkLeitoInfo.projectInfo.title,
      text: LinkLeitoInfo.projectInfo.fisrtDescription,
    },
  },
  {
    slug: 'pet-system',
    info: mapToInfo(PetSystemInfo),
    card: {
      src: PetSystemInfo.projectInfo.urlBanner,
      title: PetSystemInfo.projectInfo.title,
      text: PetSystemInfo.projectInfo.fisrtDescription,
    },
  },
  {
    slug: 'toro-token',
    info: mapToInfo(ToroTokennInfo),
    card: {
      src: ToroTokennInfo.projectInfo.urlBanner,
      title: ToroTokennInfo.projectInfo.title,
      text: ToroTokennInfo.projectInfo.fisrtDescription,
    },
  },
  {
    slug: 'genesis-bank',
    info: mapToInfo(GenesisBanknInfo),
    card: {
      src: GenesisBanknInfo.projectInfo.urlBanner,
      title: GenesisBanknInfo.projectInfo.title,
      text: GenesisBanknInfo.projectInfo.fisrtDescription,
    },
  },

  // Manual entries for missing files (The Chat, Match Coder, Pet Care)
  // We use the same key pattern assuming the user will provide translations matching these.
  {
    slug: 'the-chat',
    info: {
      title: 'projects.the_chat.title',
      firstDescription: 'projects.the_chat.fisrtDescription',
      projectDate: 'projects.the_chat.projectDate',
      urlBanner: './img/projects/banner/the_chat_banner.png', // guessed path
      problemDescription: {
        title: 'projects.the_chat.problemTitle',
        description: 'projects.the_chat.problemDescription',
      },
      solutionDescription: {
        title: 'projects.the_chat.solutionTitle',
        description: 'projects.the_chat.solutionDescription',
      },
      exampleDescription: {
        title: 'projects.the_chat.ExampleTitle',
        description: 'projects.the_chat.ExampleDescription',
        imageUrl: './img/projects/exemple/the_chat_example.png',
      },
      finalDescription: {
        title: 'projects.the_chat.finalTitle',
        description: 'projects.the_chat.finalDescription',
      },
      projectLink: 'https://wetechhub.com.br',
    },
    card: {
      src: './img/projects/banner/the_chat_banner.png',
      title: 'projects.the_chat.title',
      text: 'projects.the_chat.fisrtDescription',
    },
  },
  {
    slug: 'match-coder',
    info: {
      title: 'projects.match_coder.title',
      firstDescription: 'projects.match_coder.fisrtDescription',
      projectDate: 'projects.match_coder.projectDate',
      urlBanner: './img/projects/banner/match_coder_banner.png',
      problemDescription: {
        title: 'projects.match_coder.problemTitle',
        description: 'projects.match_coder.problemDescription',
      },
      solutionDescription: {
        title: 'projects.match_coder.solutionTitle',
        description: 'projects.match_coder.solutionDescription',
      },
      exampleDescription: {
        title: 'projects.match_coder.ExampleTitle',
        description: 'projects.match_coder.ExampleDescription',
        imageUrl: './img/projects/exemple/match_coder_example.png',
      },
      finalDescription: {
        title: 'projects.match_coder.finalTitle',
        description: 'projects.match_coder.finalDescription',
      },
      projectLink: 'https://wetechhub.com.br',
    },
    card: {
      src: './img/projects/banner/match_coder_banner.png',
      title: 'projects.match_coder.title',
      text: 'projects.match_coder.fisrtDescription',
    },
  },
  {
    slug: 'pet-care',
    info: {
      title: 'projects.pet_care.title',
      firstDescription: 'projects.pet_care.fisrtDescription',
      projectDate: 'projects.pet_care.projectDate',
      urlBanner: './img/projects/banner/pet_care_banner.png',
      problemDescription: {
        title: 'projects.pet_care.problemTitle',
        description: 'projects.pet_care.problemDescription',
      },
      solutionDescription: {
        title: 'projects.pet_care.solutionTitle',
        description: 'projects.pet_care.solutionDescription',
      },
      exampleDescription: {
        title: 'projects.pet_care.ExampleTitle',
        description: 'projects.pet_care.ExampleDescription',
        imageUrl: './img/projects/exemple/pet_care_example.png',
      },
      finalDescription: {
        title: 'projects.pet_care.finalTitle',
        description: 'projects.pet_care.finalDescription',
      },
      projectLink: 'https://wetechhub.com.br',
    },
    card: {
      src: './img/projects/banner/pet_care_banner.png',
      title: 'projects.pet_care.title',
      text: 'projects.pet_care.fisrtDescription',
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
