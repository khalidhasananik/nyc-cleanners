'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { trackEvent } from '@/lib/gtm';
import SuccessModal from '@/components/SuccessModal';

const SERVICE_OPTIONS = [
  'Office Cleaning',
  'Residential Cleaning',
  'Deep Cleaning',
  'Move-In / Move-Out Cleaning',
  'Post-Construction Cleaning',
  'Carpet & Upholstery Cleaning',
  'Not Sure / Other',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

type Errors = Partial<Record<keyof FormData, string>>;

function validate(d: FormData): Errors {
  const e: Errors = {};
  if (!d.name.trim()) e.name = 'Name is required.';
  if (!d.email.trim()) {
    e.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
    e.email = 'Please enter a valid email address.';
  }
  if (!d.message.trim()) e.message = 'Message is required.';
  return e;
}

function fieldClass(hasError?: boolean) {
  return [
    'w-full rounded-xl border px-4 py-3 text-sm text-text placeholder:text-muted/50',
    'outline-none transition-colors duration-150',
    'focus:ring-2 focus:ring-accent/30',
    hasError
      ? 'border-red-300 bg-red-50/30 focus:border-red-400'
      : 'border-border bg-white focus:border-accent',
  ].join(' ');
}

const EMPTY: FormData = { name: '', email: '', phone: '', service: '', message: '' };

export default function ContactForm({ location = 'contact_page' }: { location?: string }) {
  const [formData, setFormData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      trackEvent('form_validation_error', {
        form_type: 'contact',
        error_fields: Object.keys(newErrors).join(','),
      });
      return;
    }
    setIsSubmitting(true);
    trackEvent('contact_form_submit', {
      service_type: formData.service || 'not_specified',
      form_location: location,
    });
    // TODO: replace with real API call
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData(EMPTY);
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="cf-name"
              className="block text-sm font-medium text-text mb-1.5"
            >
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Smith"
              value={formData.name}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'cf-name-error' : undefined}
              className={fieldClass(!!errors.name)}
            />
            {errors.name && (
              <p id="cf-name-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <Icon icon="mdi:alert-circle-outline" className="h-3.5 w-3.5 shrink-0" />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="cf-email"
              className="block text-sm font-medium text-text mb-1.5"
            >
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@example.com"
              value={formData.email}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'cf-email-error' : undefined}
              className={fieldClass(!!errors.email)}
            />
            {errors.email && (
              <p id="cf-email-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <Icon icon="mdi:alert-circle-outline" className="h-3.5 w-3.5 shrink-0" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="cf-phone"
              className="block text-sm font-medium text-text mb-1.5"
            >
              Phone{' '}
              <span className="text-muted text-xs font-normal">(optional)</span>
            </label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              className={fieldClass()}
            />
          </div>

          <div>
            <label
              htmlFor="cf-service"
              className="block text-sm font-medium text-text mb-1.5"
            >
              Service Needed
            </label>
            <select
              id="cf-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={fieldClass() + ' cursor-pointer'}
            >
              <option value="">Select a service…</option>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="cf-message"
            className="block text-sm font-medium text-text mb-1.5"
          >
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            placeholder="Tell us about your space, frequency, any special requirements…"
            value={formData.message}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'cf-message-error' : undefined}
            className={fieldClass(!!errors.message) + ' resize-none'}
          />
          {errors.message && (
            <p id="cf-message-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <Icon icon="mdi:alert-circle-outline" className="h-3.5 w-3.5 shrink-0" />
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-accent-dark hover:shadow-md transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
        >
          {isSubmitting ? (
            <>
              <Icon icon="mdi:loading" className="h-5 w-5 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Icon icon="mdi:send" className="h-5 w-5" />
              Send Message
            </>
          )}
        </button>

        <p className="text-xs text-muted text-center">
          We respond within 1 hour during business hours. No spam, ever.
        </p>
      </form>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        type="contact"
      />
    </>
  );
}
