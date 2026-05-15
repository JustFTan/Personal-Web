"use client";

import { useState } from "react";
import { Bot, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/lib/api";

export default function AIChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Ask me anything about Justin's projects, skills, or AI experience.");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("Thinking...");

    try {
      const data = await api.askAI(question);
      setAnswer(data.answer || "No answer returned from API.");
    } catch (error) {
      console.error("AI CHAT ERROR:", error);
      setAnswer(String(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="rounded-3xl border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Bot className="h-5 w-5" /> AI Portfolio Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
          {answer}
        </div>
        <div className="flex gap-2">
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && askAI()}
            placeholder="Example: What AI projects has Justin built?"
          />
          <Button onClick={askAI} disabled={loading}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
