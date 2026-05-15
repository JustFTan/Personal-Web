const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

export const api = {
  getProjects: () => apiFetch<any[]>("/projects"),
  askAI: (question: string) =>
    apiFetch<{ answer: string }>("/chat", {
      method: "POST",
      body: JSON.stringify({ question }),
    }),
  sendContact: (payload: { name: string; email: string; message: string }) =>
    apiFetch<any>("/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
