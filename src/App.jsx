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
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<About />} />
        <Route path="/about" element={<Navigate to="/work" replace />} />
      </Routes>
    </Router>
  );
}

export default App;