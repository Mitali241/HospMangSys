import type { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Button({ children, className, variant = "primary", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" | "danger" }) {
  const styles = { primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm", secondary: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50", ghost: "text-slate-600 hover:bg-slate-100", danger: "bg-rose-600 text-white hover:bg-rose-700" };
  return <button className={cn("inline-flex items-center justify-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50", styles[variant], className)} {...props}>{children}</button>;
}
export function Card({ children, className }: { children: ReactNode; className?: string }) { return <section className={cn("rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft", className)}>{children}</section>; }
export function PageHeader({ title, description, action }: { title: string; description: string; action?: ReactNode }) { return <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h1><p className="mt-1.5 text-sm text-slate-500">{description}</p></div>{action}</div>; }
export function Badge({ children, status }: { children: ReactNode; status?: string }) {
  const value = String(status ?? children).toLowerCase();
  const cls = value.includes("paid") || value.includes("active") || value.includes("verified") || value.includes("completed") || value.includes("available") || value.includes("in stock") ? "bg-emerald-50 text-emerald-700 ring-emerald-600/15" : value.includes("pending") || value.includes("waiting") || value.includes("partial") || value.includes("expir") || value.includes("review") || value.includes("processing") ? "bg-amber-50 text-amber-700 ring-amber-600/15" : value.includes("low") || value.includes("urgent") || value.includes("critical") || value.includes("overdue") ? "bg-rose-50 text-rose-700 ring-rose-600/15" : "bg-slate-100 text-slate-600 ring-slate-500/10";
  return <span className={cn("inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset", cls)}>{children}</span>;
}
export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) { return <input className={cn("w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100", className)} {...props} />; }
export function Field({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) { return <label className="block space-y-1.5"><span className="block text-sm font-medium text-slate-700">{label}</span>{children}{hint && <span className="block text-xs text-slate-500">{hint}</span>}</label>; }
export function EmptyState({ title, description }: { title: string; description: string }) { return <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center"><p className="font-semibold text-slate-800">{title}</p><p className="mt-1 text-sm text-slate-500">{description}</p></div>; }
