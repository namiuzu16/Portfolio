import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

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
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-[#241830]">
        <div className="flex items-center justify-between mx-15">
          <div className="flex-none">
            <img
              src="/image/icon2/fadr.png"
              alt="/"
              className="cursor-pointer"
            />
          </div>
          <div className="grow"></div>
          <div className="flex gap-17 font-medium text-amber-50 text-xl">
            {navItems.map((item) => (
              <h1
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
                    absolute -top-1 -right-1 text-xs transition-all duration-300
                    ${activeSection === item.id || "group-hover:opacity-100"} 
                    opacity-0 animate-pulse
                  `}
                >
                  ✨
                </span>

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
              </h1>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
