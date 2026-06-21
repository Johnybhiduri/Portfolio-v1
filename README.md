# 🚀 AI/Fullstack Developer Portfolio

A modern, dark-mode-first developer portfolio built with **React + TypeScript + Tailwind CSS + Framer Motion**. Everything on the page — your name, experience, projects, skills, education — comes from a **single data file**. You don't need to touch any component code to make this your own.

---

## ✨ Features

- 🌙 **Dark mode by default**, with a toggle (remembers your choice)
- 🧭 **Scroll-spy navbar** — highlights the section you're currently viewing
- ⌨️ **Typewriter hero** — rotates through your job titles/roles automatically
- 📊 **Honest skills section** — proficiency shown as tiers (Familiar → Expert) with icons, not fake "97%" progress bars
- 🏢 **Smart experience timeline** — multiple roles at the same company automatically collapse into one card with a promotion timeline, instead of repeating the company name
- 🖼️ **Project detail modals** — click any project to see the full story: your specific contributions, tech used, and a screenshot carousel (if you provide multiple images)
- 🔗 **Smart links** — project titles, GitHub buttons, company names, and certificate links automatically appear/disable depending on whether you've provided a URL
- 🎓 **Education detail modals** — show what you actually learned, plus links to your certificate or school
- 📧 **Working contact form** — opens the visitor's email client with their message pre-filled (no fake backend, no fake "Sent!" message)
- 🎨 **Proper brand icons** everywhere (GitHub, LinkedIn, tech stack icons) via `react-icons`

---

## 📁 Project Structure

```
src/
├── data/
│   ├── resumeData.ts     ← ✏️ EDIT THIS FILE to update your content
│   └── types.ts          ← TypeScript shapes (only edit if adding new fields)
├── utils/
│   └── icons.tsx         ← maps tech/social names → icons automatically
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Summary.tsx
    ├── Skills.tsx
    ├── Experience.tsx
    ├── Projects.tsx
    ├── Education.tsx
    ├── Achievements.tsx
    ├── Contact.tsx
    ├── SectionHeading.tsx   (shared heading used by every section)
    ├── TechTag.tsx          (shared tech badge with icon)
    ├── Modal.tsx            (shared popup used by both modals below)
    ├── ImageCarousel.tsx    (screenshot slider inside the project modal)
    ├── ProjectModal.tsx
    └── EducationModal.tsx
```

---

## 🛠️ Setup

1. Drop the `src/` folder into your existing React + Tailwind + Vite (or CRA) project, overwriting the matching files.
2. Make sure these packages are installed:
   ```bash
   npm install framer-motion react-icons
   ```
3. Your `tailwind.config.js` needs `darkMode: 'class'`.
4. Run your dev server as usual (`npm run dev`).

---

## ✏️ How to Customize — Everything lives in `src/data/resumeData.ts`

Open that file. It's one big object. Below is every field, section by section.

### Top-level info
| Field | Required? | What it does |
|---|---|---|
| `name` | ✅ | Your name, shown in the Hero |
| `title` | ✅ | Fallback tagline if `roles` isn't set |
| `roles` | optional | Array of strings the Hero "types out" one after another, e.g. `['AI Engineer', 'Fullstack Developer']`. Leave it out to just show `title` statically. |
| `email`, `phone`, `location` | ✅ | Shown in the Contact section |
| `summary` | ✅ | Your bio — shown in Hero and "About Me" |
| `resumeLink` | ✅ | Path/URL to your downloadable resume PDF |
| `yearsExperience` | optional | Shows a stat under the Hero (e.g. "3+ Years Experience"). Omit to hide it. |
| `availableForWork` | optional | `true` shows a pulsing "Open to new opportunities" badge in the Hero |
| `socials` | ✅ | Array of `{ platform: 'GitHub', url: '...' }`. Supported platforms with proper icons: `GitHub`, `LinkedIn`, `Google`, `Twitter`/`X`, `Email`. Unknown platforms get a generic link icon — no crash. |

