import Link from "next/link";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-sm shadow-indigo-600/30">
            ATS
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            HireFlow
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#recruiters" className="transition hover:text-slate-900">
            Recruiters
          </a>
          <a href="#candidates" className="transition hover:text-slate-900">
            Candidates
          </a>
          <a href="#features" className="transition hover:text-slate-900">
            Features
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton mode="redirect">
              <button className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                Log In
              </button>
            </SignInButton>
            <SignUpButton mode="redirect">
              <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-600/25 transition hover:bg-indigo-500">
                Get started
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </div>
    </header>
  );
}
