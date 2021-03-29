const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

constructor(isreverse) {
if (isreverse === false)
    this.reverse = true
}

encrypt(message, key) {
if (message == undefined || key == undefined) {
    throw new Error()
}
else {
    let code = 0
    let answer = ''
    let message_up = message.toUpperCase()
    let key_up = key.toUpperCase()
    let key_index = 0
    for (let i = 0; i < message_up.length; i++) {
        if (message_up.charCodeAt(i) < 65 || message_up.charCodeAt(i) > 90) {
            answer += message_up[i]
            continue
        }
        code = (((message_up.charCodeAt(i) + key_up.charCodeAt(key_index)) % 26) + 65)
        answer += String.fromCharCode(code)
        key_index += 1
        if (key_index == key_up.length) key_index = 0
    }
    if (this.reverse) {
        return answer.split('').reverse().join('')
    }
    else {
        return answer
    }
}
}    

decrypt(message, key) {
if (message === undefined || key === undefined) {
    throw new Error()
}
else {
    let code = 0
    let answer = ''
    let message_up = message.toUpperCase()
    let key_up = key.toUpperCase()
    let key_index = 0
    for (let i = 0; i < message_up.length; i++) {
        if (message_up.charCodeAt(i) < 65 || message_up.charCodeAt(i) > 90) {
            answer += message_up[i]
            continue
        }
        code = (((message_up.charCodeAt(i) + 26 - key_up.charCodeAt(key_index)) % 26) + 65)
        answer += String.fromCharCode(code)
        key_index += 1
        if (key_index == key_up.length) key_index = 0
    }
    if (this.reverse) {
        return answer.split('').reverse().join('')
    }
    else {
        return answer
    }
}
}
}
module.exports = VigenereCipheringMachine;
