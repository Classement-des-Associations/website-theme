export const useSameAs = function () {
  const socials = useAppConfig().socials

  return computed(() => {
    return socials.map((social) => {
      return social.to
    })
  })
}
