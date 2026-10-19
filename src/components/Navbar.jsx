import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-start z-50 mix-blend-difference text-white">
      
     <div className="font-bricolage text-[25px] leading-tight font-black flex flex-col items-start">
  <div className="flex gap-[0.3em] flex-wrap">
    <span >Java,</span>
    <span >Python,</span>
    <span >JavaScript,</span>
  </div>

  <div className="flex gap-[0.3em] flex-wrap">
    <span >React,</span>
    <span >Docker,</span>
    <span >Kubernetes,</span>
  </div>

  <div className="flex gap-[0.3em] flex-wrap">
    <span >GitOps,</span>
    <span >Argo CD,</span>
    <span >Agentic Playwright</span>
  </div>

</div>




     <div className="font-bricolage flex gap-8 text-[25px] font-medium ">
        <Link to="/" className="hover:line-through decoration-[3px] underline-offset-4">Home</Link>
        <Link to="/projects" className="hover:line-through decoration-[3px] underline-offset-4">Projects</Link>
        <Link to="/about" className="hover:line-through decoration-[3px] underline-offset-4">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;