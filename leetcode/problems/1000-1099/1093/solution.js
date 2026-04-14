/*
 * @lc app=leetcode id=1093 lang=javascript
 *
 * [1093] Statistics from a Large Sample
 */

// @lc code=start
/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function(count) {
    let minimum = -1, maximum = 0, total = 0, sum = 0, mode = 0, maxCount = 0;
    for (let i = 0; i < 256; i++) {
        if (count[i] > 0) {
            if (minimum === -1) minimum = i;
            maximum = i;
            total += count[i];
            sum += i * count[i];
            if (count[i] > maxCount) { maxCount = count[i]; mode = i; }
        }
    }
    const mean = sum / total;

    // Find median: locate positions (total-1)/2 and total/2
    let median = 0;
    const lo = Math.floor((total - 1) / 2), hi = Math.floor(total / 2);
    let acc = 0, first = -1, second = -1;
    for (let i = 0; i < 256; i++) {
        if (count[i] === 0) continue;
        const prev = acc;
        acc += count[i];
        if (first === -1 && prev <= lo && lo < acc) first = i;
        if (second === -1 && prev <= hi && hi < acc) second = i;
        if (first !== -1 && second !== -1) break;
    }
    median = (first + second) / 2;

    return [minimum, maximum, mean, median, mode];
};
// @lc code=end

// TEST:
const c1 = new Array(256).fill(0); c1[1]=1; c1[2]=3; c1[3]=4;
console.log(JSON.stringify(sampleStats(c1)));
const c2 = new Array(256).fill(0); c2[1]=4; c2[2]=3; c2[3]=2; c2[4]=2;
console.log(JSON.stringify(sampleStats(c2)));
