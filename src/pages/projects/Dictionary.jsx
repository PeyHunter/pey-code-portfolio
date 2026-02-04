export default function DictionaryApp({
  title,
  liveUrl,
  techStack = [],
  displayTitle,
}) {
  if (!liveUrl) return null;

  const repoUrl = "https://github.com/PeyHunter/react-dictionary-app";
  const displayDomain = liveUrl.replace("https://", "");

  // Helper for Java-style link rows
  const JavaLinkRow = ({ label, url, text }) => (
    <div>
      <span className="text-blue-400">{label}</span> {" = "}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-300 hover:text-blue-400 underline decoration-white/10"
      >
        "{text}"
      </a>
      ;
    </div>
  );

  return (
    <div className="relative flex flex-col items-start justify-between w-full gap-12 px-2 py-24 border-b xl:flex-row border-white/20">
      <div className="z-10 flex-shrink-0 mb-12 md:mb-0">
        <h2 className="mb-2 text-6xl font-black transition-all duration-500 tracking-tighter md:text-8xl hover:text-blue-400">
          {displayTitle}
        </h2>

        <div className="text-sm font-reddit normal-case leading-relaxed tracking-wider md:text-base">
          <div>
            <span className="text-blue-400">String</span> title ={" "}
            <span className="text-orange-300">"{title}"</span>;
          </div>

          <JavaLinkRow label="URL" url={liveUrl} text="visit-live-site" />

          <div>
            <span className="text-blue-400">String[]</span> tech = {"{"}
            {techStack.map((tech, i) => (
              <span key={tech}>
                <span className="text-orange-300">"{tech}"</span>
                {i < techStack.length - 1 ? ", " : ""}
              </span>
            ))}
            {"}"};
          </div>

          <JavaLinkRow label="URL" url={repoUrl} text="view-repository" />
        </div>
      </div>

      {/* Browser Mockup Section */}
      <div className="relative z-20 w-full xl:w-[60%] max-w-[900px] self-center">
        <div className="bg-[#1a1a1a] w-full h-10 rounded-t-2xl border-x border-t border-white/20 flex items-center px-6 gap-3">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/50" />
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/50" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-500/50" />
          </div>
          <div className="ml-6 text-xs text-white/30 font-reddit lowercase tracking-[0.2em] truncate">
            {displayDomain}
          </div>
        </div>

        <div className="w-full h-[500px] md:h-[600px] border border-white/20 rounded-b-2xl overflow-hidden bg-white shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative flex items-center justify-center">
          <iframe
            src={liveUrl}
            title={displayTitle}
            className="border-none"
            style={{
              width: "142.8%",
              height: "142.8%",
              transform: "scale(0.7)",
              flexShrink: 0,
            }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}