/*
 * @lc app=leetcode id=1560 lang=javascript
 *
 * [1560] Most Visited Sector in  a Circular Track
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
    const count = new Array(n + 1).fill(0);
    count[rounds[0]]++;
    for (let i = 0; i < rounds.length - 1; i++) {
        let cur = rounds[i];
        while (cur !== rounds[i + 1]) {
            cur = cur % n + 1;
            count[cur]++;
        }
    }
    const maxCount = Math.max(...count.slice(1));
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (count[i] === maxCount) result.push(i);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(mostVisited(4, [1,3,1,2]))); // [1,2]
console.log(JSON.stringify(mostVisited(2, [2,1,2,1,2,1,2,1,2]))); // [2]
console.log(JSON.stringify(mostVisited(7, [1,3,5,7]))); // [1,2,3,4,5,6,7]
console.log(JSON.stringify(mostVisited(3, [1,2,3]))); // [1,2,3]
console.log(JSON.stringify(mostVisited(4, [3,1,2]))); // [1,2,3]
console.log(JSON.stringify(mostVisited(5, [1,3]))); // [1,2,3]
