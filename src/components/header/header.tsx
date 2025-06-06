import { useContext } from "react";
import { AppContext } from "../../App";

const Header = () => {
  const context = useContext(AppContext);

  const { setActiveNav } = context as {
    setActiveNav: React.Dispatch<React.SetStateAction<string>>;
  };

  return (
    <header className="py-8">
      <div className="container">
        <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4">
          <a
            className="transition-none"
            href="#"
            onClick={() => {
              setActiveNav("#");
            }}
          >
            <p className="text-gradient bg-gradient-to-r from-[#42A6E3] to-[#FF56F6] bg-clip-text font-primary text-[2.1rem] font-bold tracking-wider text-transparent">
              Rayyan
            </p>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Rayyan9477/react-portfolio/blob/main/Rayyan_Ahmed_Resume%202025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Rayyan_Ahmed_Resume.pdf"
              className="btn-header h-[48px] rounded-full px-6 text-sm font-medium text-white flex items-center justify-center"
            >
              Download Resume
            </a>
            <a href="#contact">
              <button
                className="btn-header h-[48px] rounded-full px-6 text-sm font-medium text-white"
                onClick={() => {
                  setActiveNav("#contact");
                }}
              >
                Work with Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;