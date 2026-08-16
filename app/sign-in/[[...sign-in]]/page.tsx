import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_#eef2ff_0%,_#f6f7fb_50%)] px-4">
      <Link href="/" className="mb-8 text-sm font-medium text-slate-500 hover:text-slate-800">
        ← Back to HireFlow
      </Link>
      <SignIn />
    </div>
  );
}
