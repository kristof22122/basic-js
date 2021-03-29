const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members  == null || typeof(members) === undefined || typeof(members) === "number" || typeof(members) == "boolean" ){
    return false         
  }

console.log(typeof(members))
if(typeof(members) == "object"){    
let answer = ''
let alpha_str= []   
try {
for(let i of members){
  
    console.log(i)
  console.log(typeof(i))
  if(i  == null || typeof(i) === undefined || typeof(i) === "number" || typeof(i) == "boolean" || typeof(i) == "object"){
    console.log('+')    
  } else {
  console.log()
  let s = i.trim()
  
  alpha_str.push(s.slice(0,1).toUpperCase())
  }
}
} catch(e) {
return false
}
console.log(alpha_str)

alpha_str.sort()
for(let i of alpha_str){
  answer += i.toUpperCase()
}
return answer
}
};
