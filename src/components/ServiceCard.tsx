import Link from 'next/link';
import { Icon } from '@iconify/react';
import type { Service } from '@/lib/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 group-hover:bg-accent/10 transition-colors duration-200">
          <Icon
            icon={service.icon}
            className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-200"
          />
        </div>
        <h3 className="text-base font-semibold text-text mb-2">{service.name}</h3>
        <p className="text-sm text-muted leading-relaxed flex-1">
          {service.shortDescription}
        </p>
        <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
          <span className="text-sm font-medium text-accent">{service.priceRange}</span>
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors duration-150"
            aria-label={`Learn more about ${service.name}`}
          >
            Learn More
            <Icon icon="mdi:arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}