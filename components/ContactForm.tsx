"use client";

import { Send } from "lucide-react";
import React, { useState } from "react";

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  /**
   * Connect this to your email service or API route.
   * Without it, the form is shown but the send button stays disabled.
   * Throw an error inside it to show the failure message.
   */
  onSubmit?: (values: ContactFormValues) => Promise<void> | void;
};

type Status = "idle" | "sending" | "sent" | "error";

const labelClass = "mb-2 block text-[11px] font-semibold text-white";

const fieldClass =
  "w-full rounded-md border border-[#29292e] bg-[#060608] px-3 text-[13px] text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-green-400";

const messages: Record<Status, string> = {
  idle: "Form delivery is ready to connect when an email address or sending service is provided.",
  sending: "Sending your message…",
  sent: "Thanks, your message was sent.",
  error: "Something went wrong. Please try again.",
};

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [status, setStatus] = useState<Status>("idle");
  const isConnected = Boolean(onSubmit);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!onSubmit) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const values: ContactFormValues = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("sending");
    try {
      await onSubmit(values);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  // Before a delivery service is connected, always show the default note.
  const statusText = isConnected && status !== "idle" ? messages[status] : messages.idle;

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-[#28282c] bg-[#101012] p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={`${fieldClass} h-10`}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={`${fieldClass} h-10`}
          />
        </div>
      </div>

      <div className="mt-[18px]">
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          placeholder="Tell me about your project..."
          className={`${fieldClass} h-[124px] resize-y py-2.5`}
        />
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p
          aria-live="polite"
          className="max-w-[350px] text-[11px] leading-[18px] text-zinc-400"
        >
          {statusText}
        </p>

        <button
          type="submit"
          disabled={!isConnected || status === "sending"}
          className="inline-flex h-8 shrink-0 items-center justify-center gap-2 rounded-md bg-green-400 px-4 text-[13px] font-medium text-[#0a0a0c] transition-colors hover:bg-green-300 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:bg-green-400"
        >
          Send Message
          <Send size={14} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;