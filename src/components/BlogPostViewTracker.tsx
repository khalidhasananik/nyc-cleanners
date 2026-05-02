'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/gtm';

interface Props {
  postTitle: string;
  postSlug: string;
  postCategory: string;
}

export default function BlogPostViewTracker({ postTitle, postSlug, postCategory }: Props) {
  useEffect(() => {
    trackEvent('blog_post_view', {
      post_title: postTitle,
      post_slug: postSlug,
      post_category: postCategory,
    });
  }, [postTitle, postSlug, postCategory]);

  return null;
}
