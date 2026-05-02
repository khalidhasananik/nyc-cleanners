import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import ServiceCard from '@/components/ServiceCard';
import CTAButton from '@/components/CTAButton';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Cleaning Services NYC | Office, Home, Deep Clean & More | Sparkle Clean',
  description:
    'Professional cleaning services in NYC: office cleaning, residential, deep cleaning, move-in/out, post-construction & carpet cleaning. All 5 boroughs. Get a free quote.',
  openGraph: {
    title: 'Cleaning Services NYC | Sparkle Clean NYC',
    description:
      'Professional cleaning services for every NYC space. Office, home, deep clean, move-in/out, post-construction & carpet cleaning. Serving all 5 boroughs.',
    url: 'https://aniktests.online/services',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Professional cleaning services in New York City',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaning Services NYC | Sparkle Clean NYC',
    description:
      'Professional cleaning services for every NYC space. All 5 boroughs. Get a free quote today.',
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80',
    ],
  },
  alternates: {
    canonical: 'https://aniktests.online/services',
  },
};

const trustItems = [
  {
    icon: 'mdi:shield-check',
    title: 'Licensed & Insured',
    text: "Full liability and workers' comp coverage on every job.",
  },
  {
    icon: 'mdi:leaf',
    title: 'Eco-Friendly Products',
    text: 'Certified green solutions safe for kids, pets, and the planet.',
  },
  {
    icon: 'mdi:account-check',
    title: 'Background-Checked Staff',
    text: 'Rigorous screening and in-person vetting for every team member.',
  },
  {
    icon: 'mdi:trophy',
    title: '100% Satisfaction Guarantee',
    text: "Not satisfied? We'll make it right — no questions, no charge.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative bg-primary overflow-hidden py-16 lg:py-24"
        aria-label="Services header"
      >
        <div className="hero-pattern absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary to-primary-dark pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm mb-5">
            <Icon icon="mdi:sparkles" className="h-4 w-4" />
            6 Specialized Services · All NYC Boroughs
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
            Every Clean. Every Space.
            <br />
            <span className="text-accent">Every Borough.</span>
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            From Midtown office towers to Brooklyn brownstones — our
            professional teams deliver spotless results across all 6 service
            categories, on your schedule.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton
              href="/contact"
              ctaType="get_quote"
              ctaLocation="services_header"
              variant="accent"
              size="lg"
            >
              Get a Free Quote
            </CTAButton>
            <CTAButton
              href="tel:+15551234567"
              ctaType="call_now"
              ctaLocation="services_header"
              variant="outlined-white"
              size="lg"
            >
              <Icon icon="mdi:phone" className="h-5 w-5" />
              (555) 123-4567
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-surface" aria-labelledby="services-grid-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              What We Offer
            </p>
            <h2
              id="services-grid-heading"
              className="text-3xl sm:text-4xl font-bold text-text"
            >
              6 Specialized Cleaning Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base text-muted">
              Each service is delivered by trained, background-checked
              professionals using eco-friendly products and commercial-grade
              equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white" aria-label="Why choose us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-text">
              Why NYC Trusts Sparkle Clean
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
                  <Icon icon={item.icon} className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-12" aria-label="Company statistics">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '4.9★', label: 'Average Rating', icon: 'mdi:star' },
              { value: '500+', label: 'Happy Clients', icon: 'mdi:account-group' },
              { value: '8+', label: 'Years in NYC', icon: 'mdi:calendar-check' },
              { value: '5', label: 'Boroughs Covered', icon: 'mdi:city' },
            ].map((stat) => (
              <div key={stat.label}>
                <Icon icon={stat.icon} className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="text-3xl font-extrabold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-blue-200 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-dark py-20" aria-label="Call to action">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 mb-6">
            <Icon icon="mdi:help-circle" className="h-7 w-7 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-blue-200 mb-8 leading-relaxed">
            Call us or send a message — we&apos;ll recommend the right service
            and give you a free, no-obligation quote within the hour.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton
              href="/contact"
              ctaType="get_quote"
              ctaLocation="services_cta"
              variant="accent"
              size="lg"
            >
              Get a Free Quote
            </CTAButton>
            <CTAButton
              href="/book"
              ctaType="book_service"
              ctaLocation="services_cta"
              variant="outlined-white"
              size="lg"
            >
              Book a Service
            </CTAButton>
          </div>
          <p className="mt-6 text-sm text-blue-300">
            No commitment required &middot; Same-day response &middot; All 5 boroughs
          </p>
        </div>
      </section>
    </>
  );
}