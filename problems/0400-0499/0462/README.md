# [462] 最小操作次数使数组元素相等 II

## Description


```md
https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii/description/
* algorithms
* Medium (62.98%)
* Likes:    339
* Dislikes: -
* Testcase Example:  '[1,2,3]'
给你一个长度为 n 的整数数组 nums ，返回使所有数组元素相等需要的最小操作数。
在一次操作中，你可以使数组中的一个元素加 1 或者减 1 。
测试用例经过设计以使答案在 32 位 整数范围内。

示例 1：
输入：nums = [1,2,3]
输出：2
解释：
只需要两次操作（每次操作指南使一个元素加 1 或减 1）：
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]
示例 2：
输入：nums = [1,10,2,9]
输出：16

提示：
n == nums.length
1 <= nums.length <= 105
-109 <= nums[i] <= 109

```

## Description (English)

Given an integer array `nums` of length `n`, return the minimum number of operations required to make all array elements equal.

In one operation, you can increment or decrement one element of the array by 1.

Test cases are designed so that the answer fits in a 32-bit integer.

Example 1:
Input: nums = [1,2,3]
Output: 2
Explanation:
Only two operations are needed (each operation increments or decrements one element by 1):
[1,2,3] => [2,2,3] => [2,2,2]

Example 2:
Input: nums = [1,10,2,9]
Output: 16

Constraints:
- n == nums.length
- 1 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9

## 思路

**中位数 + 距离求和**。

设最终所有元素都变成目标值 `t`，总操作数为 `sum(|nums[i] - t|)`。这是一个经典的「到一组点的距离和最小化」问题，最优的 `t` 是数组的中位数：

- 将数组排序。考虑最小值 `a` 与最大值 `b` 的一对：只要 `a <= t <= b`，代价 `(t - a) + (b - t) = b - a` 与 `t` 无关；`t` 在区间外则代价更大。
- 因此对每一对 `(nums[i], nums[n-1-i])`，最优 `t` 应落在每对的区间内，中位数正好满足这一点。总代价下界为 `sum(nums[n-1-i] - nums[i])`，取中位数即可取到该下界。

实现上可以直接排序后取中位数求绝对差之和；也可以用双指针写法 `sum(nums[n-1-i] - nums[i])`，隐式地表达了中位数结论，两者结果一致。

复杂度：排序 `O(n log n)` 时间，`O(1)` 额外空间（不计排序栈空间）。n ≤ 1e5，足够快。

## Solution

[SourceCode](./solution.js)
