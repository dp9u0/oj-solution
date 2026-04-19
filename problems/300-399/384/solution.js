/*
 * @lc app=leetcode id=384 lang=javascript
 *
 * [384] Shuffle an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return [...this.original];
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let arr = [...this.original];
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

// TEST:
let sol = new Solution([1, 2, 3]);
console.log(sol.shuffle()); // random permutation of [1,2,3]
console.log(sol.reset());   // [1, 2, 3]
console.log(sol.shuffle()); // random permutation of [1,2,3]
let sol2 = new Solution([1]);
console.log(sol2.shuffle()); // [1]
console.log(sol2.reset());   // [1]
