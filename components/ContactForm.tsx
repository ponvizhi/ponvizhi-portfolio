"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setStatus("success");
        setMessage("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("FRONTEND ERROR:", error);
      setStatus("error");
      setMessage("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border p-3 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border p-3 rounded"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full border p-3 rounded h-32"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded-full cursor-pointer disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {message && (
        <p
          className={`text-sm mt-2 ${
            status === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}