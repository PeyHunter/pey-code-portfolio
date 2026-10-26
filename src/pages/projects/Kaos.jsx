// The planned steps of one KAOS run
const run = [
  { tool: "Wake up", detail: "a cron job, an Alertmanager alert or a person starts a run" },
  { tool: "Look", detail: "read logs in Loki, metrics in Prometheus, and ask Pickle what changed" },
  { tool: "Remember", detail: "check incidental: have we seen this exact failure before?" },
  { tool: "Guess the cause", detail: "write a hypothesis with a confidence level and the evidence" },
  { tool: "Act or propose", detail: "fix it if policy allows, otherwise ask a human to approve" },
  { tool: "Report", detail: "end the run with a short report of what it touched and did" },
];

export default function Kaos() {
  return (
    <div className="py-24 border-b border-white/20 px-2 relative flex flex-col xl:flex-row justify-between items-start gap-12 w-full">
      <div className="z-10 flex-shrink-0">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter hover:text-blue-400 transition-all duration-500 mb-6">
          KAOS
        </h2>

        <div className="font-reddit text-sm md:text-base leading-relaxed tracking-wider">
          <div>
            <span className="text-blue-400">String</span> category ={" "}
            <span className="text-orange-300">"Final project / AI agents"</span>;
          </div>
          <div>
            <span className="text-blue-400">String</span> status ={" "}
            <span className="text-orange-300">"start phase"</span>;
          </div>
          <div>
            <span className="text-blue-400">String[]</span> plannedTech = {"{"}
            "Kubernetes", "Rust", "Postgres", "Prometheus", "Loki", "Argo CD"
            {"}"};
          </div>

          <div className="mt-8 md:max-w-lg">
            <p className="text-white/60 font-reddit leading-relaxed">
              My final project at EK. KAOS is an AI agent that keeps watch
              over a Kubernetes cluster. When something breaks, it works out
              why and fixes it, either by itself or by asking a human first.
            </p>
            <p className="mt-4 text-white/60 font-reddit leading-relaxed">
              Everything it sees and does goes into incidental, its memory: a
              log of every failure, guess and action, so it can recognise a
              failure it has seen before. A policy lists which fixes it may
              make without asking. Part of the project is finding ways to test
              the agent, so that list can safely grow.
            </p>
            <p className="mt-4 text-blue-400/80 font-reddit text-sm italic leading-relaxed">
              We’re at the very start. This is how we think it will be set up,
              and the design will change as we build it.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full xl:w-[60%] max-w-[900px] self-center">
        <div className="bg-[#1a1a1a] w-full h-10 rounded-t-2xl border-x border-t border-white/20 flex items-center px-6 gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
          <div className="ml-4 text-[10px] text-white/20 font-reddit uppercase tracking-[0.2em]">
            kaos / planned-run
          </div>
        </div>

        <div className="w-full bg-[#0d0d0d] rounded-b-2xl border-x border-b border-white/20 p-6 md:p-10 font-reddit">
          <ol className="flex flex-col">
            {run.map((step, i) => (
              <li key={step.tool} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="w-8 h-8 rounded-full border border-blue-400/60 text-blue-400 text-xs flex items-center justify-center flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < run.length - 1 && <span className="w-px flex-1 bg-white/15 my-1"></span>}
                </div>
                <div className="pb-6">
                  <div className="text-orange-300 text-sm md:text-base tracking-wider">{step.tool}</div>
                  <div className="text-white/50 text-xs md:text-sm">{step.detail}</div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-2 pt-4 border-t border-white/10 text-xs md:text-sm text-white/40 tracking-wider">
            <span className="text-yellow-400/80">●</span> planned design,{" "}
            <span className="text-white/70">not built yet</span>
          </div>
        </div>
      </div>
    </div>
  );
}
