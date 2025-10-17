
export function track(event: string, payload?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event, payload || {});
  }
}
