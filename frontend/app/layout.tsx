import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justin Fairman Tan | Fullstack & AI Engineer",
  description: "Portfolio website for Fullstack Web Development, LLM, and AI Agent projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
