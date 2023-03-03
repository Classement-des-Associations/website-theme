export const useClassementLink = (link?: string) => {
  if (!link) {
    return ''
  }

  if (link.startsWith('/') || link.startsWith('#') || link.startsWith('http')) {
    return link
  }

  const runtimeConfig = useRuntimeConfig()

  return runtimeConfig.public[link]
}
