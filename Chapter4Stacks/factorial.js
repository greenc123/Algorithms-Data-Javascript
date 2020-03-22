function factorial(n) {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

// 5! = 5 * 4 * 3 * 2 * 1 = 120
console.log(factorial(5), 5)
console.log(factorial(20), 20)
