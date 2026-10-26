
const journey = [
    {
      number: "01",
      period: "University Years",
      category: "Education & Foundations",
      title: "Computer Engineering Education",
      organization: "Istanbul Gedik University · Türkiye",
      description:
        "I studied Computer Engineering at Istanbul Gedik University in Türkiye. During my university years, I developed a strong interest in web and mobile application development. I worked on academic and practical projects, explored different technologies, and built a solid foundation in programming, problem-solving, and application development.",
      highlights: [
        "Focused on web development and modern frontend technologies.",
        "Explored mobile application development and cross-platform solutions.",
        "Worked on academic projects that helped me turn theoretical knowledge into practical experience.",
      ],
      technologies: [
        "Computer Engineering",
        "JavaScript",
        "React",
        "Next.js",
        "React Native",
      ],
    },
    {
      number: "02",
      period: "Professional Experience",
      category: "Web & Application Development",
      title: "Software Development Experience at Work3 Teknoloji A.Ş.",
      organization: "Work3 Teknoloji A.Ş. · Türkiye",
      description:
        "I gained hands-on experience at a Turkish-American technology company operating within the business incubator at Sakarya University. Working on different application projects helped me understand real development workflows and contribute to frontend development, API integration, backend tasks, and software testing.",
      highlights: [
        "Hotel Booking Website — took responsibility for frontend development using Next.js and Tailwind CSS.",
        "Goal Radar — contributed to a football application involving predictions and football-related features.",
        "Gained practical experience in API integration, troubleshooting, and testing application functionality.",
      ],
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "REST APIs",
        "Software Testing",
      ],
    },
    {
      number: "03",
      period: "Research & Innovation",
      category: "Artificial Intelligence",
      title: "DocuAssist — AI-Powered University Regulations Assistant",
      organization: "University Research Project · TÜBİTAK",
      description:
        "I worked on DocuAssist, a research project designed to help university users access and understand academic regulations through an AI-powered assistant. The project was submitted to TÜBİTAK and received preliminary funding approval.",
      highlights: [
        "Explored AI-powered question answering and Retrieval-Augmented Generation (RAG).",
        "Worked with technologies spanning the frontend and backend of the application.",
        "Explored practical applications of AI in education and information retrieval.",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "Next.js",
        "Tailwind CSS",
        "RAG",
      ],
      link: {
        label: "View Project on GitHub",
        url: "https://github.com/MawjAhmed/DocuAssist",
      },
    },
    {
      number: "04",
      period: "Current Collaboration",
      category: "Corporate Web Development & Travel Technology",
      title: "Collaborating with DUBAI LAND",
      organization: "DUBAI LAND TRAVEL & TOURISM",
      description:
        "I developed the corporate website for ARDH DUBAI, creating a professional online presence for the travel and tourism company. I continue to collaborate with the company on additional projects, including the development of a travel platform designed to support travel agencies and B2B operations.",
      highlights: [
        "Developed the company's corporate website using Next.js and Tailwind CSS.",
        "Continue collaborating on additional digital projects for the company.",
        "Working toward a travel platform concept tailored to travel agencies and business needs.",
      ],
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "API Integration",
        "B2B Travel Technology",
      ],
      link: {
        label: "Visit Company Website",
        url: "https://dubailandtravel.com/",
      },
    },
  ];
  
  export default function ExperienceSection() {
    return (
      <section
        id="experience"
        className="container py-20 sm:py-28"
      >
        <div className="mb-16 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#987653]">
            My Professional Journey
          </p>
  
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            My Journey as a Computer Engineer
          </h2>
  
          <p className="mt-6 text-base leading-8 text-gray-600">
            From my university studies to professional projects and
            research, I have continued to develop my skills in web and
            mobile application development, API integration, and emerging
            technologies. Today, I collaborate on real-world projects and
            build practical digital solutions that address business needs.
          </p>
        </div>
  
        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-4.75 top-6 w-px bg-linear-to-b from-[#987653]/70 via-gray-200 to-transparent sm:left-6.75"
          />
  
          <div className="space-y-12 sm:space-y-16">
            {journey.map((item) => (
              <article
                key={item.number}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline marker */}
                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#987653]/30 bg-white text-xs font-semibold text-[#987653] sm:h-14 sm:w-14">
                  {item.number}
                </div>
  
                <div className="rounded-2xl border border-gray-200/80 bg-white p-6 transition duration-300 hover:border-[#987653]/40 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#987653]">
                        {item.category}
                      </p>
  
                      <h3 className="mt-3 text-xl font-semibold leading-snug text-gray-900 sm:text-2xl">
                        {item.title}
                      </h3>
  
                      <p className="mt-3 text-sm leading-6 text-gray-500">
                        {item.organization}
                      </p>
                    </div>
  
                    <span className="w-fit shrink-0 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                      {item.period}
                    </span>
                  </div>
  
                  <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                    {item.description}
                  </p>
  
                  <ul className="mt-6 space-y-3">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-7 text-gray-600"
                      >
                        <span className="mt-2.75 h-1.5 w-1.5 shrink-0 rounded-full bg-[#987653]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
  
                  {item.link && (
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#987653] transition hover:opacity-70"
                    >
                      {item.link.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  