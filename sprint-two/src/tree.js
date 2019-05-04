var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(output, input) {
  for(let key in input) {
    output[key] = input[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.removeFromParent = function() {
  var index = this.parent.findChild(this.value);
  this.parent.children.splice(index, 1);
  this.parent = null;
};

treeMethods.findChild = function(target) { // only used in the above function
  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return i;
    }
  }
};

treeMethods.contains = function(target) {
  var found = false;

  if (target === this.value) {
    found = true;
  }

  this.children.forEach(child => {
    found = found || child.contains(target);
  });

  return found;
};

treeMethods.traverse = function(callback) {
  callback(this.value);
  this.children.forEach(child => {
    child.traverse(callback);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
