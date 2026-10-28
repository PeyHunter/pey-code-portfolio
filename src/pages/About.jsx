function About() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-40 font-bricolage">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
        
        {/* VENSTRE SIDE: Indeholder nu både Overskrift og Tekst */}
        <div className="lg:col-span-7">
          <h1 className="text-[10vw] font-black leading-none mb-12 tracking-tighter">
            About
          </h1>

          <div className="font-reddit text-base md:text-base leading-relaxed mb-10 opacity-70 max-w-1/2 space-y-4">
            <p>
              Hi, I’m Peyton. I study Computer Science (Datamatiker) at EK and I’m looking for my next job. I’ve
              fallen for Linux, Kubernetes and GitOps: I built my own k3s cluster by hand, and Argo CD deploys this
              website straight from git. I’m also an AI intern at Droids Agency, where I work with Kubernetes and
              agentic testing.
            </p>
            <p>
              I also work with Java, Spring Boot, MySQL, JavaScript and React. Before coding I was a graphic
              designer, so I still care about how things feel, not just how they work.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
            Some thoughts on AI
          </h2>

          <div className="font-reddit text-base md:text-base leading-relaxed mb-10 opacity-70 max-w-1/2 space-y-4">
            <p>
              I work with AI agents every day, and I’ve found that skills and structured workflows beat ad-hoc
              prompting. What I think about most is cognitive debt: when an agent writes the code, it’s easy to end
              up with something that works but that you don’t really understand. So I built a quiz skill that asks
              me about the concepts behind the work.
            </p>
            <p>
              I suspect the real bottleneck isn’t speed anymore, it’s trust. That’s why I keep coming back to tests.
            </p>
          </div>

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
              <span className="text-purple-400">Link</span> linkedin,{" "}
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
                <span className="text-purple-400">Link</span>(
                <a href="https://www.linkedin.com/in/pey-hunter" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:underline transition-all">
                  "https://www.linkedin.com/in/pey-hunter"
                </a>
                ),
              </div>
              <div>
                <span className="text-blue-400">new</span>{" "}
                <span className="text-purple-400">Phone</span>(
                <a href="tel:+4522113231" className="text-orange-300 hover:underline transition-all">
                  "+45 22 11 32 31"
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