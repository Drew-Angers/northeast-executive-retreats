"use client";

import { useState } from "react";
import Image from "next/image";

const destinations = [
  "Newport, Rhode Island",
  "Coastal Maine",
  "The Berkshires, Massachusetts",
  "Boston, Massachusetts",
  "Vermont",
  "Open to Suggestions",
];

const groupSizes = [
  "Under 15 people",
  "15 – 30 people",
  "30 – 50 people",
  "50+ people",
];

const budgets = [
  "$1,500 – $2,000 per person",
  "$2,000 – $3,000 per person",
  "$3,000+ per person",
  "Flexible / Not Sure Yet",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    title: "",
    destination: "",
    groupSize: "",
    budget: "",
    timing: "",
    goals: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.goals) {
      setError("Please fill in your name, email, and retreat goals.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/submit-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please email drewangers@gmail.com directly.");
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1600&q=80"
            alt="New England coastline"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="section-label text-gold mb-4">Get in Touch</p>
          <h1 className="section-title-light mb-6">
            Let&apos;s Plan Your
            <br />
            <em>New England Retreat</em>
          </h1>
          <div className="divider-gold mx-auto" />
          <p className="text-cream/60 font-sans mt-6">
            Share a few details and we&apos;ll come back with a fully custom
            proposal — usually within 24 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-20">
              <div className="w-12 h-px bg-gold mx-auto mb-8" />
              <h2 className="font-serif text-3xl text-navy mb-4">
                Thank You — We&apos;ll Be in Touch
              </h2>
              <p className="text-navy/60 font-sans leading-relaxed max-w-lg mx-auto">
                A member of our team will reach out within 24 hours to discuss
                your retreat vision. In the meantime, feel free to explore our
                destinations for inspiration.
              </p>
              <div className="mt-10">
                <a href="/packages" className="btn-primary">
                  Explore Destinations
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact info */}
              <div>
                <p className="section-label mb-5">Your Information</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name *"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, firstName: e.target.value }))
                    }
                    className="input-field"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, lastName: e.target.value }))
                    }
                    className="input-field"
                  />
                  <input
                    type="email"
                    placeholder="Work email *"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="input-field"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    value={form.company}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, company: e.target.value }))
                    }
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Your title / role"
                    value={form.title}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, title: e.target.value }))
                    }
                    className="input-field"
                  />
                </div>
              </div>

              {/* Retreat details */}
              <div>
                <p className="section-label mb-5">Retreat Details</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <select
                      value={form.destination}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, destination: e.target.value }))
                      }
                      className="select-field"
                    >
                      <option value="">Preferred destination</option>
                      {destinations.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative">
                    <select
                      value={form.groupSize}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, groupSize: e.target.value }))
                      }
                      className="select-field"
                    >
                      <option value="">Group size</option>
                      {groupSizes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative">
                    <select
                      value={form.budget}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, budget: e.target.value }))
                      }
                      className="select-field"
                    >
                      <option value="">Budget range</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="Preferred timing / dates"
                    value={form.timing}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, timing: e.target.value }))
                    }
                    className="input-field"
                  />
                </div>
              </div>

              {/* Goals */}
              <div>
                <p className="section-label mb-3">Tell Us About Your Goals</p>
                <textarea
                  placeholder="What does a successful retreat look like for your team? What outcomes matter most? *"
                  value={form.goals}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, goals: e.target.value }))
                  }
                  rows={5}
                  className="input-field resize-none"
                  required
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm font-sans">{error}</p>
              )}

              <div className="flex items-center justify-between">
                <p className="text-navy/40 text-xs font-sans">
                  We respond within 24 hours.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Inquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
