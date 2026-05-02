'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import CTAButton from './CTAButton';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Book Now', href: '/book' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            onClick={closeMenu}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-sm">
              <Icon icon="mdi:sparkles" className="h-5 w-5 text-accent" />
            </span>
            <span className="font-bold text-lg leading-tight">
              <span className="text-primary">Sparkle Clean</span>
              <span className="text-accent"> NYC</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-700 rounded-lg transition-colors duration-150 hover:text-primary hover:bg-blue-50 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-accent scale-x-0 transition-transform duration-200 group-hover:scale-x-100 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <CTAButton
              href="tel:+15551234567"
              ctaType="call_now"
              ctaLocation="header"
              variant="outlined"
              size="sm"
            >
              <Icon icon="mdi:phone" className="h-4 w-4" />
              Call Now
            </CTAButton>
            <CTAButton
              href="/book"
              ctaType="book_service"
              ctaLocation="header"
              variant="accent"
              size="sm"
            >
              Book Service
            </CTAButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon
              icon={isOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 bg-white ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <nav className="px-4 pt-3 pb-4 space-y-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="flex items-center px-3 py-3 text-base font-medium text-gray-700 rounded-xl hover:text-primary hover:bg-blue-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-3 pb-1 border-t border-gray-100 mt-2 flex flex-col gap-3">
            <CTAButton
              href="tel:+15551234567"
              ctaType="call_now"
              ctaLocation="mobile_menu"
              variant="outlined"
              size="md"
              className="w-full"
            >
              <Icon icon="mdi:phone" className="h-4 w-4" />
              Call Now
            </CTAButton>
            <CTAButton
              href="/book"
              ctaType="book_service"
              ctaLocation="mobile_menu"
              variant="accent"
              size="md"
              className="w-full"
            >
              Book Service
            </CTAButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
