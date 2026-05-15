"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitContact(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await api.sendContact(form);
      setStatus("Message sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("CONTACT ERROR:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full rounded-3xl border-white/10 bg-white text-slate-950 shadow-sm">
      <CardContent className="p-6">
        <form onSubmit={submitContact} className="space-y-4">
          <Input
            placeholder="Your name"
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
            required
            className="h-11"
          />

          <Input
            placeholder="Your email"
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            required
            className="h-11"
          />

          <Textarea
            placeholder="Tell me about your project or opportunity..."
            value={form.message}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, message: e.target.value }))
            }
            required
            className="min-h-[140px]"
          />

          <Button type="submit" disabled={loading} className="w-full sm:w-auto">
            <Send className="mr-2 h-4 w-4" />
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {status && <p className="text-sm text-slate-600">{status}</p>}
        </form>
      </CardContent>
    </Card>
  );
}