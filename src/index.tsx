import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { DestinationsPage } from "./pages/DestinationsPage";
import { PackagesPage } from "./pages/PackagesPage";
import { ContactPage } from "./pages/ContactPage";
import { ChevronUpIcon } from "lucide-react";
import { Button } from "./components/ui/button";
import { useState, useEffect } from "react";
import { Outbound } from "./pages/Outbound";
import { Inbound } from "./pages/Inbound";

const App = (): JSX.Element => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="bg-white overflow-x-hidden w-full relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
            <Route path="/outbound" element={<Outbound />} />
              <Route path="/inbound" element={<Inbound/>} />
        </Routes>

        {showScroll && (
          <Button
            onClick={scrollToTop}
            className="flex w-10 h-10 md:w-12 md:h-12 items-center justify-center fixed right-4 md:right-8 bottom-4 md:bottom-8 bg-[#3cb371] hover:bg-[#2ea05e] rounded-3xl p-0 shadow-lg z-50"
            aria-label="Scroll to top"
          >
            <ChevronUpIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </Button>
        )}
      </div>
    </Router>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
