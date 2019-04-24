var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    let largest = 0;
    for (let key in storage) {
      if (key > largest) {
        largest = key;
      }
    }
    storage[largest + 1] = value;
  };

  someInstance.pop = function() {
    let largest = 0;
    for (let key in storage) {
      if (key > largest) {
        largest = key;
      }
    }

    let value = storage[largest];
    delete storage[largest];
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
