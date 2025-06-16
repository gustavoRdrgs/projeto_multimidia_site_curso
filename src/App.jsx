import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SocialBar from "./components/SocialBar";
import ExternalLinks from "./components/ExternalLinks";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SocialBar />
      <ExternalLinks />
      <Footer />
    </>
  );
}

export default App;
