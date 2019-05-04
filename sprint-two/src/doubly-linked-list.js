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
    if (list.head !== null){
      var value = list.head.value;

      if (list.head === list.tail) {
        list.head = null;
        list.tail = null;
      } else {
        list.head = list.head.next;
        list.head.previous = null;
      }

      return value;
    }
  };

  list.removeTail = function() {
    if (list.tail !== null) {
      var value = list.tail.value;

      if (list.head === list.tail) {
        list.head = null;
        list.tail = null;
      } else {
        list.tail = list.tail.previous;
        list.tail.next = null;
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
