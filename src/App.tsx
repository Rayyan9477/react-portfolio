import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import AIAssistant from "./components/assistant/AIAssistant";
import {
  About,
  Contact,
  Experience,
  ProfessionalExperience,
  Footer,
  Header,
  HeaderBanner,
  Navbar,
  Portfolio,
  Services,
} from "./index";

interface AppContextValue {
  activeNav: string;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextValue | null>(null);

function App() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <AppContext.Provider value={{ activeNav, setActiveNav }}>
      <div className="relative min-h-screen overflow-hidden bg-void bg-site bg-cover bg-no-repeat text-slate-100">
        <Header />
        <HeaderBanner />
        <Navbar />
        <About />
        <ProfessionalExperience />
        <Portfolio />
        <Experience />
        <Services />
        <Contact />
        <Footer />

        {/* Interactive AI Agent Recruiter Assistant */}
        <AIAssistant />

        {/* Toast provider */}
        <Toaster
          toastOptions={{
            style: {
              background: "#0D111C",
              color: "#F8FAFC",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "12px",
            },
          }}
        />
      </div>
    </AppContext.Provider>
  );
}

export default App;
