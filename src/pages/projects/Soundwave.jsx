export default function Soundwave({ title, techStack, displayTitle }) {
  return (
    <div className="py-24 border-b border-white/20 px-2 relative flex flex-col xl:flex-row justify-between items-start gap-12 w-full">
      <div className="z-10 flex-shrink-0">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter hover:text-blue-400 transition-all duration-500 mb-6">
          {displayTitle}
        </h2>

        <div className="font-reddit text-sm md:text-base leading-relaxed tracking-wider">
          <div>
            <span className="text-blue-400">String</span> title ={" "}
            <span className="text-orange-300">"{title}"</span>;
          </div>
          <div>
            <span className="text-blue-400">String[]</span> tech = {"{"}
            {techStack.join(", ")}
            {"}"};
          </div>
          <div>
            <span className="text-blue-400">URL</span> frontend ={" "}
            <a
              href="https://github.com/Krymmel-Kaemperne/SpinchyFrontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 hover:text-blue-400 underline decoration-white/10"
            >
              "frontend-repo"
            </a>
            ;
          </div>
          <div>
            <span className="text-blue-400">URL</span> backend ={" "}
            <a
              href="https://github.com/Krymmel-Kaemperne/soundwave-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 hover:text-blue-400 underline decoration-white/10"
            >
              "backend-repo"
            </a>
            ;
          </div>

          <div className="mt-8 md:max-w-lg">
            <p className="text-white/60 font-reddit leading-relaxed">
              Soundwave Arena is a full-stack project using Spring Boot, JPA, and
              a MySQL database. We were four team members and activly worked
              with SCRUM. We used GitHub Actions to automate our testing and
              deployment, making sure our code always worked as intended before
              merging.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full xl:w-[60%] max-w-[900px] self-center">
        {/* Browser Top Bar */}
        <div className="bg-[#1a1a1a] w-full h-10 rounded-t-2xl border-x border-t border-white/20 flex items-center px-6 gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
          <div className="ml-4 text-[10px] text-white/20 font-reddit uppercase tracking-[0.2em]">
            soundwave-arena.app
          </div>
        </div>

        {/* Video Container med præcis aspect ratio fra din fil (4096/2140) */}
        <div 
          className="w-full bg-white rounded-b-2xl border-x border-b border-white/20 overflow-hidden"
          style={{ aspectRadios: "4096 / 2140" }}
        >
          <video
            src="/Soundwave_video.mov"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
}