# [801] Minimum Swaps To Make Sequences Increasing

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/description/)

* algorithms
* Hard (41.92%)
* Likes:    2967
* Dislikes: 140
* Testcase Example:  '[1,3,5,4]\n[1,2,3,7]'

```md
You are given two integer arrays of the same length nums1 and nums2. In one operation, you are allowed to swap nums1[i] with nums2[i].

For example, if nums1 = [1,2,3,8], and nums2 = [5,6,7,4], you can swap the element at i = 3 to obtain nums1 = [1,2,3,4] and nums2 = [5,6,7,8].

Return the minimum number of needed operations to make nums1 and nums2 strictly increasing. The test cases are generated so that the given input always makes it possible.
An array arr is strictly increasing if and only if arr[0] < arr[1] < arr[2] < ... < arr[arr.length - 1].

Example 1:

Input: nums1 = [1,3,5,4], nums2 = [1,2,3,7]
Output: 1
Explanation:
Swap nums1[3] and nums2[3]. Then the sequences are:
nums1 = [1, 3, 5, 7] and nums2 = [1, 2, 3, 4]
which are both strictly increasing.

Example 2:

Input: nums1 = [0,3,5,8,9], nums2 = [2,1,4,6,9]
Output: 1


Constraints:

2 <= nums1.length <= 105
nums2.length == nums1.length
0 <= nums1[i], nums2[i] <= 2 * 105


```

## 中文翻译

给定两个长度相同的整数数组 nums1 和 nums2。每次操作可以交换 nums1[i] 与 nums2[i]。

例如，若 nums1 = [1,2,3,8]，nums2 = [5,6,7,4]，可以交换 i = 3 处的元素，得到 nums1 = [1,2,3,4] 和 nums2 = [5,6,7,8]。

返回使 nums1 和 nums2 都严格递增所需的最少操作次数。测试用例保证输入一定有解。

数组 arr 严格递增当且仅当 arr[0] < arr[1] < arr[2] < ... < arr[arr.length - 1]。

示例 1：
输入：nums1 = [1,3,5,4], nums2 = [1,2,3,7]
输出：1
解释：交换 nums1[3] 和 nums2[3]，得到 nums1 = [1,3,5,7]、nums2 = [1,2,3,4]，均为严格递增。

示例 2：
输入：nums1 = [0,3,5,8,9], nums2 = [2,1,4,6,9]
输出：1

约束：
2 <= nums1.length <= 10^5
nums2.length == nums1.length
0 <= nums1[i], nums2[i] <= 2 * 10^5

## 思路

**动态规划（交换/不交换两个状态，O(n) 时间、O(1) 空间）**

每个位置 i 只有两种状态：交换过（swap）或未交换（keep）。定义：
- `keep`：到 i 为止且位置 i 不交换时，使两数组严格递增的最少交换次数；
- `swap`：到 i 为止且位置 i 交换时，对应的最少交换次数。

对每个相邻对 (i-1, i)，考虑两种可行转移（题目保证有解，两者至少满足其一，也可同时满足）：

1. **自然递增**：`nums1[i] > nums1[i-1] && nums2[i] > nums2[i-1]`
   - i 不换 ← i-1 不换：`newKeep = min(newKeep, keep)`
   - i 换 ← i-1 换（两边一起换仍递增）：`newSwap = min(newSwap, swap + 1)`
2. **交叉递增**：`nums1[i] > nums2[i-1] && nums2[i] > nums1[i-1]`
   - i 换 ← i-1 不换：`newSwap = min(newSwap, keep + 1)`
   - i 不换 ← i-1 换：`newKeep = min(newKeep, swap)`

初始（i=0）：`keep = 0`，`swap = 1`。答案为 `min(keep, swap)`。

由于每步转移只依赖上一个位置，用两个滚动变量即可，时间 O(n)、空间 O(1)。

## Solution

[SourceCode](./solution.js)
