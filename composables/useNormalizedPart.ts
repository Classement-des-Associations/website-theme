import { Part } from '../types'

type NormalizedPart = {
  [key in Part]: string
}

export const useNormalizedPart = (part: Part): string => {
  const normalizedPart: NormalizedPart = {
    classement: 'classement',
    'tour-asso': 'tour asso',
    discovery: 'discovery',
    concours: 'concours',
    'ceremonie-finale': 'cérémonie finale',
    partenaires: 'partenaires',
    blog: 'blog'
  }

  return normalizedPart[part] || 'classement'
}
