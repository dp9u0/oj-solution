/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.payload = Array.from({
    length: 1000
  }, x => []);
  this.f = function (num) {
    return num % 1000;
  }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  let bucket = this.payload[this.f(key)],
    index = bucket.indexOf(key);
  if (index === -1) bucket.push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  let bucket = this.payload[this.f(key)],
    index = bucket.indexOf(key);
  if (index !== -1) bucket.splice(index, 1);
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  let array = this.payload[this.f(key)],
    index = array.indexOf(key);
  return index !== -1;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */