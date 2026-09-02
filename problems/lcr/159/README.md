# [LCR 159] 库存管理 III

## Description


```md
https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/description/
* algorithms
* Easy (57.72%)
* Likes:    608
* Dislikes: -
* Testcase Example:  '[2,5,7,4]\n1'
仓库管理员以数组 stock 形式记录商品库存表，其中 stock[i] 表示对应商品库存余量。请返回库存余量最少的 cnt 个商品余量，返回 顺序不限。

示例 1：
输入：stock = [2,5,7,4], cnt = 1
输出：[2]
示例 2：
输入：stock = [0,2,3,6], cnt = 2
输出：[0,2] 或 [2,0]

提示：
0 <= cnt <= stock.length <= 10000
0 <= stock[i] <= 10000

```

## Solution

[SourceCode](./solution.js)

### English Description

Warehouse manager records the inventory of goods in an array `stock`, where `stock[i]` represents the remaining stock of the corresponding item. Return the `cnt` items with the **least** remaining stock. The order of the returned items does **not** matter.

**Example 1:**
```
Input: stock = [2,5,7,4], cnt = 1
Output: [2]
```

**Example 2:**
```
Input: stock = [0,2,3,6], cnt = 2
Output: [0,2]  (or [2,0])
```

**Constraints:**
- `0 <= cnt <= stock.length <= 10000`
- `0 <= stock[i] <= 10000`

> This problem is essentially "smallest k numbers" (same as 剑指 Offer 40 / LeetCode 剑指 Offer).

### Approach (中文思路)

**问题转化**：求数组中值最小的 `cnt` 个元素（最小 k 个数），顺序不限。

**解法：计数排序 (Counting Sort)**
- 本题约束 `0 <= stock[i] <= 10000`，值域非常小，适合用计数排序在线性时间内求得最小的 `cnt` 个数。
- 第一遍遍历统计每个值出现的频次 `freq[v]`。
- 第二遍从小到大遍历值 `0..10000`，每遇到一个值就把该值的元素加入结果，直到取满 `cnt` 个为止。
- 因为是从小到大取，天然得到的就是最小的 `cnt` 个元素；重复值也能正确处理（`freq[v]` 记录出现次数）。
- 时间复杂度 O(n + range)（range = 10001），空间复杂度 O(range)。
- 顺序不限，结果满足题意即可。

> 若值域很大（如 10⁹），则应改用快速选择（Quick Select，平均 O(n)）或大根堆（O(n log cnt)）。本题值域仅 10⁴，计数排序最简且无退化。
