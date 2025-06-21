
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "service", "project", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "service", label: "Service" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-[#241830]/95 backdrop-blur-md border-b border-purple-500/20">
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-3">
          <div className="flex-none">
            <img
              src="/image/icon2/fadr.png"
              alt="Logo"
              className="cursor-pointer h-8 md:h-10 w-auto"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Ctext x='10' y='25' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='%23C971FF'%3EFADR%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>

          <div className="hidden lg:flex gap-8 xl:gap-12 font-medium text-amber-50 text-lg xl:text-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  cursor-pointer relative transition-all duration-300 
                  hover:text-[#C971FF] hover:scale-110 hover:drop-shadow-lg
                  ${
                    activeSection === item.id
                      ? "text-[#C971FF] scale-105 drop-shadow-[0_0_8px_rgba(201,113,255,0.8)]"
                      : ""
                  }
                  before:content-[''] before:absolute before:-inset-2 before:rounded-lg
                  before:bg-gradient-to-r before:from-transparent before:via-[#C971FF] before:to-transparent
                  before:opacity-0 before:blur-sm before:transition-opacity before:duration-300
                  hover:before:opacity-20
                  ${activeSection === item.id ? "before:opacity-10" : ""}
                `}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`
                    absolute -bottom-2 left-1/2 transform -translate-x-1/2
                    w-1 h-1 bg-[#C971FF] rounded-full transition-all duration-300
                    ${
                      activeSection === item.id
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0"
                    }
                  `}
                />
              </button>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-amber-50 hover:text-[#C971FF] transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`
            lg:hidden fixed inset-0 bg-[#241830]/98 backdrop-blur-md transition-all duration-300 ease-in-out
            ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
          style={{ top: "60px" }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  text-2xl md:text-3xl font-medium transition-all duration-300
                  hover:text-[#C971FF] hover:scale-110 hover:drop-shadow-lg
                  ${
                    activeSection === item.id
                      ? "text-[#C971FF] scale-105 drop-shadow-[0_0_8px_rgba(201,113,255,0.8)]"
                      : "text-amber-50"
                  }
                  transform translate-y-4 opacity-0 animate-fadeInUp
                `}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
