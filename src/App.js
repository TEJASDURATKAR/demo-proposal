import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import ProposalPage from "./pages/ProposalPage";
import Templates from "./pages/Templates";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return (
    <Router>
  <AppNavbar />
  <MusicPlayer />

  <div className="page-wrapper">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<ProposalPage />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  

    <Footer />
  </div>
</Router>

  );
}
