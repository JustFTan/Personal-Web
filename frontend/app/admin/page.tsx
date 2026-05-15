import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="mt-3 text-slate-600">This page is ready for project CMS features.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card className="rounded-3xl"><CardContent className="p-6"><h2 className="font-semibold">Projects</h2><p className="mt-2 text-sm text-slate-600">Manage portfolio projects.</p></CardContent></Card>
          <Card className="rounded-3xl"><CardContent className="p-6"><h2 className="font-semibold">Skills</h2><p className="mt-2 text-sm text-slate-600">Update technical skills.</p></CardContent></Card>
          <Card className="rounded-3xl"><CardContent className="p-6"><h2 className="font-semibold">Messages</h2><p className="mt-2 text-sm text-slate-600">View contact messages.</p></CardContent></Card>
        </div>
      </section>
    </main>
  );
}
