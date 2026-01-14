# Technical Instructions

## Tech Stack (Landing Page)
- **Build Tool:** Vite
- **Framework:** React (or vanilla JS/TS)
- **Styling:** Tailwind CSS
- **Form Handling:** Simple POST to waitlist endpoint (Supabase, Formspree, or similar)

## Tech Stack (Future MVP)
- **Framework:** TBD (Next.js, SvelteKit, etc.)
- **Backend/Auth/DB:** Supabase
- **Encryption:** Signal Protocol (libsignal-protocol-javascript)

## Architecture Notes (Landing Page)
- Keep it simple and lightweight—static site, no SSR needed.
- Single page with smooth scroll to sections.
- Waitlist form should capture email (and optionally tier interest).

---

## Landing Page Blueprint

### Hero Section
- **Headline:** "One Platform for Your Classes, Privates, and Retreats."
- **Sub-headline:** "Stop juggling three different apps. Manage your entire studio—from high-energy group classes to intimate 1-on-1 sessions—on a platform built for privacy and peace of mind."
- **CTA:** [Join the Waitlist] or [See How It Works]

### Feature Sections
Present features as benefits, not specs. Show clean app UI examples for each.

| Feature | Marketing Angle |
|---------|-----------------|
| **Hybrid Scheduling** | "Universal Calendar" – Seamlessly toggle between your weekly class schedule and private client appointments without double-booking your space. |
| **Event Management** | "Retreats Made Simple" – Launch workshops and retreats with custom booking flows, deposit handling, and attendee lists built right in. |
| **Secure Messaging** | "Privacy-First Communication" – E2EE messaging that keeps your client's journey private. Discuss injuries, goals, and progress in a HIPAA/GDPR compliant space. |

### Trust & Compliance
- Display HIPAA and GDPR compliance badges visually
- Emphasize data ownership: "Your client data is yours. Even we can't see your private messages."
- Frame security as professionalism, not technical jargon

### Pricing Section
Use a pricing table to test which tier resonates. Instead of "Buy Now," use **"Reserve My Founding Rate"** buttons that capture email—this reveals which price point users find attractive.

| Tier | Price | Target | Includes |
|------|-------|--------|----------|
| **Solo Professional** | $19/mo | Independent teachers, massage therapists | 1-on-1 appointments, E2EE messaging, HIPAA compliance |
| **Unified Studio** | $49/mo (Founding Rate) | Small studios with 2–9 instructors | Class schedules + Private appointments + Retreat management + Team messaging |
| **Growing Studio** | $99/mo (Founding Rate) | Studios with 10+ instructors | Everything in Unified Studio, scaled for larger teams |

**Hook:** "Lock in Founding Member pricing for life."