### Skills
```ts
{ name: 'Python', category: 'Languages', level: 'Expert', years: 3 }
```
- `level` must be one of: `'Familiar' | 'Proficient' | 'Advanced' | 'Expert'` — shown as a 4-bar indicator, not a percentage.
- `category` groups skills into cards (e.g. "Languages", "Backend & APIs"). Add a new category just by typing a new string — no extra setup needed.
- `years` is optional, shown as a small caption.
- The icon is picked automatically based on the skill `name` (see "Adding new tech icons" below).

### Experience
```ts
{
  role: 'Software Engineer II',
  company: 'NetraLabs',
  companyUrl: 'https://netralabs.ai', // optional — leave '' to keep it plain text
  period: 'Jan 2025 – Present',
  description: ['Bullet point 1', 'Bullet point 2'],
  tech: ['Python', 'FastAPI'],
}
```
- ⚠️ **Important:** If you held multiple roles at the **same company**, give them the **exact same `company` string** and list them consecutively (which is how a resume normally reads anyway). They'll automatically merge into one card with a growth timeline. If the spelling differs even slightly (e.g. `"NetraLabs"` vs `"NetraLabs Inc."`), they'll show as separate companies.
- `companyUrl` empty/omitted → company name shows as plain text instead of a link.

### Projects
```ts
{
  title: 'Project Name',
  description: 'Short blurb for the card.',
  fullDescription: 'Longer write-up shown in the modal.', // optional, falls back to description
  contributions: ['What you specifically built', 'Another contribution'], // optional
  tech: ['React', 'FastAPI'],
  link: 'https://my-live-demo.com',   // optional — title becomes a link if set
  github: 'https://github.com/you/repo', // optional — Code button disables if empty
  images: ['/projects/shot1.png', '/projects/shot2.png'], // optional, 0/1/many all work
}
```
- No `link` → project title is plain (non-clickable) text.
- No `github` → the "Code" button is greyed out and unclickable instead of a dead link.
- `images`: 0 images shows a placeholder icon, 1 shows a static image, 2+ shows an arrows+dots carousel. Put image files in your `public/` folder and reference them like `/projects/shot1.png`.

### Education
```ts
{
  degree: 'PG Diploma, AI & Machine Learning',
  institution: 'UT Austin',
  institutionUrl: 'https://...', // optional — institution becomes a link if set
  certificateUrl: 'https://...', // optional — adds a "View Certificate" button in the modal
  period: 'Sep 2022 – Aug 2023',
  grade: 'Optional grade/focus line',
  description: 'Longer paragraph shown in the modal.',
  learnings: ['Key thing you learned', 'Another one'],
}
```

### Achievements
```ts
{ title: 'Award Name', description: '...', year: '2025', link: '' } // link optional, adds "View proof →"
```

---

## 🎨 Adding a new tech icon

Open `src/utils/icons.tsx`. There's a list called `techIconRules` — each entry matches keywords in a skill/tech name to an icon. To add support for, say, "Kubernetes":

```ts
import { SiKubernetes } from 'react-icons/si';
// ...
{ keywords: ['kubernetes', 'k8s'], icon: SiKubernetes },
```

If no rule matches, it falls back to a generic `<FaCode />` icon — nothing breaks.

---

## 🧩 Tech Stack

- React + TypeScript
- Tailwind CSS (with `dark:` variants)
- Framer Motion (animations, modals, page transitions)
- react-icons (`fa6` and `si` icon sets)

---

## ❓ FAQ

**Q: I added a project but the screenshot carousel doesn't show — why?**
A: Make sure `images` has 2 or more valid paths. A single image just shows statically (no need for arrows).

**Q: My two jobs at the same company show as separate cards.**
A: Their `company` strings must match **exactly** (case and spelling) and be listed back-to-back in the array.

**Q: How do I change the accent color?**
A: It uses Tailwind's `primary-*` color scale (e.g. `primary-500`, `primary-600`). Define/override `primary` in your `tailwind.config.js` `theme.colors`.

**Q: The contact form doesn't actually send an email from my server.**
A: Correct — there's no backend. It opens the visitor's own email app with the message pre-filled, which is honest and works with zero setup. If you want true server-side sending, wire the `handleSubmit` in `Contact.tsx` to your own API/Formspree/EmailJS endpoint.