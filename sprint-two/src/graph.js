

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.contains(node)) {
    this.nodes[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] ? true : false; // converts a truthy or falsy value in T/F, undefined == falsy
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let n in this.nodes) {
    this.removeEdge(n, node);
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexFrom = this.nodes[fromNode].indexOf(toNode);
  var indexTo = this.nodes[toNode].indexOf(fromNode);
  this.nodes[fromNode].splice(indexFrom, 1);
  this.nodes[toNode].splice(indexTo, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  Object.keys(this.nodes).forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


