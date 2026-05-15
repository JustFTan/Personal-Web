import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justin Fairman Tan | Fullstack Developer & AI Engineer",
  description:
    "Portfolio of Justin Fairman Tan focused on Fullstack Web Development, Large Language Models, AI Agents, and AI-powered web applications.",
  keywords: [
    "Justin Fairman Tan",
    "Fullstack Developer",
    "AI Engineer",
    "LLM",
    "AI Agent",
    "FastAPI",
    "Next.js",
    "React",
    "PostgreSQL",
  ],
  openGraph: {
    title: "Justin Fairman Tan | Fullstack Developer & AI Engineer",
    description:
      "Fullstack Web Developer and AI Engineer focused on LLMs, AI Agents, and AI-powered applications.",
    url: "https://www.justftan.my.id",
    siteName: "Justin Fairman Tan Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}