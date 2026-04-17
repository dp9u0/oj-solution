/*
 * @lc app=leetcode id=1943 lang=javascript
 *
 * [1943] Describe the Painting
 */

// @lc code=start
/**
 * @param {number[][]} segments
 * @return {number[][]}
 */
var splitPainting = function(segments) {
    const events = [];
    for (const [start, end, color] of segments) {
        events.push([start, color]);
        events.push([end, -color]);
    }
    events.sort((a, b) => a[0] - b[0]);

    const result = [];
    let sum = 0, prevPos = -1;

    let i = 0;
    while (i < events.length) {
        const pos = events[i][0];
        if (prevPos >= 0 && sum > 0) {
            result.push([prevPos, pos, sum]);
        }
        while (i < events.length && events[i][0] === pos) {
            sum += events[i][1];
            i++;
        }
        prevPos = pos;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(splitPainting([[1,4,5],[4,7,7],[1,7,9]])));
// [[1,4,14],[4,7,16]]
console.log(JSON.stringify(splitPainting([[1,7,9],[6,8,15],[8,10,7]])));
// [[1,6,9],[6,7,24],[7,8,15],[8,10,7]]
console.log(JSON.stringify(splitPainting([[1,4,5],[1,4,7],[4,7,1],[4,7,11]])));
// [[1,4,12],[4,7,12]]
console.log(JSON.stringify(splitPainting([[1,4,5],[1,7,7]])));
// [[1,4,12],[4,7,7]]
console.log(JSON.stringify(splitPainting([[3,8,6],[3,10,2],[6,10,8],[4,7,1],[9,10,10],[1,4,9],[5,7,4],[7,9,5],[2,10,7]])));
// [[1,2,9],[2,3,16],[3,4,24],[4,5,16],[5,6,20],[6,7,28],[7,8,28],[8,9,22],[9,10,27]]
