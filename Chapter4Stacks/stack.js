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
    console.log(this.dataStore, 'data')
  }
}

let st1 = new Stack()

st1.push('nice')
st1.push('cool')
st1.push('sweet')
st1.push('nice')

console.log(st1.dataStore, 'store')
st1.clear()
console.log(st1.dataStore, 'store')
st1.push('nice')
console.log(st1.dataStore, 'store')
