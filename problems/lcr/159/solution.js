/*
 * @lc app=leetcode.cn id=LCR 159 lang=javascript
 *
 * [LCR 159] 库存管理 III
 */

// @lc code=start
/**
 * @param {number[]} stock
 * @param {number} cnt
 * @return {number[]}
 */
var inventoryManagement = function(stock, cnt) {
    const MAX_VAL = 10000;
    const freq = new Array(MAX_VAL + 1).fill(0);
    for (const v of stock) freq[v]++;

    const res = [];
    for (let v = 0; v <= MAX_VAL && res.length < cnt; v++) {
        const times = Math.min(freq[v], cnt - res.length);
        for (let i = 0; i < times; i++) res.push(v);
    }
    return res;
};
// @lc code=end

// TEST:
function assertSameSet(a, b) {
  const sorted = (arr) => [...arr].sort((x, y) => x - y).join(',');
  console.log(sorted(a) === sorted(b));
}

// 示例 1: stock = [2,5,7,4], cnt = 1 -> [2]
assertSameSet(inventoryManagement([2,5,7,4], 1), [2]);

// 示例 2: stock = [0,2,3,6], cnt = 2 -> [0,2] (顺序不限)
assertSameSet(inventoryManagement([0,2,3,6], 2), [0,2]);

// cnt = 0 -> []
assertSameSet(inventoryManagement([1,2,3], 0), []);

// cnt = 数组长度 -> 全量(升序后一致即可)
assertSameSet(inventoryManagement([3,1,2], 3), [1,2,3]);

// 含重复值: stock = [3,1,2,1,4], cnt = 3 -> [1,1,2]
assertSameSet(inventoryManagement([3,1,2,1,4], 3), [1,1,2]);

// 大量重复最小值: stock = [5,0,0,0,3], cnt = 4 -> [0,0,0,3]
assertSameSet(inventoryManagement([5,0,0,0,3], 4), [0,0,0,3]);

// 单元素: stock = [10000], cnt = 1 -> [10000] (边界最大值)
assertSameSet(inventoryManagement([10000], 1), [10000]);
