import React, { useState } from "react";
import { Download, CheckCircle } from "lucide-react";

const GalaxyDownloader = () => {
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);
  const downloadSteps = [
    "Initializing CV data...",
    "Compiling portfolio assets...",
    "Generating PDF format...",
    "Finalizing document...",
  ];
  const [currentStep, setCurrentStep] = useState("");

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/pdf/Fitriani_Ayunda_Dwi_Rahmadani.pdf";
    link.download = "Fitriani_Ayunda_Dwi_Rahmadani.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const startDownload = () => {
    setStatus("downloading");
    setProgress(0);
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += Math.random() * 20 + 10;

      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setStatus("complete");
        setCurrentStep("CV Downloaded Successfully!");
        clearInterval(interval);

        setTimeout(() => {
          downloadPDF();
        }, 500);

        setTimeout(() => {
          setStatus("idle");
          setProgress(0);
          setCurrentStep("");
        }, 3000);
      } else {
        setProgress(currentProgress);
        const stepIndex = Math.floor(
          (currentProgress / 100) * downloadSteps.length
        );
        setCurrentStep(
          downloadSteps[stepIndex] || downloadSteps[downloadSteps.length - 1]
        );
      }
    }, 400);
  };

  if (status === "downloading") {
    return (
      <div className="mt-6 sm:mt-8 mx-auto sm:mx-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border-2 border-purple-500/50 h-20 w-full max-w-64 rounded-xl flex flex-col items-center justify-center text-purple-300 transition-all duration-500 shadow-lg">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-medium">{Math.round(progress)}%</span>
        </div>
        <div className="w-48 bg-purple-900/50 rounded-full h-1.5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          </div>
        </div>
        <p className="text-xs text-purple-400 mt-1 text-center px-2">
          {currentStep}
        </p>
      </div>
    );
  }

  if (status === "complete") {
    return (
      <div className="mt-6 sm:mt-8 mx-auto sm:mx-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border-2 border-green-500/50 h-16 w-full max-w-64 rounded-xl flex items-center justify-center text-green-300 transition-all duration-500 shadow-lg">
        <CheckCircle className="w-6 h-6 mr-2 animate-bounce" />
        <span className="font-medium">CV Downloaded!</span>
      </div>
    );
  }

  return (
    <button
      onClick={startDownload}
      className="mt-6 sm:mt-8 mx-auto sm:mx-0 bg-transparent border-2 border-[#754791] h-12 w-full max-w-48 rounded-full flex items-center justify-center text-[#754791] hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 text-lg sm:text-xl cursor-pointer font-medium relative overflow-hidden group transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
      <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform group-hover:animate-bounce" />
      <span className="relative z-10">Download CV</span>
    </button>
  );
};

const Home = () => {
  const icons = [
    {
      src: "/image/icon/GitHub.png",
      alt: "GitHub",
      link: "https://github.com/namiuzu16",
    },
    {
      src: "/image/icon/Instagram.png",
      alt: "Instagram",
      link: "https://www.instagram.com/fitrianiayunda_114/",
    },
    {
      src: "/image/icon/LinkedIn.png",
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/fitriani-ayunda-dwi-rahmadani-0761962b0/",
    },
    {
      src: "/image/icon/WhatsApp.png",
      alt: "WhatsApp",
      link: "https://wa.me/6283125101843",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen pt-20 sm:pt-24 px-4 sm:px-6 md:px-16 lg:px-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

        {[...Array(20)].map((_, i) => (
          <div
            key={`bigstar-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}

        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-2 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent shooting-star hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}

        {[...Array(2)].map((_, i) => (
          <div
            key={`colored-shooting-${i}`}
            className="absolute w-3 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent shooting-star-colored hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10 max-w-7xl mx-auto">
        <div className="lg:basis-1/2 flex flex-col animate-slideInLeft text-center lg:text-left">
          <div className="mb-4 flex justify-center lg:justify-start">
            <img
              src="/image/icon2/Group2.png"
              alt="Group2"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
            />
          </div>

          <h3 className="font-bold text-amber-50 text-xl sm:text-2xl lg:text-3xl mt-2 mb-3 animate-fadeInUp animation-delay-300 leading-tight">
            FITRIANI AYUNDA DWI RAHMADANI
          </h3>

          <p className="text-base sm:text-lg text-stone-200 font-light animate-fadeInUp animation-delay-500 mb-2 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Hi, I'm a fresh graduate from Indonesia. Welcome to my portfolio
            website, here I showcase my UI/UX design projects as well as
            frontend and backend projects.
          </p>

          <div className="animate-fadeInUp animation-delay-700 flex justify-center lg:justify-start">
            <GalaxyDownloader />
          </div>
        </div>

        <div className="lg:basis-1/2 relative flex flex-col items-center mt-8 lg:mt-0">
          <div className="animate-fadeInUp animation-delay-200 relative">
            <img
              src="/image/icon2/Group11.png"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
              alt="Group11"
            />
          </div>

          <div className="bg-[#754791] w-full max-w-xs sm:max-w-sm md:max-w-md flex items-center justify-center gap-2 sm:gap-4 text-white z-10 absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 rounded-full px-3 py-2 shadow-lg animate-fadeInUp animation-delay-800">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center transition-all duration-500 ease-in-out hover:bg-transparent flex-shrink-0"
              >
                <a href={icon.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-all duration-500 ease-in-out hover:drop-shadow-[0_0_10px_#C971FF] cursor-pointer"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-16 sm:h-20"></div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes shootingStar {
          0% {
            transform: translateX(-100px) translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(300px) translateY(100px);
            opacity: 0;
          }
        }

        @keyframes shootingStarColored {
          0% {
            transform: translateX(-120px) translateY(-20px);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateX(350px) translateY(120px);
            opacity: 0;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-twinkle {
          animation: twinkle infinite ease-in-out;
        }

        .shooting-star {
          animation: shootingStar 8s linear infinite;
        }

        .shooting-star-colored {
          animation: shootingStarColored 10s linear infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        @media (max-width: 640px) {
          .animate-slideInLeft {
            animation: fadeInUp 0.8s ease-out;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
