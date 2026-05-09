# Northeast Executive Retreats

Luxury corporate retreat and executive off-site website. Built with Next.js 14, Tailwind CSS, Supabase, and Resend.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Supabase (Postgres)
- **Email:** Resend
- **Hosting:** Vercel
- **Analytics:** Google Analytics 4

---

## Local Setup

### 1. Clone & install

```bash
git clone https://github.com/YOUR_USERNAME/northeast-executive-retreats.git
cd northeast-executive-retreats
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in all values:

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase project → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase project → Settings → API (keep this secret) |
| `RESEND_API_KEY` | resend.com → API Keys |
| `FROM_EMAIL` | Your verified domain email on Resend |
| `NEXT_PUBLIC_GA_ID` | Google Analytics → Admin → Data Streams |

### 3. Set up Supabase tables

In your Supabase project, go to **SQL Editor** and run this:

```sql
-- Inquiry form submissions (from /contact)
CREATE TABLE inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  first_name TEXT NOT NULL,
  last_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  title TEXT,
  destination TEXT,
  group_size TEXT,
  budget TEXT,
  timing TEXT,
  goals TEXT,
  source TEXT DEFAULT 'contact_form'
);

-- Retreat Builder quiz leads (from /retreat-builder)
CREATE TABLE quiz_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  first_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  team_size TEXT,
  goal TEXT,
  setting TEXT,
  timing TEXT,
  matched_destination TEXT,
  source TEXT DEFAULT 'retreat_builder'
);

-- Disable public read access (leads are private)
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_leads ENABLE ROW LEVEL SECURITY;

-- Allow server-side inserts via service role (no policy needed — service role bypasses RLS)
```

### 4. Set up Resend

1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Add and verify your domain (or use `onboarding@resend.dev` for testing)
3. Copy your API key into `.env.local`

> **Note:** Until you verify a sending domain, use `onboarding@resend.dev` as `FROM_EMAIL` for local testing only.

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/northeast-executive-retreats.git
git push -u origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and click **Add New Project**
2. Import your GitHub repository
3. In **Environment Variables**, add all variables from `.env.local`
4. Click **Deploy**

### 3. Add your custom domain

1. In Vercel → your project → **Settings → Domains**
2. Add your domain (e.g., `northeastexecutiveretreats.com`)
3. Follow DNS instructions to point your domain to Vercel

---

## Project Structure

```
app/
  page.tsx                    # Home page
  layout.tsx                  # Root layout (Navbar, Footer, GA)
  globals.css                 # Global styles + Tailwind
  about/page.tsx              # About page
  contact/page.tsx            # Contact / inquiry form
  packages/
    page.tsx                  # All destinations overview
    [slug]/page.tsx           # Individual destination pages
  retreat-builder/page.tsx    # 4-step quiz (lead magnet)
  results/
    page.tsx                  # Results wrapper
    ResultsContent.tsx        # Quiz result display
  api/
    submit-inquiry/route.ts   # Contact form API
    submit-quiz/route.ts      # Quiz submission API

components/
  Navbar.tsx                  # Sticky nav with mobile menu
  Footer.tsx                  # Footer with SEO text + partnership

lib/
  destinations.ts             # All destination data + copy
  supabase.ts                 # Supabase client (public + admin)
  emails.ts                   # All Resend email templates
```

---

## Destinations

| Slug | Name | Tagline |
|---|---|---|
| `newport` | Newport, Rhode Island | The Gilded Age Strategy Summit |
| `maine` | Coastal Maine | The Maritime Reset |
| `berkshires` | The Berkshires, MA | The Creative Offsite |
| `boston` | Boston, MA | The Historic Leadership Summit |
| `vermont` | Vermont | The Mountain Recharge |

To add or edit a destination, update `lib/destinations.ts`.

---

## SEO

The site targets all combinations of:
- **States:** Maine, Vermont, Rhode Island, Massachusetts, New Hampshire, Connecticut
- **Keywords:** corporate retreat, executive retreat, corporate offsite, executive offsite

These keywords are embedded in:
- Meta titles and descriptions on every page
- The Footer SEO text block
- Individual destination page copy
- `app/layout.tsx` global keywords array

---

## Viewing Leads

All leads are stored in your Supabase database. To view them:

1. Go to your Supabase project
2. Click **Table Editor**
3. Open `inquiries` (contact form) or `quiz_leads` (retreat builder)

You'll also receive an email notification at `drewangers@gmail.com` and `carolinequinn518@gmail.com` for every new lead.

---

## Adding a Blog (for SEO)

To add a blog later for organic content:

1. Create `app/blog/page.tsx` (index)
2. Create `app/blog/[slug]/page.tsx` (individual posts)
3. Store posts as MDX files in `content/blog/` or in Supabase
4. Target long-tail keywords like "best corporate retreat venues Maine" or "how to plan an executive offsite New England"

---

## Questions?

Contact: drewangers@gmail.com
