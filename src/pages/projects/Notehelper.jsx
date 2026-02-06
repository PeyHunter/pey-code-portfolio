export default function Notehelper() {
  return (
    <div className="py-24 border-b border-white/20 px-2 relative flex flex-col xl:flex-row justify-between items-start gap-12 w-full">
      <div className="z-10 flex-shrink-0">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter hover:text-blue-400 transition-all duration-500 mb-6">
          NoteHelper
        </h2>

        <div className="font-reddit text-sm md:text-base leading-relaxed tracking-wider">
          <div>
            <span className="text-blue-400">String</span> category ={" "}
            <span className="text-orange-300">"Artificial Intelligence"</span>;
          </div>
          <div>
            <span className="text-blue-400">String[]</span> tech = {"{"}
            "Open AI", "Java", "API Integration"
            {"}"};
          </div>
          <div>
            <span className="text-blue-400">URL</span> live ={" "}
            <a
              href="https://ai.peytonhunter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 hover:text-blue-400 underline decoration-white/10"
            >
              "ai-peytonhunter-live"
            </a>
            ;
          </div>
          <div>
            <span className="text-blue-400">GitHub</span> frontend ={" "}
            <a
              href="https://github.com/PeyHunter/notehelper-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 hover:text-blue-400 underline decoration-white/10"
            >
              "notehelper-frontend"
            </a>
            ;
          </div>
          <div>
            <span className="text-blue-400">GitHub</span> backend ={" "}
            <a
              href="https://github.com/PeyHunter/Backend_NoteHelper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 hover:text-blue-400 underline decoration-white/10"
            >
              "Backend_NoteHelper"
            </a>
            ;
          </div>
          <div>
            <span className="text-blue-400">YAML</span> CI_CD ={" "}
            <a
              href="https://github.com/PeyHunter/Backend_NoteHelper/tree/main/.github/workflows"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 hover:text-blue-400 underline decoration-white/10"
            >
              "github-workflows"
            </a>
            ;
          </div>

          <div className="mt-8 md:max-w-lg">
            <p className="text-white/60 font-reddit leading-relaxed">
              This is my AI-driven project designed to automate the process of
              learning. I built this tool to analyze complex information and
              automatically generate structured notes, making it easier to
              organize and retain key insights from my studies.
            </p>
            <p className="mt-4 text-blue-400/80 font-reddit text-sm italic leading-relaxed">
              Please note: The API can be a bit slow to respond, but the real
              value shines through when you use the "Explain more" feature.
            </p>
          </div>
        </div>
      </div>

      {/* Her har jeg ændret bredden så den matcher Soundwave præcis */}
      <div className="relative z-20 w-full xl:w-[60%] max-w-[900px] self-center">
        <div className="bg-[#1a1a1a] w-full h-10 rounded-t-2xl border-x border-t border-white/20 flex items-center px-6 gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
          <div className="ml-4 text-[10px] text-white/20 font-reddit uppercase tracking-[0.2em]">
            agent-workflow.yaml
          </div>
        </div>

        <div className="w-full aspect-video bg-black rounded-b-2xl border-x border-b border-white/20 overflow-hidden relative group">
          <iframe
            src="https://ai.peytonhunter.com/"
            style={{
              width: "200%",
              height: "200%",
              transform: "scale(0.5)",
              transformOrigin: "top left",
              position: "absolute",
              left: "0",
              top: "0",
            }}
            className="border-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            title="AI Project Preview"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none border-[12px] border-black/5 shadow-inner"></div>
        </div>
      </div>
    </div>
  );
}