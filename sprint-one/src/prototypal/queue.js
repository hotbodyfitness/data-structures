var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.largest = 0;
  return newQueue;
};

var queueMethods = {};
queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
queueMethods.enqueue = function(value) {
  this.storage[this.largest] = value;
  this.largest++;
};

queueMethods.dequeue = function() {
  if (Object.keys(this.storage).length > 0) {
    let value = this.storage[0];
    delete this.storage[0];
    for (let key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    this.largest--;
    delete this.storage[this.largest];
    return value;
  }
};

