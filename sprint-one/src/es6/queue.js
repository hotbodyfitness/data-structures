class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.front = 0;
    this.back = 0;
  }

  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(value) {
    this.storage[this.back] = value;
    this.back++;
  }

  dequeue() {
    let value = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return value;
  }

}
