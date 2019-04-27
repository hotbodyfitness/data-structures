var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    let largest = 0;
    for (let key in storage) {
      if (key > largest) {
        largest = key;
      }
    }
    storage[largest + 1] = value;
  };

  someInstance.dequeue = function() {
    let smallest = Number.MAX_SAFE_INTEGER;
    for (let key in storage) {
      if (key < smallest) {
        smallest = key;
      }
    }

    let value = storage[smallest];
    delete storage[smallest];
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
