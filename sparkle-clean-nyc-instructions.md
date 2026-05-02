# Commercial Cleaning Service Website - Next.js 14 Project

## Project Overview
Build a demo Next.js 14 website for a commercial cleaning service in NYC. This is a learning project focused on understanding SEO, Google Tag Manager, Google Analytics, and Data Layer implementation. The website should be production-ready in terms of structure and SEO, but without backend/database functionality.

## Tech Stack
- Next.js 14+ (App Router)
- Tailwind CSS
- TypeScript
- No unnecessary libraries (keep it lightweight and fast)

## Required Skills to Use
- frontend-design (for distinctive UI/UX)
- seo (for comprehensive SEO implementation)
- website-copy-specialist (for compelling, SEO-optimized copy)

## Site Structure & Pages

### Navigation Order (Desktop & Mobile)
1. Home
2. Services
3. Book Now
4. Blog
5. Contact Us

### Page Requirements

#### 1. Home Page (`/`)
- Hero section with primary CTA: "Get a Free Quote" (links to /contact)
- Brief intro about the cleaning service
- Featured services overview (3-4 cards with icons)
- Why choose us section (trust signals, benefits)
- Testimonials section (2-3 fake testimonials)
- Final CTA section
- Sticky header with "Call Now" and "Book Service" CTAs

#### 2. Services Page (`/services`)
- List all cleaning services offered:
  - Office Cleaning
  - Residential Cleaning
  - Deep Cleaning
  - Move-in/Move-out Cleaning
  - Post-Construction Cleaning
  - Carpet & Upholstery Cleaning
- Each service should have its own detail page at `/services/[slug]`
- Service detail pages include: description, what's included, pricing info (range), CTA to book

#### 3. Book Now Page (`/book`)
- Booking form with fields:
  - Full Name (required)
  - Email (required)
  - Phone (required)
  - Service Type (dropdown with all services, required)
  - Preferred Date (date picker, required)
  - Preferred Time (time picker, required)
  - Address (required)
  - Special Instructions (optional, textarea)
  - Submit button: "Book My Cleaning"
- On submit: Show success popup/toast message (no actual backend)
- Form validation with clear error messages

#### 4. Contact Us Page (`/contact`)
- Contact form with fields:
  - Full Name (required)
  - Email (required)
  - Phone (required)
  - Service Interested In (dropdown, optional)
  - Message (required, textarea)
  - Submit button: "Get Free Quote"
- Contact information section (fake NYC address, phone, email, hours)
- On submit: Show success popup/toast message (no actual backend)
- Form validation

#### 5. Blog Page (`/blog`)
- Blog listing page showing 3-5 sample blog posts
- Each post card: featured image, title, excerpt, read time, date, "Read More" link
- Individual blog post pages at `/blog/[slug]`
- Sample blog posts (create 3-5 with SEO-optimized content):
  - "Top 10 Benefits of Professional Office Cleaning in NYC"
  - "How Often Should You Deep Clean Your Home?"
  - "Green Cleaning: Eco-Friendly Solutions for Your Business"
  - "Moving Out? Your Complete Cleaning Checklist"
  - "The Difference Between Commercial and Residential Cleaning"

## Primary CTAs & Data Layer Events

### Three Primary CTAs (track all clicks):
1. **Get a Free Quote** → Links to `/contact` → Event: `cta_click` with `cta_type: 'get_quote'`
2. **Call Now** → `tel:+15551234567` link → Event: `cta_click` with `cta_type: 'call_now'`
3. **Book Service** → Links to `/book` → Event: `cta_click` with `cta_type: 'book_service'`

### Additional Events to Track:
- **Page Views:** Automatic on each route change
  ```javascript
  dataLayer.push({
    event: 'page_view',
    page_path: window.location.pathname,
    page_title: document.title
  });
  ```

- **Form Submissions:**
  - Contact form submit: `form_submit` with `form_type: 'contact'`
  - Booking form submit: `form_submit` with `form_type: 'booking'`

