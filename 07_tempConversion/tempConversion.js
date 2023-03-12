const convertToCelsius = function(tempF) {
  return tempC = Math.round(((tempF-32)*(5/9))*10)/10;
};

const convertToFahrenheit = function(tempC) {
  return tempF = Math.round((tempC*(9/5)+32)*10)/10;
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
