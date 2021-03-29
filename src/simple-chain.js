const CustomError = require("../extensions/custom-error");

const chainMaker = {
  c: [],
  getLength() {
      this.c.length
      return this
  },
  addLink(value) {
      this.c.push(value)
      return this
  },
  removeLink(position) {
      if (position < 0 || !Number.isInteger(position) || !Number(position))  {
          this.c.length = 0
          throw new Error()
      }
      else {
          this.c.splice(position - 1, 1)
          return this
      }
  },
  reverseChain() {
      this.c.reverse()
      return this
  },
  finishChain() {
      const answer = this.c.map(i => {
          return i = `( ${i} )~~`
      })
      this.c.length = 0
      return answer.join('').slice(0, -2)
  }
};

module.exports = chainMaker;
