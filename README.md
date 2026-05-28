# DS Iconic Real Estate — Website

Premium luxury real estate website for DS Iconic Real Estate, Narsipatnam.

## Tech Stack
- React 18 + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React + React Icons

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard
1. Push this project to GitHub
2. Go to vercel.com → New Project → Import repo
3. Framework: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click Deploy ✅

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Full-screen hero with stats
│   ├── About.tsx         # Company story + animated counters
│   ├── Projects.tsx      # 5 project cards with hover effects
│   ├── Services.tsx      # Dark glassmorphism service cards
│   ├── WhyChooseUs.tsx   # Sticky left + trust cards grid
│   ├── Locations.tsx     # Animated map with location pins
│   ├── Contact.tsx       # Form → WhatsApp + Google Map
│   ├── Footer.tsx        # Dark luxury footer
│   ├── WhatsAppFloat.tsx # Scroll-triggered floating button
│   ├── LoadingScreen.tsx # Animated brand intro
│   ├── LoadingGate.tsx   # sessionStorage-based gate
│   └── Counter.tsx       # Intersection observer counter
├── App.tsx
├── main.tsx
└── index.css

public/
└── favicon.svg

vercel.json  ← SPA routing config
```

## Business Details
- **Company**: DS Iconic Real Estate
- **Director**: D. Satyanarayana, M.Com
- **Phone**: 9398634198
- **WhatsApp**: +91 9398634198
- **Address**: Opp. Reliance Smart, Bank Colony, Narsipatnam – 531116
