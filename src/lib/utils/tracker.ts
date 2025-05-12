import type { ClickEvent } from "$lib/types/event"

export const trackClick = (event: ClickEvent) => {
  // @ts-ignore
  if (typeof window !== 'undefined' && window.gtag) {
    let categoryName = event.category.split('_')[0]
    if (categoryName) {
      categoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase()
    }
    // @ts-ignore
    window.gtag('event', 'click', {
      event_category: event.category,
      event_label: `${categoryName} ${event.label}`,
    })
  }
}
