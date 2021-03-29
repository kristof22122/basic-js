const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === undefined || typeof sampleActivity != 'string')  return false
  let item = Number(sampleActivity)
  if (isNaN(item) || item <= 0 || item >= 9000) return false
  let date = Math.ceil(Math.log10(MODERN_ACTIVITY/item)/(Math.log10(2)/HALF_LIFE_PERIOD))
  if (date < 0) return false
  return date
};
