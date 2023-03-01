import { ClassementLink } from '../types'

export const useClassementLink = (link?: ClassementLink) => {
  if (!link) {
    return ''
  }

  if (link.startsWith('/') || link.startsWith('#') || link.startsWith('http')) {
    return link
  }

  switch (link) {
    case 'newsletter':
      return useRuntimeConfig().public.newsletterSubscriptionLink
    case 'linkedin-group':
      return useRuntimeConfig().public.linkedinGroupLink
    default:
      throw new Error(`Unknown classement link: ${link}`)
  }
}
