const defaultTheme = require("tailwindcss/defaultTheme");
const extendedSpacings = require("../extend/spacings");
const remCalculator = require("./rem-calculator");

const defaultSpaces = { ...defaultTheme.spacing, ...extendedSpacings };

const spacingCalculator = ({ baseFontSize, spacingUnit }) => {
  return Object.keys(defaultSpaces).reduce((acc, size) => {
    const inPX = isNaN(size) ? size : size * 4;

    let space = inPX;
    if (inPX === 0) {
      space = "0px";
    } else if (inPX === "px") {
      space = "1px";
    } else {
      space =
        spacingUnit === "px"
          ? `${space}px`
          : `${remCalculator(baseFontSize, inPX, 8)}rem`;
    }

    return { ...acc, ...{ [size]: `${space}` } };
  }, {});
};

module.exports = spacingCalculator;
