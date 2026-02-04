import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div className="relative h-screen w-screen bg-black text-white flex flex-col justify-end p-4 overflow-hidden font-sans antialiased select-none">
      
      {/* Top sektion med kontakt info */}
      <div className="flex justify-between w-full text-[17px] tracking-widest mb-auto pt-32 px-2 uppercase">
        <span className="opacity-80">Currently looking for a internship</span>
        
        <div className="flex flex-col items-end gap-2 text-right">
          <a 
            href="mailto:Nando.goat@gmail.com" 
            className="hover:text-blue-400 transition-colors duration-300 font-medium border-b border-white/20"
          >
            Nando.goat@gmail.com
          </a>
          <span className="opacity-80 font-medium tracking-[0.2em]">
            +45 22 11 32 31 
          </span>
        </div>
      </div>

       {/* Middle sektion - Ekstremt langsomt */}
       <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
        <div className="font-reddit text-lg md:text-xl tracking-wide font-medium max-w-4xl mx-auto leading-relaxed normal-case inline-flex flex-col items-center">
          
          <div>
            <span className="text-blue-400">const</span> <span className="text-yellow-200">internship</span> = {"{"}
          </div>
          
          <div className="flex flex-col items-center">
            <div>
              <span className="text-emerald-400">role:</span>{" "}
              <span className="text-orange-300 italic">
                <TypeAnimation
                  sequence={['"Full Stack Developer",', 2000]}
                  speed={1} // Bibliotekets langsomste setting
                  cursor={false}
                />
              </span>
            </div>
            
            <div>
              <span className="text-emerald-400">skills:</span> [
              <span className="text-orange-300 italic">
                <TypeAnimation
                  sequence={[
                    5000, // Pause inden næste linje
                    '"Java", "Python", "React", "MySQL", "JavaScript"',
                    1000
                  ]}
                  speed={1} // Ekstremt langsomt
                  cursor={true}
                />
              </span>
              ]
            </div>
          </div>
          
          <div>{"}"};</div>
        </div>
      </div>

      {/* Navne sektion i bunden */}
      <div className="w-full flex justify-between items-end leading-none mb-[-5vw] whitespace-nowrap uppercase">
        <h1 className="font-saira text-[26vw] font-black tracking-tighter transform scale-y-125 origin-bottom">
          PEY
        </h1>
        
        <div className="mb-[8vw] text-[10px] opacity-50 italic text-center">© 2026</div>
        
        <h1 className="font-saira text-[26vw] font-medium tracking-tighter transform scale-y-125 origin-bottom">
          HUNTER
        </h1>
      </div>
    </div>
  );
}

export default Home;