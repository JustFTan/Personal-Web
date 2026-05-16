"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import AIChat from "@/components/AIChat";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const projects = [
  {
    title: "AI Sales Page Generator",
    stack: "Laravel, MySQL, LLM API, SaaS",
    image: "/projects/salesgenai.png",
    description:
      "AI-powered SaaS web application that generates structured sales landing pages from product information.",
    link: "https://salesgenai.my.id",
  },
  {
    title: "SPELL Laboratory Website",
    stack: "FastAPI, PostgreSQL, Python",
    image: "/projects/spelllab.png",
    description:
      "Fullstack laboratory branding and management platform for datasets, thesis archives, alumni, and student information.",
    link: "https://www.spell-lab.id",
  },
  // {
  //   title: "Mandarin Content AI",
  //   stack: "Next.js, FastAPI, PostgreSQL, AI",
  //   image: "/projects/mandarin-ai.png",
  //   description:
  //     "Ongoing AI-powered platform for generating Mandarin learning content, captions, and educational materials.",
  //   link: "#",
  // },
];

const publications = [
  {
    type: "IEEE Access Journal",
    title:
      "Real-Time Fall Detection With Hybrid CNN-LSTM Using IWR6843AOP FMCW Radar",
    link: "https://ieeexplore.ieee.org/document/11146781",
  },
  {
    type: "ICISS 2025",
    title:
      "Design and Implementation of a Real-Time Smart Door Lock with FaceNet Face Authentication and Blink Detection",
    link: "https://ieeexplore.ieee.org/document/11389507",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#e0f2fe,transparent_35%),radial-gradient(circle_at_bottom_right,#f1f5f9,transparent_30%)]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="mx-auto mb-6 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            Fullstack Developer • AI Engineer • LLM & AI Agent Enthusiast
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            An Average Developer Building Extraordinary AI Experiences.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            I’m Justin Fairman Tan, focused on Fullstack Web Development, Large
            Language Models, AI Agents, REST APIs, and AI-powered products.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8" id="about">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          
          <div className="relative mx-auto max-w-[260px] sm:max-w-[300px] lg:max-w-[340px]">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
              <img
                src="/profile.jpg"
                alt="Justin Fairman Tan"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              About Me
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Fullstack Developer & AI Engineer focused on intelligent systems.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              I’m Justin Fairman Tan, an Electrical Engineering graduate from
              Telkom University with strong interests in Fullstack Web Development,
              Large Language Models (LLMs), AI Agents, and AI-powered systems.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              I enjoy building scalable web applications, REST APIs, AI assistants,
              and intelligent automation solutions using technologies such as
              FastAPI, React, Laravel, PostgreSQL, and Python.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "FastAPI",
                "React",
                "Next.js",
                "PostgreSQL",
                "Laravel",
                "LLM",
                "AI Agents",
                "Python",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" id="projects">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Portfolio
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden rounded-3xl border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-video bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <CardContent className="space-y-4 p-6">
                    <p className="text-sm font-medium text-slate-500">
                      {project.stack}
                    </p>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm leading-7 text-slate-600">
                      {project.description}
                    </p>

                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8" id="publications">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Research
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Publications
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {publications.map((paper) => (
              <Card key={paper.title} className="rounded-3xl border-slate-200">
                <CardContent className="space-y-4 p-6">
                  <p className="text-sm font-medium text-slate-500">
                    {paper.type}
                  </p>
                  <h3 className="text-lg font-semibold leading-7">
                    {paper.title}
                  </h3>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Publication
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" id="assistant">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              AI Assistant
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Ask about my projects.
            </h2>
            <p className="mt-4 text-slate-600">
              This assistant can explain my portfolio, skills, AI experience,
              and technical projects.
            </p>
          </div>

          <AIChat />
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8" id="connect">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Connect
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Find me online.
            </h2>

            <p className="mt-4 text-slate-600">
              Explore my work, connect professionally, or contact me directly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="https://github.com/JustFTan"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-slate-100 p-4 transition group-hover:bg-slate-950">
                  <Github className="h-6 w-6 text-slate-950 group-hover:text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">GitHub</h3>
                  <p className="text-sm text-slate-500">
                    View repositories & AI projects
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/justin-fairman-tan/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-slate-100 p-4 transition group-hover:bg-blue-600">
                  <Linkedin className="h-6 w-6 text-slate-950 group-hover:text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">LinkedIn</h3>
                  <p className="text-sm text-slate-500">
                    Professional profile & networking
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/6281277991505"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-slate-100 p-4 transition group-hover:bg-green-500">
                  <MessageCircle className="h-6 w-6 text-slate-950 group-hover:text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">WhatsApp</h3>
                  <p className="text-sm text-slate-500">
                    Direct contact & quick discussion
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8" id="contact">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Hire Me
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Let’s build something.
            </h2>
            <p className="mt-4 text-slate-300">
              Send me a message for internship, freelance, collaboration, or AI
              development opportunities.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}