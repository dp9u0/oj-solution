/*
 * @lc app=leetcode id=1656 lang=javascript
 *
 * [1656] Design an Ordered Stream
 */

// @lc code=start
/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.arr = new Array(n + 1).fill(null);
  this.ptr = 1;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  this.arr[idKey] = value;
  let chunk = [];
  while (this.ptr < this.arr.length && this.arr[this.ptr] !== null) {
    chunk.push(this.arr[this.ptr]);
    this.ptr++;
  }
  return chunk;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
// @lc code=end

// TEST:
var os = new OrderedStream(5);
console.log(JSON.stringify(os.insert(3, "ccccc"))); // []
console.log(JSON.stringify(os.insert(1, "aaaaa"))); // ["aaaaa"]
console.log(JSON.stringify(os.insert(2, "bbbbb"))); // ["bbbbb","ccccc"]
console.log(JSON.stringify(os.insert(5, "eeeee"))); // []
console.log(JSON.stringify(os.insert(4, "ddddd"))); // ["ddddd","eeeee"]
