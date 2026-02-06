import ReactWeatherApp from "./projects/React-weather-app";
import LiveClock from "./projects/Live-clock";
import DictionaryApp from "./projects/Dictionary";
import Soundwave from "./projects/Soundwave";
import N8n from "./projects/N8n";
import Notehelper from "./projects/Notehelper";

function Projects() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-40 font-bricolage">
      <h1 className="text-[10vw] font-black leading-none mb-20 tracking-tighter">
        Projects
      </h1>

      <div className="flex flex-col border-t border-white/20">
       
        <Soundwave
          displayTitle="Soundwave Arena"
          title="Soundwave-Arena"
          techStack={["Java", "JavaScript", "MySQL"]}
        />


        <Notehelper
          displayTitle="Notehelper"
          title="notehelper"
          techStack={["Docker", "AI", "GitHub Actions"]}
        />

        <N8n
          displayTitle="n8n"
          title="n8n"
          techStack={["Docker", "n8n", "GitHub"]}
        />

        <ReactWeatherApp
          displayTitle="Weather App"
          title="Weather-App"
          liveUrl="https://pey-react-weather-app.netlify.app"
          techStack={["React", "API"]}
        />

        <LiveClock
          displayTitle="World Clock"
          title="Live-Clock"
          liveUrl="https://pey-world-clock.netlify.app"
          techStack={["JS", "MomentJS"]}
        />

        <DictionaryApp
          displayTitle="Dictionary"
          title="Dictionary-App"
          liveUrl="https://pey-dictionary-app.netlify.app"
          techStack={["React", "Dictionary-API", "Tailwind"]}
        />
      </div> 
    </div> 
  );
}

export default Projects;