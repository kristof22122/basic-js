const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let n = Math.pow(2, disksNumber) - 1
  let sec = Math.floor(n/(turnsSpeed / 3600))
  let answer = {
  turns: n,
  seconds: sec
  }
  return answer
    
  };
