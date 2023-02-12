import type { Ref } from 'vue'
import type { Part } from '../types/part'

type TextColor = string
type BackgroundColor = string
type BorderColor = string
type BackgroundGradient = `bg-${Part}`
type LineColor = `bg-line-${Part}`

interface Colors {
  textColor: TextColor | null
  backgroundColor: BackgroundColor | null
  lineColor: LineColor | null
  borderColor: BorderColor | null
  backgroundGradient: BackgroundGradient | null
}

export const useColorsByPart = (type: Part): Ref<Colors> => {
  const colors: Colors = {
    textColor: null,
    backgroundColor: null,
    lineColor: null,
    borderColor: null,
    backgroundGradient: null
  }

  switch (type) {
    case 'classement':
      colors.textColor = 'text-primary-base'
      colors.backgroundColor = 'bg-primary-base'
      colors.borderColor = 'border-primary-base'
      colors.lineColor = 'bg-line-classement'
      colors.backgroundGradient = 'bg-classement'
      break
    case 'concours':
      colors.textColor = 'text-primary-base'
      colors.backgroundColor = 'bg-primary-base'
      colors.borderColor = 'border-primary-base'
      colors.lineColor = 'bg-line-concours'
      colors.backgroundGradient = 'bg-concours'
      break
    case 'ceremonie-finale':
      colors.textColor = 'text-primary-base'
      colors.backgroundColor = 'bg-primary-base'
      colors.borderColor = 'border-primary-base'
      colors.lineColor = 'bg-line-ceremonie-finale'
      colors.backgroundGradient = 'bg-ceremonie-finale'
      break
    case 'partenaires':
      colors.textColor = 'text-accent-blue'
      colors.backgroundColor = 'bg-accent-blue'
      colors.borderColor = 'border-accent-blue'
      colors.lineColor = 'bg-line-partenaires'
      colors.backgroundGradient = 'bg-partenaires'
      break
    case 'tour-asso':
      colors.textColor = 'text-accent-purple'
      colors.backgroundColor = 'bg-accent-purple'
      colors.borderColor = 'border-accent-purple'
      colors.lineColor = 'bg-line-tour-asso'
      colors.backgroundGradient = 'bg-tour-asso'
      break
    case 'discovery':
      colors.textColor = 'text-primary-variation-1'
      colors.backgroundColor = 'bg-primary-variation-1'
      colors.borderColor = 'border-primary-variation-1'
      colors.lineColor = 'bg-line-discovery'
      colors.backgroundGradient = 'bg-discovery'
      break
    case 'blog':
      colors.textColor = null
      colors.backgroundColor = null
      colors.lineColor = null
      colors.borderColor = null
      colors.backgroundGradient = null
      break
    default:
      colors.textColor = 'text-primary-base'
      colors.backgroundColor = 'bg-primary-base'
      colors.borderColor = 'border-primary-base'
      break
  }

  return ref(colors)
}
