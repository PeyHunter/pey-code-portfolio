import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-start z-50 mix-blend-difference text-white">
      
      <div className="font-bricolage font-medium text-[25px] leading-tight font-black flex flex-col items-start">
          <span className="hover:opacity-40 transition-opacity cursor-default">Java, Python,</span>
         <span className="hover:opacity-40 transition-opacity cursor-default text-left">
        JavaScript, Tailwind, React
  </span>
</div>

     <div className="font-bricolage flex gap-8 text-[25px] font-medium ">
        <Link to="/" className="hover:line-through decoration-[3px] underline-offset-4">Home</Link>
        <Link to="/projects" className="hover:line-through decoration-[3px] underline-offset-4">Work</Link>
        <Link to="/contact" className="hover:line-through decoration-[3px] underline-offset-4">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;