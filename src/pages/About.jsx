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
              Hi, I’m Peyton. I study Computer Science (Datamatiker) at EK (formerly KEA) and I’m looking for my
              next job. I was a graphic designer before I started coding, so I care about how things feel, not
              just how they work.
            </p>
            <p>
              I’m an AI intern at Droids Agency, where I work on an AI-powered OCR pipeline on Kubernetes and
              agentic Playwright testing. In my spare time I built my own k3s cluster by hand. It runs this
              website. I also work with Java, Spring Boot, MySQL, JavaScript and React.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
            AI workflows
          </h2>

          <div className="font-reddit text-base md:text-base leading-relaxed mb-10 opacity-70 max-w-1/2 space-y-4">
            <p>
              My project Pathfinder uses the Claude API to turn a messy list of things someone wants to learn into
              a learning path, with lessons for each concept. Every answer is checked against a schema, and if a
              check fails, the model repairs its own answer. I’ve also built n8n automations and Notehelper, a
              Spring Boot app that uses OpenAI to turn a PDF into notes and a quiz.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
            Thoughts on AI
          </h2>

          <div className="font-reddit text-base md:text-base leading-relaxed mb-10 opacity-70 max-w-1/2 space-y-4">
            <p>
              I work with AI agents every day, mainly Claude Code and Codex, using skills and structured workflows
              instead of ad-hoc prompts. Every task follows the same loop: spec, implement, verify, hand off. To
              make sure I understand what my agents build, I made a quiz skill that tests me on the concepts
              behind the work.
            </p>
            <p>
              The bottleneck now is trust. Agents write code fast; the hard part is knowing it works. That’s why
              I focus on tests, like the Playwright agents I set up at Droids.
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