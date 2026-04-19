/*
 * @lc app=leetcode id=1282 lang=javascript
 *
 * [1282] Group the People Given the Group Size They Belong To
 */

// @lc code=start
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const map = new Map();
    const result = [];

    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];
        if (!map.has(size)) map.set(size, []);
        map.get(size).push(i);
    }

    for (const [size, people] of map) {
        for (let i = 0; i < people.length; i += size) {
            result.push(people.slice(i, i + size));
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(groupThePeople([3, 3, 3, 3, 3, 1, 3]))); // [[5],[0,1,2],[3,4,6]] or similar
console.log(JSON.stringify(groupThePeople([2, 1, 3, 3, 3, 2]))); // [[1],[0,5],[2,3,4]] or similar
console.log(JSON.stringify(groupThePeople([1]))); // [[0]]
