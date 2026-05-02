import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@iconify/react';
import CTAButton from '@/components/CTAButton';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import BlogPostViewTracker from '@/components/BlogPostViewTracker';
import BlogCard from '@/components/BlogCard';
import { blogPosts, getBlogPostBySlug } from '@/lib/blog-posts';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://aniktests.online/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
    alternates: {
      canonical: `https://aniktests.online/blog/${post.slug}`,
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sparkle Clean NYC',
      url: 'https://aniktests.online',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aniktests.online/logo.png',
      },
    },
    datePublished: post.publishedAt,
    url: `https://aniktests.online/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://aniktests.online/blog/${post.slug}`,
    },
  };

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema} />
      <BlogPostViewTracker
        postTitle={post.title}
        postSlug={post.slug}
        postCategory={post.category}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-white py-12 lg:py-16" aria-labelledby="post-title-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block rounded-full bg-green-50 px-3 py-0.5 text-xs font-semibold text-accent">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted">
              <Icon icon="mdi:clock-outline" className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1
            id="post-title-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text leading-tight mb-6"
          >
            {post.title}
          </h1>

          <p className="text-lg text-muted leading-relaxed mb-8 max-w-2xl">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 pb-8 border-b border-border">
            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <Icon icon="mdi:account" className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-text">{post.author}</p>
              <div className="flex items-center gap-3 text-xs text-muted mt-0.5">
                <span className="flex items-center gap-1">
                  <Icon icon="mdi:calendar" className="h-3.5 w-3.5" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="text-border">·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative rounded-2xl overflow-hidden shadow-md ring-1 ring-border">
            <Image
              src={post.image}
              alt={post.title}
              width={900}
              height={500}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white pb-16" aria-label="Article content">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags / Share Row */}
          <div className="mt-10 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-muted font-medium">Category:</span>
              <span className="inline-block rounded-full bg-green-50 px-3 py-0.5 text-xs font-semibold text-accent">
                {post.category}
              </span>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors duration-150"
            >
              <Icon icon="mdi:arrow-left" className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* In-article CTA */}
      <section className="bg-surface py-12 border-y border-border" aria-label="Get a quote">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 shrink-0">
              <Icon icon="mdi:sparkles" className="h-7 w-7 text-accent" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-lg font-bold text-white mb-1">
                Leave the cleaning to the pros.
              </p>
              <p className="text-sm text-blue-200">
                Sparkle Clean NYC serves all 5 boroughs. Same-day availability &mdash; get a free quote in minutes.
              </p>
            </div>
            <div className="shrink-0">
              <CTAButton
                href="/contact"
                ctaType="get_quote"
                ctaLocation={`blog_post_inline_cta_${post.slug}`}
                variant="accent"
                size="md"
              >
                Get a Free Quote
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white" aria-labelledby="related-posts-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">
              Keep Reading
            </p>
            <h2 id="related-posts-heading" className="text-2xl font-bold text-text">
              More Articles You&apos;ll Find Useful
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <BlogCard key={related.slug} post={related} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors duration-150"
            >
              View all articles
              <Icon icon="mdi:arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-dark py-20" aria-label="Book a service">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 mb-6">
            <Icon icon="mdi:broom" className="h-7 w-7 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Time to Book Your Clean?
          </h2>
          <p className="text-lg text-blue-200 mb-8 leading-relaxed">
            Our professional teams serve Manhattan, Brooklyn, Queens, the Bronx,
            and Staten Island. Eco-friendly products, licensed &amp; insured, 100%
            satisfaction guaranteed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton
              href="/book"
              ctaType="book_service"
              ctaLocation={`blog_post_final_cta_${post.slug}`}
              variant="accent"
              size="lg"
            >
              Book a Service
            </CTAButton>
            <CTAButton
              href="tel:+15551234567"
              ctaType="call_now"
              ctaLocation={`blog_post_final_cta_${post.slug}`}
              variant="outlined-white"
              size="lg"
            >
              <Icon icon="mdi:phone" className="h-5 w-5" />
              (555) 123-4567
            </CTAButton>
          </div>
          <p className="mt-6 text-sm text-blue-300">
            No commitment required &middot; Free quotes &middot; All 5 boroughs
          </p>
        </div>
      </section>
    </>
  );
}
