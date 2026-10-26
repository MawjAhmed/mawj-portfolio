export type Project = {
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    image: string;
    images?: string[];
    github?: string;
    demo?: string;
    video?: string;
    category: string;
    university?: string;
researchNote?: string;
  };
  
  export const projects: Project[] = [
    {
      title: "DocuAssist",
      subtitle: "AI-Powered University Regulations Assistant",
      university: "Istanbul Gedik University",
      description:
  "A full-stack AI-powered assistant developed for students and academic staff at Istanbul Gedik University. It enables users to search university regulations and policies using natural language, powered by a RAG architecture and official university data.",
      researchNote:
        "Developed as a research project and submitted to TÜBİTAK (The Scientific and Technological Research Council of Türkiye), receiving preliminary funding approval only. Authorized by Istanbul Gedik University to use its institutional data.",
      technologies: [
        "Python",
        "FastAPI",
        "Next.js",
        "Tailwind CSS",
        "RAG",
      ],
      image: "/images/DocuAssist1.jpeg",
      images: [
        "/images/DocuAssist1.jpeg",
        "/images/DocuAssist2.jpeg",
        "/images/DocuAssist3.jpeg",
      ],
      github: "https://github.com/MawjAhmed/DocuAssist",
      video: "/videos/DocAsist.mov",
      category: "AI · Full Stack",
    },

    {
      title: "ARDH DUBAI",
      subtitle: "Corporate Travel & Tourism Website",
      description:
        "A modern corporate website developed for ARDH DUBAI Travel & Tourism, presenting the company's profile, services, and destinations through a responsive web experience.",
      technologies: ["Next.js", "Tailwind CSS"],
      image: "/images/dubaiLand1.png",
      images: [
        "/images/dubaiLand1.png",
        "/images/dubaiLand2.png",
        "/images/dubaiLand3.png",
        "/images/dubaiLand4.png",
        
        "/images/dubaiLand6.png",
        "/images/dubaiLand7.png",
      ],
      demo: "https://dubailandtravel.com/",
      category: "Corporate Website",
    },

    {
      title: "TravelDesk B2B",
      subtitle: "B2B Travel Management Platform",
      description:
        "A B2B travel platform concept designed for travel companies and agencies, combining a modern web interface with backend API development and database integration.",
      technologies: [
        "C#",
        "ASP.NET Core Web API",
        "SQL",
        "Next.js",
        "Tailwind CSS",
      ],
      image: "/images/B2B1.png",
      images: [
        "/images/B2B1.png",
        "/images/B2B2.png",
        "/images/B2B3.png",
        "/images/B2B4.png",
        "/images/B2B5.jpeg",
        "/images/B2B6.png",
        "/images/B2B7.png",
        "/images/B2B8.png",
      ],
      github: "https://github.com/MawjAhmed/TravelDeskB2B",
      category: "B2B · Travel Tech",
    },

    
{
  title: "Dalini | دلّيني",
  subtitle: "Local Business & Services Discovery Platform",
  description:
    "A local discovery platform in development that helps people find and explore clinics, companies, restaurants, and cafés in their city. The platform aims to help users compare places through ratings, contact businesses directly, and access booking options.",
  technologies: [
    "Nuxt",
    "Vue.js",
    "Tailwind CSS",
  ],
  image: "/images/D1.jpeg",
  images: [
    "/images/D1.jpeg",
    "/images/D2.jpeg",
    "/images/D3.jpeg",
    "/images/D4.jpeg",
    "/images/D5.jpeg",
    "/images/D6.jpeg",
  ],
  github: "https://github.com/MawjAhmed/Dalini",
  category: "Personal Project · In Development",
},

    
  ];