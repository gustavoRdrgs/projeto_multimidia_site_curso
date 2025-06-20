import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Disciplinas from "./pages/Disciplinas";
import Professores from "./pages/Professores";
import PlanoCurso from "./pages/PlanoCurso";
import Contato from "./pages/Contato";
import Estagio from "./pages/Estagio";
import TCC from "./pages/tcc";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disciplinas" element={<Disciplinas />} />
        <Route path="/professores" element={<Professores />} />
        <Route path="/plano-curso" element={<PlanoCurso />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/estagio" element={<Estagio />} />
        <Route path="/tcc" element={<TCC />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
