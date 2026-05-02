'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/gtm';

type CTAType = 'get_quote' | 'call_now' | 'book_service';
type Variant = 'primary' | 'accent' | 'outlined' | 'outlined-white';
type Size = 'sm' | 'md' | 'lg';

interface CTAButtonProps {
  href: string;
  ctaType: CTAType;
  ctaLocation?: string;
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md',
  accent:
    'bg-accent text-white hover:bg-accent-dark shadow-sm hover:shadow-md',
  outlined:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  'outlined-white':
    'border-2 border-white text-white hover:bg-white hover:text-primary',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function CTAButton({
  href,
  ctaType,
  ctaLocation = 'page',
  variant = 'accent',
  size = 'md',
  children,
  className = '',
}: CTAButtonProps) {
  const handleClick = () => {
    trackEvent('cta_click', {
      cta_type: ctaType,
      cta_location: ctaLocation,
    });
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const isExternal =
    href.startsWith('tel:') ||
    href.startsWith('http') ||
    href.startsWith('mailto:');

  if (isExternal) {
    return (
      <a href={href} onClick={handleClick} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={baseClasses}>
      {children}
    </Link>
  );
}
