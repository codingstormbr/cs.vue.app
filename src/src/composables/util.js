const cleanNumberPhone = (input) => {
  return input.replace(/\D/g, '')
}

// Calcula a luminância de uma cor RGB
const rgbToLuminance = (r, g, b) => {
  const [rNorm, gNorm, bNorm] = [r, g, b].map((value) => {
    value /= 255
    return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rNorm + 0.7152 * gNorm + 0.0722 * bNorm
}

export { cleanNumberPhone, rgbToLuminance }
