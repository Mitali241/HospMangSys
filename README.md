# MediCore Hospital Management Frontend

Responsive demo frontend built with Next.js App Router, React, TypeScript, Tailwind CSS, and lucide-react. It includes hospital staff workflows and a separate patient portal. All visible patient and hospital information is synthetic demo data.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build`.

## Demo sign-in

Open `/login`, choose a role, and enter any email and a password of at least four characters. This is a UI demo, not real authentication.

- Hospital administrator — all staff modules
- Doctor — patients, appointments, clinical workspace, admissions, laboratory, AI assistant
- Nurse — patients, appointments, clinical workspace, admissions, laboratory
- Receptionist — patients, appointments, admissions, billing
- Pharmacist / Dispensary — patients, pharmacy, inventory
- Laboratory technician — patients, laboratory
- Billing executive — patients, appointments, billing, admissions
- Patient — a separate patient portal at `/portal/dashboard`

Patient demo email: `patient@medicore.demo`. The login page lets you select Patient.

## Patient experience included

- `/register` — browser-only demo registration form
- `/portal/dashboard` — upcoming appointment, report and bill overview
- `/portal/appointments` — review sample visits and request an appointment locally
- `/portal/records` — sample lab reports and visit summaries
- `/portal/prescriptions` — sample medication cards
- `/portal/billing` — sample invoices and a disabled/demo payment action
- `/portal/profile` — editable demo contact details

The staff and patient portals have separate navigation. Patient accounts are routed to the patient portal and the frontend allowlist prevents navigation into staff-only pages.

## Backend integration required

The frontend is not yet connected to a NestJS API, database, real AI service, email/SMS, file storage, or payment gateway. Demo registration stores only a browser-local profile and does not store or verify a password. Form submissions and sample values are not persisted to a hospital database.

Before handling real patients, implement backend authentication and authorization, password hashing, email/phone verification, account recovery, secure sessions or tokens, audit logs, encryption, consent and retention policies, and server-side ownership checks for every patient record. Derive the patient's identity from the authenticated session instead of trusting an ID sent by the browser. Enforce permissions on every API endpoint; frontend route guards are only for user experience and are not a security boundary. Do not use this demo for clinical decisions or real patient data.

## Environment

Copy `.env.example` to `.env.local` when connecting the backend. The example API base URL is `http://localhost:5000/api/v1`.
