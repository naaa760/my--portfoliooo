"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <Image
          src="/ex.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6">
                Professional <span className="text-lime-600">Experience</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl">
                A timeline of my career journey and the skills I have developed
                along the way.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="px-6 pb-32">
          <div className="container mx-auto max-w-4xl">
            <div className="relative">
              {/* Timeline Line - Add gradient effect */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-lime-300 via-lime-500 to-emerald-600"></div>

              {/* Add decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-lime-500 opacity-5 blur-3xl"></div>
              <div className="absolute bottom-20 right-0 w-60 h-60 rounded-full bg-emerald-500 opacity-5 blur-3xl"></div>

              {/* Experience Items */}
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative mb-16 md:mb-24 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-16"
                      : "md:pl-16 md:ml-auto"
                  } md:w-1/2`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-auto md:right-0 top-0 md:top-2 w-4 h-4 rounded-full bg-lime-500 timeline-dot z-10 md:transform md:translate-x-1/2"></div>

                  {/* Experience Card */}
                  <div className="experience-card-shadow group ml-8 md:ml-0 md:mr-0">
                    <div className="mb-4">
                      <span className="text-sm text-lime-600">
                        {item.period}
                      </span>
                      <h3 className="text-2xl font-medium text-gray-800 mt-2">
                        {item.role}
                      </h3>
                      <h4 className="text-lg text-gray-600 mt-1">
                        {item.company}
                      </h4>
                    </div>

                    <p className="text-gray-600 text-sm mb-6">
                      {item.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="px-6 py-20 bg-gray-50 bg-opacity-80">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl text-gray-800 mb-16 text-center"
            >
              Education & <span className="text-lime-600">Certifications</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="experience-card-shadow group"
                >
                  <div className="mb-4">
                    <span className="text-sm text-lime-600">{item.period}</span>
                    <h3 className="text-xl font-medium text-gray-800 mt-2">
                      {item.degree || "Certification"}
                    </h3>
                    <h4 className="text-md text-gray-600 mt-1">
                      {item.institution}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  {item.link && (
                    <div className="mt-4">
                      <Link
                        href={item.link}
                        target="_blank"
                        className="text-lime-600 hover:text-lime-700 text-sm flex items-center"
                      >
                        View Certificate
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Back to Home */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-8 right-8"
      >
        <Link
          href="/"
          className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors shadow-md"
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
      </motion.div>
    </main>
  );
}

// Experience Data
const experienceData = [
  {
    period: "05/2023 - 08/2023",
    role: "Frontend Developer",
    company: "GSSOC",
    description:
      "Lead a team of 30+ volunteers to organise a 3 month long open-source program with 13000+ participants, 300+ mentors and 100+ projects Collaborated with senior guidance to raise awareness about our program on social expenses tracker using added new features to the project and automation The Application provides the functionality to export the transactions in Expense Tracker.",
    skills: ["Javascript", "React", "Tailwind CSS"],
  },
  {
    period: "07/2024 - 09/2024",
    role: "SWE",
    company: "HeadStarter AI",
    description:
      "Built and deployed 5 AI projects using React, Next.js, Firebase, Clerk, and Vercel, incorporating best software engineering practices such as CI/CD for regression detection and iterative deployment. Collaborated with and led a team of 3 to build and deploy a SaaS product that generates flashcards based on a given topic using the OpenAI API. Developed a RAG-based project with a team of 3 using the OpenAI API and Pinecone that generates responses based on a provided dataset.",
    skills: ["React", "Next.js", "TypeScript", "LLM", "AI"],
  },
];

// Education Data
const educationData = [
  {
    period: "2018 - 2020",
    degree: "PCM",
    institution: "Kendriya Vidyalaya",
    description:
      "Completed my 10th and 12th standard from Kendriya Vidyalaya 72%",
  },

  {
    period: "2021-2025",
    degree: "Bachelor of Computer Science",
    institution: "University of the People, California",
    description: "Computer Science 3.5 GPA",
  },

  {
    period: "2024-Apr",
    institution: "FOSSAISA",
    degree: "Certification",
    description: "FOSSASIA 2024 HACKATHON, Open Source Meets Web3 Hackathon",
    link: "https://drive.google.com/file/d/1OtgiQ3TJWxY6AFYDy0rYx3rS6_YqAFFw/view",
  },
];
