export const useClassementLink = (link?: string) => {
  if (!link) {
    return ''
  }

  if (link.startsWith('/') || link.startsWith('#') || link.startsWith('http')) {
    return link
  }

  switch (link) {
    case 'newsletter':
      return useRuntimeConfig().public.newsletterSubscriptionLink
    default:
      throw new Error(`Unknown classement link: ${link}`)
  }
}
