/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
  this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map[key]) {
    this.map[key] = {}
  }
  this.map[key][timestamp] = value;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map[key]) {
    this.map[key] = {}
  }
  if (this.map[key][timestamp]) {
    return this.map[key][timestamp]
  } else {
    return timestamp > 0 ? this.get(key, timestamp - 1) : ""
  }
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = Object.create(TimeMap).createNew()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */