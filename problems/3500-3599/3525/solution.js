/*
 * @lc app=leetcode.cn id=3525 lang=javascript
 *
 * [3525] 求出数组的 X 值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var resultArray = function(nums, k, queries) {
    const n = nums.length;
    let size = 1;
    while (size < n) size <<= 1;

    // cnt[i*k + r]: 以节点 i 区间左端点为起点的前缀乘积中 mod k == r 的个数
    // total[i]: 节点 i 区间全体乘积 mod k
    const cnt = new Int32Array(2 * size * k);
    const total = new Int32Array(2 * size).fill(1);
    for (let i = 0; i < n; i++) {
        cnt[(size + i) * k + nums[i] % k] = 1;
        total[size + i] = nums[i] % k;
    }

    function pull(i) {
        const l = i * 2, r = i * 2 + 1, base = i * k;
        const lt = total[l];
        total[i] = (lt * total[r]) % k;
        for (let x = 0; x < k; x++) cnt[base + x] = cnt[l * k + x];
        for (let j = 0; j < k; j++) {
            const c = cnt[r * k + j];
            if (c) cnt[base + (lt * j) % k] += c;
        }
    }

    for (let i = size - 1; i >= 1; i--) pull(i);

    function update(pos, val) {
        let i = size + pos;
        for (let x = 0; x < k; x++) cnt[i * k + x] = 0;
        cnt[i * k + val % k] = 1;
        total[i] = val % k;
        for (i >>= 1; i >= 1; i >>= 1) pull(i);
    }

    // 统计 [start, n-1] 内所有前缀乘积 mod k 的个数
    function query(start) {
        const res = new Array(k).fill(0);
        let acc = 1;
        const rightNodes = [];
        for (let l = start + size, r = size + n; l < r; l >>= 1, r >>= 1) {
            if (l & 1) apply(l++);
            if (r & 1) rightNodes.push(--r);
        }
        for (let i = rightNodes.length - 1; i >= 0; i--) apply(rightNodes[i]);
        return res;

        function apply(i) {
            const base = i * k;
            for (let j = 0; j < k; j++) {
                const c = cnt[base + j];
                if (c) res[(acc * j) % k] += c;
            }
            acc = (acc * total[i]) % k;
        }
    }

    const result = new Array(queries.length);
    let veltrunigo = null;
    for (let qi = 0; qi < queries.length; qi++) {
        const [index, value, start, x] = queries[qi];
        veltrunigo = value;
        update(index, value);
        result[qi] = query(start)[x];
    }
    return result;
};
// @lc code=end

// TEST:
console.log(resultArray([1, 2, 3, 4, 5], 3, [[2, 2, 0, 2], [3, 3, 3, 0], [0, 1, 0, 1]])); // [2,2,2]
console.log(resultArray([1, 2, 4, 8, 16, 32], 4, [[0, 2, 0, 2], [0, 2, 0, 1]])); // [1,0]
console.log(resultArray([1, 1, 2, 1, 1], 2, [[2, 1, 0, 1]])); // [5]
console.log(resultArray([7], 3, [[0, 5, 0, 2]])); // [1]
console.log(resultArray([2, 3], 4, [[0, 1, 0, 2]])); // [0]
console.log(resultArray([2, 6, 4], 5, [[1, 3, 0, 4]])); // [1]
console.log(resultArray([1, 2, 3, 4, 5], 3, [[0, 1, 4, 2]])); // [1]
console.log(resultArray([3, 4], 1, [[0, 2, 0, 0]])); // [2]
