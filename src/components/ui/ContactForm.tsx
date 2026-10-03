"use client";

import { profile } from "@/data/profile";
import emailjs from "@emailjs/browser";
import { CheckCircle2, Loader2, Send, XCircle } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

const emptyForm = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (!serviceId || !templateId || !publicKey) throw new Error("EmailJS is not configured");
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          message: form.message,
          to_email: profile.email,
        },
        { publicKey },
      );
      setStatus("success");
      setForm(emptyForm);
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" value={form.name} onChange={onChange} className="field" placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={onChange}
            className="field"
            placeholder="jane@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={onChange}
          className="field resize-y"
          placeholder="A few lines about the project, role or problem you're working on."
        />
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "sending"} className="btn-primary">
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              <Send className="size-4" aria-hidden />
              Send message
            </>
          )}
        </button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === "success" && (
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-4" aria-hidden />
              Thanks, your message is on its way. I&apos;ll reply soon.
            </span>
          )}
          {status === "error" && (
            <span className="inline-flex items-center gap-1.5 text-red-600 dark:text-red-400">
              <XCircle className="size-4 shrink-0" aria-hidden />
              <span>
                Something went wrong. Please email me at{" "}
                <a href={`mailto:${profile.email}`} className="link">
                  {profile.email}
                </a>
                .
              </span>
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
