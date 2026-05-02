'use client';

import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { trackEvent } from '@/lib/gtm';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  type: 'contact' | 'booking';
}

const content = {
  contact: {
    icon: 'mdi:email-check',
    title: 'Message Received!',
    message:
      "Thanks for reaching out. We'll get back to you within 1 hour during business hours.",
    sub: 'While you wait, explore our services below.',
  },
  booking: {
    icon: 'mdi:calendar-check',
    title: 'Booking Request Sent!',
    message:
      "We've received your booking. Our team will confirm your appointment within 1 hour.",
    sub: "You'll receive a confirmation by email shortly.",
  },
};

export default function SuccessModal({ isOpen, onClose, type }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    trackEvent('form_success', { form_type: type });
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, type]);

  if (!isOpen) return null;

  const { icon, title, message, sub } = content[type];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mx-auto mb-5">
          <Icon icon={icon} className="h-8 w-8 text-accent" />
        </div>
        <h2
          id="success-modal-title"
          className="text-2xl font-bold text-text mb-3"
        >
          {title}
        </h2>
        <p className="text-muted leading-relaxed mb-2">{message}</p>
        <p className="text-sm text-muted/70 mb-7">{sub}</p>
        <button
          onClick={onClose}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-dark transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
        >
          <Icon icon="mdi:check" className="h-5 w-5" />
          Done
        </button>
      </div>
    </div>
  );
}
