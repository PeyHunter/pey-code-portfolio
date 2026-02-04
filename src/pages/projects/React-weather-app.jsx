export default function ReactWeatherApp({ title, liveUrl, techStack, displayTitle }) {
  return (
    <div className="py-24 border-b border-white/20 px-2 relative flex flex-col xl:flex-row justify-between items-start gap-12 w-full">
      <div className="z-10 mb-12 md:mb-0 flex-shrink-0">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter hover:text-blue-400 transition-all duration-500 mb-2">
          {displayTitle}
        </h2>

        <div className="font-reddit normal-case text-sm md:text-base leading-relaxed tracking-wider">
          <div><span className="text-blue-400">String</span> title = <span className="text-orange-300">"{title}"</span>;</div>
          <div><span className="text-blue-400">URL</span> live = <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:text-blue-400 underline decoration-white/10">"visit-live-site"</a>;</div>
          <div><span className="text-blue-400">String[]</span> tech = {"{"}{techStack.map((tech, i) => (<span key={tech}><span className="text-orange-300">"{tech}"</span>{i < techStack.length - 1 ? ", " : ""}</span>))}{"}"};</div>
           {/* HER SKAL GITHUB LINKET STÅ - så det følger Java-stilen */}
          <div>
            <span className="text-blue-400">URL</span> github = <a href="https://github.com/PeyHunter/pey-react-weather-app" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:text-blue-400 underline decoration-white/10">"view-repository"</a>;
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full xl:w-[60%] max-w-[900px] self-center">
        <div className="bg-[#1a1a1a] w-full h-8 rounded-t-xl border-x border-t border-white/20 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          <div className="ml-4 text-[10px] text-white/30 font-reddit truncate">{liveUrl.replace("https://", "")}</div>
         
        </div>
        
        
        <div className="w-full h-[350px] md:h-[450px] border border-white/20 rounded-b-xl overflow-hidden bg-white relative flex items-center justify-center">
          <iframe 
            src={liveUrl} 
            title={displayTitle} 
            className="border-none" 
            style={{ 
              width: "142.8%", 
              height: "200%", 
              transform: "scale(0.6)",
              flexShrink: 0 
            }} 
            loading="lazy" 
          />
        </div>
      </div>
    </div>
  );
}