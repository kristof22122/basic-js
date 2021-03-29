const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let array_of_depth = 1
        arr.forEach((i) => {
            if (typeof(i) === 'object') {
                this.subb_of_depth = this.calculateDepth(i) + 1
                array_of_depth = Math.max(this.subb_of_depth, array_of_depth)
            }
        })
        return array_of_depth
    }  
};