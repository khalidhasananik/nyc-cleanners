import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import CTAButton from '@/components/CTAButton';
import JsonLd from '@/components/JsonLd';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services NYC | Sparkle Clean',
  description:
    "NYC's trusted cleaning service for homes and businesses. Serving Manhattan, Brooklyn, Queens, The Bronx & Staten Island. 4.9★ rated. Free quotes, same-day service available.",
  openGraph: {
    title: 'Sparkle Clean NYC | Professional Cleaning Services',
    description:
      "NYC's trusted cleaning service. 4.9★ rated, 500+ happy clients, serving all 5 boroughs. Get your free quote today.",
    url: 'https://aniktests.online',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Sparkle Clean NYC — professional cleaning services in New York City',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sparkle Clean NYC | Professional Cleaning Services',
    description:
      "NYC's trusted cleaning service. 4.9★ rated, 500+ happy clients, serving all 5 boroughs.",
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    ],
  },
  alternates: {
    canonical: 'https://aniktests.online',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sparkle Clean NYC',
  description:
    'Professional commercial and residential cleaning services serving all five New York City boroughs.',
  url: 'https://aniktests.online',
  telephone: '+15551234567',
  email: 'info@aniktests.online',
  image:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Clean Street, Suite 4B',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10001',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.7505,
    longitude: -73.9965,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '16:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Manhattan' },
    { '@type': 'City', name: 'Brooklyn' },
    { '@type': 'City', name: 'Queens' },
    { '@type': 'City', name: 'The Bronx' },
    { '@type': 'City', name: 'Staten Island' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cleaning Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Office Cleaning' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Residential Cleaning' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Deep Cleaning' },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Move-In/Move-Out Cleaning',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Post-Construction Cleaning',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Carpet & Upholstery Cleaning',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '247',
  },
  sameAs: [
    'https://www.facebook.com/sparklecleannyc',
    'https://www.instagram.com/sparklecleannyc',
  ],
};

const featuredServices = services.slice(0, 4);

const trustSignals = [
  {
    icon: 'mdi:shield-check',
    title: 'Licensed & Fully Insured',
    description:
      "Complete peace of mind — we carry comprehensive liability and workers' comp coverage on every job.",
  },
  {
    icon: 'mdi:leaf',
    title: 'Eco-Friendly Products',
    description:
      'Safe for kids, pets, and the planet. We use certified green cleaning solutions at no extra cost.',
  },
  {
    icon: 'mdi:account-check',
    title: 'Background-Checked Staff',
    description:
      'Every team member passes rigorous background checks and in-person vetting before entering your space.',
  },
  {
    icon: 'mdi:trophy',
    title: '100% Satisfaction Guarantee',
    description:
      "Not happy? We'll come back and make it right — no questions asked, no extra charge.",
  },
  {
    icon: 'mdi:calendar-clock',
    title: 'Flexible Scheduling',
    description:
      'Early mornings, evenings, weekends. We work around your schedule, not the other way around.',
  },
  {
    icon: 'mdi:city-variant',
    title: 'All 5 NYC Boroughs',
    description:
      'Manhattan, Brooklyn, Queens, The Bronx, and Staten Island — fully covered by our teams.',
  },
];

const stats = [
  { value: '4.9★', label: 'Average Rating', icon: 'mdi:star' },
  { value: '500+', label: 'Happy Clients', icon: 'mdi:account-group' },
  { value: '8+', label: 'Years in Business', icon: 'mdi:calendar-check' },
  { value: '5', label: 'NYC Boroughs', icon: 'mdi:city' },
];

