const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
  let count = 0
  for(let i of cats){
    for(let j of i){
      if(j == '^^'){
      count +=1
      }
    }    
  }
  return count
};
