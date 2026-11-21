/*
 * @lc app=leetcode.cn id=2015 lang=javascript
 *
 * [2015] 每段建筑物的平均高度
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var averageHeightOfBuildings = function(buildings) {
    const events = [];
    for (const [s, e, h] of buildings) {
        events.push([s, h, 1]);
        events.push([e, -h, -1]);
    }
    events.sort((a, b) => a[0] - b[0] || a[2] - b[2]);
    const res = [];
    let sum = 0, count = 0, prev = -1;
    for (const [x, dh, dc] of events) {
        if (count > 0 && x > prev) {
            const avg = Math.floor(sum / count);
            const last = res[res.length - 1];
            if (last && last[1] === prev && last[2] === avg) {
                last[1] = x;
            } else {
                res.push([prev, x, avg, count]);
            }
        }
        sum += dh;
        count += dc;
        prev = x;
    }
    return res.map(([l, r, a]) => [l, r, a]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(averageHeightOfBuildings([[1,4,2],[3,9,4]]))); // [[1,3,2],[3,4,3],[4,9,4]]
console.log(JSON.stringify(averageHeightOfBuildings([[1,3,2],[2,5,3],[2,8,3]]))); // [[1,3,2],[3,8,3]]
console.log(JSON.stringify(averageHeightOfBuildings([[1,2,1],[5,6,1]]))); // [[1,2,1],[5,6,1]]
console.log(JSON.stringify(averageHeightOfBuildings([[0,5,3]]))); // [[0,5,3]]
console.log(JSON.stringify(averageHeightOfBuildings([[2,4,7],[2,4,7]]))); // [[2,4,7]] (14/2=7)
