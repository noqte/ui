const plugin = require('tailwindcss/plugin')
const defaultConfigs = require('./config/default')
const spacingCalculator = require('./lib/spacing-calculator')
const fontSizeCalculator = require('./lib/font-size-calculator')
const { extendedColors, extendedBoxShadows } = require('./extend')
const tag = require('../dist/components/tag')

module.exports = plugin.withOptions(
  (options) => {
    const settings = { ...defaultConfigs, ...options }
    return ({ addBase, addComponents }) => {
      addBase({
        html: { fontSize: `${(settings.baseFontSize * 100) / 16}%` }
      })

      addComponents(tag)
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
