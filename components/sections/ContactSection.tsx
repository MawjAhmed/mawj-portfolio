
const contactDetails = [
    {
      label: "Email",
      value: "mawjjahmedd@gmail.com",
      href: "mailto:mawjjahmedd@gmail.com",
    },
    {
      label: "WhatsApp",
      value: "+90 501 348 0562",
      href: "https://wa.me/905013480562",
    },
    {
      label: "GitHub",
      value: "Explore my work",
      href: "https://github.com/MawjAhmed",
    },
  ];
  
  export default function ContactSection() {
    return (
      <section
        id="contact"
        className="container py-20 sm:py-28"
      >
        <div className="overflow-hidden rounded-3xl border border-gray-200/80 bg-[#faf9f6]">
          <div className="grid gap-12 p-7 sm:p-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16 md:p-14">
            {/* Main introduction */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#987653]">
                Get in Touch
              </p>
  
              <h2 className="mt-5 max-w-xl text-4xl font-medium leading-tight tracking-tight text-gray-900 sm:text-5xl">
                A Conversation
                <span className="block font-normal italic text-[#987653]">
                  Worth Having.
                </span>
              </h2>
  
              <p className="mt-6 max-w-lg text-base leading-8 text-gray-600">
                Meaningful work begins with a clear vision and the
                right collaboration. I appreciate thoughtful ideas,
                purposeful projects, and the people who bring them
                to life. If our paths align, I would be pleased
                to connect.
              </p>
  
              {/* Availability */}
              <div className="mt-10 border-t border-gray-200 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                  Availability
                </p>
  
                <div className="mt-4 flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
  
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Saturday – Thursday
                    </p>
  
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      9:00 AM – 7:00 PM
                    </p>
  
                    <p className="mt-2 text-xs text-gray-400">
                      Iraq time · UTC+3
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Contact information */}
            <div className="flex flex-col">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#987653]">
                  Contact Details
                </p>
  
                <h3 className="mt-3 text-xl font-medium text-gray-900">
                  Let’s connect.
                </h3>
  
                <p className="mt-2 text-sm leading-7 text-gray-500">
                  For professional inquiries, project discussions,
                  and future collaborations.
                </p>
              </div>
  
              <div className="mt-8 divide-y divide-gray-200">
                {contactDetails.map((contact) => (
                  <div key={contact.label} className="py-5 first:pt-0">
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                      {contact.label}
                    </p>
  
                    <a
                      href={contact.href}
                      target={
                        contact.href.startsWith("mailto:")
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        contact.href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-gray-800 transition-colors hover:text-[#987653]"
                    >
                      {contact.value}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                ))}
              </div>
  
              {/* WhatsApp call to action */}
              <a
                href="https://wa.me/905013480562"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-fit items-center justify-center gap-3 rounded-full bg-[#564d46] px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-[#473e2a]"
              >
                Start a Conversation
                <span aria-hidden="true">↗</span>
              </a>
  
              <p className="mt-auto border-t border-gray-200 pt-6 text-sm leading-7 text-gray-500">
                Based in Erbil, Iraq.
                <span className="block">
                  Open to meaningful professional collaborations.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  