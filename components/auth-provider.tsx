"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { DemoUser, UserRole } from "@/lib/auth";
import { DEMO_USERS } from "@/lib/auth";

type AuthContextValue = { user: DemoUser | null; ready: boolean; login: (role: UserRole) => void; registerPatient: (name: string, email: string) => void; logout: () => void };
const AuthContext = createContext<AuthContextValue | null>(null);
const STORAGE_KEY = "medicore-demo-session";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as { role?: UserRole; user?: DemoUser };
        if (parsed.user && parsed.user.role === "patient" && parsed.user.id && parsed.user.email) setUser(parsed.user);
        else if (parsed.role && DEMO_USERS[parsed.role]) setUser(DEMO_USERS[parsed.role]);
      }
    } catch { window.localStorage.removeItem(STORAGE_KEY); }
    setReady(true);
  }, []);
  const login = useCallback((role: UserRole) => {
    const nextUser = DEMO_USERS[role];
    setUser(nextUser);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ role }));
  }, []);
  const registerPatient = useCallback((name: string, email: string) => {
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const initials = cleanName.split(/\s+/).slice(0, 2).map(part => part[0]?.toUpperCase() ?? "").join("");
    const nextUser: DemoUser = { id: `demo-patient-${Date.now()}`, name: cleanName, email: cleanEmail, role: "patient", department: "Patient portal", initials: initials || "PT" };
    setUser(nextUser);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ user: nextUser }));
  }, []);
  const logout = useCallback(() => {
    setUser(null);
    window.localStorage.removeItem(STORAGE_KEY);
  }, []);
  const value = useMemo(() => ({ user, ready, login, registerPatient, logout }), [user, ready, login, registerPatient, logout]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
