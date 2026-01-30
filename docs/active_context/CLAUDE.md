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
- **Headline:** "Ardea"
- **Sub-headline:** "Simple booking, encrypted messaging, transparent fees. Built for the modern yoga community."
- **CTA:** [Join the Waitlist]

### Feature Sections
Present features as benefits, not specs. Show clean app UI examples for each.

| Feature | Marketing Angle |
|---------|-----------------|
| **Hybrid Scheduling** | "Universal Calendar" – Seamlessly toggle between your weekly class schedule and private client appointments without double-booking your space. |
| **Event Management** | "Retreats Made Simple" – Launch workshops and retreats with custom booking flows, deposit handling, and attendee lists built right in. |
| **Secure Messaging** | "Privacy-First Communication" – E2EE ephemeral messaging that keeps your client's journey private. Discuss injuries, goals, and progress knowing the data doesn't linger. |

### Privacy & Security Section
Frame privacy as **data eradication**, not compliance checkboxes. This is NOT the main focus of the landing page—just the supporting trust message.

**Key Messages:**
1. **Ephemeral by Design:** "Your clients' sensitive health disclosures live only as long as they need to—leaving no digital trail for hackers, third parties, or advertisers to exploit."
2. **Nothing to Sell:** "We don't just 'not sell' data—we built a system where there's nothing to sell."
3. **Own Your Data:** "When you need long-term records for insurance or peace of mind, use our One-Tap Vault Export. You own your data literally, locally, and permanently."

**Vault Export Copy:**
- "Your exported files aren't just raw data; they are Ardea-Ready. Open the app, 'Unlock Vault,' and your old messages and intake forms reappear exactly where they were. You keep the records; we keep the risk at zero."

**Do NOT include:** HIPAA/GDPR compliance badges or explicit compliance claims.

### Pricing Section
Use a pricing table to test which tier resonates. Simple CTAs link to the waitlist form.

| Tier | Price | Target |
|------|-------|--------|
| **The Independent** | $49/mo (Founding Rate) | You + a partner |
| **The Unified Studio** | $79/mo (Founding Rate) | Up to 5 users |
| **The Cooperative** | $149/mo (Founding Rate) | Your entire staff |

**Hook:** "Lock in your founding rate for life. Join now and never pay more as we grow."