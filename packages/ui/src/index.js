const plugin = require('tailwindcss/plugin')
const defaultConfigs = require('./config/default')
const spacingCalculator = require('./lib/spacing-calculator')
const fontSizeCalculator = require('./lib/font-size-calculator')
const RemToPx = require('./lib/rem-to-px')
const { extendedColors, extendedBoxShadows } = require('./extend')
const tag = require('../dist/components/tag')
const button = require('../dist/components/button')
const avatar = require('../dist/components/avatar')
const tooltip = require('../dist/components/tooltip')

module.exports = plugin.withOptions(
  (options) => {
    const settings = { ...defaultConfigs, ...options }
    return ({ addBase, addComponents, theme }) => {
      addBase({
        html: { fontSize: `${(settings.baseFontSize * 100) / 16}%` }
      })

      addComponents(tag)
      addComponents(button)
      addComponents(avatar)
      addComponents(tooltip)

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
