import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const recruiterHighlights = [
  {
    title: "Pipeline at a glance",
    body: "Move candidates through screening, interviews, and offers without losing context.",
  },
  {
    title: "Collaborative hiring",
    body: "Share scorecards and feedback so every stakeholder stays aligned on the same hire.",
  },
  {
    title: "Faster outreach",
    body: "Keep requisitions, notes, and next steps in one workspace built for recruiting teams.",
  },
];

const candidateHighlights = [
  {
    title: "Apply with confidence",
    body: "Track every application, interview, and status update from a single, clear timeline.",
  },
  {
    title: "Stay in the loop",
    body: "Know where you stand without chasing email threads or wondering if anyone saw your resume.",
  },
  {
    title: "Show your best work",
    body: "Keep your profile current so recruiters see the roles and skills that actually fit you.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_#eef2ff_0%,_#f6f7fb_45%,_#f8fafc_100%)]">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-flex rounded-full border border-indigo-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Applicant tracking, simplified
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              Hire great people.{" "}
              <span className="text-indigo-600">Get hired with clarity.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              HireFlow is an ATS built for the two people who matter most in
              every search: recruiters who need a clean pipeline, and candidates
              who deserve a transparent process.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/sign-in"
                className="inline-flex h-12 min-w-44 items-center justify-center rounded-full bg-indigo-600 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500"
              >
                Log In
              </Link>
              <Link
                href="/sign-up"
                className="inline-flex h-12 min-w-44 items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-base font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Create an account
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Already recruiting or applying? Log in to continue.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              ["Recruiters", "Run every search from one pipeline."],
              ["Candidates", "Follow applications without the guesswork."],
              ["Teams", "Keep hiring conversations in one place."],
            ].map(([label, copy]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 text-left shadow-sm"
              >
                <p className="text-sm font-semibold text-indigo-600">{label}</p>
                <p className="mt-1 text-sm text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="recruiters" className="border-y border-slate-200/80 bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                For recruiters
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                A hiring workspace that stays out of your way
              </h2>
              <p className="mt-4 text-slate-600">
                Source, screen, and advance talent without spreading your
                process across spreadsheets, inboxes, and chat threads.
              </p>
              <Link
                href="/sign-in"
                className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Log In as a recruiter
              </Link>
            </div>
            <ul className="space-y-4">
              {recruiterHighlights.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="candidates" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ul className="order-2 space-y-4 lg:order-1">
              {candidateHighlights.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                For candidates
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                Know where you stand in every search
              </h2>
              <p className="mt-4 text-slate-600">
                Apply once, keep your materials organized, and follow progress
                without chasing updates.
              </p>
              <Link
                href="/sign-in"
                className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-indigo-600 px-6 text-sm font-semibold text-white shadow-sm shadow-indigo-600/25 transition hover:bg-indigo-500"
              >
                Log In as a candidate
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="border-t border-slate-200/80 bg-slate-900">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Ready to run your next search?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Log in to HireFlow to continue as a recruiter or candidate. The
              dashboard comes next — authentication is ready today.
            </p>
            <Link
              href="/sign-in"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Log In
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} HireFlow. Built for recruiters and candidates.</p>
          <Link href="/sign-in" className="font-medium text-indigo-600 hover:text-indigo-500">
            Log In
          </Link>
        </div>
      </footer>
    </div>
  );
}
