import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import type { BlogPost } from '@/lib/blog-posts';

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-border hover:shadow-md transition-all duration-200 flex flex-col">
      <Link
        href={`/blog/${post.slug}`}
        className="block overflow-hidden shrink-0"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={post.image}
          alt={post.title}
          width={640}
          height={380}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block rounded-full bg-green-50 px-3 py-0.5 text-xs font-semibold text-accent">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Icon icon="mdi:clock-outline" className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-base font-bold text-text leading-snug mb-2 group-hover:text-primary transition-colors duration-150 line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-sm text-muted leading-relaxed line-clamp-3 flex-1 mb-4">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <Icon icon="mdi:account" className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-xs font-medium text-text leading-none">{post.author}</p>
              <p className="text-xs text-muted mt-0.5">{formatDate(post.publishedAt)}</p>
            </div>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-accent transition-colors duration-150"
            aria-label={`Read: ${post.title}`}
          >
            Read More
            <Icon icon="mdi:arrow-right" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
