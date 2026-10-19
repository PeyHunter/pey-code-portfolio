import { useEffect, useState } from "react";

// The real flow of the app: Spring Boot endpoints behind each step
const steps = [
  { label: "Upload", endpoint: "POST /api/upload" },
  { label: "Notes", endpoint: "POST /api/generate-notes" },
  { label: "Explain more", endpoint: "POST /api/explain-more" },
  { label: "Quiz", endpoint: "POST /api/generate-quiz" },
];

function UploadView() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-full max-w-sm border-2 border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center gap-3">
        <div className="w-10 h-12 border border-orange-300/70 rounded-sm relative">
          <span className="absolute bottom-1 left-1 text-[9px] text-orange-300">PDF</span>
        </div>
        <div className="text-white/80 text-sm">lecture-05-react.pdf</div>
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-blue-400 rounded-full"></div>
        </div>
      </div>
      <div className="text-white/40 text-xs">.pdf or .txt → text extracted with PDFBox</div>
    </div>
  );
}

function NotesView({ expanded }) {
  return (
    <div className="h-full flex flex-col gap-4 text-left">
      <div className="text-blue-400 text-sm md:text-base">### What is a Single Page App?</div>
      <div className="flex flex-col gap-2">
        <div className="h-2 bg-white/20 rounded w-full"></div>
        <div className="h-2 bg-white/20 rounded w-11/12"></div>
        <div className="h-2 bg-white/20 rounded w-4/5"></div>
        {expanded && (
          <>
            <div className="h-2 bg-orange-300/40 rounded w-full"></div>
            <div className="h-2 bg-orange-300/40 rounded w-10/12"></div>
            <div className="h-2 bg-orange-300/40 rounded w-11/12"></div>
          </>
        )}
      </div>
      <div className="bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-xs text-white/60">
        <span className="text-blue-400">function</span> <span className="text-yellow-200">App</span>() {"{ ... }"}
      </div>
      <div className="flex gap-3 mt-auto">
        <span className={`text-xs px-3 py-1.5 rounded-full border ${expanded ? "border-orange-300 text-orange-300" : "border-white/20 text-white/50"}`}>
          Explain more
        </span>
        <span className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/50">Generate quiz</span>
      </div>
    </div>
  );
}

function QuizView() {
  return (
    <div className="h-full flex flex-col justify-center gap-4 text-left">
      <div className="text-white/40 text-xs tracking-widest uppercase">Question 3 / 20</div>
      <div className="text-white/90 text-sm md:text-base">
        Why doesn't a Single Page App reload the page when you navigate?
      </div>
      <div className="border border-green-400/40 bg-green-400/5 rounded-lg px-4 py-3 text-xs md:text-sm text-green-300/90">
        Correct answer: the router swaps components with JavaScript instead of asking the server for a new HTML page.
      </div>
      <div className="flex gap-3">
        <span className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/50">← Previous</span>
        <span className="text-xs px-3 py-1.5 rounded-full border border-orange-300 text-orange-300">Next →</span>
      </div>
    </div>
  );
}

export default function Notehelper() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((i) => (i + 1) % steps.length), 3000);
    return () => clearInterval(timer);
  }, []);

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
              learning. I built this tool to analyze text and
              automatically generate structured notes, making it easier to
              study.
            </p>
            <p className="mt-4 text-blue-400/80 font-reddit text-sm italic leading-relaxed">
              Upload a PDF, get structured notes, press "Explain more" for a
              deeper walkthrough, then test yourself with a generated quiz.
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
            notehelper.app
          </div>
        </div>

        <div className="w-full bg-[#0d0d0d] rounded-b-2xl border-x border-b border-white/20 p-6 md:p-10 font-reddit">
          <div className="flex flex-wrap gap-2 mb-6">
            {steps.map((step, i) => (
              <button
                key={step.label}
                onClick={() => setActive(i)}
                className={`text-xs md:text-sm px-3 py-1.5 rounded-full border transition-colors duration-500 ${
                  i === active ? "border-blue-400 text-blue-400" : "border-white/15 text-white/40 hover:text-white/70"
                }`}
              >
                {String(i + 1).padStart(2, "0")} {step.label}
              </button>
            ))}
          </div>

          <div className="h-64 md:h-72">
            {active === 0 && <UploadView />}
            {active === 1 && <NotesView expanded={false} />}
            {active === 2 && <NotesView expanded />}
            {active === 3 && <QuizView />}
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-xs md:text-sm text-white/40 tracking-wider">
            <span className="text-orange-300">{steps[active].endpoint}</span>{" "}
            <span className="text-white/30">→ Spring Boot → OpenAI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
