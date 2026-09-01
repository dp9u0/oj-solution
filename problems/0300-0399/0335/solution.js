/*
 * @lc app=leetcode id=335 lang=javascript
 *
 * [335] Self Crossing
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @return {boolean}
 */

var isSelfCrossing = function(distance) {
    const n = distance.length;
    if (n < 4) return false;
    
    for (let i = 3; i < n; i++) {
        // Case 1: Fourth line crosses first line
        if (distance[i] >= distance[i-2] && 
            distance[i-1] <= distance[i-3]) {
            return true;
        }
        
        // Case 2: Fifth line crosses second line  
        if (i >= 4) {
            if (distance[i-1] === distance[i-3] && 
                distance[i] + distance[i-4] >= distance[i-2]) {
                return true;
            }
        }
        
        // Case 3: Sixth line crosses third line
        if (i >= 5) {
            if (distance[i-2] >= distance[i-4] && 
                distance[i-3] >= distance[i-1] && 
                distance[i-1] + distance[i-5] >= distance[i-3] && 
                distance[i] + distance[i-4] >= distance[i-2]) {
                return true;
            }
        }
    }
    
    return false;
};
// @lc code=end

// TEST:
console.log(isSelfCrossing([2,1,1,2])); // Expected: true
console.log(isSelfCrossing([1,2,3,4])); // Expected: false
console.log(isSelfCrossing([1,1,1,2,1])); // Expected: true
