import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects"; 
import About from "./pages/About";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Projects />} />
        <Route path="/projects" element={<Navigate to="/work" replace />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;