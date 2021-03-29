const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str + ''
    let answer = str
    options.addition + ''
    if (options.separator == undefined) options.separator = '+'
    if (options.additionSeparator == undefined) options.additionSeparator = '|'
    let str_add = ''
    if (options.addition !== undefined) {
      if (options.additionRepeatTimes !== undefined) {
          for (let i = 1; i <= options.additionRepeatTimes; i++) {
              if (i != options.additionRepeatTimes){
                str_add +=  options.addition + options.additionSeparator  
          }else {
                str_add += options.addition
        }        
    }
      } else{
        
          str_add += options.addition;
      }
    }      

    if (str_add == undefined){
      answer += str
    } else {
      answer +=  str_add
    }
     
    let str_r = answer
    for (let i = 2; i <= options.repeatTimes; i++) {
        str_r +=  options.separator + answer     
    }
    return str_r


};
  