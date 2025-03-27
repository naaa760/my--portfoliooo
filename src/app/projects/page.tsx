"use client";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0">
        <Image
          src="/ti.jpg"
          alt="Projects Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="text-xs text-lime-400 tracking-widest uppercase font-medium">
                Portfolio
              </span>
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-lime-400 to-transparent mt-1"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Selected{" "}
              <span className="text-lime-400 relative inline-block">
                Works
                <div className="absolute -bottom-2 left-0 h-[2px] w-full bg-lime-400/50"></div>
              </span>
            </h1>
            <p className="text-black text-lg md:text-xl max-w-2xl mx-auto">
              A collection of projects that showcase my expertise in web design
              and development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-32 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800/40 backdrop-blur-lg rounded-3xl p-6 lg:p-8 border border-gray-700/30 
                hover:border-lime-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,204,22,0.1)]"
              >
                {/* Project Category Labels */}
                <div className="mb-4 flex gap-2">
                  {project.categories.map((category, index) => (
                    <span
                      key={index}
                      className={`text-xs font-medium px-3 py-1 rounded-full border ${
                        category === "Web3"
                          ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                          : category === "LLM"
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                          : "bg-lime-500/10 text-lime-400 border-lime-500/20"
                      }`}
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Project Image Container */}
                <Link
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-6"
                >
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div
                        className="absolute bottom-4 right-4 transform translate-y-4 opacity-0 
                        group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <span
                          className="bg-lime-500 text-white text-sm px-4 py-2 rounded-full 
                          flex items-center gap-2 hover:bg-lime-400 transition-colors"
                        >
                          View Live Project
                          <svg
                            className="w-4 h-4"
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
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <span className="text-lime-400 text-sm font-medium mb-2 block">
                      Featured Project
                    </span>
                    <h3 className="text-2xl font-medium text-white group-hover:text-lime-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {project.id === 1 && (
                    <div className="pt-2">
                      <a
                        href="https://github.com/naaa760/interview-platform-with-a-real-time-ai-voice-agent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-lime-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Repository
                      </a>
                    </div>
                  )}

                  {project.id === 2 && (
                    <div className="pt-2">
                      <a
                        href="https://github.com/naaa760/mutli-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-lime-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Repository
                      </a>
                    </div>
                  )}

                  {project.id === 3 && (
                    <div className="pt-2">
                      <a
                        href="https://github.com/naaa760/jirnov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-lime-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Repository
                      </a>
                    </div>
                  )}

                  {project.id === 4 && (
                    <div className="pt-2">
                      <a
                        href="https://github.com/naaa760/vocavista"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-lime-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Repository
                      </a>
                    </div>
                  )}

                  {project.id === 5 && (
                    <div className="pt-2">
                      <a
                        href="https://github.com/naaa760/MindsDB-Hackathon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-lime-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Repository
                      </a>
                    </div>
                  )}

                  {project.id === 6 && (
                    <div className="pt-2">
                      <a
                        href="https://github.com/naaa760/vexora"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-lime-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Repository
                      </a>
                    </div>
                  )}

                  {project.id === 7 && (
                    <div className="pt-2">
                      <a
                        href="https://github.com/naaa760/refactor-realm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-lime-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Repository
                      </a>
                    </div>
                  )}

                  {project.id === 8 && (
                    <div className="pt-2">
                      <a
                        href="https://github.com/naaa760/ai-voice-agent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-lime-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Repository
                      </a>
                    </div>
                  )}

                  {project.id === 9 && (
                    <div className="pt-2">
                      <a
                        href="https://github.com/naaa760/timebank"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-lime-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Repository
                      </a>
                    </div>
                  )}

                  {project.id === 10 && (
                    <div className="pt-2">
                      <a
                        href="https://github.com/naaa760/permissionless-airdrop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-lime-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Repository
                      </a>
                    </div>
                  )}

                  {project.id === 11 && (
                    <div className="pt-2">
                      <a
                        href="https://github.com/naaa760/dwellex-"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-lime-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Repository
                      </a>
                    </div>
                  )}

                  {project.id === 12 && (
                    <div className="pt-2">
                      <a
                        href="https://github.com/naaa760/snapcart"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-lime-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Repository
                      </a>
                    </div>
                  )}

                  {project.id === 13 && (
                    <div className="pt-2">
                      <a
                        href="https://github.com/naaa760/searchlio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-lime-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Repository
                      </a>
                    </div>
                  )}

                  {project.id === 14 && (
                    <div className="pt-2">
                      <a
                        href="https://github.com/naaa760/threadlink"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-lime-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Repository
                      </a>
                    </div>
                  )}

                  {project.id === 15 && (
                    <div className="pt-2">
                      <a
                        href="https://docs.google.com/spreadsheets/d/19GUVPp9hYrbpqAQImCGSpUVgWR9o8GvIh4Ctng5MYcs/edit?gid=1923098947#gid=1923098947"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-lime-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View GitHub Repository
                      </a>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/50
                          hover:border-lime-500/50 hover:bg-gray-700/80 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="/"
          className="bg-lime-400 text-gray-900 px-6 py-3 rounded-full flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  );
}

// Project Data
const projects = [
  {
    id: 1,
    title: "EchoHire",
    categories: ["Web2"],
    description:
      "This AI mock interview system is designed to boost your interview skills by providing real-time, lifelike sessions with personalized questions and detailed feedback. It features secure, hacker-proof authentication, a variety of interview types, and a customizable interview creation tool. Built with modern technologies like Next.js, Firebase, and innovative AI tools, it offers a comprehensive platform to both enhance your coding skills and excel in interviews.",
    image: "/int.png",
    technologies: [
      "Next.js",
      "React",
      "VAPI",
      "Tailwind CSS",
      "Firebase",
      "Zod",
      "Gemini",
    ],
    link: "https://interview-platform-with-a-real-time-ai-voice-agent.vercel.app/",
  },

  {
    id: 2,
    title: "TalkCast",
    categories: ["Web2"],
    description:
      "TalkCast is a modern podcast platform that connects creators and listeners through a beautiful, unified interface. It solves the problem of content discovery by offering personalized recommendations while giving creators tools to grow their audience. The platform combines stunning design with community features like Fans Like You transforming the podcast experience from fragmented and overwhelming to curated and engaging for everyone involved.",
    image: "/pt1.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "Convex",
    ],
    link: "https://mutli-app.vercel.app/",
  },

  {
    id: 3,
    title: "Jirnov",
    categories: ["Web2"],
    description:
      "JINova is a streamlined project management platform that combines task management, team collaboration, and client communication in one intuitive interface. It simplifies complex workflows while providing powerful features for tracking progress, managing resources, and analyzing project performance. The platform's flexible design adapts to various team sizes and methodologies, making project management more efficient and less overwhelming.",
    image: "/pt2.png",
    technologies: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      " JWT",
    ],
    link: "https://jirnov.vercel.app/",
  },

  {
    id: 4,
    title: "VocaVista",
    categories: ["Web2", "AI"],
    description:
      "This project is a Next.js web app featuring secure user authentication via Clerk and personalized AI using Google's Gemini. It uses a serverless PostgreSQL database (Neon) for secure, contextual user data storage.",
    image: "/pt5.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Gemini",
      "Prisma",
      "Inngest",
    ],
    link: "https://vocavista-nu.vercel.app/",
  },

  {
    id: 5,
    title: "HealthPulse",
    categories: ["Web2"],
    description:
      "I used Created reusable React components and managed state using React Hooks for a dynamic admindashboard. Enhancing performance",
    image: "/Health.png",
    technologies: ["React", "TypeScript", "SQL", "Python", "Prisma"],
    link: "https://health-pulse-beta.vercel.app/",
  },

  {
    id: 6,
    title: "Vexora",
    categories: ["LLM"],
    description:
      "Vexora is an elegant Streamlit-based application that enables users to ask questions about PDF documents and receive accurate answers powered by Groq's Gemma2-9b-it model. The application uses advanced document processing techniques including text chunking, vector embeddings, and retrieval-augmented generation (RAG) to provide precise responses based on document content.",
    image: "/vex.png",
    technologies: ["Python", "C++", "Cython", "UI"],
    link: "https://vexora.onrender.com/",
  },

  {
    id: 7,
    title: "RefactorRealm",
    categories: ["Web2"],
    description:
      "This project is a web-based code editor built with Monaco Editor (the same technology behind VS Code) that supports multiple programming languages like JavaScript, Python, and TypeScript. It features a robust theming system with carefully crafted dark themes (GitHub Dark, Monokai, and Solarized Dark), type-safe configurations, and integration with the Piston runtime for code execution, making it suitable for educational platforms or online coding environments.",
    image: "/ref.png",
    technologies: ["Next.js", "TypeScript", "Convex", "Clerk"],
    link: "https://refactor-realm-egpp.vercel.app/",
  },

  {
    id: 8,
    title: "VoiceAgent",
    categories: ["AI", "LLM"],
    description:
      "This web application allows users to have voice conversations with an AI assistant. Users enter their contact details, start a voice call, see real-time feedback during the conversation (AI speaking status and volume levels), and receive a qualification result and conversation summary after the call ends. It's essentially a platform for automated AI voice interactions with visual feedback.",
    image: "/voi.png",
    technologies: ["Next.js", "JavaScript", "Python", "VAPI"],
    link: "https://ai-voice-agent-ten.vercel.app/",
  },

  {
    id: 9,
    title: "TimeBank",
    categories: ["Web2"],
    description:
      "TimeBank is a modern web application that enables users to exchange services and skills using time as currency. Users can offer their expertise, request services, and build a community based on mutual skill-sharing.",
    image: "/pt6.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL (with Neon)",
    ],
    link: "https://timebank-knhl.vercel.app/",
  },

  {
    id: 10,
    title: "Permissionless-Airdrop",
    categories: ["Web3"],
    description:
      "This project is a Solana dApp that lets users connect their Phantom wallet to view and claim token airdrops. It interfaces with Streamflow's airdrop program on Solana devnet, allowing users to search for airdrops by ID, see details like token amounts and recipient counts, and execute claim transactions that transfer tokens directly to their wallet.",
    image: "/pt3.png",
    technologies: ["React with TypeScript", "Solana web3.js", "Craco"],
    link: "https://permissionless-airdrop.vercel.app/",
  },

  {
    id: 11,
    title: "Dwellex",
    categories: ["Web3"],
    description:
      "This is a decentralized real estate marketplace built on blockchain technology. The platform allows users to buy, sell, and manage real estate properties using cryptocurrency (ETH). The project features a modern",
    image: "/crypt.png",
    technologies: ["React", "Solidity", "etherum"],
    link: "https://dwellex.vercel.app/",
  },

  {
    id: 12,
    title: "SnapCart",
    categories: ["Web2"],
    description:
      "POSGRESTORE is a modern e-commerce platform with a React/TypeScript frontend and a Node.js/Express backend, using Zustand for state management, Neon PostgreSQL for data storage, and secure CRUD operations via a RESTful API.",
    image: "/snap.png",
    technologies: [
      "React",
      "TypeScript",
      "POSTMAN",
      "Zustand",
      "Neon",
      "Arcjet",
    ],
    link: "https://snapcart-r2tx.onrender.com/",
  },

  {
    id: 13,
    title: "SearchLio",
    categories: ["Web2"],
    description:
      "SearchEngine enables you to find clarity and significant results on a large scale by linking queries and results to the overarching objectives of your search.",
    image: "/Search.png",
    technologies: ["React", "JavaScript", "Shadcn"],
    link: "https://searchlio.vercel.app/",
  },

  {
    id: 14,
    title: "ThreadLink",
    categories: ["Web2"],
    description:
      "This Next.js user profile feature uses server components for optimized data fetching and SEO, enhancing performance. Its modular design supports user-specific actions like follow status and liked posts.",
    image: "/thread.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Shadcn",
      "Prisma",
      "postgres",
    ],
    link: "https://threadlink-6b9f.vercel.app/",
  },

  {
    id: 15,
    title: "AI-agent",
    categories: ["AI-agent"],
    description:
      "A smart DSA AI chatbot that manages inventory effortlessly. It allows users to check levels of DSA, add new items, and update topics in real time through simple chat commands. Whether adding or deleting, the system automatically adjusts the inventory, eliminating manual updates and making inventory management seamless and efficient.",
    image: "/aich.png",
    technologies: ["AI-agent", "n8n"],
    link: "https://tegr.app.n8n.cloud/webhook/3721d251-75d6-43d6-976b-546dd46e146d/chat",
  },
];
