export type Patient = { id: string; name: string; age: number; gender: string; phone: string; lastVisit: string; status: string };
export const patients: Patient[] = [
  { id: "PAT-1024", name: "Ananya Sharma", age: 32, gender: "Female", phone: "+91 98765 10024", lastVisit: "20 Oct 2026", status: "Active" },
  { id: "PAT-1025", name: "Rahul Mehta", age: 46, gender: "Male", phone: "+91 98765 10025", lastVisit: "24 Oct 2026", status: "Active" },
  { id: "PAT-1026", name: "Priya Patil", age: 28, gender: "Female", phone: "+91 98765 10026", lastVisit: "18 Oct 2026", status: "Follow-up" },
  { id: "PAT-1027", name: "Aarav Kulkarni", age: 9, gender: "Male", phone: "+91 98765 10027", lastVisit: "12 Oct 2026", status: "Active" },
  { id: "PAT-1028", name: "Farah Khan", age: 61, gender: "Female", phone: "+91 98765 10028", lastVisit: "21 Oct 2026", status: "Follow-up" },
];
export const appointments = [
  { time: "09:00 AM", token: "Q-021", patient: "Ananya Sharma", doctor: "Dr. Mehta", department: "General Medicine", status: "Completed" },
  { time: "09:15 AM", token: "Q-022", patient: "Rahul Mehta", doctor: "Dr. Mehta", department: "General Medicine", status: "In consultation" },
  { time: "09:30 AM", token: "Q-023", patient: "Priya Patil", doctor: "Dr. Iyer", department: "Cardiology", status: "Waiting" },
  { time: "09:45 AM", token: "Q-024", patient: "Aarav Kulkarni", doctor: "Dr. Shah", department: "Paediatrics", status: "Checked in" },
  { time: "10:00 AM", token: "Q-025", patient: "Farah Khan", doctor: "Dr. Mehta", department: "General Medicine", status: "Waiting" },
];
export const medicines = [
  { name: "Paracetamol 500 mg", sku: "MED-001", batch: "PCM-2408", stock: 420, expiry: "Feb 2027", status: "In stock" },
  { name: "Amoxicillin 250 mg", sku: "MED-002", batch: "AMX-1126", stock: 18, expiry: "Jan 2027", status: "Low stock" },
  { name: "Cetirizine 10 mg", sku: "MED-003", batch: "CTZ-0926", stock: 85, expiry: "Nov 2026", status: "Expiring soon" },
  { name: "ORS Sachet", sku: "MED-004", batch: "ORS-7821", stock: 210, expiry: "Jun 2027", status: "In stock" },
  { name: "Vitamin D3 60K", sku: "MED-005", batch: "VD3-8831", stock: 7, expiry: "Dec 2026", status: "Low stock" },
];
export const invoices = [
  { id: "INV-5021", patient: "Ananya Sharma", date: "26 Oct 2026", amount: "₹1,600", paid: "₹1,000", status: "Partially paid" },
  { id: "INV-5020", patient: "Rahul Mehta", date: "26 Oct 2026", amount: "₹800", paid: "₹800", status: "Paid" },
  { id: "INV-5019", patient: "Priya Patil", date: "25 Oct 2026", amount: "₹2,450", paid: "₹0", status: "Pending" },
  { id: "INV-5018", patient: "Farah Khan", date: "25 Oct 2026", amount: "₹1,200", paid: "₹1,200", status: "Paid" },
];
export const labOrders = [
  { id: "LAB-2081", patient: "Rahul Mehta", test: "Complete blood count", specimen: "SP-1028", ordered: "09:12 AM", status: "Processing" },
  { id: "LAB-2080", patient: "Priya Patil", test: "Lipid profile", specimen: "SP-1027", ordered: "08:55 AM", status: "Pending review" },
  { id: "LAB-2079", patient: "Farah Khan", test: "HbA1c", specimen: "SP-1026", ordered: "08:30 AM", status: "Verified" },
];
