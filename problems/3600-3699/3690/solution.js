/*
 * @lc app=leetcode id=3690 lang=javascript
 *
 * [3690] Split and Merge Array Transformation
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSplitMerge = function(nums1, nums2) {
    const target = nums2.join(',');
    if (nums1.join(',') === target) return 0;
    const visited = new Set([nums1.join(',')]);
    const queue = [nums1];
    let steps = 0;
    while (queue.length > 0) {
        steps++;
        const size = queue.length;
        for (let q = 0; q < size; q++) {
            const arr = queue.shift();
            const n = arr.length;
            for (let L = 0; L < n; L++) {
                for (let R = L; R < n; R++) {
                    const sub = arr.slice(L, R + 1);
                    const rest = [...arr.slice(0, L), ...arr.slice(R + 1)];
                    const m = rest.length;
                    for (let p = 0; p <= m; p++) {
                        const newArr = [...rest.slice(0, p), ...sub, ...rest.slice(p)];
                        const key = newArr.join(',');
                        if (key === target) return steps;
                        if (!visited.has(key)) {
                            visited.add(key);
                            queue.push(newArr);
                        }
                    }
                }
            }
        }
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(minSplitMerge([3,1,2], [1,2,3]));                    // 1
console.log(minSplitMerge([1,1,2,3,4,5], [5,4,3,2,1,1]));        // 3
console.log(minSplitMerge([1,2,3], [1,2,3]));                     // 0
