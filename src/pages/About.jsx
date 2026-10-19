function About() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-40 font-bricolage">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
        
        {/* VENSTRE SIDE: Indeholder nu både Overskrift og Tekst */}
        <div className="lg:col-span-7">
          <h1 className="text-[10vw] font-black leading-none mb-12 tracking-tighter">
            About
          </h1>

          <p className="font-reddit text-base md:text-base leading-relaxed mb-10 opacity-70 max-w-1/2">
            Hi, I'm Peyton, a full-stack developer studying at KEA, and I'm currently looking for a job.
            I have a solid foundation in Java, Spring Boot, and MySQL, and I enjoy using Tailwind and Bootstrap
            to keep my frontends clean. As an AI intern at Droids Agency I work with agentic Playwright,
            AI workflows, and Kubernetes, and I run my own k3s cluster with CI/CD. I’m ready to join a professional
            dev team where I can contribute to real projects and keep leveling up my coding skills.
          </p>

          <a
            href="https://cv.peytonhunter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-reddit text-base mb-12 px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition-all"
          >
            View my CV →
          </a>

          <div className="font-reddit leading-relaxed p-8 bg-white/5 rounded-2xl border border-white/10 mb-12 max-w-xl">
            <div className="text-base md:text-base">
              <span className="text-blue-400">record</span>{" "}
              <span className="text-purple-400">ContactInfo</span>(
              <span className="text-purple-400">Email</span> email,{" "}
              <span className="text-purple-400">Link</span> link,{" "}
              <span className="text-purple-400">Link</span> cv,{" "}
              <span className="text-purple-400">Phone</span> phone) {}
            </div>

            <div className="text-base md:text-base mt-4">
              <span className="text-blue-400">var</span> contact ={" "}
              <span className="text-blue-400">new</span>{" "}
              <span className="text-purple-400">ContactInfo</span>(
            </div>

            <div className="ml-6 border-l border-white/10 pl-6 my-2 text-base md:text-base space-y-2">
              <div>
                <span className="text-blue-400">new</span>{" "}
                <span className="text-purple-400">Email</span>(
                <a href="mailto:Nando.goat@gmail.com" className="text-orange-300 hover:underline transition-all">
                  "nando.goat@gmail.com"
                </a>
                ),
              </div>
              <div>
                <span className="text-blue-400">new</span>{" "}
                <span className="text-purple-400">Link</span>(
                <a href="https://github.com/peyhunter" target="_blank" className="text-orange-300 hover:underline transition-all">
                  "https://github.com/peyhunter"
                </a>
                ),
              </div>
              <div>
                <span className="text-blue-400">new</span>{" "}
                <span className="text-purple-400">Link</span>(
                <a href="https://cv.peytonhunter.com" target="_blank" className="text-orange-300 hover:underline transition-all">
                  "https://cv.peytonhunter.com"
                </a>
                ),
              </div>
              <div>
                <span className="text-blue-400">new</span>{" "}
                <span className="text-purple-400">Phone</span>(
                <a href="tel:+4512345678" className="text-orange-300 hover:underline transition-all">
                  "+45 12 34 56 78"
                </a>
                )
              </div>
            </div>
            
            <div className="text-base md:text-base">);</div>
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