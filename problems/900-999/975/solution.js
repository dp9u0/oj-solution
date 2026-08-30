/*
 * @lc app=leetcode id=975 lang=javascript
 *
 * [975] Odd Even Jump
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var oddEvenJumps = function(arr) {
    const n = arr.length;

    // 求每个位置的跳转目标：ascending 为 true 表示奇数跳（目标值尽量小，>= arr[i]），
    // false 表示偶数跳（目标值尽量大，<= arr[i]）；同值取最小目标索引。
    // 索引按（值有序，索引升序）排序后用单调栈：新索引 j 到来时，
    // 栈中所有小于 j 的索引 i 出栈并令 next[i] = j。
    function nextJump(ascending) {
        const indices = Array.from({ length: n }, (_, i) => i);
        indices.sort((a, b) => {
            if (arr[a] !== arr[b]) return ascending ? arr[a] - arr[b] : arr[b] - arr[a];
            return a - b;
        });
        const next = new Array(n).fill(-1);
        const stack = [];
        for (const j of indices) {
            while (stack.length && stack[stack.length - 1] < j) {
                next[stack.pop()] = j;
            }
            stack.push(j);
        }
        return next;
    }

    const oddNext = nextJump(true);
    const evenNext = nextJump(false);

    // odd[i] / even[i]：位于 i 且下一步为奇数/偶数跳时，能否到达末尾
    const odd = new Array(n).fill(false);
    const even = new Array(n).fill(false);
    odd[n - 1] = even[n - 1] = true;

    let count = 1; // 末尾索引本身是好索引
    for (let i = n - 2; i >= 0; i--) {
        if (oddNext[i] !== -1) odd[i] = even[oddNext[i]];
        if (evenNext[i] !== -1) even[i] = odd[evenNext[i]];
        if (odd[i]) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(oddEvenJumps([10, 13, 12, 14, 15])); // 2
console.log(oddEvenJumps([2, 3, 1, 1, 4]));      // 3
console.log(oddEvenJumps([5, 1, 3, 4, 2]));      // 3
console.log(oddEvenJumps([1]));                  // 1（单元素，0 次跳跃即到末尾）
console.log(oddEvenJumps([1, 1, 1, 1]));         // 4（每次都跳到相邻的相等值）
console.log(oddEvenJumps([3, 2, 1]));            // 1（递减数组，只有末尾可达）
console.log(oddEvenJumps([1, 2, 3]));            // 2（i=1、2 可达；i=0 奇跳到 1 后偶跳无解）
