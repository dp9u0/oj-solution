/*
 * @lc app=leetcode.cn id=1086 lang=javascript
 *
 * [1086] 前五科的均分
 */

// @lc code=start
/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    const scores = new Map();
    for (const [id, s] of items) {
        if (!scores.has(id)) scores.set(id, []);
        scores.get(id).push(s);
    }

    const res = [];
    for (const id of [...scores.keys()].sort((a, b) => a - b)) {
        const top5 = scores.get(id).sort((a, b) => b - a).slice(0, 5);
        const avg = Math.floor(top5.reduce((s, x) => s + x, 0) / 5);
        res.push([id, avg]);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]])); // [[1,87],[2,88]]
console.log(highFive([[1,100],[1,90],[1,80],[1,70],[1,60],[1,50]])); // [[1,80]] (top five of six)
console.log(highFive([[2,50],[2,60],[2,70],[2,80],[2,90],[2,100],[1,10],[1,10],[1,10],[1,10],[1,10]])); // [[1,10],[2,80]]
