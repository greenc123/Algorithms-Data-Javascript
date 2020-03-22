function Stack() {
  this.dataStore = []
  this.top = 0
  this.push = (element) => {
    this.dataStore[this.top++] = element
  }  
  this.pop = () => {
    return this.dataStore[--this.top]
  } 
  this.peek = () => {
    return this.dataStore[this.top-1]
  } 
  this.length = () => {
    return this.top
  }
  this.clear = () => {
    for (let i = 0; i < this.top; i++) {
      this.dataStore.pop()
    }
    this.top = 0
  }
}

module.exports = Stack 
