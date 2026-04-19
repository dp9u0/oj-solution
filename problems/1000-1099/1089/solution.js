/*
 * @lc app=leetcode id=1089 lang=javascript
 *
 * [1089] Duplicate Zeros
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let n = arr.length;
    let tmp = [];
    for (let i = 0; i < n && tmp.length < n; i++) {
        tmp.push(arr[i]);
        if (arr[i] === 0) tmp.push(0);
    }
    for (let i = 0; i < n; i++) arr[i] = tmp[i];
};
// @lc code=end

// TEST:
let a1 = [1,0,2,3,0,4,5,0];
duplicateZeros(a1);
console.log(JSON.stringify(a1)); // [1,0,0,2,3,0,0,4]
let a2 = [1,2,3];
duplicateZeros(a2);
console.log(JSON.stringify(a2)); // [1,2,3]
let a3 = [8,4,5,0,0,0,0,7];
duplicateZeros(a3);
console.log(JSON.stringify(a3)); // [8,4,5,0,0,0,0,0]
