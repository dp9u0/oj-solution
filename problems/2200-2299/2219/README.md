# [2219] 数组的最大总分

## Description


```md
https://leetcode.cn/problems/maximum-sum-score-of-array/description/
* algorithms
* Medium (57.97%)
* Likes:    4
* Dislikes: -
* Testcase Example:  '[4,3,-2,5]'
给你一个下标从 0 开始的整数数组 nums ，数组长度为 n 。
nums 在下标 i （0 <= i < n）处的 总分 等于下面两个分数中的 最大值 ：
nums 前 i + 1 个元素的总和
nums 后 n - i 个元素的总和
返回数组 nums 在任一下标处能取得的 最大总分 。

示例 1：
输入：nums = [4,3,-2,5]
输出：10
解释：
下标 0 处的最大总分是 max(4, 4 + 3 + -2 + 5) = max(4, 10) = 10 。
下标 1 处的最大总分是 max(4 + 3, 3 + -2 + 5) = max(7, 6) = 7 。
下标 2 处的最大总分是 max(4 + 3 + -2, -2 + 5) = max(5, 3) = 5 。
下标 3 处的最大总分是 max(4 + 3 + -2 + 5, 5) = max(10, 5) = 10 。
nums 可取得的最大总分是 10 。
示例 2：
输入：nums = [-3,-5]
输出：-3
解释：
下标 0 处的最大总分是 max(-3, -3 + -5) = max(-3, -8) = -3 。
下标 1 处的最大总分是 max(-3 + -5, -5) = max(-8, -5) = -5 。
nums 可取得的最大总分是 -3 。

提示：
n == nums.length
1 <= n <= 105
-105 <= nums[i] <= 105
Hint 1: How can we use precalculation to efficiently calculate the average difference at an index?
Hint 2: Create a prefix and/or suffix sum array.

```

## Solution

[SourceCode](./solution.js)

## English Translation

The sum score at index i is the larger of: the sum of the first i+1 elements, and the sum of the last n-i elements. Return the maximum sum score over all indices.

Example 1:
Input: nums = [4,3,-2,5]
Output: 10

Example 2:
Input: nums = [-3,-5]
Output: -3

Constraints: 1 <= n <= 10^5, -10^5 <= nums[i] <= 10^5.

## Approach

One pass accumulates the running prefix sum while a precomputed total serves as the suffix sum: suffix(i) = total - prefix(i-1). Answer = max over i of max(prefix(i), suffix(i)). O(n) time, O(1) space.
