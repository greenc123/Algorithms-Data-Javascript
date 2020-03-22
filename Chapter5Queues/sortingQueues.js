const Queue = require("./queue.js")

function distribute(nums, queues, n, digit) {
  for (var i = 0; i < n; i++) {
    if (digit == 1) {
      queues[nums[i]%10].enqueue(nums[i])
    } else {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i])
    } 
  }
}

function collect(queues, nums) {
  var i = 0;
  for (var digit = 0; digit < 10; ++digit) {
    while(!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue()
    }
  }
}

function disArray(arr) {
  for (var i = 0; i < arr.length; ++i) {
    console.log(arr[i] + " ")
  }
}

var queues = []

for (var i = 0; i < 10; ++i) {
  queues[i] = new Queue()
}

var nums = []
for (var i = 0; i < 10; ++i) {
  nums[i] = Math.floor(Math.floor(Math.random() * 101))
}

console.log("Before radix sort: ")
console.log(disArray(nums))
console.log(distribute(nums, queues, 10, 1))
console.log(collect(queues, nums))
console.log(distribute(nums, queues, 10, 10))
console.log(collect(queues, nums))

console.log(disArray(nums))
