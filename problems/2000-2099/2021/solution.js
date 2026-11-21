/*
 * @lc app=leetcode.cn id=2021 lang=javascript
 *
 * [2021] 街上最亮的位置
 */

// @lc code=start
/**
 * @param {number[][]} lights
 * @return {number}
 */
var brightestPosition = function(lights) {
    const events = [];
    for (const [p, r] of lights) {
        events.push([p - r, 1]);
        events.push([p + r + 1, -1]);
    }
    events.sort((a, b) => a[0] - b[0]);
    let best = 0, ans = 0, count = 0;
    let i = 0;
    while (i < events.length) {
        const x = events[i][0];
        while (i < events.length && events[i][0] === x) {
            count += events[i][1];
            i++;
        }
        if (count > best) {
            best = count;
            ans = x;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(brightestPosition([[-3,2],[1,2],[3,3]])); // -1
console.log(brightestPosition([[1,0],[0,1]])); // 1
console.log(brightestPosition([[1,2]])); // -1
console.log(brightestPosition([[0,0],[1,0]])); // 0 (both cover single points; brightness 1 at 0 and 1 -> smallest 0)
console.log(brightestPosition([[5,5],[6,3]])); // 3 ([0,10] and [3,9] overlap [3,9] brightness 2 -> 3)
