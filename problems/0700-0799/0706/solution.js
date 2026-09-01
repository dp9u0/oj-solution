/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
  this.payload = Array.from({
    length: 1000
  }, x => []);
  this.h = function (key) {
    return key % 1000;
  }
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  let bucket = this.payload[this.h(key)];
  let index = bucket.indexOf(key);
  if (index === -1) bucket.push(key, '' + value);
  else bucket.splice(index + 1, 1, '' + value);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  let bucket = this.payload[this.h(key)];
  let index = bucket.indexOf(key);
  if (index !== -1) return +bucket[index + 1];
  return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  let bucket = this.payload[this.h(key)];
  let index = bucket.indexOf(key);
  if (index !== -1) bucket.splice(index, 2);
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = Object.create(MyHashMap).createNew()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */