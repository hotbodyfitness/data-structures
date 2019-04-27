

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

/*
  0 -> [k2, v2] //[k1, v1] overwrites
  0 -> [[k1, v1]]
  0 -> [[k1, v1], [k2, v2]]
  get(0)
    iterate over [[], []]
    check if key equals our key
*/
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if k is already in the hash table, if so delete it
  if (this.retrieve(k)) {
    this.remove(k);
  }
  // If there is no bucket at index, start a new bucket
  if (!this._storage.get(index)) {
    this._storage.set(index, [[k, v]]);
  } else {
    // if there is a bucket, add to it
    this._storage.get(index).push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (let pair of bucket) {
      if (pair[0] === k) {
        return pair[1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    // if there is one pair, just set undefined
    if (bucket.length === 1) {
      this._storage.set(index, undefined);
    } else { // if there are more than one pair in the bucket
      for (var i = 0; i < bucket.length; i++) {
        // find the pair that has the key 'k'
        if (bucket[i][0] === k) {
          // remove that pair from the bucket
          bucket.splice(i, 1);
        }
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


