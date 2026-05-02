import Link from 'next/link';
import { Icon } from '@iconify/react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-primary transition-colors duration-150"
          >
            <Icon icon="mdi:home" className="h-4 w-4" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <Icon icon="mdi:chevron-right" className="h-4 w-4 text-border shrink-0" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors duration-150"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-text font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}