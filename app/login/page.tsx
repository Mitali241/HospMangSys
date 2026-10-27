"use client";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Activity, ArrowRight, Eye, EyeOff, HeartPulse, LockKeyhole, Mail, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { useAuth } from "@/components/auth-provider";
import { DEMO_USERS, ROLE_LABELS } from "@/lib/auth";
import type { UserRole } from "@/lib/auth";

const roles = Object.keys(ROLE_LABELS) as UserRole[];
export default function LoginPage() {
  const router = useRouter();
  const { user, ready, login } = useAuth();
  const [role, setRole] = useState<UserRole>("admin");
  const [email, setEmail] = useState(DEMO_USERS.admin.email);
  const [password, setPassword] = useState("Demo@123");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => { if (ready && user) router.replace("/"); }, [ready, user, router]);
  function changeRole(next: UserRole) { setRole(next); setEmail(DEMO_USERS[next].email); setError(""); }
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError("");
    // This is a demo role switch, not real authentication. Connect to the NestJS login API before production.
    if (!email.trim() || password.length < 4) { setError("Enter a valid demo email and password (at least 4 characters)."); return; }
    login(role); router.replace("/");
  }
  return <main className="min-h-screen bg-[#f4f7fb] lg:grid lg:grid-cols-[1.05fr_.95fr]">
    <section className="relative hidden overflow-hidden bg-[#102b46] p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10"/><div className="absolute -right-12 -top-12 h-72 w-72 rounded-full border border-white/10"/><div className="absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl"/>
      <div className="relative flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#147a8a]"><HeartPulse size={27}/></span><span><span className="block text-2xl font-bold">MediCore</span><span className="text-[10px] uppercase tracking-[.22em] text-slate-300">Healthcare platform</span></span></div>
      <div className="relative max-w-xl"><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1.5 text-xs text-cyan-100"><Sparkles size={14}/> Connected care, thoughtfully managed</div><h1 className="text-5xl font-semibold leading-[1.12] tracking-tight xl:text-6xl">Better care starts with a <span className="text-cyan-300">clearer view.</span></h1><p className="mt-6 max-w-lg text-base leading-7 text-slate-300">One workspace for clinical teams, hospital operations, pharmacy and patient services.</p>
        <div className="mt-10 grid grid-cols-2 gap-3"><div className="rounded-2xl border border-white/10 bg-white/[.06] p-4"><Activity className="mb-3 text-cyan-300" size={21}/><p className="text-sm font-semibold">Care coordination</p><p className="mt-1 text-xs text-slate-300">A shared operational picture</p></div><div className="rounded-2xl border border-white/10 bg-white/[.06] p-4"><ShieldCheck className="mb-3 text-cyan-300" size={21}/><p className="text-sm font-semibold">Role-aware workspace</p><p className="mt-1 text-xs text-slate-300">Relevant tools for each team</p></div></div>
      </div><p className="relative text-xs text-slate-400">MediCore demo environment · Synthetic data only</p>
    </section>
    <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10"><div className="w-full max-w-[460px]">
      <div className="mb-8 flex items-center gap-3 lg:hidden"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#102b46] text-white"><HeartPulse size={24}/></span><span><span className="block text-xl font-bold text-slate-900">MediCore</span><span className="text-[10px] uppercase tracking-[.18em] text-slate-500">Healthcare platform</span></span></div>
      <div className="mb-8"><p className="text-sm font-semibold text-[#147a8a]">WELCOME BACK</p><h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Sign in to your workspace</h2><p className="mt-2 text-sm leading-6 text-slate-500">Choose a staff role or the patient portal to preview its workspace.</p></div>
      <form onSubmit={submit} className="space-y-5 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_-35px_rgba(16,43,70,.25)] sm:p-8">
        <div><label className="mb-2 block text-xs font-semibold text-slate-700" htmlFor="role">Workspace role</label><div className="grid grid-cols-2 gap-2">{roles.map((item) => <button type="button" key={item} onClick={() => changeRole(item)} className={`rounded-xl border px-3 py-2.5 text-left text-xs font-medium transition ${role === item ? "border-[#147a8a] bg-[#edf8f9] text-[#126d7a] ring-1 ring-[#147a8a]/20" : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"}`}>{ROLE_LABELS[item]}</button>)}</div></div>
        <div><label htmlFor="email" className="mb-2 block text-xs font-semibold text-slate-700">Work email</label><div className="relative"><Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"/><input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#147a8a] focus:ring-4 focus:ring-[#147a8a]/10" placeholder="you@hospital.com"/></div></div>
        <div><label htmlFor="password" className="mb-2 block text-xs font-semibold text-slate-700">Password</label><div className="relative"><LockKeyhole size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"/><input id="password" type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none transition focus:border-[#147a8a] focus:ring-4 focus:ring-[#147a8a]/10" placeholder="Enter password"/><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:text-slate-700" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={17}/> : <Eye size={17}/>}</button></div></div>
        {error && <p role="alert" className="rounded-lg bg-rose-50 px-3 py-2 text-xs text-rose-700">{error}</p>}
        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#147a8a] px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#106b78] focus:outline-none focus:ring-4 focus:ring-[#147a8a]/20">Sign in to MediCore <ArrowRight size={17}/></button>
        <p className="text-center text-[11px] leading-5 text-slate-500">Demo only: any email and password (4+ characters) will sign in as the selected role. Patient demo: patient@medicore.demo. Patient demo: patient@medicore.demo.</p>
      </form>
      <div className="mt-5 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3.5 text-[11px] leading-5 text-amber-900"><ShieldCheck size={16} className="mt-0.5 shrink-0"/><p><strong>Security note:</strong> this frontend login is for UI preview only. Real credentials, sessions, and permissions must be verified by the NestJS backend before handling patient data.</p></div>
      <p className="mt-5 text-center text-sm text-slate-600">New patient? <Link href="/register" className="font-semibold text-brand-700 hover:underline">Create a patient account</Link></p><p className="mt-7 text-center text-xs text-slate-400">© 2026 MediCore · Secure care, connected teams</p>
    </div></section>
  </main>;
}
