/*
 * @lc app=leetcode id=1552 lang=javascript
 *
 * [1552] Magnetic Force Between Two Balls
 */

// @lc code=start
/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((a, b) => a - b);

    const canPlace = (minDist) => {
        let count = 1, last = position[0];
        for (let i = 1; i < position.length; i++) {
            if (position[i] - last >= minDist) {
                count++;
                last = position[i];
            }
        }
        return count >= m;
    };

    let left = 1, right = position[position.length - 1] - position[0];
    while (left < right) {
        const mid = Math.ceil((left + right) / 2);
        if (canPlace(mid)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
};
// @lc code=end

// TEST:
console.log(maxDistance([1, 2, 3, 4, 7], 3));
// Expected: 3

console.log(maxDistance([5, 4, 3, 2, 1, 1000000000], 2));
// Expected: 999999999

console.log(maxDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
// Expected: 3
