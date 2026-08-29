# [1537] Get the Maximum Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/get-the-maximum-score/description/)

* algorithms
* Hard (40.98%)
* Likes:    1093
* Dislikes: 54
* Testcase Example:  '[2,4,5,8,10]\n[4,6,8,9]'

```md
You are given two sorted arrays of distinct integers nums1 and nums2.
A valid path is defined as follows:

Choose array nums1 or nums2 to traverse (from index-0).
Traverse the current array from left to right.
If you are reading any value that is present in nums1 and nums2 you are allowed to change your path to the other array. (Only one repeated value is considered in the valid path).

The score is defined as the sum of unique values in a valid path.
Return the maximum score you can obtain of all possible valid paths. Since the answer may be too large, return it modulo 109 + 7.

Example 1:


Input: nums1 = [2,4,5,8,10], nums2 = [4,6,8,9]
Output: 30
Explanation: Valid paths:
[2,4,5,8,10], [2,4,5,8,9], [2,4,6,8,9], [2,4,6,8,10],  (starting from nums1)
[4,6,8,9], [4,5,8,10], [4,5,8,9], [4,6,8,10]    (starting from nums2)
The maximum is obtained with the path in green [2,4,6,8,10].

Example 2:

Input: nums1 = [1,3,5,7,9], nums2 = [3,5,100]
Output: 109
Explanation: Maximum sum is obtained with the path [1,3,5,100].

Example 3:

Input: nums1 = [1,2,3,4,5], nums2 = [6,7,8,9,10]
Output: 40
Explanation: There are no common elements between nums1 and nums2.
Maximum sum is obtained with the path [6,7,8,9,10].


Constraints:

1 <= nums1.length, nums2.length <= 105
1 <= nums1[i], nums2[i] <= 107
nums1 and nums2 are strictly increasing.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你两个**有序**（严格递增）且元素互不相同的整数数组 `nums1` 和 `nums2`。

一条**有效路径**定义如下：

- 选择 `nums1` 或 `nums2` 之一，从下标 0 开始遍历；
- 从左到右遍历当前数组；
- 当读到某个**同时存在于两个数组**的值时，允许切换到另一个数组继续遍历（交点值在路径中只计一次）。

路径的**得分**是路径上所有值的总和（去重后）。返回所有可能有效路径中的最大得分。结果可能很大，返回其对 `10^9 + 7` 取模的值。

示例 1：
- 输入：`nums1 = [2,4,5,8,10], nums2 = [4,6,8,9]`
- 输出：`30`
- 解释：最优路径 `[2,4,6,8,10]`（在交点 4 从 nums1 切到 nums2，在交点 8 切回 nums1）。

示例 2：
- 输入：`nums1 = [1,3,5,7,9], nums2 = [3,5,100]`
- 输出：`109`（路径 `[1,3,5,100]`）

示例 3：
- 输入：`nums1 = [1,2,3,4,5], nums2 = [6,7,8,9,10]`
- 输出：`40`（无公共元素，直接取整个 nums2）

约束：
- `1 <= nums1.length, nums2.length <= 10^5`
- `1 <= nums1[i], nums2[i] <= 10^7`
- 两数组均严格递增

## 解题思路

两数组严格递增 ⇒ 公共值（交点）唯一且天然有序，路径只能在交点处切换。于是把两数组按**交点切段**：每一段内部只能沿单一数组走，段与段之间在交点汇合。

设 `best1` / `best2` 为"走到上一个汇合点（含）为止"，沿 nums1 / nums2 的最大路径和；`sum1` / `sum2` 为自上一个汇合点以来在各自数组上的段内累加值。双指针 `i`、`j` 同步推进：

1. `nums1[i] < nums2[j]`：`sum1 += nums1[i++]`（这段只能属于 nums1 侧）；
2. `nums1[i] > nums2[j]`：`sum2 += nums2[j++]`；
3. 相等（到达交点 `v`）：两条候选路径在此汇合，`best = max(best1 + sum1, best2 + sum2) + v`，随后 `best1 = best2 = best`，段累加清零，两指针同时前移；
4. 某数组先行耗尽后，把剩余部分累入对应 `sum`，最终答案为 `max(best1 + sum1, best2 + sum2) % (10^9+7)`。

数值范围：段和 ≤ 10^5 × 10^7 = 10^12 < 2^53，JS 双精度可精确表示，中间过程无需取模，最后取模一次即可。

时间复杂度 O(n + m)，空间复杂度 O(1)。

验证示例 1：交点 4 处 best = max(2,0)+4 = 6；交点 8 处 best = max(6+5, 6+6)+8 = 20；尾部 max(20+10, 20+9) = 30 ✓
