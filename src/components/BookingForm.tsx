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
];

const TIME_SLOTS = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  address: string;
  notes: string;
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
  if (!d.phone.trim()) e.phone = 'Phone number is required for booking confirmation.';
  if (!d.service) e.service = 'Please select a service.';
  if (!d.date) {
    e.date = 'Please select a preferred date.';
  } else if (new Date(d.date) < new Date(new Date().toDateString())) {
    e.date = 'Please select a future date.';
  }
  if (!d.address.trim()) e.address = 'Service address is required.';
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

const EMPTY: FormData = {
  name: '', email: '', phone: '', service: '',
  date: '', time: '', address: '', notes: '',
};

export default function BookingForm({ location = 'book_page' }: { location?: string }) {
  const [formData, setFormData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const today = new Date().toISOString().split('T')[0];

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
        form_type: 'booking',
        error_fields: Object.keys(newErrors).join(','),
      });
      return;
    }
    setIsSubmitting(true);
    trackEvent('booking_form_submit', {
      service_type: formData.service,
      preferred_date: formData.date,
      preferred_time: formData.time || 'not_specified',
      form_location: location,
    });
    // TODO: replace with real API call
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData(EMPTY);
  }

  function errorMsg(id: string, msg?: string) {
    if (!msg) return null;
    return (
      <p id={id} className="mt-1 text-xs text-red-500 flex items-center gap-1">
        <Icon icon="mdi:alert-circle-outline" className="h-3.5 w-3.5 shrink-0" />
        {msg}
      </p>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name + Email */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="bf-name" className="block text-sm font-medium text-text mb-1.5">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              id="bf-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Smith"
              value={formData.name}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'bf-name-error' : undefined}
              className={fieldClass(!!errors.name)}
            />
            {errorMsg('bf-name-error', errors.name)}
          </div>

          <div>
            <label htmlFor="bf-email" className="block text-sm font-medium text-text mb-1.5">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              id="bf-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@example.com"
              value={formData.email}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'bf-email-error' : undefined}
              className={fieldClass(!!errors.email)}
            />
            {errorMsg('bf-email-error', errors.email)}
          </div>
        </div>

        {/* Phone + Service */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="bf-phone" className="block text-sm font-medium text-text mb-1.5">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              id="bf-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'bf-phone-error' : undefined}
              className={fieldClass(!!errors.phone)}
            />
            {errorMsg('bf-phone-error', errors.phone)}
          </div>

          <div>
            <label htmlFor="bf-service" className="block text-sm font-medium text-text mb-1.5">
              Service <span className="text-red-400">*</span>
            </label>
            <select
              id="bf-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? 'bf-service-error' : undefined}
              className={fieldClass(!!errors.service) + ' cursor-pointer'}
            >
              <option value="">Select a service…</option>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errorMsg('bf-service-error', errors.service)}
          </div>
        </div>

        {/* Date + Time */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="bf-date" className="block text-sm font-medium text-text mb-1.5">
              Preferred Date <span className="text-red-400">*</span>
            </label>
            <input
              id="bf-date"
              name="date"
              type="date"
              min={today}
              value={formData.date}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.date}
              aria-describedby={errors.date ? 'bf-date-error' : undefined}
              className={fieldClass(!!errors.date)}
            />
            {errorMsg('bf-date-error', errors.date)}
          </div>

          <div>
            <label htmlFor="bf-time" className="block text-sm font-medium text-text mb-1.5">
              Preferred Time{' '}
              <span className="text-muted text-xs font-normal">(optional)</span>
            </label>
            <select
              id="bf-time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={fieldClass() + ' cursor-pointer'}
            >
              <option value="">Any time</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Address */}
        <div>
          <label htmlFor="bf-address" className="block text-sm font-medium text-text mb-1.5">
            Service Address <span className="text-red-400">*</span>
          </label>
          <input
            id="bf-address"
            name="address"
            type="text"
            autoComplete="street-address"
            placeholder="123 Main St, Apt 4B, Brooklyn, NY"
            value={formData.address}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.address}
            aria-describedby={errors.address ? 'bf-address-error' : undefined}
            className={fieldClass(!!errors.address)}
          />
          {errorMsg('bf-address-error', errors.address)}
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="bf-notes" className="block text-sm font-medium text-text mb-1.5">
            Special Instructions{' '}
            <span className="text-muted text-xs font-normal">(optional)</span>
          </label>
          <textarea
            id="bf-notes"
            name="notes"
            rows={3}
            placeholder="Pets at home, access instructions, areas to focus on…"
            value={formData.notes}
            onChange={handleChange}
            className={fieldClass() + ' resize-none'}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-accent-dark hover:shadow-md transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
        >
          {isSubmitting ? (
            <>
              <Icon icon="mdi:loading" className="h-5 w-5 animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              <Icon icon="mdi:calendar-plus" className="h-5 w-5" />
              Request Booking
            </>
          )}
        </button>

        <p className="text-xs text-muted text-center">
          No upfront payment required. We&apos;ll confirm your booking within 1 hour.
        </p>
      </form>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        type="booking"
      />
    </>
  );
}
