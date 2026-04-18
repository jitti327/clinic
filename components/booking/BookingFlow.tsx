"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";

const treatments = [
  {
    value: "Joint Injection (ultrasound-guided)",
    title: "Joint Injection",
    meta: "Ultrasound-guided · typical 30–45 min",
  },
  {
    value: "Follow-up Session",
    title: "Follow-up Session",
    meta: "Review progress · adjust care plan",
  },
  {
    value: "Initial MSK Assessment",
    title: "Initial MSK Assessment",
    meta: "First visit · history & examination",
  },
  {
    value: "Ultrasound Scan & Report",
    title: "Ultrasound Scan & Report",
    meta: "Diagnostic imaging on site",
  },
] as const;

const slots = ["09:00", "09:40", "11:15", "14:00", "15:30", "16:45"] as const;

const steps = [
  "Select treatment",
  "Choose date & time",
  "Your details",
  "Confirm",
] as const;

export function BookingFlow() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(1);
  const [treatment, setTreatment] = useState<string>("");
  const [date, setDate] = useState("2026-04-22");
  const [slot, setSlot] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [done, setDone] = useState(false);
  const [hint, setHint] = useState("");

  const summaryWhen = useMemo(() => {
    if (!date || !slot) return "—";
    const d = new Date(`${date}T12:00:00`);
    return `${d.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    })} · ${slot}`;
  }, [date, slot]);

  function nextFrom1() {
    if (!treatment) {
      setHint("Please choose a treatment type.");
      return;
    }
    setHint("");
    setStep(2);
  }

  function nextFrom2() {
    if (!date) {
      setHint("Please select a date.");
      return;
    }
    if (!slot) {
      setHint("Please tap an available time.");
      return;
    }
    setHint("");
    setStep(3);
  }

  function nextFrom3() {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setHint("Please complete your name, email, and phone.");
      return;
    }
    setHint("");
    setStep(4);
  }

  function confirm() {
    setDone(true);
  }

  function reset() {
    setStep(1);
    setTreatment("");
    setSlot("");
    setName("");
    setEmail("");
    setPhone("");
    setNotes("");
    setDone(false);
    setHint("");
  }

  if (done) {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-xl border border-border bg-surface p-8 shadow-card"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-success">
          Request received
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
          We&apos;ll be in touch to confirm
        </h2>
        <p className="mt-2 text-sm text-muted">
          Your preferences are summarised below. The clinic team will contact you to confirm
          availability, appointment type, and fees. For urgent concerns or same-week slots, call{" "}
          <a href="tel:03337729655" className="font-semibold text-accent hover:underline">
            0333 772 9655
          </a>
          .
        </p>
        <dl className="mt-6 space-y-4 rounded-lg bg-canvas p-5 text-sm">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-subtle">
              Treatment
            </dt>
            <dd className="mt-1 font-medium text-ink">{treatment}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-subtle">
              Date & time
            </dt>
            <dd className="mt-1 font-medium text-ink">{summaryWhen}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-subtle">
              Patient
            </dt>
            <dd className="mt-1 font-medium text-ink">{name}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-subtle">
              Contact
            </dt>
            <dd className="mt-1 font-medium text-ink">
              {email} · {phone}
            </dd>
          </div>
        </dl>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-canvas"
          >
            Book another
          </button>
          <Link
            href={routes.home}
            className="inline-flex items-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground no-underline transition-[transform,box-shadow] hover:bg-brand-hover hover:shadow-md"
          >
            Back to home
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-6 shadow-card sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-subtle">
        Guided booking
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Request a visit
      </h2>
      <p
        className="mt-2 text-sm text-muted"
        id="booking-progress"
        aria-live="polite"
      >
        Step {step} of {steps.length} — {steps[step - 1]}
      </p>

      <ol className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-between">
        {steps.map((label, i) => {
          const n = i + 1;
          const active = n === step;
          const complete = n < step;
          return (
            <li
              key={label}
              className="flex flex-1 items-center gap-3 sm:flex-col sm:text-center"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  complete
                    ? "bg-brand text-brand-foreground"
                    : active
                      ? "bg-brand-soft text-brand ring-2 ring-brand"
                      : "bg-canvas text-subtle"
                }`}
              >
                {n}
              </span>
              <span
                className={`text-xs font-medium sm:max-w-[5.5rem] ${
                  active ? "text-ink" : "text-subtle"
                }`}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ol>

      {hint ? (
        <p className="mt-4 text-sm text-warning" role="status">
          {hint}
        </p>
      ) : null}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={reduce ? false : { opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduce ? undefined : { opacity: 0, x: -8 }}
          transition={{ duration: reduce ? 0 : 0.2 }}
          className="mt-8"
        >
          {step === 1 && (
            <div className="grid gap-3 sm:grid-cols-2">
              {treatments.map((t) => (
                <label
                  key={t.value}
                  className={`cursor-pointer rounded-lg border-2 p-4 transition-colors ${
                    treatment === t.value
                      ? "border-brand bg-brand-soft"
                      : "border-border hover:border-border-strong"
                  }`}
                >
                  <input
                    type="radio"
                    name="treatment"
                    className="sr-only"
                    checked={treatment === t.value}
                    onChange={() => setTreatment(t.value)}
                  />
                  <span className="block font-semibold text-ink">{t.title}</span>
                  <span className="mt-1 block text-sm text-muted">{t.meta}</span>
                </label>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="book-date"
                  className="block text-sm font-semibold text-ink"
                >
                  Preferred date
                </label>
                <input
                  id="book-date"
                  type="date"
                  value={date}
                  min="2026-01-01"
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-2 w-full max-w-xs rounded-lg border border-border px-3 py-2.5 text-ink"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Available slots</p>
                <p className="text-sm text-muted">
                  Tap a time — your choice stays highlighted.
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {slots.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSlot(s)}
                      className={`min-h-11 rounded-lg border-2 text-sm font-semibold transition-colors ${
                        slot === s
                          ? "border-brand bg-brand-soft text-ink"
                          : "border-border bg-canvas text-muted hover:border-border-strong"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <Field
                id="nm"
                label="Full name"
                value={name}
                onChange={setName}
                placeholder="e.g. Jane Doe"
                autoComplete="name"
              />
              <Field
                id="em"
                label="Email"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="you@example.com"
                autoComplete="email"
              />
              <Field
                id="ph"
                label="Phone"
                type="tel"
                value={phone}
                onChange={setPhone}
                placeholder="e.g. 07700 900123"
                autoComplete="tel"
              />
              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-semibold text-ink"
                >
                  Notes (optional)
                </label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="mt-2 w-full rounded-lg border border-border px-3 py-2.5 text-ink"
                  placeholder="Allergies, GP surgery, referral letters…"
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <dl className="space-y-4 rounded-lg bg-canvas p-5 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-subtle">
                  Treatment
                </dt>
                <dd className="mt-1 font-medium text-ink">{treatment}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-subtle">
                  Date & time
                </dt>
                <dd className="mt-1 font-medium text-ink">{summaryWhen}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-subtle">
                  Patient
                </dt>
                <dd className="mt-1 font-medium text-ink">{name}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-subtle">
                  Contact
                </dt>
                <dd className="mt-1 font-medium text-ink">
                  {email} · {phone}
                </dd>
              </div>
            </dl>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex flex-wrap gap-3">
        {step > 1 && (
          <button
            type="button"
            onClick={() => {
              setHint("");
              setStep((s) => s - 1);
            }}
            className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-ink hover:bg-canvas"
          >
            Back
          </button>
        )}
        {step < 4 ? (
          <button
            type="button"
            onClick={() => {
              if (step === 1) nextFrom1();
              else if (step === 2) nextFrom2();
              else nextFrom3();
            }}
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-sm transition-[transform,box-shadow] hover:bg-brand-hover hover:shadow-md active:scale-[0.98]"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={confirm}
            className="rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-sm transition-[transform,box-shadow] hover:bg-brand-hover hover:shadow-md active:scale-[0.98]"
          >
            Confirm appointment
          </button>
        )}
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border px-3 py-2.5 text-ink"
      />
    </div>
  );
}
