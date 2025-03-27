"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedLoader from "./components/AnimatedLoader";
import "./components/neuButton.css";
import "./components/scrollButtons.css";
import SnowEffect from "./components/SnowEffect";

type Video = {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
};

type Skill = {
  name: string;
  level: number;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Instead of changing animation classes, let's use transforms directly
      const scrollContainer = document.querySelector(".scroll-buttons");
      if (scrollContainer) {
        // Remove animation classes that might be interfering
        scrollContainer.classList.remove(
          "scroll-speed-up",
          "scroll-speed-normal",
          "scroll-speed-slow"
        );

        // Add a more reliable transition
        scrollContainer.style.transition =
          "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";

        // Create a subtle vertical movement based on scrollY
        const buttons = document.querySelectorAll(".scroll-button");
        buttons.forEach((button, index) => {
          const translateY = Math.sin((scrollY + index * 100) / 200) * 5;
          button.style.transform = `translateY(${translateY}px) scale(${
            scrollY > 100 ? 1 : 0.98 + scrollY / 5000
          })`;
          button.style.transition = "transform 0.3s ease-out";
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    // Add smooth scrolling to document
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="relative">
      <main className="min-h-screen bg-white relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <Image src="/bg.jpg" alt="Background" fill priority />
        </div>

        <div className="relative z-10">
          <header
            className="flex justify-between items-center px-4 md:px-6 py-3 mx-auto mt-4 rounded-[28px] relative overflow-hidden z-50 w-[95%] md:w-[90%] lg:w-[85%] fixed left-1/2 -translate-x-1/2 top-0 bg-white/5 backdrop-blur-sm border border-amber-100/10"
            style={{
              boxShadow: "0 4px 20px rgba(120, 83, 64, 0.03)",
            }}
          >
            <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-gradient-to-br from-amber-500/5 via-amber-400/3 to-transparent blur-xl"></div>
            <div className="absolute bottom-0 left-1/3 w-20 h-20 rounded-full bg-gradient-to-tr from-stone-500/5 via-amber-300/3 to-transparent blur-xl"></div>
            <div className="absolute -bottom-10 -right-8 w-24 h-24 rounded-full bg-gradient-to-bl from-amber-400/5 via-stone-300/3 to-transparent blur-xl"></div>

            <div className="flex items-center relative z-10 group">
              <span className="text-amber-700/80 text-base font-extrabold mr-2 tracking-tight">
                ✕
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-amber-800/90 via-stone-700/90 to-amber-700/90 bg-clip-text text-transparent tracking-wide">
                Portfolio
              </span>
            </div>

            <nav className="flex space-x-3 relative z-10">
              <Link href="/projects">
                <span className="neu-button neu-button-nav text-xs md:text-sm py-1.5 px-3 hover:bg-amber-50/5 hover:text-amber-900/70 transition-colors duration-300 font-medium tracking-wide">
                  Projects
                </span>
              </Link>

              <Link href="/experience">
                <span className="neu-button neu-button-nav text-xs md:text-sm py-1.5 px-3 hover:bg-amber-50/5 hover:text-amber-900/70 transition-colors duration-300 font-medium tracking-wide">
                  Experience
                </span>
              </Link>
            </nav>

            <div className="flex items-center relative z-10">
              <span className="text-[10px] mr-2 md:mr-3 hidden sm:inline text-stone-700/90 font-medium tracking-tight">
                Email: nehaprasad27118@gmail.com
              </span>
              <Link
                href="/contact"
                className="bg-transparent border border-amber-200/20 text-stone-700 px-3 md:px-4 py-1.5 rounded-full text-[10px] hover:bg-amber-500/10 hover:text-amber-800 hover:border-amber-300/30 transition-all duration-300 font-semibold tracking-wide"
              >
                Contact me
              </Link>
            </div>
          </header>

          <div className="flex flex-col px-6 md:px-12 lg:px-20 py-10 md:py-14 lg:py-16">
            <div className="w-full">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3">
                  <div className="flex mb-8 ml-12">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                      <Image
                        src="/profile-image.jpg"
                        alt="Andrew Scott"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>

                    <div
                      className="absolute w-48 h-48 rounded-full"
                      style={{
                        background: `url('/img.png'), linear-gradient(145deg, #e6e6e6, #ffffff)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        boxShadow:
                          "26px 26px 52px #6c6c6c, -26px -26px 52px #ffffff",
                        transform: "translateX(-65px) translateY(-30px)",
                      }}
                    />
                  </div>

                  <div className="relative ml-12">
                    <AnimatedLoader />
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <div className="text-4xl md:text-5xl font-normal leading-tight mb-8">
                    <h1>
                      <span className="inline-block text-stone-900 font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)] [text-shadow:_0_2px_0_rgb(0_0_0_/_15%)] transition-all duration-300 hover:drop-shadow-[0_6px_8px_rgba(0,0,0,0.15)]">
                        Hi! I am{" "}
                        <span className="neu-button neu-button-name relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-stone-900/20 after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                          NEHA PRASAD
                        </span>
                      </span>
                      <br />
                      <span className="inline-block">
                        <span className="text-stone-900 font-medium tracking-wide">
                          a
                        </span>{" "}
                        <span className="neu-button neu-button-title bg-clip-text text-transparent bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 font-bold">
                          Software Developer
                        </span>
                      </span>
                      <br />
                      <span className="text-stone-900 font-medium tracking-wide">
                        from
                      </span>{" "}
                      <span className="neu-button neu-button-name relative inline-block font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-stone-900/20">
                        India
                      </span>
                      <br />
                      <span className="text-stone-900 font-semibold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.08)] [text-shadow:_0_1px_0_rgb(0_0_0_/_10%)] transform transition-all duration-300 hover:scale-[1.01]">
                        Each idea holds
                        <br />a unique{" "}
                        <span className="font-black tracking-wider">power</span>
                      </span>
                    </h1>
                  </div>

                  <div className="mt-8">
                    <p className="font-dancing-script text-2xl bg-gradient-to-r from-amber-900 via-amber-700 to-stone-700 bg-clip-text text-transparent relative">
                      building epic stuffs to explore more about Next.Js , AI
                      and Web3.
                      <br />I am all about exploring new tech and creating
                      impact.
                      <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-600 to-transparent"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 mb-8 relative overflow-hidden">
            <div className="w-full">
              <div className="scroll-container px-2 sm:px-0">
                <div className="scroll-buttons flex-wrap justify-center gap-3 sm:gap-4">
                  <a
                    href="https://drive.google.com/file/d/1C9RbzHpfKCJW6ybySqtGVRcRr1JvFMs8/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scroll-button bg-transparent text-gray-800 hover:bg-amber-50 hover:text-gray-900 transition-all duration-300 shadow-[0_2px_6px_rgba(0,0,0,0.05)] border border-gray-200/50 transform hover:scale-105 hover:-translate-y-1 text-sm py-2 will-change-transform"
                  >
                    <div className="absolute inset-0 bg-lime-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="text-lime-600 mr-2 hidden sm:inline-block"
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg>
                    <span className="font-medium tracking-wide">
                      Download CV
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/neha-prasad-92499821b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scroll-button bg-transparent text-gray-800 hover:bg-amber-50 hover:text-gray-900 transition-all duration-300 shadow-[0_2px_6px_rgba(0,0,0,0.05)] border border-gray-200/50 transform hover:scale-105 hover:-translate-y-1 text-sm py-2 will-change-transform"
                  >
                    <div className="absolute inset-0 bg-lime-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="text-lime-600 mr-2 hidden sm:inline-block"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    <span className="font-medium tracking-wide">LinkedIn</span>
                  </a>
                  <a
                    href="https://x.com/nehaaaa_6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scroll-button bg-transparent text-gray-800 hover:bg-amber-50 hover:text-gray-900 transition-all duration-300 shadow-[0_2px_6px_rgba(0,0,0,0.05)] border border-gray-200/50 transform hover:scale-105 hover:-translate-y-1 text-sm py-2 will-change-transform"
                  >
                    <div className="absolute inset-0 bg-lime-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="text-lime-600 mr-2 hidden sm:inline-block"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                    <span className="font-medium tracking-wide">Twitter</span>
                  </a>
                  <a
                    href="https://github.com/naaa760"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scroll-button bg-transparent text-gray-800 hover:bg-amber-50 hover:text-gray-900 transition-all duration-300 shadow-[0_2px_6px_rgba(0,0,0,0.05)] border border-gray-200/50 transform hover:scale-105 hover:-translate-y-1 text-sm py-2 will-change-transform"
                  >
                    <div className="absolute inset-0 bg-lime-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="text-lime-600 mr-2 hidden sm:inline-block"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span className="font-medium tracking-wide">GitHub</span>
                  </a>
                  <a
                    href="https://x.com/nehaaaa_6"
                    className="scroll-button bg-transparent text-gray-800 hover:bg-amber-50 hover:text-gray-900 transition-all duration-300 shadow-[0_2px_6px_rgba(0,0,0,0.05)] border border-gray-200/50 transform hover:scale-105 hover:-translate-y-1 text-sm py-2 will-change-transform"
                  >
                    <div className="absolute inset-0 bg-lime-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="text-lime-600 mr-2 hidden sm:inline-block"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    <span className="font-medium tracking-wide">
                      Contact Me
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section className="w-full text-white py-20 mt-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="grad1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#84cc16" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.7" />
                  </linearGradient>

                  <animateTransform
                    xlinkHref="#petalGroup"
                    attributeName="transform"
                    type="rotate"
                    from="0 500 500"
                    to="360 500 500"
                    dur="120s"
                    repeatCount="indefinite"
                    additive="sum"
                  />
                </defs>

                <g id="petalGroup" transform="translate(500, 500)">
                  <path
                    d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="1.5"
                    transform="rotate(0)"
                  />

                  <path
                    d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="1.5"
                    transform="rotate(45)"
                  />

                  <path
                    d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="1.5"
                    transform="rotate(90)"
                  />

                  <path
                    d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="1.5"
                    transform="rotate(135)"
                  />

                  <path
                    d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="1.5"
                    transform="rotate(180)"
                  />

                  <path
                    d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="1.5"
                    transform="rotate(225)"
                  />

                  <path
                    d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="1.5"
                    transform="rotate(270)"
                  />

                  <path
                    d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="1.5"
                    transform="rotate(315)"
                  />
                </g>

                <circle
                  cx="500"
                  cy="500"
                  r="50"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="1"
                />

                <circle
                  cx="500"
                  cy="500"
                  r="200"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="1"
                  strokeDasharray="1,3"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 500 500"
                    to="-180 500 500"
                    dur="90s"
                    repeatCount="indefinite"
                  />
                </circle>

                <circle
                  cx="500"
                  cy="500"
                  r="350"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="1"
                  strokeDasharray="1,5"
                />
              </svg>
            </div>

            <div className="relative z-10 w-full">
              <div
                className="absolute inset-0 w-full h-full overflow-hidden z-0"
                style={{
                  backgroundImage: "url('/de.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              <div className="px-6 md:px-12 lg:px-20 relative z-10">
                {/* Simplified About Me heading */}
                <div className="flex items-center mb-8 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-lime-400 mr-2"></div>
                  <h2 className="text-xl md:text-2xl text-lime-400 font-medium">
                    About Me
                  </h2>
                </div>

                <div className="bg-transparent rounded-xl p-6 relative z-10 max-w-6xl mx-auto">
                  {/* Decorative elements */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/10 to-amber-300/5 blur-lg"></div>
                  <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-tl from-amber-600/10 to-amber-400/5 blur-lg"></div>

                  {/* Enhanced content container with decorative border */}
                  <div className="relative p-8 rounded-xl bg-white/20 backdrop-blur-md border border-amber-100/30 shadow-2xl">
                    {/* Decorative corner accents */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber-600/20 rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-600/20 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-amber-600/20 rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber-600/20 rounded-br-lg"></div>

                    {/* Beautiful paragraph with enhanced styling */}
                    <p className="font-serif text-stone-800 font-medium leading-relaxed tracking-wide text-lg relative z-10">
                      <span className="text-2xl font-playfair font-semibold text-amber-800 first-letter:text-6xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-tight first-letter:text-amber-700">
                        I
                      </span>{" "}
                      <span className="drop-shadow-sm">
                        am a developer with over two years of experience
                        building websites and APIs using React, Next.js, and
                        TypeScript. I take Figma designs and turn them into
                        working, responsive components.
                      </span>{" "}
                      <span className="italic text-amber-800 drop-shadow-sm">
                        I also manage AWS front-end deployments to keep websites
                        running efficiently.
                      </span>{" "}
                      <span className="drop-shadow-sm">
                        I focus on creating fast, bug-free, and optimized
                        solutions, and I use AI tools to speed up development.
                        Additionally, I have experience building LLM apps or
                        Web3.
                      </span>{" "}
                      <span className="font-semibold text-amber-800 drop-shadow-sm">
                        I&apos;m always eager to learn new technologies and
                        improve my skills to deliver the best results for every
                        project.
                      </span>
                    </p>

                    {/* Decorative underline flourish */}
                    <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mx-auto mt-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-gray-900 text-white py-12 relative overflow-hidden border-t border-gray-800">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#84cc16] opacity-[0.03] rounded-full blur-[150px] animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-[#84cc16] opacity-[0.02] rounded-full blur-[130px] animate-pulse delay-1000"></div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[#84cc16] to-transparent"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                      transformOrigin: "center",
                      animation: "spinLight 8s linear infinite",
                      opacity: 0.1,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 z-0">
              <Image
                src="/bg1.png"
                alt="Background Pattern"
                fill
                className="object-cover opacity-5"
                priority
                style={{
                  objectFit: "cover",
                  mixBlendMode: "luminosity",
                }}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900 z-1"></div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="absolute inset-0 star-field-content">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    className="star-content"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${Math.random() * 3 + 2}s`,
                    }}
                  />
                ))}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="shooting-star"
                    style={{
                      top: `${Math.random() * 80}%`,
                      left: `${Math.random() * 80}%`,
                      animationDelay: `${Math.random() * 8}s`,
                      animationDuration: `${Math.random() * 2 + 1}s`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                  />
                ))}
              </div>

              <div className="flex items-center mb-6 relative z-20">
                <div className="w-2 h-2 rounded-full bg-lime-400 mr-2"></div>
                <span className="text-sm text-lime-400">Recent work</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-medium mt-2">EchoHire</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-8">
                    Web design & Web development
                  </p>
                  <a
                    href="https://interview-platform-with-a-real-time-ai-voice-agent.vercel.app/landing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative aspect-[16/10] w-full rounded-[40px] overflow-hidden group">
                      <Image
                        src="/int.png"
                        alt="EchoHire Project"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-lime-500 text-white px-4 py-2 rounded-full">
                          View Live Project
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-medium mt-2">TalkCast</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-8">
                    Web design & Web development
                  </p>
                  <a
                    href="https://mutli-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative aspect-[16/10] w-full rounded-[40px] overflow-hidden group">
                      <Image
                        src="/pt1.png"
                        alt="TalkCast Project"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-lime-500 text-white px-4 py-2 rounded-full">
                          View Live Project
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center text-lime-400 hover:text-lime-300 transition-colors"
                >
                  View all projects
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          <section className="w-full bg-gray-900 text-white py-12 relative overflow-hidden border-t border-gray-800">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#84cc16] opacity-[0.03] rounded-full blur-[150px] animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-[#84cc16] opacity-[0.02] rounded-full blur-[130px] animate-pulse delay-1000"></div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[#84cc16] to-transparent"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                      transformOrigin: "center",
                      animation: "spinLight 8s linear infinite",
                      opacity: 0.1,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 z-0">
              <Image
                src="/bg1.png"
                alt="Background Pattern"
                fill
                className="object-cover opacity-5"
                priority
                style={{
                  objectFit: "cover",
                  mixBlendMode: "luminosity",
                }}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900 z-1"></div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="absolute inset-0 star-field-content">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    className="star-content"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${Math.random() * 3 + 2}s`,
                    }}
                  />
                ))}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="shooting-star"
                    style={{
                      top: `${Math.random() * 80}%`,
                      left: `${Math.random() * 80}%`,
                      animationDelay: `${Math.random() * 8}s`,
                      animationDuration: `${Math.random() * 2 + 1}s`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                  />
                ))}
              </div>

              <div className="flex items-center mb-6 relative z-20">
                <div className="w-2 h-2 rounded-full bg-lime-400 mr-2"></div>
                <span className="text-sm text-lime-400">[03] — More work</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 relative z-20">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-medium mt-2">
                        Project Management
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">
                    JIRA like Project
                  </p>
                  <div className="relative aspect-[16/10] w-full rounded-[40px] overflow-hidden">
                    <Image
                      src="/pt2.png"
                      alt="Project Management"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-medium mt-2">
                        Permissionless Airdrop
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">
                    Web3 & Web development
                  </p>
                  <div className="relative aspect-[16/10] w-full rounded-[40px] overflow-hidden">
                    <Image
                      src="/pt3.png"
                      alt="Permissionless Airdrop"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="relative group">
                  <Link href="/projects" className="block h-full">
                    <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden h-full">
                      <Image
                        src="/eye.jpg"
                        alt="Eye Background"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center space-y-4">
                          <span className="text-white text-2xl font-medium">
                            View all projects
                          </span>
                          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-white text-gray-900 py-20 relative overflow-hidden">
            {/* Enhanced background with animated particles */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/pg.jpg"
                alt="Background Pattern"
                fill
                className="object-cover opacity-30"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/5 via-transparent to-emerald-500/5"></div>

              {/* Animated floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-lime-400/30"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${3 + Math.random() * 5}s ease-in-out ${
                        Math.random() * 5
                      }s infinite alternate`,
                      transform: `scale(${0.5 + Math.random()})`,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
              {/* Enhanced section heading with animation */}
              <div className="flex items-center mb-6 relative">
                <div className="w-2 h-2 rounded-full bg-[#84cc16] mr-2 animate-pulse">
                  <div className="absolute w-4 h-4 -inset-1 bg-[#84cc16] opacity-75 blur-sm rounded-full animate-ping"></div>
                </div>
                <span className="text-sm text-[#84cc16] relative group">
                  <span className="relative z-10 tracking-wider font-medium">
                    Contact me
                  </span>
                  <span className="absolute inset-0 bg-[#84cc16] opacity-25 blur-[2px] group-hover:blur-[4px] transition-all duration-300"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </div>

              {/* Enhanced heading with more dynamic effects */}
              <h2 className="font-dancing-script relative mb-20 max-w-4xl">
                <span className="text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 relative z-10">
                  I am all over
                  <br />
                  <span className="text-7xl md:text-8xl bg-gradient-to-r from-lime-500 via-emerald-500 to-lime-400 bg-clip-text text-transparent ml-8 relative inline-block transform hover:scale-[1.02] transition-transform duration-300">
                    the internet
                    <div className="absolute -inset-2 bg-gradient-to-r from-lime-500/20 to-emerald-500/20 blur-2xl -z-10 animate-pulse"></div>
                    <div className="absolute -inset-4 border border-lime-500/10 rounded-full rotate-6 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </span>
                </span>

                {/* Enhanced decorative elements */}
                <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-lime-400/20 to-emerald-400/20 rounded-full blur-xl animate-blob"></div>
                <div className="absolute top-1/2 -right-4 w-28 h-28 bg-gradient-to-br from-emerald-400/20 to-lime-400/20 rounded-full blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-gradient-to-br from-lime-400/10 to-emerald-400/10 rounded-full blur-xl animate-blob animation-delay-4000"></div>

                <div className="absolute top-0 right-0 flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full bg-lime-500 opacity-75"
                      style={{
                        animation: `pulse 1.5s ease-in-out ${
                          i * 0.2
                        }s infinite`,
                      }}
                    ></span>
                  ))}
                </div>

                <div className="absolute -bottom-4 left-0 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"></div>
              </h2>

              {/* Enhanced grid with more interactive elements */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Twitter/X",
                    url: "https://x.com/nehaaaa_6",
                    description: "Updates & thoughts",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="transition-transform group-hover:scale-110"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    ),
                  },
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/neha-prasad-92499821b/",
                    description: "Professional network",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="transition-transform group-hover:scale-110"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    ),
                  },
                  {
                    name: "GitHub",
                    url: "https://github.com/naaa760",
                    description: "Code & projects",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="transition-transform group-hover:scale-110"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    ),
                  },
                ].map((platform, idx) => (
                  <Link
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={platform.name}
                    className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl"
                    style={{
                      transformOrigin: idx % 2 === 0 ? "left" : "right",
                      transitionDelay: `${idx * 50}ms`,
                    }}
                  >
                    {/* Enhanced background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 via-emerald-400/20 to-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -inset-px bg-gradient-to-br from-lime-500 via-emerald-500 to-lime-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 group-hover:duration-200"></div>

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-0 left-0 w-4 h-0.5 bg-lime-500 transform origin-left"></div>
                      <div className="absolute top-0 left-0 w-0.5 h-4 bg-lime-500 transform origin-top"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-lime-500 transform origin-right"></div>
                      <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-lime-500 transform origin-bottom"></div>
                    </div>

                    <div className="relative flex justify-between items-center">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-lime-600 transition-colors">
                          {platform.name}
                          <div className="h-0.5 w-0 bg-lime-500/50 group-hover:w-full transition-all duration-300 mt-0.5"></div>
                        </h3>
                        <p className="text-sm text-gray-600 group-hover:text-lime-500 transition-colors">
                          {platform.description}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-lime-500 to-emerald-500 p-3 rounded-full text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                        {platform.icon}
                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-lime-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Link>
                ))}

                {/* Enhanced call-to-action card */}
                <Link
                  href="mailto:nehaprasad27118@gmail.com"
                  className="bg-gradient-to-br from-lime-500 to-emerald-500 rounded-2xl p-8 col-span-1 md:col-span-2 relative group cursor-pointer overflow-hidden transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Enhanced background elements */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="absolute inset-0">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
                  </div>

                  {/* Enhanced ripple effect on hover */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -inset-full top-0 left-1/2 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform"></div>
                  </div>

                  <div className="relative flex justify-between items-center z-10">
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-sm">
                        Get in touch
                      </h3>
                      <p className="text-white/80 md:text-lg">
                        Let's work together on something amazing
                      </p>
                      <div className="hidden md:block mt-2 pt-2 border-t border-white/20">
                        <p className="text-white/70 text-sm">
                          nehaprasad27118@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
                      <svg
                        className="w-6 h-6 text-white relative z-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Animated border */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 border border-white/20 rounded-2xl"></div>
                    <div className="absolute top-0 left-0 w-1/3 h-0.5 bg-white/30 animate-border-flow"></div>
                    <div className="absolute bottom-0 right-0 w-1/3 h-0.5 bg-white/30 animate-border-flow animation-delay-2000"></div>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section className="w-full relative overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/fl.jpg"
                alt="Background"
                fill
                className="object-cover opacity-30"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
            </div>
          </section>

          <section className="w-full py-20 relative overflow-hidden">
            <SnowEffect />

            <div className="absolute inset-0">
              <Image src="/tik.jpg" alt="Skills Background" fill priority />
              <div className="absolute inset-0 bg-gradient-to-b"></div>
            </div>

            <div className="absolute inset-0 overflow-hidden">
              <svg
                className="absolute -top-20 -left-20 w-96 h-96 text-gray-200 transform rotate-45"
                viewBox="0 0 100 100"
              >
                <path
                  d="M50 0 C50 50, 100 50, 100 50 C50 50, 50 100, 50 100 C50 50, 0 50, 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="animate-[spin_30s_linear_infinite]"
                />
              </svg>

              <svg
                className="absolute -bottom-20 -right-20 w-96 h-96 text-gray-200 transform -rotate-45"
                viewBox="0 0 100 100"
              >
                <path
                  d="M50 0 C20 20, 80 20, 80 50 C80 80, 20 80, 50 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="animate-[spin_35s_linear_infinite]"
                />
              </svg>

              <div className="absolute inset-0">
                <svg
                  className="absolute top-0 left-0 w-32 h-32 text-lime-100/30"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M50,0 Q60,40 100,50 Q60,60 50,100 Q40,60 0,50 Q40,40 50,0"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="absolute top-1/4 right-1/4 w-24 h-24 text-emerald-100/30 rotate-45"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M50,0 Q60,40 100,50 Q60,60 50,100 Q40,60 0,50 Q40,40 50,0"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="absolute bottom-1/3 left-1/3 w-20 h-20 text-green-100/30 -rotate-12"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M50,0 Q60,40 100,50 Q60,60 50,100 Q40,60 0,50 Q40,40 50,0"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-16 relative">
                <span className="text-sm text-lime-600 mb-2 block tracking-wider flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-lime-500" viewBox="0 0 24 24">
                    <path
                      d="M12,2 Q16,8 22,12 Q16,16 12,22 Q8,16 2,12 Q8,8 12,2"
                      fill="currentColor"
                    />
                  </svg>
                  TECHNOLOGIES I WORK WITH
                  <svg
                    className="w-4 h-4 text-lime-500 rotate-180"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12,2 Q16,8 22,12 Q16,16 12,22 Q8,16 2,12 Q8,8 12,2"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
                  My Skills
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"></div>
                </h2>

                <br />
                <br />

                <h1 className="text-xl font-serif text-gray-800 tracking-wide leading-relaxed">
                  With 1 years of experience, I specialize in front-end and
                  full-stack development using React, Next.js, TypeScript,
                  Node.js, and Prisma. Proficient in AWS, Docker, SQL, and
                  Vercel, I build high-performance applications with seamless
                  user interfaces, robust APIs, and cross-platform solutions.
                  Skilled in GitHub workflows and deployment pipelines for
                  efficient, scalable results.
                </h1>
              </div>

              <div
                className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md p-12 rounded-3xl border border-gray-100 
                              shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(132,204,22,0.1),transparent_70%)]"></div>
                <div className="relative z-10 flex flex-wrap justify-center gap-4">
                  {[
                    "Next.js",
                    "JavaScript",
                    "React",
                    "Node.js",
                    "Tailwind CSS",
                    "PostgreSQL",
                    "TRPC",
                    "ShadcnUI",
                    "MongoDB",
                    "Prisma",
                    "Docker",
                    "CI/CD",
                    "AWS",
                    "Python",
                    "LLM",
                  ].map((skill) => (
                    <div key={skill} className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-lime-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-50 blur-xl transition-opacity"></div>
                      <div
                        className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-100 
                                    shadow-sm hover:border-lime-500 hover:shadow-md relative
                                    transition-all duration-300 cursor-pointer group-hover:bg-gradient-to-r 
                                    group-hover:from-lime-50 group-hover:to-emerald-50"
                      >
                        <span className="text-gray-700 group-hover:text-lime-600 transition-colors">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 relative z-10 flex justify-center">
                <div className="relative max-w-xs">
                  <div className="absolute -inset-4 bg-gradient-to-r from-lime-200/20 to-emerald-200/20 rounded-full blur-xl"></div>

                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/key.png"
                      alt="Skills Key"
                      width={300}
                      height={300}
                      className="object-contain bg-white/5 backdrop-blur-sm p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-lime-400/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Watch My Demos
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Check out these video demonstrations of my latest projects
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "56.22254758418741%",
                      height: 0,
                    }}
                  >
                    <iframe
                      src="https://www.loom.com/embed/37a229eb75d7480eb46c06f60cbe12f0"
                      frameBorder="0"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    ></iframe>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Project Demo
                    </h3>
                    <div className="flex items-center mt-2">
                      <a
                        href="https://github.com/naaa760/flicclash"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-lime-600 hover:text-lime-700 flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub Repository
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "56.22254758418741%",
                      height: 0,
                    }}
                  >
                    <iframe
                      src="https://www.loom.com/embed/e5f358e7d66e4a929eadf675ab90e04f"
                      frameBorder="0"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    ></iframe>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Project Demo
                    </h3>
                    <div className="flex items-center mt-2">
                      <a
                        href="https://jirnov.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-lime-600 hover:text-lime-700 flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub Repository
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "56.22254758418741%",
                      height: 0,
                    }}
                  >
                    <iframe
                      src="https://www.loom.com/embed/c7453e34ae9d47c3840aa187f926a6ed"
                      frameBorder="0"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    ></iframe>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Project Demo
                    </h3>
                    <div className="flex items-center mt-2">
                      <a
                        href="https://github.com/naaa760/vocavista"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-lime-600 hover:text-lime-700 flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
