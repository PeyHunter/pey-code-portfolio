// Who does what in the test loop
const loop = [
  { tool: "Planner", detail: "explores the running app, writes a test plan" },
  { tool: "Generator", detail: "turns the plan into Playwright tests, checking each step live" },
  { tool: "Test run", detail: "pass → ready for review, fail → Healer" },
  { tool: "Healer", detail: "replays a failing test, finds what changed, patches it" },
  { tool: "Me", detail: "review the plan and the tests before anything is committed" },
];

const flows = ["log in", "upload a meeting", "record in the browser", "cancel a recording"];

export default function AgenticPlaywright() {
  return (
    <div className="py-24 border-b border-white/20 px-2 relative flex flex-col xl:flex-row justify-between items-start gap-12 w-full">
      <div className="z-10 flex-shrink-0">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter hover:text-blue-400 transition-all duration-500 mb-6">
          Agentic Playwright
        </h2>

        <div className="font-reddit text-sm md:text-base leading-relaxed tracking-wider">
          <div>
            <span className="text-blue-400">String</span> category ={" "}
            <span className="text-orange-300">"Testing / AI agents"</span>;
          </div>
          <div>
            <span className="text-blue-400">String</span> where ={" "}
            <span className="text-orange-300">"Droids Agency · roboref"</span>;
          </div>
          <div>
            <span className="text-blue-400">String[]</span> tech = {"{"}
            "Playwright", "Test Agents", "end-to-end", "a11y"
            {"}"};
          </div>

          <div className="mt-8 md:max-w-lg">
            <p className="text-white/60 font-reddit leading-relaxed">
              roboref is Droids Agency’s meeting-transcription app. I gave it
              its first end-to-end browser tests with Playwright, then turned
              test writing into an agentic workflow. Three AI agents plan,
              write and repair the tests, and I review what they produce.
            </p>
            <p className="mt-4 text-white/60 font-reddit leading-relaxed">
              I wrote the first tests by hand, for logging in, uploading and
              recording, so the agents had a pattern to follow. From there the
              agents took over, starting with the recording-cancel flow. Along
              the way I fixed four UI and accessibility bugs in the app.
            </p>
            <p className="mt-4 text-blue-400/80 font-reddit text-sm italic leading-relaxed">
              Agents write code fast. Tests are how I learn to trust it.
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
            roboref / agentic-tests
          </div>
        </div>

        <div className="w-full bg-[#0d0d0d] rounded-b-2xl border-x border-b border-white/20 p-6 md:p-10 font-reddit">
          <ol className="flex flex-col">
            {loop.map((step, i) => (
              <li key={step.tool} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="w-8 h-8 rounded-full border border-blue-400/60 text-blue-400 text-xs flex items-center justify-center flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < loop.length - 1 && <span className="w-px flex-1 bg-white/15 my-1"></span>}
                </div>
                <div className="pb-6">
                  <div className="text-orange-300 text-sm md:text-base tracking-wider">{step.tool}</div>
                  <div className="text-white/50 text-xs md:text-sm">{step.detail}</div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-2 pt-4 border-t border-white/10 text-xs md:text-sm text-white/40 tracking-wider">
            <span className="text-green-400/80">●</span> covered:{" "}
            <span className="text-white/70">{flows.join(" · ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
