import type { Metadata } from 'next';
import { Icon } from '@iconify/react';
import ContactForm from '@/components/ContactForm';
import CTAButton from '@/components/CTAButton';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Quote | Sparkle Clean NYC',
  description:
    'Contact Sparkle Clean NYC for a free, no-obligation cleaning quote. We serve all 5 NYC boroughs. Response within 1 hour during business hours.',
  openGraph: {
    title: 'Contact Sparkle Clean NYC | Free Quote',
    description:
      'Get a free cleaning quote for your NYC home or business. Response within 1 hour. Serving Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.',
    url: 'https://aniktests.online/contact',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Contact Sparkle Clean NYC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Sparkle Clean NYC | Free Quote',
    description:
      'Get a free cleaning quote for your NYC home or business. Response within 1 hour.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    ],
  },
  alternates: {
    canonical: 'https://aniktests.online/contact',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Sparkle Clean NYC',
  url: 'https://aniktests.online/contact',
  description: 'Get a free cleaning quote for your NYC home or business.',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Sparkle Clean NYC',
    telephone: '+15551234567',
    email: 'info@aniktests.online',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Clean Street, Suite 4B',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
  },
};

const contactDetails = [
  {
    icon: 'mdi:phone',
    label: 'Phone',
    value: '(555) 123-4567',
    href: 'tel:+15551234567',
    sub: 'Mon–Fri 8am–6pm, Sat 9am–4pm',
  },
  {
    icon: 'mdi:email',
    label: 'Email',
    value: 'info@aniktests.online',
    href: 'mailto:info@aniktests.online',
    sub: 'Response within 1 hour',
  },
  {
    icon: 'mdi:map-marker',
    label: 'Address',
    value: '123 Clean Street, Suite 4B',
    href: undefined,
    sub: 'New York, NY 10001',
  },
];

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

const boroughs = ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />

      {/* Hero */}
      <section
        className="relative bg-primary overflow-hidden py-14 lg:py-20"
        aria-label="Contact header"
      >
        <div className="hero-pattern absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary to-primary-dark pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm mb-5">
            <Icon icon="mdi:clock-fast" className="h-4 w-4" />
            Response within 1 hour during business hours
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Get Your Free Quote
          </h1>
          <p className="text-lg text-blue-200 max-w-xl mx-auto leading-relaxed">
            Tell us about your space and we&apos;ll send a no-obligation quote
            within the hour. Serving all 5 NYC boroughs.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-surface py-16 lg:py-20" aria-label="Contact form and info">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

            {/* Form — wider column */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm ring-1 ring-border p-8">
              <div className="mb-7">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">
                  Send a Message
                </p>
                <h2 className="text-2xl font-bold text-text">
                  How can we help you?
                </h2>
                <p className="text-sm text-muted mt-2">
                  Fill out the form and we&apos;ll be in touch within 1 business hour.
                </p>
              </div>
              <ContactForm location="contact_page" />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">

              {/* Contact details */}
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-border p-6">
                <h2 className="text-base font-bold text-text mb-5">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactDetails.map((item) => (
                    <div key={item.label} className="flex gap-3.5">
                      <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                        <Icon icon={item.icon} className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted uppercase tracking-wide mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-semibold text-text hover:text-accent transition-colors duration-150"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-text">{item.value}</p>
                        )}
                        <p className="text-xs text-muted mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-border p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon icon="mdi:clock-outline" className="h-5 w-5 text-primary" />
                  <h2 className="text-base font-bold text-text">Business Hours</h2>
                </div>
                <div className="space-y-2.5">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-center">
                      <span className="text-sm text-muted">{h.day}</span>
                      <span
                        className={`text-sm font-semibold ${
                          h.time === 'Closed' ? 'text-muted/60' : 'text-text'
                        }`}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Boroughs */}
              <div className="bg-primary rounded-2xl p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon icon="mdi:city" className="h-5 w-5 text-accent" />
                  <h2 className="text-base font-bold text-white">Areas We Serve</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {boroughs.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-medium text-blue-100"
                    >
                      <Icon icon="mdi:map-marker" className="h-3.5 w-3.5 text-accent" />
                      {b}
                    </span>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <CTAButton
                    href="tel:+15551234567"
                    ctaType="call_now"
                    ctaLocation="contact_sidebar"
                    variant="outlined-white"
                    size="sm"
                    className="w-full justify-center"
                  >
                    <Icon icon="mdi:phone" className="h-4 w-4" />
                    Call (555) 123-4567
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white py-12 border-t border-border" aria-label="Trust indicators">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: 'mdi:shield-check', title: 'Licensed & Insured', sub: 'Full liability coverage' },
              { icon: 'mdi:clock-fast', title: '1-Hour Response', sub: 'During business hours' },
              { icon: 'mdi:currency-usd-off', title: 'Free Quotes', sub: 'No obligation, ever' },
              { icon: 'mdi:trophy', title: '100% Satisfaction', sub: "We'll make it right" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50">
                  <Icon icon={item.icon} className="h-5 w-5 text-accent" />
                </div>
                <p className="text-sm font-semibold text-text">{item.title}</p>
                <p className="text-xs text-muted">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
