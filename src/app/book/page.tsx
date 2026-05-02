import type { Metadata } from 'next';
import { Icon } from '@iconify/react';
import BookingForm from '@/components/BookingForm';
import CTAButton from '@/components/CTAButton';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Book a Cleaning Service | Sparkle Clean NYC',
  description:
    'Book a professional cleaning service in NYC online. Office, residential, deep clean, move-out, and more. Same-day availability. Serving all 5 boroughs.',
  openGraph: {
    title: 'Book a Cleaning Service | Sparkle Clean NYC',
    description:
      'Schedule your NYC cleaning service online. No upfront payment. Confirmation within 1 hour. All 5 boroughs.',
    url: 'https://aniktests.online/book',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Book a cleaning service with Sparkle Clean NYC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Cleaning Service | Sparkle Clean NYC',
    description:
      'Schedule your NYC cleaning online. Confirmation within 1 hour. No upfront payment.',
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80',
    ],
  },
  alternates: {
    canonical: 'https://aniktests.online/book',
  },
};

const bookingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Professional Cleaning Service Booking',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Sparkle Clean NYC',
    url: 'https://aniktests.online',
    telephone: '+15551234567',
  },
  areaServed: { '@type': 'City', name: 'New York City' },
  url: 'https://aniktests.online/book',
};

const steps = [
  {
    number: '01',
    icon: 'mdi:form-select',
    title: 'Fill Out the Form',
    desc: 'Takes about 2 minutes. Tell us your service, date, and address.',
  },
  {
    number: '02',
    icon: 'mdi:calendar-check',
    title: 'We Confirm Within 1 Hour',
    desc: "You'll receive a confirmation by email with your booking details.",
  },
  {
    number: '03',
    icon: 'mdi:home',
    title: 'Our Team Arrives',
    desc: 'Trained, background-checked professionals — on time, every time.',
  },
];

const guarantees = [
  { icon: 'mdi:currency-usd-off', text: 'No upfront payment required' },
  { icon: 'mdi:close-circle-outline', text: 'Free cancellation (24hr notice)' },
  { icon: 'mdi:shield-check', text: 'Licensed & fully insured' },
  { icon: 'mdi:trophy', text: '100% satisfaction guarantee' },
  { icon: 'mdi:leaf', text: 'Eco-friendly products available' },
  { icon: 'mdi:city', text: 'All 5 NYC boroughs covered' },
];

export default function BookPage() {
  return (
    <>
      <JsonLd data={bookingSchema} />

      {/* Hero */}
      <section
        className="relative bg-primary overflow-hidden py-14 lg:py-20"
        aria-label="Book a service"
      >
        <div className="hero-pattern absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary to-primary-dark pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm mb-5">
            <Icon icon="mdi:sparkles" className="h-4 w-4" />
            No upfront payment &middot; Confirmation within 1 hour
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Book Your Cleaning
            <br />
            <span className="text-accent">Service Today</span>
          </h1>
          <p className="text-lg text-blue-200 max-w-xl mx-auto leading-relaxed">
            Schedule your clean in under 2 minutes. Our team will confirm your
            appointment within the hour.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="bg-surface py-16 lg:py-20" aria-label="Booking form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm ring-1 ring-border p-8">
              <div className="mb-7">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">
                  Schedule Your Clean
                </p>
                <h2 className="text-2xl font-bold text-text">
                  Request Your Booking
                </h2>
                <p className="text-sm text-muted mt-2">
                  We&apos;ll confirm availability and send your booking details by email.
                </p>
              </div>
              <BookingForm location="book_page" />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">

              {/* How It Works */}
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-border p-6">
                <div className="flex items-center gap-2.5 mb-6">
                  <Icon icon="mdi:information-outline" className="h-5 w-5 text-primary" />
                  <h2 className="text-base font-bold text-text">How It Works</h2>
                </div>
                <div className="space-y-5">
                  {steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 font-bold text-primary text-sm">
                        {step.number}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <Icon icon={step.icon} className="h-4 w-4 text-accent" />
                          <p className="text-sm font-semibold text-text">{step.title}</p>
                        </div>
                        <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees */}
              <div className="bg-primary rounded-2xl p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon icon="mdi:shield-check" className="h-5 w-5 text-accent" />
                  <h2 className="text-base font-bold text-white">Our Guarantees</h2>
                </div>
                <ul className="space-y-2.5">
                  {guarantees.map((g) => (
                    <li key={g.text} className="flex items-center gap-2.5">
                      <Icon icon={g.icon} className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm text-blue-100">{g.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <p className="text-xs text-blue-300 text-center mb-3">
                    Prefer to talk to someone?
                  </p>
                  <CTAButton
                    href="tel:+15551234567"
                    ctaType="call_now"
                    ctaLocation="book_sidebar"
                    variant="outlined-white"
                    size="sm"
                    className="w-full justify-center"
                  >
                    <Icon icon="mdi:phone" className="h-4 w-4" />
                    Call (555) 123-4567
                  </CTAButton>
                </div>
              </div>

              {/* Rating card */}
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-border p-5 flex items-center gap-4">
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50">
                  <Icon icon="mdi:star" className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-text leading-none">4.9★</p>
                  <p className="text-xs text-muted mt-0.5">
                    Average rating from 247 verified clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-12 border-t border-border" aria-label="Questions">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base text-text font-semibold mb-2">
            Have questions before booking?
          </p>
          <p className="text-sm text-muted mb-5">
            Our team is happy to walk you through your options and give you an
            accurate quote before you commit to anything.
          </p>
          <CTAButton
            href="/contact"
            ctaType="get_quote"
            ctaLocation="book_bottom_cta"
            variant="outlined"
            size="md"
          >
            Contact Us First
          </CTAButton>
        </div>
      </section>
    </>
  );
}
