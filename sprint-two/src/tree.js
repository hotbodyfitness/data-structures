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
}

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.removeFromParent = function() {
  var kids = this.parent.children;
  for (let i = 0; i < kids.length; i++) {
    if (kids[i].value === this.value) {
      kids.splice(i, 1);
      break;
    }
  }
  this.parent = null;
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

// treeMethods.find = function(target) {
//   for (let i = 0; i < this.children.length; i++) {
//     if (this.children[i].value === target) {
//       return i;
//     }
//   }
//   return -1;
// };



/*
 * Complexity: What is the time complexity of the above functions?
 */
