/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const defaultConfigs = require("./src/config/default");
const spacingCalculator = require("./src/lib/spacing-calculator");
const fontSizeCalculator = require("./src/lib/font-size-calculator");
const { extendedColors, extendedBoxShadows } = require("./src/extend");

module.exports = {
  content: [{ raw: "" }],
  plugins: [
    plugin.withOptions(
      (options) => {
        const settings = { ...defaultConfigs, ...options };
        return ({ addBase }) => {
          addBase({
            html: { fontSize: `${(settings.baseFontSize * 100) / 16}%` },
          });
        };
      },
      (options) => {
        const settings = { ...defaultConfigs, ...options };
        const spacing = spacingCalculator(settings);
        const fontSize = fontSizeCalculator(settings);
        return {
          theme: {
            spacing,
            fontSize,
            extend: {
              colors: extendedColors,
              boxShadow: extendedBoxShadows,
            },
          },
        };
      }
    ),
  ],
};
