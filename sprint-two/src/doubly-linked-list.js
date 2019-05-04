var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.tail === null) {
      list.tail = node;
      list.head = node;
    } else {
      node.previous = list.tail;
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.addToHead = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.tail = node;
      list.head = node;
    } else {
      node.next = list.head;
      list.head.previous = node;
      list.head = node;
    }
  };

  list.removeHead = function() {
    var value = list.removeNode(list.head);

    if (list.head !== list.tail) {
      list.head = list.head.next;
      list.head.previous = null;
    }

    return value;
  };

  list.removeTail = function() {
    var value = list.removeNode(list.tail);

    if (list.head !== list.tail) {
      list.tail = list.tail.previous;
      list.tail.next = null;
    }

    return value;
  };

  list.removeNode = function(node) {
    if (node !== null) {
      var value = node.value;

      if (list.head === list.tail) {
        list.head = null;
        list.tail = null;
      }

      return value;
    }
  };

  list.contains = function(target) {
    var node = list.head;
    while (node !== null) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
