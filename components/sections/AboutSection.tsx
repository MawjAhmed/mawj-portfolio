
const skillGroups = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive web interfaces.",
      technologies: ["Next.js", "React", "Nuxt", "Vue.js"],
    },
    {
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications.",
      technologies: ["React Native"],
    },
    {
      title: "Backend Development",
      description: "Building backend functionality and working with APIs.",
      technologies: ["ASP.NET Core", "REST APIs"],
    },
    {
      title: "Databases",
      description: "Working with relational databases and SQL queries.",
      technologies: ["SQL", "PostgreSQL", "SQLite"],
    },
    {
      title: "Tools & Version Control",
      description: "Managing code and collaborating on development projects.",
      technologies: ["Git", "GitHub"],
    },
  ];
  
  export default function AboutSection() {
    return (
      <section id="about" className="container py-20 sm:py-28">
        {/* Section heading */}
        <div className="mb-14">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#987653]">
            Get to Know Me
          </p>
  
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            About Me
          </h2>
  
          <p className="mt-4 text-base leading-7 text-gray-500">
            Computer Engineer · Web & Mobile Application Development
          </p>
        </div>
  
        {/* Professional introduction */}
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <h3 className="text-2xl font-medium leading-snug tracking-tight text-gray-900">
              Turning ideas into thoughtful digital solutions.
            </h3>
  
            <p className="mt-4 text-sm leading-7 text-gray-500">
              Focused on practical solutions, continuous learning,
              and the details that make technology useful.
            </p>
          </div>
  
          <div className="space-y-6 text-base leading-8 text-gray-600">
            <p>
              I am a Computer Engineer who enjoys turning ideas into
              practical digital products, with a strong focus on usability,
              thoughtful design, and reliable functionality.
            </p>
  
            <p>
              I studied at <strong>Istanbul Gedik University</strong> in
              Türkiye. During my studies, I gained hands-on experience
              at <strong>Work3 Teknoloji A.Ş.</strong>, a Turkish-American
              technology company operating within the business incubator
              at Sakarya University. I worked on a hotel booking website,
              taking responsibility for frontend development, and
              contributed to <strong>Goal Radar</strong>, a football
              application involving predictions and football-related
              features. These projects gave me practical exposure to
              frontend development, backend tasks, API integration,
              and software testing.
            </p>
  
            <p>
              I also participated in university research on{" "}
              <strong>artificial intelligence and chatbots</strong> in
              collaboration with{" "}
              <strong>Dr. Öğr. Başak Buluz Kömeçoğlu</strong>. The
              DocuAssist project was submitted to TÜBİTAK and received
              preliminary funding approval.
            </p>
  
            <p>
              I currently collaborate with{" "}
              <strong>ARDH DUBAI TRAVEL & TOURISM</strong>, where I
              developed the company website and continue working on
              additional projects, including a travel platform concept
              for agencies and B2B operations.
            </p>
  
            <p>
              I believe good development goes beyond writing code or
              creating attractive interfaces. It means understanding
              the problem, choosing practical solutions, and paying
              attention to the details that make a product dependable
              and easy to use. I value continuous learning, taking
              responsibility, and turning ideas into tangible results.
            </p>
          </div>
        </div>
  
        {/* Technical skills */}
        <div className="mt-20 sm:mt-28">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#987653]">
              Technical Expertise
            </p>
  
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Technologies & Tools
            </h3>
  
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500">
              Technologies I have worked with across web development,
              mobile applications, backend systems, and databases.
            </p>
          </div>
  
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <article
                key={group.title}
                className="rounded-2xl border border-gray-200/80 bg-white p-6 transition duration-300 hover:border-[#987653]/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {group.title}
                  </h4>
  
                  <span className="text-xs font-medium text-[#987653]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
  
                <p className="mt-3 min-h-12 text-sm leading-6 text-gray-500">
                  {group.description}
                </p>
  
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#f7f5ef] px-3 py-1.5 text-sm text-gray-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  