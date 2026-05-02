import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import BlogCard from '@/components/BlogCard';
import CTAButton from '@/components/CTAButton';
import JsonLd from '@/components/JsonLd';
import { blogPosts } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Cleaning Tips & Guides for NYC | Sparkle Clean Blog',
  description:
    'Expert cleaning advice for NYC homes and businesses. Deep clean guides, move-out checklists, green cleaning tips, and office cleaning insights from Sparkle Clean NYC.',
  openGraph: {
    title: 'Cleaning Tips & Guides for NYC | Sparkle Clean Blog',
    description:
      'Expert cleaning advice for NYC homes and businesses. Deep clean guides, move-out checklists, green cleaning tips, and more.',
    url: 'https://aniktests.online/blog',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Sparkle Clean NYC Cleaning Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaning Tips & Guides for NYC | Sparkle Clean Blog',
    description:
      'Expert cleaning advice for NYC homes and businesses. Deep clean guides, move-out checklists, and more.',
    images: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
    ],
  },
  alternates: {
    canonical: 'https://aniktests.online/blog',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aniktests.online' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://aniktests.online/blog' },
  ],
};

const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section
        className="relative bg-primary overflow-hidden py-16 lg:py-24"
        aria-label="Blog header"
      >
        <div className="hero-pattern absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary to-primary-dark pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm mb-5">
            <Icon icon="mdi:book-open-variant" className="h-4 w-4" />
            Cleaning Tips &amp; Expert Guides
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
            The NYC Cleaning
            <br />
            <span className="text-accent">Resource Hub</span>
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Practical guides, deep-clean checklists, and expert advice from the
            professionals who clean NYC every day.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="inline-block rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-medium text-blue-100"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white" aria-labelledby="featured-post-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">
            Featured Article
          </p>
          <article className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-surface rounded-2xl overflow-hidden ring-1 ring-border hover:shadow-lg transition-shadow duration-300">
            <Link
              href={`/blog/${featured.slug}`}
              className="block overflow-hidden lg:h-full"
              tabIndex={-1}
              aria-hidden="true"
            >
              <Image
                src={featured.image}
                alt={featured.title}
                width={800}
                height={500}
                className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </Link>
            <div className="p-8 lg:pr-10 lg:py-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block rounded-full bg-green-50 px-3 py-0.5 text-xs font-semibold text-accent">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted">
                  <Icon icon="mdi:clock-outline" className="h-3.5 w-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <h2
                id="featured-post-heading"
                className="text-2xl sm:text-3xl font-extrabold text-text leading-tight mb-4 group-hover:text-primary transition-colors duration-150"
              >
                <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p className="text-base text-muted leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Icon icon="mdi:account" className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text">{featured.author}</p>
                    <p className="text-xs text-muted">{formatDate(featured.publishedAt)}</p>
                  </div>
                </div>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors duration-150"
                >
                  Read Article
                  <Icon icon="mdi:arrow-right" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-4 pb-20 bg-white" aria-labelledby="more-posts-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">
              More Articles
            </p>
            <h2 id="more-posts-heading" className="text-2xl font-bold text-text">
              More From the Blog
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark py-20" aria-label="Get a free quote">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 mb-6">
            <Icon icon="mdi:sparkles" className="h-7 w-7 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for a Professional Clean?
          </h2>
          <p className="text-lg text-blue-200 mb-8 leading-relaxed">
            Put the advice into action. Our teams serve all 5 NYC boroughs with
            same-day availability and a 100% satisfaction guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton
              href="/contact"
              ctaType="get_quote"
              ctaLocation="blog_listing_cta"
              variant="accent"
              size="lg"
            >
              Get a Free Quote
            </CTAButton>
            <CTAButton
              href="/services"
              ctaType="book_service"
              ctaLocation="blog_listing_cta"
              variant="outlined-white"
              size="lg"
            >
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
