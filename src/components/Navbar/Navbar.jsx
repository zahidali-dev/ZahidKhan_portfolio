import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Helper for typing effect
const useTypingEffect = (text, speed = 170, hold = 1200) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let idx = 0;
    let holdTimeout;
    const interval = setInterval(() => {
      setDisplayed((prev) => {
        if (idx < text.length) {
          const next = prev + text[idx];
          idx++;
          return next;
        } else {
          holdTimeout = setTimeout(() => {
            setDisplayed("");
            idx = 0;
          }, hold);
          clearInterval(interval);
          return prev;
        }
      });
    }, speed);
    return () => {
      clearInterval(interval);
      clearTimeout(holdTimeout);
    };
  }, [text, speed, hold]);
  return displayed;
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
  const text = "Software Engineer";
  const displayedText = useTypingEffect(text);

  // Active section on scroll
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
      {/* Title top-left, never merges! */}
      <div className="fixed top-2 left-2 z-50 w-[80vw] max-w-[200px] xs:max-w-[240px] sm:max-w-[300px] md:max-w-[340px] pointer-events-none">
        <h2 className="font-bold text-base xs:text-lg sm:text-2xl md:text-4xl text-white cursor-default flex flex-wrap space-x-1 whitespace-nowrap">
          {displayedText.split("").map((char, idx) => (
            <span
              key={idx}
              className="transition-transform duration-300 hover:scale-125 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-indigo-400"
              style={{
                display: "inline-block",
                animation: `wave 1.2s ease-in-out infinite`,
                animationDelay: `${idx * 0.07}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <span className="animate-blink">|</span>
        </h2>
      </div>

      {/* Social icons top-right, never merges! */}
      <div className="fixed top-2 right-2 z-50 flex gap-2 xs:gap-3 sm:gap-4 md:gap-5">
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

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition duration-300 px-4 xs:px-6 sm:px-[7vw] lg:px-[16vw] 
          ${isScrolled ? "bg-[#050414] bg-opacity-80 backdrop-blur-md shadow-md" : "bg-transparent"}`}
      >
        <div className="flex justify-end items-center py-3 sm:py-5 text-white relative">
          {/* Desktop Menu */}
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
          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              className="p-2 text-[#8245ec] transition-transform hover:scale-110"
              onClick={() => setIsOpen(prev => !prev)}
            >
              {isOpen ? (
                <FiX className="text-3xl" />
              ) : (
                <FiMenu className="text-3xl" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[330px]" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4 bg-[#050414] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg text-gray-300">
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
