import React, { useState, useEffect } from "react";

const Project = () => {
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

    const element = document.getElementById("project");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Toko Online",
      desc: "Lorem ipsum dolor sit amet",
      image: "/image/project/shope.png",
      link: "https://www.figma.com/design/lmeFuEzPfbop0p9QFkLzjK/Toko-Online?node-id=0-1&t=nAYXgVh6Nar740uO-1",
    },
    {
      title: "Mixue",
      desc: "Lorem ipsum dolor sit amet",
      image: "/image/project/mixue.png",
      link: "https://www.figma.com/design/2Isks1VSDrri1TAeQrhJf5/Miksu-Web?node-id=0-1&t=UrQOuTeid60aF0nn-1",
    },
    {
      title: "App Presensi",
      desc: "Lorem ipsum dolor sit amet",
      image: "/image/project/sekolah.png",
      link: "https://www.figma.com/design/hdKW4eqvYNTjo1GPF08jCe/Layout-App-Presensi?node-id=723-2&t=JoIF73Lou0HC7le6-1",
    },
  ];
  return (
    <section
      className="min-h-screen text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      id="project"
    >
      <h1
        className={`text-center text-3xl sm:text-4xl lg:text-5xl font-light tracking-widest mb-12 sm:mb-14 lg:mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        PROJECT
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 place-items-center max-w-7xl mx-auto ">
        {projects.map((item, index) => (
          <div
            key={index}
            className={`shadow-[0_0_15px_#C971FF]
              rounded-3xl p-4 w-full max-w-sm hover:scale-105 transition-all duration-500 hover:shadow-[0_0_20px_#C971FF] group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="relative overflow-hidden rounded-xl w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 sm:h-36 lg:h-40 object-cover rounded-xl bg-white transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-white group-hover:text-[#C971FF] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-light text-white group-hover:text-purple-200 transition-colors duration-300">
                {item.desc}
              </p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
