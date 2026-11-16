# [1708] 长度为 K 的最大子数组

## Description


```md
https://leetcode.cn/problems/largest-subarray-length-k/description/
* algorithms
* Easy (64.16%)
* Likes:    19
* Dislikes: -
* Testcase Example:  '[1,4,5,2,3]\n3'
在数组 A 和数组 B 中，对于第一个满足 A[i] != B[i] 的索引 i ，当 A[i] > B[i] 时，数组 A 大于数组 B。
例如，对于索引从 0 开始的数组：
[1,3,2,4] > [1,2,2,4] ，因为在索引 1 上， 3 > 2。
[1,4,4,4] < [2,1,1,1] ，因为在索引 0 上， 1 < 2。
一个数组的子数组是原数组上的一个连续子序列。
给定一个包含不同整数的整数类型数组 nums ，返回 nums 中长度为 k 的最大子数组。

示例 1:
输入: nums = [1,4,5,2,3], k = 3
输出: [5,2,3]
解释: 长度为 3 的子数组有： [1,4,5]、 [4,5,2] 和 [5,2,3]。
在这些数组中， [5,2,3] 是最大的。
示例 2:
输入: nums = [1,4,5,2,3], k = 4
输出: [4,5,2,3]
解释: 长度为 4 的子数组有： [1,4,5,2] 和 [4,5,2,3]。
在这些数组中， [4,5,2,3] 是最大的。
示例 3:
输入: nums = [1,4,5,2,3], k = 1
输出: [5]

提示：
1 <= k <= nums.length <= 105
1 <= nums[i] <= 109
nums 中的所有整数都是不同的。

进阶：如果允许 nums 中存在相同元素，你该如何解决该问题？
Hint 1: Search for the largest integer in the range [0, n - k]
Hint 2: This integer is the first element in the subarray. You should take it with the k - 1 elements after it.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

An array A is greater than B if at the first index i where A[i] != B[i], A[i] > B[i]. Given an array `nums` of **distinct** integers, return the largest subarray of length `k`.

**Example 1:**
Input: nums = [1,4,5,2,3], k = 3
Output: [5,2,3]

**Constraints:**
- 1 <= k <= nums.length <= 10^5
- 1 <= nums[i] <= 10^9, all integers are distinct

## Approach

元素互异,等长窗口的字典序由首元素唯一决定。故在 `nums[0..n-k]` 中找最大值的下标,取其后 k 个元素。

时间 O(n),空间 O(k)(输出)。
