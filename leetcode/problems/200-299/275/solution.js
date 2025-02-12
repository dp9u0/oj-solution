/*
 * @lc app=leetcode id=275 lang=javascript
 *
 * [275] H-Index II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let n = citations.length;
    let left = 0, right = n - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (citations[mid] >= n - mid) {
            right = mid - 1;    
        } else {  
            left = mid + 1;
        }
    }
    return n - left;
};
// @lc code=end
// TEST:
console.log(hIndex([3,0,6,1,5])); // Output: 3
console.log(hIndex([1,3,1])); // Output: 1
console.log(hIndex([100])); // Output: 1
console.log(hIndex([0])); // Output: 0


