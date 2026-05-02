# Sparkle Clean NYC

Next.js 16 website for a fictional NYC cleaning service. Built as a learning project for Google Tag Manager, GA4, and Data Layer implementation.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16.2.4 — App Router, `src/` directory |
| Styling | Tailwind CSS v4 — `@theme inline` in `globals.css`, no config file |
| Icons | `@iconify/react` |
| Font | Poppins via `next/font/google` |
| Analytics | GTM container `GTM-TFM6V6C2` wired in `layout.tsx` |

## Local Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve production build
```

## GTM / Analytics Setup

### Step 1 — Replace the GTM ID

Open [src/app/layout.tsx](src/app/layout.tsx) and change:

```ts
const GTM_ID = 'GTM-XXXXXXX';
```

to your real GTM container ID (e.g. `GTM-ABC1234`).

### Step 2 — Google Search Console verification

In the same file, replace the placeholder in `metadata.verification.google`:

```ts
verification: {
  google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN',
},
```

Get your token from: Google Search Console → Settings → Ownership verification → HTML tag method.

### Step 3 — Submit the sitemap

After deploying, submit `https://aniktests.online/sitemap.xml` in Google Search Console.

## Data Layer Events

All events are pushed via `src/lib/gtm.ts` → `trackEvent(eventName, params)`.

| Event | When it fires | Key parameters |
| --- | --- | --- |
| `cta_click` | Any CTAButton click | `cta_type`, `cta_location` |
| `service_view` | Service detail page load | `service_name`, `service_slug` |
| `blog_post_view` | Blog post page load | `post_title`, `post_slug`, `post_category` |
| `contact_form_submit` | Valid contact form submit | `service_type`, `form_location` |
| `booking_form_submit` | Valid booking form submit | `service_type`, `preferred_date`, `preferred_time`, `form_location` |
| `form_validation_error` | Submit with invalid fields | `form_type`, `error_fields` |
| `form_success` | Success modal opens | `form_type` |

In GTM, create a **Data Layer Variable** for each parameter you want to use as a GA4 event parameter or trigger condition.

## Form Backend

`ContactForm` and `BookingForm` currently simulate submission with a `setTimeout`. To connect a real backend:

1. Replace the `// TODO: replace with real API call` block in each component with a `fetch()` to your API route or third-party service (e.g. Resend, Formspree, or a Next.js Route Handler at `src/app/api/contact/route.ts`).
2. Handle errors and set an error state to show the user a failure message instead of the success modal.

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx          # Root layout — GTM, Poppins, WebSite JSON-LD
│   ├── page.tsx            # Home page — LocalBusiness JSON-LD
│   ├── globals.css         # Tailwind v4 tokens + .blog-content prose styles
│   ├── sitemap.ts          # Programmatic XML sitemap
│   ├── robots.ts           # robots.txt
│   ├── services/
│   │   ├── page.tsx        # /services listing
│   │   └── [slug]/page.tsx # /services/[slug] — SSG, BreadcrumbList + Service JSON-LD
│   ├── blog/
│   │   ├── page.tsx        # /blog listing — BreadcrumbList JSON-LD
│   │   └── [slug]/page.tsx # /blog/[slug] — SSG, Article JSON-LD
│   ├── contact/page.tsx    # /contact — ContactPage JSON-LD
│   └── book/page.tsx       # /book — Service JSON-LD
├── components/
│   ├── Header.tsx          # Sticky nav with mobile dropdown
│   ├── Footer.tsx          # 4-column footer
│   ├── CTAButton.tsx       # Tracks cta_click on every click
│   ├── JsonLd.tsx          # Renders any object as application/ld+json
│   ├── Breadcrumb.tsx      # Visual breadcrumb with Home prefix
│   ├── ServiceCard.tsx     # Card for service listing grid
│   ├── ServiceViewTracker.tsx  # Fires service_view on mount
│   ├── BlogCard.tsx        # Card for blog listing grid
│   ├── BlogPostViewTracker.tsx # Fires blog_post_view on mount
│   ├── ContactForm.tsx     # Validated contact form
│   ├── BookingForm.tsx     # Validated booking form with date picker
│   └── SuccessModal.tsx    # Post-submit confirmation overlay
├── lib/
│   ├── gtm.ts              # trackEvent() helper
│   ├── services.ts         # Service data + getServiceBySlug()
│   └── blog-posts.ts       # Blog post data + getBlogPostBySlug()
└── types/
    └── gtm.d.ts            # window.dataLayer type extension
```

## Brand Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `bg-primary` | `#1E3A5F` | Dark blue — headers, nav |
| `bg-accent` | `#2ECC71` | Green — CTAs, highlights |
| `bg-surface` | `#F8FAFC` | Off-white — page backgrounds |
| `text-text` | `#1A1A2E` | Near-black — body copy |
| `text-muted` | `#475569` | Gray — secondary text |
