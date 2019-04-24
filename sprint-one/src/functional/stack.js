var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let largest = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    largest++;
    storage[largest] = value;
  };

  someInstance.pop = function() {
    let value = storage[largest];
    delete storage[largest];

    largest--;
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
