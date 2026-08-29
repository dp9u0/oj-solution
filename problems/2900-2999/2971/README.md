# [2971] Find Polygon With the Largest Perimeter

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/description/)

* algorithms
* Medium (65.51%)
* Likes:    844
* Dislikes: 71
* Testcase Example:  '[5,5,5]'

```md
You are given an array of positive integers nums of length n.
A polygon is a closed plane figure that has at least 3 sides. The longest side of a polygon is smaller than the sum of its other sides.
Conversely, if you have k (k >= 3) positive real numbers a1, a2, a3, ..., ak where a1 <= a2 <= a3 <= ... <= ak and a1 + a2 + a3 + ... + ak-1 > ak, then there always exists a polygon with k sides whose lengths are a1, a2, a3, ..., ak.
The perimeter of a polygon is the sum of lengths of its sides.
Return the largest possible perimeter of a polygon whose sides can be formed from nums, or -1 if it is not possible to create a polygon.

Example 1:

Input: nums = [5,5,5]
Output: 15
Explanation: The only possible polygon that can be made from nums has 3 sides: 5, 5, and 5. The perimeter is 5 + 5 + 5 = 15.

Example 2:

Input: nums = [1,12,1,2,5,50,3]
Output: 12
Explanation: The polygon with the largest perimeter which can be made from nums has 5 sides: 1, 1, 2, 3, and 5. The perimeter is 1 + 1 + 2 + 3 + 5 = 12.
We cannot have a polygon with either 12 or 50 as the longest side because it is not possible to include 2 or more smaller sides that have a greater sum than either of them.
It can be shown that the largest possible perimeter is 12.

Example 3:

Input: nums = [5,5,50]
Output: -1
Explanation: There is no possible way to form a polygon from nums, as a polygon has at least 3 sides and 50 > 5 + 5.


Constraints:

3 <= n <= 105
1 <= nums[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个长度为 `n` 的正整数数组 `nums`。

多边形是至少有 3 条边的封闭平面图形，其**最长边必须小于其余边之和**。反之，若 `k (k >= 3)` 个正数 `a1 <= a2 <= ... <= ak` 满足 `a1 + ... + a(k-1) > ak`，则一定存在以它们为边长的 k 边形。

返回用 `nums` 中的数作为边长能构成的多边形的**最大周长**；无法构成则返回 `-1`。

示例 1：`[5,5,5]` → `15`（等边三角形）
示例 2：`[1,12,1,2,5,50,3]` → `12`（边 `1,1,2,3,5`）
示例 3：`[5,5,50]` → `-1`（`50 > 5+5`，不成立）

约束：`3 <= n <= 10^5`，`1 <= nums[i] <= 10^9`

## 解题思路

排序 + 前缀和 + 从大到小枚举最长边（贪心）：

1. 升序排序，求前缀和 `prefix`（`prefix[i]` = 前 `i` 个数之和）；
2. 从 `i = n-1` 向下枚举：以 `nums[i]` 为最长边时，其余边的最大可能和是它前面**全部**数之和 `prefix[i]`（多拿只会更大且仍满足"其余边之和更大"）。若 `prefix[i] > nums[i]`，则周长 `prefix[i] + nums[i]` 即答案，立即返回；
3. 无一满足则返回 `-1`。

正确性：`prefix[i] + nums[i]` 随 `i` 减小单调递减，故从大到小第一个满足条件的 `i` 给出最大周长。

时间复杂度 O(n log n)（排序），空间 O(1)（前缀和可边扫边算或直接用数组）。和 ≤ 10^5 × 10^9 = 10^14 < 2^53，双精度精确。
