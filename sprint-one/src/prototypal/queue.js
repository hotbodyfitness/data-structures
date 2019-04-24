var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};
queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
queueMethods.enqueue = function(value) {
  var largest = 0;
  for (let key in this.storage) {
    if (key > largest) {
      largest = key;
    }
  }
  this.storage[largest + 1] = value;
};

queueMethods.dequeue = function() {
  var smallest = Number.MAX_SAFE_INTEGER;
  for (let key in this.storage) {
    if (key < smallest) {
      smallest = key;
    }
  }
  let value = this.storage[smallest];
  delete this.storage[smallest];
  return value;
};

