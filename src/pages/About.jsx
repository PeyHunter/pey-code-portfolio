function About() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-40 font-bricolage">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
        
        {/* VENSTRE SIDE: Indeholder nu både Overskrift og Tekst */}
        <div className="lg:col-span-7">
          <h1 className="text-[10vw] font-black leading-none mb-12 tracking-tighter">
            About
          </h1>

          <p className="font-reddit text-base md:text-xl leading-relaxed mb-10 opacity-70 max-w-1/2">
            Hi, I'm Peyton, a full-stack student at KEA currently looking for an internship. 
            I have a solid foundation in Java, Spring Boot, and MySQL, and I enjoy using Tailwind and Bootstrap 
            to keep my frontends clean. This semester, I'm expanding into Python and AI automation to 
            build on my experience with CI/CD and smarter workflows. I’m ready to join a professional 
            dev team where I can contribute to real projects and keep leveling up my coding skills.
          </p>

          <div className="font-reddit leading-relaxed p-8 bg-white/5 rounded-2xl border border-white/10 mb-12 max-w-xl">
            <div className="text-base md:text-xl">
              <span className="text-purple-400">ContactInfo</span> contact ={" "}
              <span className="text-blue-400">new</span>{" "}
              <span className="text-purple-400">ContactInfo</span>();
            </div>

            <div className="ml-6 border-l border-white/10 pl-6 my-4 text-base md:text-xl space-y-2">
              <div>
                contact.<span className="text-yellow-200">email</span>(
                <a href="mailto:Nando.goat@gmail.com" className="text-orange-300 hover:underline transition-all">
                  "Nando.goat@gmail.com"
                </a>
                );
              </div>
              <div>
                contact.<span className="text-yellow-200">github</span>(
                <a href="https://github.com/peyhunter" target="_blank" className="text-orange-300 hover:underline transition-all">
                  "github/peyhunter"
                </a>
                );
              </div>
              <div>
                contact.<span className="text-yellow-200">phone</span>(
                <a href="tel:+4512345678" className="text-orange-300 hover:underline transition-all">
                  "+45 12 34 56 78"
                </a>
                );
              </div>
            </div>
          </div>
        </div>

        {/* HØJRE SIDE: Billedet starter nu helt fra toppen af grid'et */}
        <div className="lg:col-span-5 flex justify-start items-start">
          <div className="relative w-full max-w-xl aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group">
            <img
              src="/peyton.jpg"
              alt="Peyton"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;