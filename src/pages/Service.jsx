
import React, { useState, useEffect } from "react";

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("service");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const items = [
    {
      name: "UI UX DESIGN",
      icons: [
        {
          src: "/image/icon/figma.png",
          alt: "Figma",
          link: "https://www.figma.com/",
        },
      ],
    },
    {
      name: "FRONT END",
      icons: [
        {
          src: "/image/icon/react.png",
          alt: "React",
          link: "https://react.dev/",
        },
        {
          src: "/image/icon/bootstrap.png",
          alt: "Bootstrap",
          link: "https://getbootstrap.com/",
        },
      ],
    },
    {
      name: "BACK END",
      icons: [
        {
          src: "/image/icon/php.png",
          alt: "PHP",
          link: "https://www.php.net/",
        },
        {
          src: "/image/icon/python.png",
          alt: "Python",
          link: "https://www.python.org/",
        },
        {
          src: "/image/icon/js.png",
          alt: "JavaScript",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
      ],
    },
  ];

  return (
    <>
      <section id="service" className="min-h-screen pt-24">
        <div className="text-center p-4 sm:p-8 lg:p-20 text-amber-50">
          <h1
            className={`font-light text-4xl sm:text-5xl lg:text-6xl transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            SERVICE
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mt-16 sm:mt-24 lg:mt-40 mb-16 sm:mb-32 lg:mb-60">
            {items.map((service, index) => (
              <div
                key={service.name}
                className={`transition-all duration-700 hover:scale-105 hover:shadow-lg rounded-xl p-4 sm:p-6 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <ul className="mb-6 sm:mb-8">
                  <li className="flex flex-row items-center justify-center gap-3 sm:gap-5 flex-wrap">
                    {service.icons.map((icon, iconIndex) => (
                      <a
                        key={iconIndex}
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 hover:scale-110 cursor-pointer"
                      >
                        <img
                          src={icon.src}
                          alt={icon.alt}
                          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-auto lg:h-auto transition-all duration-300 hover:opacity-80"
                          title={`Visit ${icon.alt} official website`}
                        />
                      </a>
                    ))}
                  </li>
                </ul>
                <p className="text-sm sm:text-base lg:text-l font-medium hover:text-[#C971FF] transition-colors duration-300">
                  {service.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;