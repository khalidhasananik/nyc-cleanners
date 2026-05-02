import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@iconify/react';
import CTAButton from '@/components/CTAButton';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import ServiceViewTracker from '@/components/ServiceViewTracker';
import { services, getServiceBySlug } from '@/lib/services';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://aniktests.online/services/${service.slug}`,
      type: 'website',
      images: [
        {
          url: service.image,
          width: 800,
          height: 600,
          alt: `Professional ${service.name} in New York City`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
    alternates: {
      canonical: `https://aniktests.online/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.fullDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Sparkle Clean NYC',
      url: 'https://aniktests.online',
      telephone: '+15551234567',
    },
    areaServed: {
      '@type': 'City',
      name: 'New York City',
    },
    offers: {
      '@type': 'Offer',
      description: service.priceRange,
      priceCurrency: 'USD',
    },
    image: service.image,
    url: `https://aniktests.online/services/${service.slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aniktests.online' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://aniktests.online/services' },
      { '@type': 'ListItem', position: 3, name: service.name, item: `https://aniktests.online/services/${service.slug}` },
    ],
  };

  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ServiceViewTracker
        serviceName={service.name}
        serviceSlug={service.slug}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: service.name },
            ]}
          />
        </div>
      </div>

      {/* Service Hero */}
      <section
        className="bg-white py-12 lg:py-20"
        aria-labelledby="service-name-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Icon icon={service.icon} className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Professional Service
                </span>
              </div>

              <h1
                id="service-name-heading"
                className="text-4xl sm:text-5xl font-extrabold text-text leading-tight"
              >
                {service.name}
                <br />
                <span className="text-primary">in NYC</span>
              </h1>

              <p className="text-base text-muted leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="inline-flex items-center gap-3 rounded-xl bg-green-50 border border-green-100 px-4 py-3">
                <Icon icon="mdi:currency-usd" className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <p className="text-xs text-muted leading-none mb-0.5">
                    Typical price range
                  </p>
                  <p className="text-base font-bold text-text">
                    {service.priceRange}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-1">
                <CTAButton
                  href="/book"
                  ctaType="book_service"
                  ctaLocation={`service_hero_${service.slug}`}
                  variant="accent"
                  size="lg"
                >
                  Book This Service
                </CTAButton>
                <CTAButton
                  href="/contact"
                  ctaType="get_quote"
                  ctaLocation={`service_hero_${service.slug}`}
                  variant="outlined"
                  size="lg"
                >
                  Get a Free Quote
                </CTAButton>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted pt-1">
                {[
                  { icon: 'mdi:shield-check', text: 'Licensed & Insured' },
                  { icon: 'mdi:leaf', text: 'Eco-Friendly Products' },
                  { icon: 'mdi:clock-fast', text: 'Same-Day Available' },
                ].map((badge) => (
                  <span key={badge.text} className="flex items-center gap-1.5">
                    <Icon icon={badge.icon} className="h-4 w-4 text-accent" />
                    {badge.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-md ring-1 ring-border">
                <Image
                  src={service.image}
                  alt={`Professional ${service.name.toLowerCase()} service in New York City`}
                  width={700}
                  height={500}
                  className="w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section
        className="py-16 bg-surface"
        aria-labelledby="includes-heading"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Full Checklist
            </p>
            <h2
              id="includes-heading"
              className="text-3xl font-bold text-text"
            >
              What&apos;s Included
            </h2>
            <p className="mt-3 text-base text-muted max-w-xl mx-auto">
              Every {service.name.toLowerCase()} includes all of the following
              — no hidden extras, no surprise charges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.includes.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 mt-0.5">
                  <Icon icon="mdi:check" className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm text-text leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton
              href="/book"
              ctaType="book_service"
              ctaLocation={`service_includes_${service.slug}`}
              variant="accent"
              size="md"
            >
              Book Your {service.name} Now
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="py-12 bg-white" aria-label="Trust indicators">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              {
                icon: 'mdi:shield-check',
                value: 'Licensed',
                label: '& Fully Insured',
              },
              {
                icon: 'mdi:leaf',
                value: 'Eco-Friendly',
                label: 'Green Products',
              },
              { icon: 'mdi:star', value: '4.9★', label: 'Average Rating' },
              {
                icon: 'mdi:clock-fast',
                value: 'Same-Day',
                label: 'Availability',
              },
            ].map((item) => (
              <div key={item.value} className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <Icon icon={item.icon} className="h-6 w-6 text-primary" />
                </div>
                <p className="text-base font-bold text-text">{item.value}</p>
                <p className="text-xs text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section
        className="py-16 bg-surface"
        aria-labelledby="related-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 id="related-heading" className="text-2xl font-bold text-text">
              Explore Other Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-4"
              >
                <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 group-hover:bg-accent/10 transition-colors duration-200">
                  <Icon
                    icon={related.icon}
                    className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-text group-hover:text-primary transition-colors duration-150">
                    {related.name}
                  </p>
                  <p className="text-xs text-accent mt-0.5">{related.priceRange}</p>
                </div>
                <Icon
                  icon="mdi:arrow-right"
                  className="h-4 w-4 text-muted group-hover:text-primary transition-colors duration-200 shrink-0"
                />
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors duration-150"
            >
              View all 6 services
              <Icon icon="mdi:arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-dark py-20" aria-label="Book this service">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 mb-6">
            <Icon icon={service.icon} className="h-7 w-7 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Book Your {service.name}?
          </h2>
          <p className="text-lg text-blue-200 mb-8 leading-relaxed">
            Serving all 5 NYC boroughs. Same-day availability. Eco-friendly
            products. 100% satisfaction guaranteed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton
              href="/book"
              ctaType="book_service"
              ctaLocation={`service_final_cta_${service.slug}`}
              variant="accent"
              size="lg"
            >
              Book This Service
            </CTAButton>
            <CTAButton
              href="tel:+15551234567"
              ctaType="call_now"
              ctaLocation={`service_final_cta_${service.slug}`}
              variant="outlined-white"
              size="lg"
            >
              <Icon icon="mdi:phone" className="h-5 w-5" />
              (555) 123-4567
            </CTAButton>
          </div>
          <p className="mt-6 text-sm text-blue-300">
            No commitment required &middot; Free quotes &middot; Response within the hour
          </p>
        </div>
      </section>
    </>
  );
}