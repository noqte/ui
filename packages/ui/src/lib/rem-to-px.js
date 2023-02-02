const RemToPx = (values) => {
  Object.keys(values).forEach((value) => {
    if (values[value].includes('rem')) {
      values[value] = parseInt(values[value], 10) * 16 + 'px'
    }
  })
}

module.exports = RemToPx
