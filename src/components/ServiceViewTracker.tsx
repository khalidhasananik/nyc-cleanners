'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/gtm';

interface ServiceViewTrackerProps {
  serviceName: string;
  serviceSlug: string;
}

export default function ServiceViewTracker({
  serviceName,
  serviceSlug,
}: ServiceViewTrackerProps) {
  useEffect(() => {
    trackEvent('service_view', {
      service_name: serviceName,
      service_slug: serviceSlug,
    });
  }, [serviceName, serviceSlug]);

  return null;
}