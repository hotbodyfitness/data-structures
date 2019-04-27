var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(output, input) {
  for(let key in input) {
    output[key] = input[key];
  }
}

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {
  var found = false;

  if (target === this.value) {
    found = true;
  } else if (this.children.length > 0) {
    this.children.forEach(child => {
       found = found || child.contains(target);
    });
    return found;
  }
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
