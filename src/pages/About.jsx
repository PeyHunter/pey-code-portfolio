function About() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-40 font-bricolage">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
        
        {/* VENSTRE SIDE: Indeholder nu både Overskrift og Tekst */}
        <div className="lg:col-span-7">
          <h1 className="text-[10vw] font-black leading-none mb-12 tracking-tighter">
            Work
          </h1>

          <div className="font-reddit text-base md:text-base leading-relaxed mb-10 opacity-70 max-w-1/2 space-y-4">
            <p>
              Hi, I’m Peyton. I study Computer Science (Datamatiker) at EK (formerly KEA), and I’m looking for
              my next job. Before I started coding, I spent years as a graphic designer. I still think like one:
              I want things to work, but I also want them to feel right for the person using them.
            </p>
            <p>
              Right now I’m an AI intern at Droids Agency. Most of my time goes into an AI-powered OCR pipeline
              that runs on Kubernetes. I built the benchmark that tells us how good the OCR really is, the local
              k3s setup that lets the team run the whole pipeline on their own machine, and tools for resending
              pages to the model and making test data. I also brought agentic Playwright testing to roboref, the
              agency’s meeting-transcription app.
            </p>
            <p>
              I learn best by building things by hand. I set up my own k3s cluster from scratch, one command at
              a time, so I’d really understand what Kubernetes does. It now runs on two machines, a VPS and an
              old MacBook at home, joined over Tailscale. Argo CD keeps it in sync with Git, and it hosts this
              website and my CV.
            </p>
            <p>
              I’ve also worked with Java, Spring Boot and MySQL, and with JavaScript and React on the frontend.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
            AI workflows
          </h2>

          <div className="font-reddit text-base md:text-base leading-relaxed mb-10 opacity-70 max-w-1/2 space-y-4">
            <p>
              My own project, Pathfinder, uses the Claude API to turn a messy list of things someone wants to
              learn into a full learning path. It runs in steps: one prompt cleans up the list (fixing typos,
              translating Danish, splitting items) and asks the user when something is ambiguous, the next builds
              an ordered path of modules and adds the missing basics, and a third writes a beginner lesson for
              each concept. Every answer comes back as structured JSON checked against a schema and my own rules,
              such as “no cycles”. If a check fails, the errors go back to the model so it repairs its own answer.
              A spend limit and usage tracking keep the cost under control, and it runs on my k3s cluster.
            </p>
            <p>
              I’ve also built automations in n8n during my AI Agents and Automation elective, such as a workflow
              that backs up my workflows to GitHub, and Notehelper, a Spring Boot app that uses OpenAI to turn a
              PDF into structured notes, deeper explanations and a quiz. For testing, I use Playwright’s AI test
              agents to plan, write and fix browser tests.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
            Thoughts on AI
          </h2>

          <div className="font-reddit text-base md:text-base leading-relaxed mb-10 opacity-70 max-w-1/2 space-y-4">
            <p>
              I work with AI agents every day, mainly Claude Code and Codex, and I use skills and structured
              workflows rather than ad-hoc prompting to keep improving how efficiently I work. I’ve also worked
              with Hermes agents and RAG, and with skills and frameworks such as Matt Pocock’s skills and Lauren
              Tan’s pstack.
            </p>
            <p>
              I’ve learnt that understanding the spec and the domain is essential. On a Kubernetes-based OCR
              pipeline, every task follows the same loop: spec, implement, verify and hand off. I’m also aware of
              the cognitive debt that builds up when agents write code. To reduce it, I built a quiz skill that
              tests me on the concepts behind the work, one question at a time, and saves study notes, so I
              understand what my agents build.
            </p>
            <p>
              The bottleneck now is trust. Agents write code fast; the hard part is knowing it works. So I’m
              building test frameworks that let me rely on my agents more and more. At Droids I set up
              Playwright’s AI test agents on roboref: one plans the tests, one writes them, and one repairs them
              when the app changes. I review everything before it’s committed. That way agents help check the
              code that agents write.
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