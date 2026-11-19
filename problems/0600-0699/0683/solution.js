/*
 * @lc app=leetcode.cn id=683 lang=javascript
 *
 * [683] K 个关闭的灯泡
 */

// @lc code=start
/**
 * @param {number[]} bulbs
 * @param {number} k
 * @return {number}
 */
var kEmptySlots = function(bulbs, k) {
    const n = bulbs.length;
    const days = new Array(n); // days[pos] = day (1-based) when pos is switched on
    for (let i = 0; i < n; i++) days[bulbs[i] - 1] = i + 1;

    let ans = Infinity;
    let left = 0, right = k + 1;
    while (right < n) {
        let ok = true;
        for (let i = left + 1; i < right; i++) {
            // an interior bulb that turns on too early kills every window covering it
            if (days[i] < days[left] || days[i] < days[right]) {
                left = i; // jump; strictly right, so no infinite loop
                right = left + k + 1;
                ok = false;
                break;
            }
        }
        if (!ok) continue; // re-check bounds and rescan the new window
        // valid: both ends on, everything between still dark on day max(...)
        ans = Math.min(ans, Math.max(days[left], days[right]));
        left = right;
        right = left + k + 1;
    }
    return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(kEmptySlots([1, 3, 2], 1)); // 2
console.log(kEmptySlots([1, 2, 3], 1)); // -1
console.log(kEmptySlots([6, 2, 4, 1, 5, 3], 1)); // 2 (pair idx1/idx3 both on at day 2)
console.log(kEmptySlots([6, 2, 4, 1, 5, 3], 3)); // -1
console.log(kEmptySlots([1, 2, 3, 4, 5, 6], 2)); // -1
console.log(kEmptySlots([3, 1, 2], 1)); // 2 (day2: idx0/idx2 on, idx1 still dark)
