const celsius = 70
const fahrenheit = 70
const fahrenheitConversionTool = celsius / 5 * 9 + 32
const celsiusConversionTool = (fahrenheit - 32) * 5 / 9

console.log(`${celsius} celsius is ${fahrenheitConversionTool} in fahrenheit`)
console.log(`${fahrenheit} fahrenheit is ${celsiusConversionTool} in celsius`)