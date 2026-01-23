export type SectionId = "home" | "education" | "experience" | "interests" | "cv";

export const portfolio = {
  name: "Séléna Poun",
  title: "Full-Stack Developer (JavaScript / TypeScript / React / Node.js)",
  tagline: "I build calm, durable web experiences",
  sections: {
    home: {
      heading: "Home",
      body: [
        "Full-stack developer focused on maintainable front-end architecture and delightful user experiences.",
        "I ship modern web apps with React/TypeScript, and I enjoy building interactive scenes with Three.js.",
      ],
    },
    education: {
      heading: "Education",
      body: [
        "Wild Code School — Full-Stack Web Development (Node.js / React / TypeScript) — 2021–2023",
        "University of Savoie Mont Blanc — Master’s Degree, Digital Creation: Hypermedia & Intelligent Spaces — 2017–2020",
        "University of Clermont Auvergne — Bachelor’s Degree, Book & Multimedia Studies — 2014–2017",
      ],
    },
    experience: {
      heading: "Experience",
      body: [
        "Full-Stack Developer (3D) — Decq — 2022–2025",
        "• Built and maintained a web 3D configurator (Three.js + Vue/TypeScript) blending 2D/3D interactions.",
        "• Delivered features across the stack: UI, APIs, data, performance and tooling in an Agile environment.",
        "• Developed a React Native RFID scanning tool to support inventory workflows.",
        "",
        "Previous experiences: Gyhel Studio (Digital Marketing Strategy Intern), DataLumni (Business Developer Intern), USMB (VR Designer Intern).",
      ],
    },
    interests: {
      heading: "Interests",
      body: [
        "Gaming (systems, co-op, roguelikes)",
        "Reading (sci-fi / fantasy / horror)",
        "Vegan cooking",
        "Hiking",
      ],
    },
    cv: {
      heading: "CV",
      body: [
        "Download my CV as a PDF.",
      ],
    },
  } as const,
};