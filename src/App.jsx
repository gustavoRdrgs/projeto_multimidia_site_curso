import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialBar from "./components/SocialBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Disciplinas from "./pages/Disciplinas";
import Professores from "./pages/Professores";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disciplinas" element={<Disciplinas />} />
        <Route path="/professores" element={<Professores />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
