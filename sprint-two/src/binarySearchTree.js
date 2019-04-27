/* Implement a binarySearchTree class with the following properties:
A .left property, a binary search tree (BST) where all values are lower than the current value.
A .right property, a BST where all values are higher than the current value.
A .insert() method, which accepts a value and places it in the tree in the correct position.
A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
*/

var BinarySearchTree = function(value) {
  var tree = {};

  tree.value = value;
  tree.left = null;
  tree.right = null;

  /*In a binary search tree, one child (out of potentially two)
   will always be less than the node's value (based on whatever
   sorting condition you wish) and the other child will always
   be greater than the node's value. */
  tree.insert = function(value) {
    if (value < tree.value) {
      if (tree.left === null) {
        tree.left = BinarySearchTree(value);
      } else {
        tree.left.insert(value);
      }
    } else if (value > tree.value) {
      if (tree.right === null) {
        tree.right = BinarySearchTree(value);
      } else {
        tree.right.insert(value);
      }
    }
    // if value is equal, do nothing, all keys should be distinct
  };

  tree.contains = function (value) {
    if (tree.value === value) {
      return true;
    } else if (value < tree.value) {
      return tree.left ? tree.left.contains(value) : false;
    } else if (value > tree.value) {
      return tree.right ? tree.right.contains(value) : false;
    }
  };

  tree.depthFirstLog = function (cb) {
    cb(tree.value);
    if (tree.left !== null) {
      tree.left.depthFirstLog(cb);
    }
    if (tree.right !== null) {
      tree.right.depthFirstLog(cb);
    }
  };
  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
