import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// One-line, letter-by-letter typing effect
const useTypingEffect = (text, speed = 120, hold = 1400) => {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    let timer, resetTimer;
    const runTyping = () => {
      timer = setInterval(() => {
        setTyped(text.slice(0, i + 1));
        i++;
        if (i > text.length) {
          clearInterval(timer);
          resetTimer = setTimeout(() => {
            setTyped("");
            i = 0;
            runTyping();
          }, hold);
        }
      }, speed);
    };
    runTyping();
    return () => {
      clearInterval(timer);
      clearTimeout(resetTimer);
    };
  }, [text, speed, hold]);
  return typed;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // Single line, letter by letter!
  const heroText = useTypingEffect("Software Engineer");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + 200;
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(item.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO TITLE - One Line */}
      <div className="fixed top-2 left-2 z-50 w-[85vw] max-w-[230px] xs:max-w-[270px] sm:max-w-[350px] md:max-w-[400px] pointer-events-none">
        <h2 className="font-bold text-base xs:text-lg sm:text-xl md:text-2xl text-white cursor-default min-h-[1.8em]">
          {heroText.split("").map((char, idx) => (
            <span
              key={idx}
              style={{
                display: "inline-block",
                animation: `wave 1.2s ease-in-out infinite`,
                animationDelay: `${idx * 0.05}s`,
              }}
              className="transition-transform duration-300 hover:scale-125 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-indigo-400"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <span className="animate-blink">|</span>
        </h2>
      </div>

      {/* SOCIAL LINKS */}
      <div className="fixed top-2 right-14 z-50 flex gap-2 xs:gap-3 sm:gap-4 md:gap-5">
        <a
          href="https://github.com/zahidali-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-300 hover:text-[#8245ec] transition-transform hover:scale-110 p-2"
        >
          <FaGithub size={22} className="sm:size-[25px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/zahid-ali-499612344/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-300 hover:text-[#8245ec] transition-transform hover:scale-110 p-2"
        >
          <FaLinkedin size={22} className="sm:size-[25px]" />
        </a>
      </div>

      {/* HAMBURGER, far right on mobile */}
      <div className="fixed top-2 right-2 z-50 md:hidden">
        <button
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          className="p-2 text-[#8245ec] bg-[#050414] bg-opacity-70 rounded-lg transition-transform hover:scale-110"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <FiX className="text-3xl" />
          ) : (
            <FiMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* Navbar & Menu */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition duration-300 px-4 xs:px-6 sm:px-[7vw] lg:px-[16vw] 
          ${isScrolled ? "bg-[#050414] bg-opacity-80 backdrop-blur-md shadow-md" : "bg-transparent"}`}
      >
        <div className="flex justify-end items-center py-3 sm:py-5 text-white relative">
          {/* Desktop Menu - all links */}
          <div className="hidden md:flex items-center space-x-4 sm:space-x-8 ml-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className={`text-gray-300 hover:text-[#8245ec] font-medium ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                } transition-colors duration-300`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        {/* Mobile Menu - all links */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[330px]" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4 bg-[#050414] bg-opacity-95 backdrop-blur-lg rounded-lg shadow-lg text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                } transition-colors duration-300`}
              >
                <button
                  className="w-full text-lg font-medium py-2 px-4"
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;
