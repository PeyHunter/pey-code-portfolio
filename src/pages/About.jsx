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
              Hi, I’m Peyton. I study Computer Science (Datamatiker) at EK (formerly KEA), and I’m looking for my
              next job. Right now I’m an AI intern at Droids Agency, where I work on an AI-powered OCR pipeline
              that runs on Kubernetes and set up agentic Playwright testing.
            </p>
            <p>
              Kubernetes is the thing I can’t stop tinkering with. In my spare time I built my own k3s cluster by
              hand, and it’s what serves this website. Day to day I also work with Java, Spring Boot, MySQL,
              JavaScript and React. Before all of this I was a graphic designer, and I think that’s why I still
              care about how things feel, not just how they work.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
            Some thoughts on AI
          </h2>

          <div className="font-reddit text-base md:text-base leading-relaxed mb-10 opacity-70 max-w-1/2 space-y-4">
            <p>
              Most of my days are spent working alongside AI agents, mainly Claude Code and Codex. Over time I’ve
              drifted away from ad-hoc prompting and towards skills and structured workflows, partly because
              they’re faster, but mostly because they make the work repeatable. I’ve also tried Hermes agents and
              RAG, and I keep borrowing ideas from other people’s setups, like Matt Pocock’s skills and Lauren
              Tan’s pstack.
            </p>
            <p>
              The thing I think about most is cognitive debt. When an agent writes the code, it’s easy to end up
              with something that works but that you don’t really understand. So I’ve come to believe the spec and
              the domain matter more than ever. On the OCR pipeline every task follows the same loop: spec,
              implement, verify, hand off. And to keep myself honest, I built a quiz skill that asks me about the
              concepts behind the work, one question at a time, and saves notes I can study later.
            </p>
            <p>
              I suspect the real bottleneck isn’t speed anymore, it’s trust. Agents can write code fast; knowing
              it actually works is the hard part. That’s why I keep coming back to tests, and why I’m spending
              more of my time on test frameworks that let me rely on my agents a little more each time.
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