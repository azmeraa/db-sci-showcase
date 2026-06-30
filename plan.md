# Portfolio Implementation Plan - Azmera Abebe Teshale

A professional, responsive portfolio website for a Database Administrator and Data Scientist, built with React, Tailwind CSS, and Lucide icons.

## Scope Summary
- **Hero Section:** Role, portrait, CTA, and heading.
- **About Me:** 10+ years experience, transition to Data Science.
- **Expertise & Skills:** Icon-driven bullet points for DB expertise and visual skill bars/chips for technical tools.
- **Services:** Grid of cards for DBA, tuning, backup/recovery, etc.
- **Experience:** Chronological timeline of roles (Hibret Bank, Ministry of Revenue, AA Housing).
- **Education & Certifications:** Formatted blocks for BS in IT and list of professional certifications.
- **Projects:** Interactive cards for FIFA 21 and Banking data analysis.
- **Contact:** Functional form, direct contact info, and social links.

## Affected Areas
- `src/App.tsx`: Main entry and layout.
- `src/components/`: New components for sections (Hero, About, Experience, Skills, Projects, Contact).
- `src/index.css`: Global styles and custom animations (if any).

## Assumptions & Open Questions
- **Images:** Using placeholders for the professional portrait and project images.
- **Form:** Contact form will be client-side only (log to console or show success message).
- **Icons:** Using `lucide-react` for all iconography.

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the core structure and all UI components.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** Complete implementation.
- **Scope:** 
    - Create a modern, responsive layout in `App.tsx`.
    - Implement a `Navbar` with smooth scroll links.
    - **Hero:** Use a clean layout with a placeholder for the portrait. Heading: "Azmera Abebe Teshale". Subtitle: "Database Administrator & Data Scientist".
    - **About:** Multi-column layout describing 10+ years of experience.
    - **Experience:** Create a vertical timeline for Hibret Bank, Ethiopian Ministry of Revenue, and AA Housing.
    - **Skills:** Use `Badge` components or custom skill bars for Oracle 12c/19c, SQL Server, Python, RMAN, etc.
    - **Services:** Grid of 5 cards with Lucide icons (Database, Activity, Shield, Code, BarChart).
    - **Projects:** Cards for "FIFA 21 Data Analysis" and "Banking Data Analysis".
    - **Certifications:** Grid or list including Oracle DBA, Data Guard, RAC, PL/SQL, etc.
    - **Contact:** A form with Name, Email, Message + side info (Email: azmeraabebe26@gmail.com, Phone: +251918664908).
- **Files:** `src/App.tsx`, `src/components/`, `src/index.css`
- **Depends on:** none
- **Acceptance criteria:**
    - Fully responsive (mobile/desktop).
    - All sections mentioned in user request are present.
    - Interactive elements (links, form) are styled and functional.
    - Visual consistency using the provided Tailwind theme.

**Do not dispatch:**
- quick_fix_engineer (not needed for initial build).
- supabase_engineer (no database requested).
