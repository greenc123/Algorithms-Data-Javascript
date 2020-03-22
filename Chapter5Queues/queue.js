function Queue() {
  this.dataStore = []
  this.enqueue = (element) => {
    this.dataStore.push(element)
  } 
  this.dequeue = () => {
    //return this.dataStore.shift() // not priority queue
    var priority = this.dataStore[0].code
    for (var i = 1; i < this.dataStore.length; ++i) {
      if (this.dataStore[i].code < priority) {
        priority = i
      }
    }
    return this.dataStore.splice(priority, 1)
  }
  this.front = () => {
    return this.dataStore[0]
  }
  this.back = () => {
    return this.dataStore[this.dataStore.length - 1]
  }
  this.toString = () => {
    var priority = this.dataStore[0].code
    for (var i = 1; i < this.dataStore.length; ++i) {
      if (this.dataStore[i].code < priority) {
        priority = i
      }
    }
    return this.dataStore.splice(priority, 1)
  }
  /*
   * Not priority queue
  this.toString = () => {
    var retStr = ""
    for (var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n"
    }
    return retStr
  }
  */
  this.empty = () => {
    if (this.dataStore.length == 0) {
      return true
    } else {
      return false
    }
  }
}

module.exports = Queue 
