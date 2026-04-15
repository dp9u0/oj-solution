# [3201] Find the Maximum Length of Valid Subsequence I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/description/)

* algorithms
* Medium (54.87%)
* Likes:    639
* Dislikes: 56
* Testcase Example:  '[1,2,3,4]'

```md
You are given an integer array nums.
A subsequence sub of nums with length x is called valid if it satisfies:

(sub[0] + sub[1]) % 2 == (sub[1] + sub[2]) % 2 == ... == (sub[x - 2] + sub[x - 1]) % 2.

Return the length of the longest valid subsequence of nums.
A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

Example 1:

Input: nums = [1,2,3,4]
Output: 4
Explanation:
The longest valid subsequence is [1, 2, 3, 4].

Example 2:

Input: nums = [1,2,1,1,2,1,2]
Output: 6
Explanation:
The longest valid subsequence is [1, 2, 1, 2, 1, 2].

Example 3:

Input: nums = [1,3]
Output: 2
Explanation:
The longest valid subsequence is [1, 3].


Constraints:

2 <= nums.length <= 2 * 105
1 <= nums[i] <= 107


```

## 中文翻译

给定整数数组 nums，找最长子序列使得所有相邻元素之和的奇偶性相同。

## 解题思路

**奇偶性分析：**

1. 相邻和的奇偶性取决于两元素的奇偶：(同奇同偶→偶，一奇一偶→奇)
2. 所有和为偶：子序列所有元素奇偶性相同 → 长度 = max(奇数个数, 偶数个数)
3. 所有和为奇：子序列奇偶交替 → 最长交替子序列
4. 用 lenOdd/lenEven 跟踪以奇/偶结尾的最长交替子序列，O(n) 更新

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
