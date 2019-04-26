var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let obj = Object.create(stackMethods);
  obj.storage = {};
  return obj;
};

var stackMethods = {};
stackMethods.push = function (value) {
  let x = Object.keys(this.storage).length;
  this.storage[x] = value;
};

stackMethods.pop = function () {
  let x = Object.keys(this.storage).length - 1;
  let value = this.storage[x];
  delete this.storage[x];
  return value;
};

stackMethods.size = function () {
  return Object.keys(this.storage).length;
};
