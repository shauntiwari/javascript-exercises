const convertToCelsius = function(fTemp) {
  const cTemp = 5 / 9 * (fTemp - 32);
  return parseFloat(cTemp.toFixed(1));
};

const convertToFahrenheit = function(cTemp) {
  const fTemp = 9 / 5 * cTemp + 32;
  return parseFloat(fTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
