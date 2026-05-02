import Link from 'next/link';
import { Icon } from '@iconify/react';

const serviceLinks = [
  { label: 'Office Cleaning', href: '/services/office-cleaning' },
  { label: 'Residential Cleaning', href: '/services/residential-cleaning' },
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'Move-In/Move-Out', href: '/services/move-in-move-out-cleaning' },
  { label: 'Post-Construction', href: '/services/post-construction-cleaning' },
  { label: 'Carpet & Upholstery', href: '/services/carpet-upholstery-cleaning' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Book Now', href: '/book' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

const socialLinks = [
  { icon: 'mdi:facebook', href: '#', label: 'Facebook' },
  { icon: 'mdi:instagram', href: '#', label: 'Instagram' },
  { icon: 'mdi:twitter', href: '#', label: 'Twitter/X' },
  { icon: 'mdi:google', href: '#', label: 'Google Business' },
];

const serviceAreas = [
  'Manhattan',
  'Brooklyn',
  'Queens',
  'The Bronx',
  'Staten Island',
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <Icon icon="mdi:sparkles" className="h-5 w-5 text-accent" />
              </span>
              <span className="font-bold text-lg">
                <span className="text-white">Sparkle Clean</span>
                <span className="text-accent"> NYC</span>
              </span>
            </Link>
            <p className="text-sm text-blue-200 leading-relaxed mb-5">
              Professional cleaning services across all five NYC boroughs. Trusted by
              500+ homes and businesses since 2018.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-blue-200 hover:bg-accent hover:text-white transition-colors duration-200"
                >
                  <Icon icon={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon icon="mdi:map-marker" className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-blue-200">
                  123 Clean Street, Suite 4B
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Icon icon="mdi:phone" className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon icon="mdi:email" className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:info@aniktests.online"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  info@aniktests.online
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="mdi:clock-outline" className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-blue-200">
                  Mon–Fri: 8am–6pm
                  <br />
                  Sat: 9am–4pm | Sun: Closed
                </span>
              </li>
            </ul>

            {/* Service areas */}
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-2">
                Service Areas
              </p>
              <p className="text-sm text-blue-200">
                {serviceAreas.join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-blue-300">
            © {new Date().getFullYear()} Sparkle Clean NYC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-blue-300 hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-xs text-blue-300 hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
