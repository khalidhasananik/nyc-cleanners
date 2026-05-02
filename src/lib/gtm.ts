export const trackEvent = (
  eventName: string,
  eventParams: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
      timestamp: new Date().toISOString(),
    });
  }
};
