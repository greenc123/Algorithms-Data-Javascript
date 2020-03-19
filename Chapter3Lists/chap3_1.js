function List() {
  this.listSize = 0; // number of elements
  this.pos = 0; // current position in list
  this.length = length; // returns the number of elements in list
  this.clear = clear; // clears all elements from list
  this.toString = toString; // returns string representation of list
  this.getElement = getElement; // returns element at current position
  this.insert = insert; // Inserts new element to the end of list
  this.append = append; // adds new element to end of list
  this.remove = remove; // removes element from list
  this.front = front; // sets current position to first element list
  this.end = end; // sets current position to last element of list
  this.prev = prev; // moves current position to last element of list
  this.next = next; // moves current position forward one element
  this.currPos = currPos; // returns the current position in list
  this.moveTo = moveTo; // moves the current position to specified position
  this.dataStore = [];
  this.find = find;
  this.contains = contains;
}

// adds new element to end of list
function append(element) {
  this.dataStore[this.listSize++] = element;
}

function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}

// removes element from list
function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

// returns the number of elements in list
function length() {
  return this.listSize;
}

// returns string representation of list
function toString() {
  return this.dataStore;
}

// Inserts new element to the end of list
function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

// clears all elements from list
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === element) {
      return true;
    }
  }
  return false;
}

// sets current position to first element list
function front() {
  this.pos = 0;
}

// sets current position to last element of list
function end() {
  this.pos = this.listSize - 1;
}

// moves current position to last element of list
function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}

// moves current position forward one element
function next() {
  if (this.pos < this.listSize - 1) {
    ++this.pos;
  }
}

// returns the current position in list
function currPos() {
  return this.pos;
}

// moves the current position to specified position
function moveTo(position) {
  this.pos = position;
}

// returns element at current position
function getElement() {
  return this.dataStore[this.pos];
}

var names = new List();

names.append('Clayton');
names.append('Raymond');
names.append('Cynthia');
names.append('Jennifer');
names.append('Bryan');
names.append('Danny');

names.front();

console.log(names.toString(), 'toString');

names.remove('Raymond');

names.next();

console.log(names.getElement(), 'getElement');

names.next();
names.next();
names.prev();

console.log(names.getElement(), 'getElement');

console.log(names.toString(), 'toString');

module.exports = List