- **Service Page Visits:** Track when user visits individual service pages
  ```javascript
  dataLayer.push({
    event: 'service_view',
    service_name: 'Office Cleaning' // dynamic
  });
  ```

## Data Layer Implementation

### Global Setup
- Initialize `dataLayer` array in root layout before GTM script
- Add GTM script tags in root layout with PLACEHOLDER GTM ID: `GTM-XXXXXXX`
- Create a reusable utility function for pushing events: `/lib/gtm.ts`

### Example Event Structure:
```typescript
// lib/gtm.ts
export const trackEvent = (eventName: string, eventParams: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
      timestamp: new Date().toISOString()
    });
  }
};
```

### GTM Container Code Placement
- GTM `<script>` in `<head>` (root layout)
- GTM `<noscript>` immediately after opening `<body>` tag (root layout)
- Use placeholder ID that I'll replace: `GTM-XXXXXXX`

## SEO Requirements

### Meta Tags (Every Page)
- Unique `<title>` tag (50-60 characters)
- Unique meta description (150-160 characters)
- Open Graph tags (og:title, og:description, og:image, og:url, og:type)
- Twitter Card tags
- Canonical URL
- Use Next.js 14 Metadata API for all meta tags

### JSON-LD Structured Data
- **Home Page:** LocalBusiness schema with:
  - Business name: "Sparkle Clean NYC"
  - Address: Fake NYC address
  - Phone: +1 (555) 123-4567
  - Service area: New York City
  - Opening hours
  - Services offered
  - AggregateRating (fake rating)

- **Service Pages:** Service schema for each service

- **Blog Posts:** Article schema with:
  - Headline
  - Author
  - DatePublished
  - DateModified
  - Image
  - Publisher info

### URLs & Routing
- Clean, semantic URLs (no query parameters)
- Services: `/services/office-cleaning`, `/services/residential-cleaning`, etc.
- Blog: `/blog/benefits-of-professional-office-cleaning`, etc.

### sitemap.xml
- Generate dynamic sitemap at `/sitemap.xml`
- Include all static pages and dynamic routes (services, blog posts)
- Use Next.js 14 sitemap generation feature (`app/sitemap.ts`)

### robots.txt
- Create at `app/robots.ts`
- Allow all crawlers
- Reference sitemap location

### Additional SEO Elements
- Semantic HTML5 tags (header, nav, main, article, section, footer)
- Proper heading hierarchy (H1 → H6, only one H1 per page)
- Alt text for ALL images
- Internal linking between pages
- Breadcrumbs on service and blog detail pages
- Fast loading (optimize images, minimal JS)

## Images & Icons

### Images
- Use Unsplash Source API for free stock images:
  - `https://images.unsplash.com/photo-[ID]?w=800&q=80`
  - Use Next.js `<Image>` component with width, height, and alt props
  - Pick relevant Unsplash photo IDs for: hero, services, team, blog posts
- All images must have descriptive alt text for SEO and accessibility

### Icons
- Use Iconify Design icons: https://iconify.design/
- Install package: `@iconify/react`
- Use relevant icon sets:
  - `mdi:` (Material Design Icons) for UI elements
  - `heroicons:` for navigation
  - `fluent:` for service icons
- Use for: services, features/benefits, contact info, social media, mobile nav

## Mobile Responsiveness
- Mobile-first approach with Tailwind CSS
- Responsive navigation with hamburger menu on mobile (no extra library, build with useState)
- Touch-friendly CTAs (minimum 44px tap targets)
- Readable font sizes (minimum 16px base)
- Proper spacing and padding on all breakpoints
- Forms optimized for mobile input (correct input types: tel, email, date, time)
- Test all breakpoints: mobile (375px), tablet (768px), desktop (1024px+)

## Form Handling

