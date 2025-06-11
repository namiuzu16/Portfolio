// import React from "react";
// import Navbar from "./pages/Navbar";
// import Home from "./pages/Home";
// import Service from "./pages/Service";
// import Project from "./pages/Project";
// import Contact from "./pages/Contact";

// const App = () => {
//   return (
//     <>
//       <div className="bg-[#241830] scroll-smooth hide-scrollbar">
//         <Navbar />
//         <Home />
//         <Service />
//         <Project />
//         <Contact />
//       </div>
//     </>
//   );
// };

// export default App;
import React, { useEffect, useState } from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

const SubtleStarsBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const numStars = 55; 

      const newStars = Array.from({ length: numStars }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1 + 0.5, 
        opacity: Math.random() * 0.4 + 0.2,
        twinkleDuration: Math.random() * 3 + 2, 
        delay: Math.random() * 5, 
      }));

      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `subtleTwinkle ${star.twinkleDuration}s ease-in-out infinite alternate`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <>
      <div className="bg-[#241830] scroll-smooth hide-scrollbar relative">
        <SubtleStarsBackground />

        <div className="relative" style={{ zIndex: 10 }}>
          <Navbar />
        </div>

        <div className="relative" style={{ zIndex: 5 }}>
          <Home />
        </div>

        <div className="relative" style={{ zIndex: 5 }}>
          <Service />
          <Project />
          <Contact />
        </div>
      </div>

      <style jsx>{`
        @keyframes subtleTwinkle {
          0% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.6;
            transform: scale(1);
          }
          100% {
            opacity: 0.3;
            transform: scale(0.9);
          }
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default App;