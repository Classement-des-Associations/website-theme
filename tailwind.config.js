// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-base': '#FF6944',
        'primary-variation-1': '#F9B666',
        'primary-variation-2': '#FFF6EA',
        'accent-purple': '#4B3069',
        'accent-blue': '#0A6B72',
        black: '#291B25',
        'light-grey': '#d4d4d4',
        'ultra-light-grey': '#f9f9f9',
        white: '#FFFFFF'
      },
      backgroundImage: theme => ({
        classement: `linear-gradient(153.98deg, ${theme(
          'colors.primary-base'
        )} 14.79%, ${theme('colors.primary-variation-1')} 100%)`,
        'tour-asso': `linear-gradient(135deg, ${theme(
          'colors.primary-base'
        )} 9.05%, ${theme('colors.accent-purple')} 100%)`,
        concours: `linear-gradient(153.98deg, ${theme(
          'colors.primary-base'
        )} 14.79%, ${theme('colors.primary-variation-1')} 100%)`,
        discovery: `linear-gradient(206.57deg, ${theme(
          'colors.primary-base'
        )} 53.61%, ${theme('colors.primary-variation-1')} 83.33%)`,
        'ceremonie-finale': `linear-gradient(153.98deg, ${theme(
          'colors.primary-base'
        )} 14.79%, ${theme('colors.primary-variation-1')} 100%)`,
        partenaires: `linear-gradient(153.43deg, ${theme(
          'colors.accent-purple'
        )} 0%, ${theme('colors.accent-blue')} 83.33%)`,

        'line-classement': `linear-gradient(180deg, ${theme(
          'colors.primary-base / 0%'
        )} 0%, ${theme('colors.primary-base')} 25%, ${theme(
          'colors.primary-base'
        )} 75%, ${theme('colors.primary-base / 0%')} 100%)`,
        'line-tour-asso': `linear-gradient(180deg, ${theme(
          'colors.accent-purple / 0%'
        )} 0%, ${theme('colors.accent-purple')} 25%, ${theme(
          'colors.accent-purple'
        )} 75%, ${theme('colors.accent-purple / 0%')} 100%)`,
        'line-concours': `linear-gradient(180deg, ${theme(
          'colors.primary-base / 0%'
        )} 0%, ${theme('colors.primary-base')} 25%, ${theme(
          'colors.primary-base'
        )} 75%, ${theme('colors.primary-base / 0%')} 100%)`,
        'line-discovery': `linear-gradient(180deg, ${theme(
          'colors.primary-variation-1 / 0%'
        )} 0%, ${theme('colors.primary-variation-1')} 25%, ${theme(
          'colors.primary-variation-1'
        )} 75%, ${theme('colors.primary-variation-1 / 0%')} 100%)`,
        'line-ceremonie-finale': `linear-gradient(180deg, ${theme(
          'colors.primary-base / 0%'
        )} 0%, ${theme('colors.primary-base')} 25%, ${theme(
          'colors.primary-base'
        )} 75%, ${theme('colors.primary-base / 0%')} 100%)`,

        'center-classement': `linear-gradient(135deg, ${theme(
          'colors.primary-base'
        )} 50%, ${theme('colors.primary-variation-1')} 50%)`
      }),
      linearBorderGradients: ({ theme }) => ({
        colors: {
          associations: [
            theme('colors.primary-base'),
            theme('colors.primary-variation-1')
          ],
          partenaires: [
            theme('colors.accent-purple'),
            theme('colors.accent-blue')
          ],
          'associations-light': [
            theme('colors.primary-base / 0.3'),
            theme('colors.primary-variation-1 / 0.3')
          ],
          'partenaires-light': [
            theme('colors.accent-purple / 0.3'),
            theme('colors.accent-blue / 0.3')
          ],
          'tour-asso': [
            theme('colors.primary-base'),
            theme('colors.accent-purple')
          ],
          'tour-asso-light': [
            theme('colors.primary-base / 0.3'),
            theme('colors.accent-purple / 0.3')
          ]
        },
        background: theme('colors')
      })
    }
  },
  plugins: [
    require('tailwindcss-border-gradient-radius'),
    require('@tailwindcss/typography'),
    plugin(({ addVariant }) => {
      addVariant('blog', '.blog &')
    })
  ]
}
