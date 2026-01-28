function Home() {
  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col justify-end p-4 overflow-hidden font-sans antialiased select-none uppercase">
      
      {/* Top sektion med kontakt info */}
      <div className="flex justify-between w-full text-[15px] tracking-widest mb-auto pt-32 px-2">
        <span className="opacity-80">Currently searching for a internship</span>
        <a 
          href="mailto:Nando.goat@gmail.com" 
          className="hover:text-blue-500 transition-colors duration-300 font-medium border-b border-white/20"
        >
          NANDO.GOAT@GMAIL.COM
        </a>
      </div>

      {/* Navne sektion - Jeg har sat vw ned til 26 for at give plads til HUNTER */}
      <div className="w-full flex justify-between items-end leading-none mb-[-6vw] whitespace-nowrap">
        <h1 className="font-saira text-[26vw] font-black tracking-tighter transform scale-y-125 origin-bottom m-0 p-0">
          PEY
        </h1>
        
        {/* Årstallet - rykket lidt for at skabe luft */}
        <div className="mb-[8vw] text-[10px] opacity-50 px-2 italic">© 2026</div>
        
        {/* Hunter sat til 26vw så 'R' bliver inde på skærmen */}
        <h1 className="font-saira text-[26vw] tracking-tighter transform scale-y-125 origin-bottom m-0 p-0">
          HUNTER
        </h1>
      </div>
    </div>
  );
}

export default Home;