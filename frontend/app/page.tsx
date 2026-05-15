import { ArrowRight, BrainCircuit, Code2, Database, Github, Instagram, Linkedin, MessageCircle, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import AIChat from "@/components/AIChat";
import ContactForm from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Email from "next-auth/providers/email";

const projects = [
  {
    title: "AI Sales Page Generator",
    stack: "Laravel • MySQL • LLM API • SaaS",
    description: "AI-powered web app that generates structured sales landing pages from product information.",
    link: "https://salesgenai.my.id/",
  },
  {
    title: "SPELL Laboratory Website",
    stack: "FastAPI • PostgreSQL • Python",
    description: "Fullstack laboratory platform for academic branding, thesis archives, datasets, and alumni data.",
    link: "https://www.spell-lab.id/",
  },
  // {
  //   title: "Mandarin Content AI",
  //   stack: "AI • Content Automation • SaaS",
  //   description: "Ongoing AI platform for generating Mandarin learning content, captions, posts, and short video scripts.",
  //   link: "#",
  // },
];

const skills = [
  "C",
  "Python",
  "React / Next.js",
  "FastAPI",
  "Laravel",
  "PostgreSQL",
  "MySQL",
  "LLM Integration",
  "AI Agent Development",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Badge className="mb-6 border-slate-200 bg-white text-slate-600">
              <Sparkles className="mr-2 h-3.5 w-3.5" /> Fullstack Developer • AI Engineer
            </Badge>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              An Average Guy Building Extraordinary AI-Powered Web Experiences
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I am Justin Fairman Tan, focused on Fullstack Web Development,
              Large Language Models, AI Agents, and real-time AI systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-xl">
                <a href="#projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl">
                <a href="https://github.com/JustFTan" target="_blank">GitHub</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl">
                <a href="https://www.linkedin.com/in/justin-fairman-tan" target="_blank">LinkedIn</a>
              </Button>
            </div>
          </div>

          <Card className="rounded-3xl border-slate-200 shadow-sm">
            <CardContent className="space-y-6 p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <BrainCircuit className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">AI + Fullstack Focus</h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Experienced in developing AI-powered web applications, REST APIs,
                  database systems, and LLM-based automation solutions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-slate-50 p-4"><Code2 className="mb-2 h-5 w-5" /> Web Apps</div>
                <div className="rounded-2xl bg-slate-50 p-4"><Database className="mb-2 h-5 w-5" /> Databases</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="border-y bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">About</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Electrical Engineering graduate at Telkom University with strong interests in Fullstack Web Development,
            Large Language Models (LLMs), and AI Agents. Experienced in developing AI-powered web applications,
            REST APIs, database systems, and intelligent automation solutions using Laravel, FastAPI, PostgreSQL,
            and Python. Currently focused on LLM integration, AI agent development, and real-time AI systems
          </p>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-slate-600">Production and ongoing AI/web projects.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="rounded-3xl border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <CardContent className="flex h-full flex-col p-6">
                <p className="text-sm font-medium text-slate-500">{project.stack}</p>
                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{project.description}</p>
                <Button asChild variant="outline" className="mt-6 rounded-xl">
                  <a href={project.link} target={project.link === "#" ? undefined : "_blank"}>Open Project</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="publications" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Publications</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <p className="text-sm text-gray-500">IEEE Access Journal</p>
              <h3 className="text-xl font-semibold">
                Real-Time Fall Detection With Hybrid CNN-LSTM Using IWR6843AOP FMCW Radar
              </h3>
              <a
                href="https://ieeexplore.ieee.org/document/11146781"
                target="_blank"
                className="text-sm font-medium underline"
              >
                View Publication
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <p className="text-sm text-gray-500">ICISS 2025</p>
              <h3 className="text-xl font-semibold">
                Design and Implementation of a Real-Time Smart Door Lock with FaceNet Face Authentication and Blink Detection
              </h3>
              <a
                href="https://ieeexplore.ieee.org/document/11389507"
                target="_blank"
                className="text-sm font-medium underline"
              >
                View Publication
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="skills" className="border-y bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill} className="border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Ask my AI assistant</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Just a simple chatbot...
          </p>
        </div>
        <AIChat />
      </section>

      <section id="contact" className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Let&apos;s work together</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Open for fullstack, backend, AI engineer, and LLM/AI Agent opportunities.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild variant="outline" size="sm"><a href="https://github.com/JustFTan" target="_blank"><Github className="mr-2 h-4 w-4" /> GitHub</a></Button>
            <Button asChild variant="outline" size="sm"><a href="https://www.linkedin.com/in/justin-fairman-tan" target="_blank"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a></Button>
            <Button asChild variant="outline" size="sm"><a href="https://www.instagram.com/justin_ftan" target="_blank"><Instagram className="mr-2 h-4 w-4" /> Instagram</a></Button>
            <Button asChild variant="outline" size="sm"><a href="https://wa.me/6281277991505" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp</a></Button>
            
          </div>
        </div>
        <ContactForm />
      </section>

      <footer className="border-t py-8 text-center text-sm text-slate-500">
        © 2026 Justin Fairman Tan. Built with Next.js, TailwindCSS, shadcn/ui, FastAPI, and Groq.
      </footer>
    </main>
  );
}
