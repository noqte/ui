const remCalculator = (base, value, precision = 4) => {
  return parseFloat(parseInt(value) / parseInt(base, 10)).toPrecision(
    precision
  );
};

module.exports = remCalculator;