### Client-Side Only (No Backend)
Both forms should:
1. Validate all required fields on submit
2. Show inline error messages below each invalid field
3. On successful submit: Push data layer event
4. Show success popup/modal with confirmation message
5. Reset form after successful submission
6. Use `event.preventDefault()` — do not submit to any server

### Success Messages
- **Contact Form:** "Thank you! We'll get back to you within 24 hours with your free quote."
- **Booking Form:** "Your cleaning is booked! We'll send a confirmation email to you shortly."

### Form Validation Rules
- Full Name: required, minimum 2 characters
- Email: required, valid email format
- Phone: required, valid US phone number format
- Date: required, must be a future date
- Address: required, minimum 10 characters
- Message: required, minimum 20 characters
- Show red border + error text on invalid fields
- Clear errors as user corrects input

## Performance Optimization
- Use Next.js `<Image>` component for all images (automatic optimization)
- Lazy load images below the fold (`loading="lazy"`)
- Tailwind CSS with purge (default in production)
- No unnecessary npm packages — only install what is truly needed
- Use `next/font` for Google Fonts (Inter or Poppins)
- Prefetch important page links with Next.js `<Link>`

## Typography & Design Direction
- Font: Inter or Poppins via `next/font/google`
- Color Palette:
  - Primary: Deep Blue (#1E3A5F) — trust, professionalism
  - Accent: Fresh Green (#2ECC71) — cleanliness, eco-friendly
  - Neutral: Light Gray backgrounds (#F8FAFC)
  - Text: Dark Gray (#1A1A2E)
- Design style: Clean, modern, professional — avoid generic/corporate feel
- Use generous white space
- Consistent border-radius (rounded-xl for cards)
- Subtle shadows for depth (shadow-md)
- Accessible color contrast (WCAG AA minimum)
- Smooth hover transitions on all interactive elements

## Analytics Placeholder Setup
- Google Tag Manager placeholder: `GTM-XXXXXXX`
- Add GTM script only in root layout (`app/layout.tsx`) — do NOT add a separate GA4 script
- GA4 (and any other tags like Google Ads, Meta Pixel) will be configured inside the GTM dashboard, not in the website code
- Declare `window.dataLayer` TypeScript type in `/types/gtm.d.ts`

> **Why only GTM?** GTM is the single container for all tags. Adding GA4 directly to the code alongside GTM would cause double tracking. The website only needs the GTM ID — everything else is managed from the GTM dashboard.

## File Structure
```
/app
  layout.tsx                    ← Root layout: GTM script only, fonts, global meta
  page.tsx                      ← Home page
  /services
    page.tsx                    ← Services listing
    /[slug]
      page.tsx                  ← Individual service detail
  /book
    page.tsx                    ← Booking form page
  /contact
    page.tsx                    ← Contact / Get Free Quote page
  /blog
    page.tsx                    ← Blog listing page
    /[slug]
      page.tsx                  ← Individual blog post
  sitemap.ts                    ← Dynamic sitemap generation
  robots.ts                     ← robots.txt generation

/components
  Header.tsx                    ← Sticky nav with all 3 CTAs, mobile hamburger
  Footer.tsx                    ← Links, contact info, social icons
  CTAButton.tsx                 ← Reusable CTA with data layer tracking built in
  ServiceCard.tsx               ← Card component for services listing
  BlogCard.tsx                  ← Card component for blog listing
  ContactForm.tsx               ← Contact/quote form with validation
  BookingForm.tsx               ← Booking form with validation
  SuccessModal.tsx              ← Popup shown after form submission
  Breadcrumb.tsx                ← Breadcrumb nav for service/blog detail pages
  JsonLd.tsx                    ← Reusable JSON-LD structured data component

/lib
  gtm.ts                        ← trackEvent() utility for data layer pushes
  services.ts                   ← Static services data (name, slug, description, etc.)
  blog-posts.ts                 ← Static blog post data (title, slug, content, etc.)

/types
  gtm.d.ts                      ← TypeScript declaration for window.dataLayer

/public
  (empty — no local images needed)
```

## Static Data Files

### `/lib/services.ts`
Export an array of service objects:
```typescript
export const services = [
  {
    slug: 'office-cleaning',
    name: 'Office Cleaning',
    shortDescription: '...',
    fullDescription: '...',
    icon: 'mdi:office-building',
    image: 'https://images.unsplash.com/...',
    priceRange: '$150 – $500',
    includes: ['item1', 'item2', ...],
  },
  // ... all 6 services
];
```

### `/lib/blog-posts.ts`
Export an array of blog post objects:
```typescript
export const blogPosts = [
  {
    slug: 'benefits-of-professional-office-cleaning',
    title: 'Top 10 Benefits of Professional Office Cleaning in NYC',
    excerpt: '...',
    content: '...', // Full HTML or markdown content
    image: 'https://images.unsplash.com/...',
    author: 'Sarah Mitchell',
    publishedAt: '2024-03-15',
    readTime: '5 min read',
    category: 'Commercial Cleaning',
  },
  // ... all 5 blog posts
];
```

## Contact Information (Fake Data)
- **Business Name:** Sparkle Clean NYC
- **Address:** 123 Clean Street, Suite 4B, New York, NY 10001
- **Phone:** +1 (555) 123-4567
- **Email:** info@sparklecleannyc.com
- **Hours:** Mon–Fri 8:00am–6:00pm | Sat 9:00am–4:00pm | Sun Closed
- **Service Areas:** Manhattan, Brooklyn, Queens, The Bronx, Staten Island

## Google Tag Manager & Analytics Notes

### How It Should Work (for learning reference)
1. `dataLayer` array is initialized globally before GTM loads
2. GTM script loads and reads `dataLayer`
3. Every CTA click, form submit, page view → pushes an event object to `dataLayer`
4. GTM picks up these events via triggers configured in GTM dashboard
5. GTM fires GA4 tags based on those triggers
6. GA4 records the events in Google Analytics

### Data Layer Event Reference Table
| Event Name     | Trigger                        | Key Parameters                          |
|----------------|--------------------------------|-----------------------------------------|
| `page_view`    | Every route change             | `page_path`, `page_title`               |
| `cta_click`    | Any CTA button click           | `cta_type`, `cta_location`              |
| `form_submit`  | Form submission (success)      | `form_type`, `form_id`                  |
| `service_view` | Service detail page load       | `service_name`, `service_slug`          |

## Important Notes
- This is for LEARNING purposes only — no real backend
- Forms use `preventDefault()` and show modal confirmations only
- All GTM ID is a placeholder — replace before connecting to real GTM account
- Keep bundle size small — no UI libraries (no shadcn, no MUI, no Radix)
- Only allowed extra package: `@iconify/react` for icons
- All copy should be SEO-optimized, targeting NYC cleaning service keywords
- Prioritize Core Web Vitals: fast LCP, low CLS, good FID/INP
- Use server components where possible, client components only where interactivity is needed

## Deliverables Checklist
- [ ] All 5 pages functional and styled
- [ ] 6 individual service detail pages
- [ ] 5 individual blog post pages
- [ ] Header with sticky nav and 3 CTAs
- [ ] Footer with links and contact info
- [ ] Contact form with validation and success modal
- [ ] Booking form with validation and success modal
- [ ] Data layer events firing for all 3 CTAs, form submits, page views, service views
- GTM placeholder script in root layout (`app/layout.tsx`) — no separate GA4 script
- [ ] JSON-LD structured data on all relevant pages
- [ ] Open Graph + Twitter Card meta tags on all pages
- [ ] Dynamic sitemap.xml
- [ ] robots.txt
- [ ] Mobile-responsive at all breakpoints
- [ ] Breadcrumbs on service and blog detail pages
- [ ] README.md with setup and GTM/GA4 replacement instructions
