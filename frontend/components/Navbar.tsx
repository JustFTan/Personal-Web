import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          jft<span className="text-slate-500">.dev</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#about" className="hover:text-slate-950">About</a>
          <a href="#projects" className="hover:text-slate-950">Projects</a>
          <a href="#publications" className="hover:text-slate-950">Publications</a>
          <a href="#skills" className="hover:text-slate-950">Skills</a>
          <a href="#contact" className="hover:text-slate-950">Contact</a>
        </nav>

        <Button asChild size="sm">
          <a href="#contact">Hire Me</a>
        </Button>
      </div>
    </header>
  );
}
