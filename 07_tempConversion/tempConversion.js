const convertToCelsius = function(temp) {
  const formula = (temp - 32) * 5/9;
  return Math.round(formula * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  const formula = (temp * 9/5) + 32; 
  return Math.round(formula * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