const testimonials = [
  {
    name: 'Jennifer M.',
    location: 'Upper East Side, Manhattan',
    role: 'Office Manager',
    rating: 5,
    text: "Sparkle Clean NYC has transformed our Midtown office. They're reliable, thorough, and our team notices the difference every single morning. After trying three other cleaning services, we've finally found a team we can actually count on.",
    initials: 'JM',
  },
  {
    name: 'David K.',
    location: 'Park Slope, Brooklyn',
    role: 'Homeowner',
    rating: 5,
    text: "Honestly the best home cleaning service I've used in 10 years of living in New York. They cleaned things I didn't even think to mention — inside the microwave, tops of the door frames, everything. Worth every single penny.",
    initials: 'DK',
  },
  {
    name: 'Rachel T.',
    location: 'Tribeca, Manhattan',
    role: 'Former Resident',
    rating: 5,
    text: 'Used Sparkle Clean for my move-out clean and got my full security deposit back — $3,800 — which my landlord said never happens. I cannot recommend them enough. Absolute professionals from start to finish.',
    initials: 'RT',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* ===== Hero ===== */}
      <section
        className="relative bg-primary overflow-hidden"
        aria-label="Hero"
      >
        <div className="hero-pattern absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary to-primary-dark pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left: copy */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm">
                <Icon icon="mdi:sparkles" className="h-4 w-4" />
                Trusted by 500+ NYC Clients Since 2018
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Professional Cleaning
                <br />
                Services in{' '}
                <span className="text-accent">New York City</span>
              </h1>

              <p className="text-lg text-blue-200 max-w-xl leading-relaxed">
                From Midtown offices to Brooklyn apartments — Sparkle Clean NYC
                delivers consistently exceptional cleaning across all five
                boroughs, on your schedule, to your standards.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: 'mdi:star', text: '4.9★ Rating' },
                  { icon: 'mdi:account-group', text: '500+ Clients' },
                  { icon: 'mdi:city', text: '5 Boroughs' },
                  { icon: 'mdi:clock-fast', text: 'Same-Day Available' },
                ].map((badge) => (
                  <div
                    key={badge.text}
                    className="flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-sm text-white backdrop-blur-sm"
                  >
                    <Icon icon={badge.icon} className="h-3.5 w-3.5 text-accent" />
                    {badge.text}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-1">
                <CTAButton
                  href="/contact"
                  ctaType="get_quote"
                  ctaLocation="hero"
                  variant="accent"
                  size="lg"
                >
                  Get a Free Quote
                </CTAButton>
                <CTAButton
                  href="tel:+15551234567"
                  ctaType="call_now"
                  ctaLocation="hero"
                  variant="outlined-white"
                  size="lg"
                >
                  <Icon icon="mdi:phone" className="h-5 w-5" />
                  (555) 123-4567
                </CTAButton>
              </div>
            </div>

            {/* Right: image */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Pristine clean professional office space in New York City"
                  width={600}
                  height={450}
                  className="w-full object-cover"
                  priority
                />
                {/* Floating rating card */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 shadow-lg">
                  <div className="flex -space-x-1.5">
                    {['JM', 'DK', 'RT'].map((initials) => (
                      <div
                        key={initials}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white ring-2 ring-white"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Icon
                          key={i}
                          icon="mdi:star"
                          className="h-3.5 w-3.5 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-xs font-semibold text-gray-800 leading-tight">
                      4.9/5 from 247 reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trust Strip ===== */}
      <section
        className="bg-white border-b border-border py-4"
        aria-label="Trust indicators"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { icon: 'mdi:shield-check', text: 'Licensed & Insured' },
              { icon: 'mdi:leaf', text: 'Eco-Friendly Products' },
              { icon: 'mdi:account-check', text: 'Background-Checked Staff' },
              { icon: 'mdi:trophy', text: '100% Satisfaction Guarantee' },
              { icon: 'mdi:clock-fast', text: 'Same-Day Service Available' },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-1.5 text-sm font-medium text-muted"
              >
                <Icon icon={item.icon} className="h-4 w-4 text-accent" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Featured Services ===== */}
      <section
        className="py-20 bg-surface"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              What We Clean
            </p>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-bold text-text"
            >
              Cleaning Services for Every NYC Space
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base text-muted">
              Whether it&apos;s your Tribeca loft or your Midtown office tower,
              our professional teams deliver spotless results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredServices.map((service) => (
              <article
                key={service.slug}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 group-hover:bg-accent/10 transition-colors duration-200">
                  <Icon
                    icon={service.icon}
                    className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-200"
                  />
                </div>
                <h3 className="text-base font-semibold text-text mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed flex-1">
                  {service.shortDescription}
                </p>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-medium text-accent">
                    {service.priceRange}
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors duration-150"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    Learn More
                    <Icon icon="mdi:arrow-right" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-200"
            >
              View All 6 Services
              <Icon icon="mdi:arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section
        className="py-20 bg-white"
        aria-labelledby="why-us-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Why Sparkle Clean
            </p>
            <h2
              id="why-us-heading"
              className="text-3xl sm:text-4xl font-bold text-text"
            >
              NYC Trusts Us With Their Spaces
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base text-muted">
              We&apos;re not just another cleaning company — we&apos;re a team
              that genuinely cares about the quality of your environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {trustSignals.map((signal) => (
              <div key={signal.title} className="flex gap-4">
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                  <Icon
                    icon={signal.icon}
                    className="h-6 w-6 text-accent"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text mb-1.5">
                    {signal.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats Bar ===== */}
      <section className="bg-primary py-14" aria-label="Company statistics">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon icon={stat.icon} className="h-6 w-6 text-accent" />
                </div>
                <p className="text-4xl font-extrabold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-blue-200 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section
        className="py-20 bg-surface"
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Client Reviews
            </p>
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl font-bold text-text"
            >
              What Our NYC Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="bg-white rounded-xl p-6 shadow-sm flex flex-col"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icon
                      key={i}
                      icon="mdi:star"
                      className="h-5 w-5 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <footer className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted">
                      {testimonial.role} &middot; {testimonial.location}
                    </p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section
        className="bg-primary-dark py-20"
        aria-label="Call to action"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 mb-6">
            <Icon icon="mdi:sparkles" className="h-7 w-7 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for a Spotless Space?
          </h2>
          <p className="text-lg text-blue-200 mb-8 leading-relaxed">
            Join 500+ NYC homes and businesses who trust Sparkle Clean for
            consistent, professional results — every single time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton
              href="/contact"
              ctaType="get_quote"
              ctaLocation="final_cta"
              variant="accent"
              size="lg"
            >
              Get Your Free Quote
            </CTAButton>
            <CTAButton
              href="/book"
              ctaType="book_service"
              ctaLocation="final_cta"
              variant="outlined-white"
              size="lg"
            >
              Book a Service
            </CTAButton>
          </div>
          <p className="mt-6 text-sm text-blue-300">
            No commitment required &middot; Same-day response &middot; Serving
            all 5 boroughs
          </p>
        </div>
      </section>
    </>
  );
}
