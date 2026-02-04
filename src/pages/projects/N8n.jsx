export default function N8nAutomation(){
return (
    <div className="py-24 border-b border-white/20 px-2 relative flex flex-col xl:flex-row justify-between items-start gap-12 w-full">
      <div className="z-10 flex-shrink-0">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter hover:text-blue-400 transition-all duration-500 mb-6">
          n8n
        </h2>

        <div className="font-reddit text-sm md:text-base leading-relaxed tracking-wider">
          <div><span className="text-blue-400">String</span> project = <span className="text-orange-300">"Workflow Backup"</span>;</div>
          <div><span className="text-blue-400">String[]</span> tech = {"{"}"n8n", "GitHub API", "JSON", "Docker"{"}"};</div>
          <div>
            <span className="text-blue-400">URL</span> github = <a href="https://github.com/PeyHunter/n8n-backup" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:text-blue-400 underline decoration-white/10">"n8n-backup-repo"</a>;
          </div>
          
          <div className="mt-8 md:max-w-lg">
            <p className="text-white/60 font-reddit leading-relaxed">
              I am currently taking an elective in AI Agents and Automation, where I use n8n as my primary tool. 
              I built this workflow to automatically back up my projects to GitHub, making sure all my automations are saved and easy to track.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full xl:w-[60%] max-w-[900px] self-center">
        <div className="bg-[#1a1a1a] w-full h-10 rounded-t-2xl border-x border-t border-white/20 flex items-center px-6 gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
          <div className="ml-4 text-[10px] text-white/20 font-reddit uppercase tracking-[0.2em]">backup-workflow.json</div>
        </div>
        
       <div className="w-full aspect-video bg-white rounded-b-2xl border-x border-b border-white/20 overflow-hidden">
        <img 
        src="/Screenshots/N8n.png" 
        alt="n8n Workflow Screenshot" 
        className="w-full h-full object-cover opacity-90"
        />
      </div>
      </div>
    </div>
  );
}