export default function Notehelper() {
  return (
    <div className="py-24 border-b border-white/20 px-2 relative flex flex-col xl:flex-row justify-between items-start gap-12 w-full">
      {/* Tekst sektionen er nu sat til 30% bredde på store skærme */}
      <div className="z-10 flex-shrink-0 xl:w-[30%]">
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
            "Open ai", "", "Java", "API Integration"
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

          <div className="mt-8">
            <p className="text-white/60 font-reddit leading-relaxed">
              This is my AI-driven project designed to automate the process of
              learning. I built this tool to analyze complex information and
              automatically generate structured notes, making it easier to
              organize and retain key insights from my studies.
            </p>
          </div>
        </div>
      </div>

      {/* Preview sektionen bruger nu xl:flex-1 og har fået en større max-width */}
      <div className="relative z-20 w-full xl:flex-1 max-w-[1200px] self-center">
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
            className="w-full h-full border-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            title="AI Project Preview"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none border-[12px] border-black/5 shadow-inner"></div>
        </div>
      </div>
    </div>
  );
}