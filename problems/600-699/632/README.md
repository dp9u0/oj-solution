# [632] Smallest Range Covering Elements from K Lists

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/description/)

* algorithms
* Hard (70.34%)
* Likes:    4471
* Dislikes: 103
* Testcase Example:  '[[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]'

```md
You have k lists of sorted integers in non-decreasingorder. Find the smallest range that includes at least one number from each of the k lists.
We define the range [a, b] is smaller than range [c, d] if b - a < d - c or a < c if b - a == d - c.

Example 1:

Input: nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
Output: [20,24]
Explanation:
List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
List 2: [0, 9, 12, 20], 20 is in range [20,24].
List 3: [5, 18, 22, 30], 22 is in range [20,24].

Example 2:

Input: nums = [[1,2,3],[1,2,3],[1,2,3]]
Output: [1,1]


Constraints:

nums.length == k
1 <= k <= 3500
1 <= nums[i].length <= 50
-105 <= nums[i][j] <= 105
nums[i]is sorted in non-decreasing order.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

你有 k 个按非递减排序的整数列表。找到包含每个列表中至少一个数字的最小范围 [a, b]。

范围 [a, b] 比范围 [c, d] 小的定义：`b - a < d - c`，或者当 `b - a == d - c` 时 `a < c`。

**示例 1：**

输入：`nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]`
输出：`[20,24]`
解释：
- 列表 1：[4, 10, 15, 24, 26]，24 在范围 [20,24] 内。
- 列表 2：[0, 9, 12, 20]，20 在范围 [20,24] 内。
- 列表 3：[5, 18, 22, 30]，22 在范围 [20,24] 内。

**示例 2：**

输入：`nums = [[1,2,3],[1,2,3],[1,2,3]]`
输出：`[1,1]`

**约束：**

- `nums.length == k`
- `1 <= k <= 3500`
- `1 <= nums[i].length <= 50`
- `-10^5 <= nums[i][j] <= 10^5`
- `nums[i]` 按非递减排序

## 解题思路

**最小堆 + 多路归并**（经典 K 路合并变形）：

1. 将每个列表的第一个元素放入最小堆，堆元素记录 `(值, 列表索引, 元素索引)`。
2. 同时维护堆中所有元素的最大值 `maxVal`，则当前范围 `[堆顶最小值, maxVal]` 即为一个覆盖所有 k 个列表的候选范围。
3. 弹出堆顶（最小值），用 `[minVal, maxVal]` 更新答案；然后压入该列表的下一个元素并更新 `maxVal`。
4. 当某个列表元素耗尽时终止——此后任何范围都无法再覆盖该列表。
5. 平局规则：由于弹出的最小值随迭代非递减，首次取得最小宽度时的左端点最小，因此用严格小于 `<` 更新即可满足 `b - a == d - c` 时取更小 `a` 的要求。

**复杂度：**

- 时间复杂度：`O(n log k)`，n 为所有元素总数（最多 3500 × 50 = 175000），k 为列表数。
- 空间复杂度：`O(k)`（堆大小）。
