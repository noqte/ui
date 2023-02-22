const plugin = require('tailwindcss/plugin')
const defaultConfigs = require('./config/default')
const spacingCalculator = require('./lib/spacing-calculator')
const fontSizeCalculator = require('./lib/font-size-calculator')
const RemToPx = require('./lib/rem-to-px')
const { extendedColors, extendedBoxShadows } = require('./extend')
const tag = require('../dist/components/tag')
const input = require('../dist/components/input')
const button = require('../dist/components/button')
const avatar = require('../dist/components/avatar')
const tooltip = require('../dist/components/tooltip')
const card = require('../dist/components/card')
const direction = require('../dist/utilities/direction')

module.exports = plugin.withOptions(
  (options) => {
    const settings = { ...defaultConfigs, ...options }
    return ({ addBase, addComponents, addUtilities, theme }) => {
      addBase({
        html: { fontSize: `${(settings.baseFontSize * 100) / 16}%` }
      })

      addComponents(tag)
      addComponents(card)
      addComponents(input)
      addComponents(button)
      addComponents(avatar)
      addComponents(tooltip)

      addUtilities(direction)

      RemToPx(theme('maxWidth'))
    }
  },
  (options) => {
    const settings = { ...defaultConfigs, ...options }
    const spacing = spacingCalculator(settings)
    const fontSize = fontSizeCalculator(settings)
    return {
      theme: {
        spacing,
        fontSize,
        extend: {
          colors: extendedColors,
          boxShadow: extendedBoxShadows
        }
      }
    }
  }
)
