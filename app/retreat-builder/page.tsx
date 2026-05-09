"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type QuizAnswers = {
  teamSize: string;
  goal: string;
  setting: string;
  timing: string;
  email: string;
  firstName: string;
  company: string;
};

const steps = [
  {
    id: "teamSize",
    question: "How large is your team?",
    subtext: "We tailor every experience to the group dynamic.",
    options: [
      { value: "small", label: "Under 15", icon: "○" },
      { value: "medium", label: "15 – 30", icon: "◎" },
      { value: "large", label: "30 – 50", icon: "●" },
      { value: "xlarge", label: "50+", icon: "⬤" },
    ],
  },
  {
    id: "goal",
    question: "What's the primary goal?",
    subtext: "This shapes the entire rhythm of your retreat.",
    options: [
      { value: "strategy", label: "Strategic Planning", icon: "◈" },
      { value: "bonding", label: "Team Bonding", icon: "◉" },
      { value: "reset", label: "Executive Reset", icon: "◌" },
      { value: "sales", label: "Sales Kickoff", icon: "◆" },
    ],
  },
  {
    id: "setting",
    question: "What setting calls to your team?",
    subtext: "Each landscape inspires a different kind of thinking.",
    options: [
      { value: "coastal", label: "Coastal & Maritime", icon: "〜" },
      { value: "historic", label: "Historic & Urban", icon: "⊞" },
      { value: "mountain", label: "Mountains & Wilderness", icon: "△" },
      { value: "mix", label: "Mix It Up", icon: "◇" },
    ],
  },
  {
    id: "timing",
    question: "When are you looking to retreat?",
    subtext: "Shoulder seasons unlock New England's best availability.",
    options: [
      { value: "q1", label: "Q1 · Jan – Mar", icon: "❄" },
      { value: "q2", label: "Q2 · Apr – Jun", icon: "✿" },
      { value: "q3", label: "Q3 · Jul – Sep", icon: "☀" },
      { value: "q4", label: "Q4 · Oct – Dec", icon: "🍂" },
    ],
  },
];

const matchDestination = (answers: Partial<QuizAnswers>): string => {
  const { goal, setting, timing } = answers;

  if (setting === "coastal" && goal === "bonding") return "maine";
  if (setting === "coastal" && goal === "strategy") return "newport";
  if (setting === "historic") return "boston";
  if (setting === "mountain" && timing === "q1") return "vermont";
  if (setting === "mountain") return "berkshires";
  if (goal === "reset") return "berkshires";
  if (goal === "strategy") return "newport";
  if (goal === "sales") return "boston";
  if (goal === "bonding") return "maine";
  if (timing === "q4" || timing === "q1") return "vermont";
  return "maine";
};

export default function RetreatBuilderPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [emailStep, setEmailStep] = useState(false);
  const [emailData, setEmailData] = useState({
    email: "",
    firstName: "",
    company: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const totalSteps = steps.length;
  const progress = ((currentStep) / totalSteps) * 100;

  const handleAnswer = (field: string, value: string) => {
    const newAnswers = { ...answers, [field]: value };
    setAnswers(newAnswers);

    if (currentStep < totalSteps - 1) {
      setTimeout(() => setCurrentStep((s) => s + 1), 300);
    } else {
      // Last quiz step answered — show email gate
      setTimeout(() => setEmailStep(true), 300);
    }
  };

  const handleSubmit = async () => {
    if (!emailData.email || !emailData.firstName) {
      setError("Please enter your name and email to see your results.");
      return;
    }
    setError("");
    setSubmitting(true);

    const destination = matchDestination(answers);
    const payload = { ...answers, ...emailData, destination };

    try {
      await fetch("/api/submit-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      router.push(
        `/results?dest=${destination}&name=${encodeURIComponent(emailData.firstName)}`
      );
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  const step = steps[currentStep];

  return (
    <div className="min-h-screen bg-navy flex flex-col">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-navy-dark z-50">
        <div
          className="h-full bg-gold transition-all duration-500"
          style={{ width: emailStep ? "100%" : `${progress}%` }}
        />
      </div>

      {/* Header */}
      <div className="pt-24 pb-10 px-6 text-center">
        <p className="text-gold text-xs tracking-widest uppercase font-sans mb-2">
          Retreat Vision Builder
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-cream">
          Find Your Perfect New England Retreat
        </h1>
      </div>

      {/* Quiz content */}
      <div className="flex-1 flex items-center justify-center px-6 pb-20">
        <div className="w-full max-w-2xl">
          {!emailStep ? (
            <div key={currentStep} className="animate-fade-up">
              {/* Step counter */}
              <p className="text-cream/30 text-xs tracking-widest uppercase font-sans text-center mb-8">
                Question {currentStep + 1} of {totalSteps}
              </p>

              {/* Question */}
              <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-3">
                {step.question}
              </h2>
              <p className="text-cream/50 font-sans text-sm text-center mb-12">
                {step.subtext}
              </p>

              {/* Options */}
              <div className="grid grid-cols-2 gap-4">
                {step.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(step.id, opt.value)}
                    className={`group border p-6 text-left transition-all duration-200 hover:border-gold hover:bg-navy-light ${
                      answers[step.id as keyof QuizAnswers] === opt.value
                        ? "border-gold bg-navy-light"
                        : "border-cream/20"
                    }`}
                  >
                    <span className="text-2xl text-gold/60 mb-3 block">
                      {opt.icon}
                    </span>
                    <span className="font-sans text-cream text-sm font-medium tracking-wide">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Back button */}
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep((s) => s - 1)}
                  className="mt-8 text-cream/30 text-xs tracking-widest uppercase font-sans hover:text-cream/60 transition-colors block mx-auto"
                >
                  ← Back
                </button>
              )}
            </div>
          ) : (
            /* Email gate */
            <div className="animate-fade-up max-w-lg mx-auto text-center">
              <div className="w-12 h-px bg-gold mx-auto mb-8" />
              <h2 className="font-serif text-3xl text-cream mb-3">
                Your Retreat Match is Ready
              </h2>
              <p className="text-cream/60 font-sans text-sm mb-10 leading-relaxed">
                Enter your details below to unlock your personalized New England
                retreat recommendation and sample itinerary lookbook.
              </p>

              <div className="space-y-4 text-left">
                <input
                  type="text"
                  placeholder="First name"
                  value={emailData.firstName}
                  onChange={(e) =>
                    setEmailData((d) => ({ ...d, firstName: e.target.value }))
                  }
                  className="w-full bg-navy-light border border-cream/20 text-cream placeholder:text-cream/30 px-5 py-4 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <input
                  type="email"
                  placeholder="Work email"
                  value={emailData.email}
                  onChange={(e) =>
                    setEmailData((d) => ({ ...d, email: e.target.value }))
                  }
                  className="w-full bg-navy-light border border-cream/20 text-cream placeholder:text-cream/30 px-5 py-4 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <input
                  type="text"
                  placeholder="Company name (optional)"
                  value={emailData.company}
                  onChange={(e) =>
                    setEmailData((d) => ({ ...d, company: e.target.value }))
                  }
                  className="w-full bg-navy-light border border-cream/20 text-cream placeholder:text-cream/30 px-5 py-4 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {error && (
                <p className="text-red-400 text-xs font-sans mt-3">{error}</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="btn-gold w-full mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Finding your match..." : "See My Retreat →"}
              </button>

              <p className="text-cream/20 text-xs font-sans mt-4">
                No spam. Just your custom retreat recommendation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
