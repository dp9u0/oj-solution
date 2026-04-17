/*
 * @lc app=leetcode id=3645 lang=javascript
 *
 * [3645] Maximum Total from Optimal Activation Order
 */

// @lc code=start
/**
 * @param {number[]} value
 * @param {number[]} limit
 * @return {number}
 */
var maxTotal = function(value, limit) {
    const n = value.length;
    const elems = [];
    for (let i = 0; i < n; i++) {
        elems.push([limit[i], value[i]]);
    }
    elems.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    let total = 0;
    let maxRaw = 0;
    const active = [];
    let front = 0;
    let ptr = 0;

    while (ptr < n) {
        const [l, v] = elems[ptr];
        if (l <= maxRaw) {
            ptr++;
            continue;
        }
        total += v;
        active.push(l);
        const raw = active.length - front;
        if (raw > maxRaw) maxRaw = raw;
        while (front < active.length && active[front] <= raw) {
            front++;
        }
        ptr++;
        while (ptr < n && elems[ptr][0] <= maxRaw) {
            ptr++;
        }
    }

    return total;
};
// @lc code=end

// TEST:
console.log(maxTotal([3,5,8], [2,1,3]));           // 16
console.log(maxTotal([4,2,6], [1,1,1]));           // 6
console.log(maxTotal([4,1,5,2], [3,3,2,3]));       // 12
console.log(maxTotal([1], [1]));                     // 1
console.log(maxTotal([10,1,1], [2,1,3]));           // 12
console.log(maxTotal([5,10,10], [2,2,2]));          // 20
