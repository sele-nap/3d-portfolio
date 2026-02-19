export type Language = 'fr' | 'en'

export const translations = {
  fr: {
    hero: {
      name: 'Séléna Poun',
      title: '• Développeuse web full-stack •',
    },

    about: {
      title: 'À propos',
      intro: "Développeuse full-stack spécialisée en JavaScript et TypeScript, avec une expérience en applications web et outils 3D interactifs, orientée performance, UX et code maintenable.",
      skills: {
        atouts: {
          title: 'Atouts',
          items: ['Autonomie', 'Rigueur', 'Capacité d\'adaptation', 'Esprit d\'équipe']
        },
        tech: {
          title: 'Informatique',
          items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React (Redux, Hooks)', 'Vue.js', 'Three.js', 'Node.js', 'MongoDB', 'MySQL', 'REST API', 'Git', 'Shell script', 'Agile / SCRUM', 'Figma', 'Suite Adobe (Illustrator, InDesign, Premiere Pro)']
        },
        competences: {
          title: 'Compétences',
          items: ['Analyse de besoins utilisateur·trices', 'Méthodologie Agile', 'Amélioration continue', 'Veille technologique']
        },
        interests: {
          title: 'Centres d\'intérêt',
          items: ['Gaming', 'Marche', 'Lecture']
        }
      }
    },

    formations: {
      title: 'Formations',
      description: 'Un parcours à la croisée du design, de la technique et de la narration numérique.',
      degrees: [
        {
          title: 'Conceptrice / Développeuse d\'Applications',
          period: '2021 – 2023',
          school: 'Wild Code School',
          location: 'Lyon, France',
          highlights: [
            'Spécialisation en JavaScript, TypeScript, Node.js, React',
            'Réalisation de projets en méthodologies Agile et workflows collaboratifs',
            'Développement d\'APIs REST et d\'interfaces responsives',
          ]
        },
        {
          title: 'Master Création Numérique · Hypermédias & Espaces Intelligents',
          period: '2017 – 2020',
          school: 'Université Savoie Mont Blanc',
          location: 'Chambéry, France',
          highlights: [
            'Conception de systèmes interactifs en réalité augmentée et réalité virtuelle avec Unity',
            'UX/UI design, création de contenus interactifs, storytelling transmedia',
            'Mémoire : « Le rôle de l\'image dans l\'exploitation animale : les perceptions issues des manifestations de L214 contre l\'exploitation animale. »',
          ]
        },
        {
          title: 'Licence Métiers du Livre et du Multimédia',
          period: '2014 – 2017',
          school: 'Université Clermont Auvergne',
          location: 'Clermont-Ferrand, France',
          highlights: [
            'Formation aux outils numériques (HTML/CSS, Adobe Suite), à la communication et à la gestion de projets culturels',
            'Spécialisation dans la production de médias numériques, la médiation culturelle et le contenu éditorial',
            'Cours d\'anglais avancé et communication numérique',
          ]
        }
      ],
      cv: {
        label: 'Télécharger mon CV',
        fileName: '/CV_Poun_Selena_fr.pdf'
      }
    },

    experiences: {
      title: 'Expériences',
      description: 'Un parcours à la croisée du web, de la 3D et de l\'innovation.',
      jobs: [
        {
          title: 'Développeuse Full-Stack 3D',
          period: 'Mars 2022 – Juillet 2025',
          company: 'Decq',
          location: 'Saint-Priest, France',
          highlights: [
            'Développement d\'un configurateur 3D en ligne en Vue.js, Three.js, TypeScript et PHP',
            'Conception de composants interactifs et rendu 3D temps réel',
            'Optimisation de l\'UX et refonte modulaire du code en lien avec l\'équipe design',
            'Mise en production de l\'outil, utilisé par plusieurs clients industriels',
            'Réalisation majeure : livrable final mis en production, conçu de A à Z avec une architecture front/back maintenable.'
          ]
        },
        {
          title: 'Business Developer',
          period: 'Octobre – Novembre 2019',
          company: 'DataLumni',
          location: 'Annecy, France',
          highlights: [
            'Prospection téléphonique et création de supports marketing',
            'Contribution à la stratégie de communication',
          ]
        },
        {
          title: 'Conceptrice en Réalité Virtuelle',
          period: 'Février – Mars 2019',
          company: 'Université Savoie Mont Blanc',
          location: 'Chambéry, France',
          highlights: [
            'Réalisation d\'un prototype VR sous Unity (C#) pour un projet de thèse',
          ]
        }
      ]
    },

    contact: {
      title: 'Contact',
      description: "Si vous souhaitez collaborer ou en savoir plus sur mon travail, n'hésitez pas à me contacter. 🐸",
      email: 'selena.poun@gmail.com',
      github: 'sele-nap',
      githubUrl: 'https://github.com/sele-nap',
      linkedin: 'selenap10',
      linkedinUrl: 'https://www.linkedin.com/in/selenap10',
    },

    footer: {
      made: 'Fait avec 🐈‍⬛ et magie',
      tech: 'React • Three.js'
    }
  },

  en: {
    hero: {
      name: 'Séléna Poun',
      title: '• Full-Stack Web Developer •',
    },

    about: {
      title: 'About',
      intro: "Full-stack developer specializing in JavaScript and TypeScript, with experience in web applications and interactive 3D tools, focused on performance, UX and maintainable code.",
      skills: {
        atouts: {
          title: 'Strengths',
          items: ['Autonomy', 'Attention to detail', 'Adaptability', 'Team spirit']
        },
        tech: {
          title: 'Technical',
          items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React (Redux, Hooks)', 'Vue.js', 'Three.js', 'Node.js', 'MongoDB', 'MySQL', 'REST API', 'Git', 'Shell script', 'Agile / SCRUM', 'Figma', 'Adobe Suite (Illustrator, InDesign, Premiere Pro)']
        },
        competences: {
          title: 'Skills',
          items: ['User analysis', 'Agile methodology', 'Continuous improvement', 'IT monitoring']
        },
        interests: {
          title: 'Interests',
          items: ['Gaming', 'Hiking', 'Reading']
        }
      }
    },

    formations: {
      title: 'Formations',
      description: 'A path at the crossroads of design, technology and digital storytelling.',
      degrees: [
        {
          title: 'Application Designer and Developer',
          period: '2021 – 2023',
          school: 'Wild Code School',
          location: 'Lyon, France',
          highlights: [
            'Specialized in full-stack development with JavaScript, TypeScript, Node.js and React',
            'Completed multiple projects using Agile methodologies and collaborative workflows',
            'Built REST APIs and responsive front-end applications',
          ]
        },
        {
          title: 'Master in Digital Creation · Hypermedia & Smart Spaces',
          period: '2017 – 2020',
          school: 'University of Savoy Mont Blanc',
          location: 'Chambéry, France',
          highlights: [
            'Designed and developed interactive digital systems in virtual and augmented reality using Unity',
            'Focused on UX/UI design, interactive content creation, and transmedia storytelling',
            "Master's thesis: 'The Role of Images in Animal Exploitation: Perceptions from L214 Protests'",
          ]
        },
        {
          title: "Bachelor's Degree in Book & Multimedia Studies",
          period: '2014 – 2017',
          school: 'University of Clermont Auvergne',
          location: 'Clermont-Ferrand, France',
          highlights: [
            'Trained in digital tools (HTML/CSS, Adobe Suite), communication and cultural project design',
            'Focus on digital media production, heritage mediation, and editorial content',
            'Included class in advanced English and digital communication',
          ]
        }
      ],
      cv: {
        label: 'Download my CV',
        fileName: '/CV_Poun_Selena_en.pdf'
      }
    },

    experiences: {
      title: 'Experiences',
      description: 'A path at the crossroads of web, 3D and innovation.',
      jobs: [
        {
          title: 'Full-Stack 3D Developer',
          period: 'March 2022 – July 2025',
          company: 'Decq',
          location: 'Saint-Priest, France',
          highlights: [
            'Developed a production-ready online 3D configurator using Vue.js, Three.js, TypeScript and PHP',
            'Created interactive components and integrated real-time 3D rendering',
            'Improved UX and code scalability in close collaboration with the design team',
            'Delivered a stable, modular platform used by industrial clients',
            'Key achievement: final deliverable put into production, designed from start to finish with a maintainable front/back architecture',
          ]
        },
        {
          title: 'Business Developer',
          period: 'October – November 2019',
          company: 'DataLumni',
          location: 'Annecy, France',
          highlights: [
            'Led prospecting efforts and supported marketing visuals',
            'Contributed to outreach strategy and competitive analysis',
          ]
        },
        {
          title: 'Virtual Reality Designer',
          period: 'February – March 2019',
          company: 'University of Savoy Mont Blanc',
          location: 'Chambéry, France',
          highlights: [
            'Built a VR prototype in Unity (C#) for a PhD research project',
          ]
        }
      ]
    },

    contact: {
      title: 'Contact',
      description: 'Would you like to collaborate or know more about my work, please feel free to reach out to me. 🐸',
      email: 'selena.poun@gmail.com',
      github: 'sele-nap',
      githubUrl: 'https://github.com/sele-nap',
      linkedin: 'selenap10',
      linkedinUrl: 'https://www.linkedin.com/in/selenap10',
    },

    footer: {
      made: 'Made with 🐈‍⬛ and magic',
      tech: 'React • Three.js'
    }
  }
} as const

export type TranslationKey = typeof translations.fr
