export type UserRole = "admin" | "doctor" | "nurse" | "receptionist" | "pharmacist" | "lab_technician" | "billing" | "patient";

export type DemoUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  initials: string;
};

export const ROLE_LABELS: Record<UserRole, string> = {
  admin: "Hospital administrator",
  doctor: "Doctor",
  nurse: "Nurse",
  receptionist: "Receptionist",
  pharmacist: "Pharmacist / Dispensary",
  lab_technician: "Laboratory technician",
  billing: "Billing executive",
  patient: "Patient",
};

export const DEMO_USERS: Record<UserRole, DemoUser> = {
  admin: { id: "demo-admin", name: "Dr. Mehta", email: "admin@medicore.demo", role: "admin", department: "Administration", initials: "DM" },
  doctor: { id: "demo-doctor", name: "Dr. Aanya Shah", email: "doctor@medicore.demo", role: "doctor", department: "Clinical care", initials: "AS" },
  nurse: { id: "demo-nurse", name: "Priya Nair", email: "nurse@medicore.demo", role: "nurse", department: "Nursing", initials: "PN" },
  receptionist: { id: "demo-reception", name: "Rohan Patil", email: "reception@medicore.demo", role: "receptionist", department: "Front desk", initials: "RP" },
  pharmacist: { id: "demo-pharmacy", name: "Neha Kulkarni", email: "pharmacy@medicore.demo", role: "pharmacist", department: "Pharmacy & dispensary", initials: "NK" },
  lab_technician: { id: "demo-lab", name: "Karan Joshi", email: "lab@medicore.demo", role: "lab_technician", department: "Laboratory", initials: "KJ" },
  billing: { id: "demo-billing", name: "Sana Khan", email: "billing@medicore.demo", role: "billing", department: "Billing & payments", initials: "SK" },
  patient: { id: "demo-patient-1001", name: "Aarav Sharma", email: "patient@medicore.demo", role: "patient", department: "Patient portal", initials: "AS" },
};

// Frontend demo navigation only. Enforce every permission again in the backend.
export const ROLE_ROUTES: Record<UserRole, string[]> = {
  admin: ["/", "/patients", "/appointments", "/clinical", "/pharmacy", "/inventory", "/admissions", "/laboratory", "/billing", "/ai-assistant", "/staff", "/settings"],
  doctor: ["/", "/patients", "/appointments", "/clinical", "/admissions", "/laboratory", "/ai-assistant"],
  nurse: ["/", "/patients", "/appointments", "/clinical", "/admissions", "/laboratory"],
  receptionist: ["/", "/patients", "/appointments", "/admissions", "/billing"],
  pharmacist: ["/", "/patients", "/pharmacy", "/inventory"],
  lab_technician: ["/", "/patients", "/laboratory"],
  billing: ["/", "/patients", "/appointments", "/billing", "/admissions"],
  patient: ["/", "/portal/dashboard", "/portal/appointments", "/portal/records", "/portal/prescriptions", "/portal/billing", "/portal/profile"],
};

export function canAccessRoute(role: UserRole, pathname: string) {
  return ROLE_ROUTES[role].some((route) => route === "/" ? pathname === "/" : pathname === route || pathname.startsWith(`${route}/`));
}
