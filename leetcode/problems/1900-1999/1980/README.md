# [1980] Find Unique Binary String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-unique-binary-string/description/)

* algorithms
* Medium (81.24%)
* Likes:    2856
* Dislikes: 99
* Testcase Example:  '["01","10"]'

```md
Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.

Example 1:

Input: nums = ['01','10']
Output: '11'
Explanation: '11' does not appear in nums. '00' would also be correct.

Example 2:

Input: nums = ['00','01']
Output: '11'
Explanation: '11' does not appear in nums. '10' would also be correct.

Example 3:

Input: nums = ['111','011','001']
Output: '101'
Explanation: '101' does not appear in nums. '000', '010', '100', and '110' would also be correct.


Constraints:

n == nums.length
1 <= n <= 16
nums[i].length == n
nums[i] is either &#39;0&#39; or &#39;1&#39;.
All the strings of nums are unique.


```

## 翻译

给定一个包含 n 个长度为 n 的唯一二进制字符串的数组 `nums`，返回一个长度为 n 且**不在** `nums` 中出现的二进制字符串。如果有多个答案，返回任意一个即可。

## Approach

**康托尔对角线法**（Cantor's Diagonal）：构造一个字符串，使得第 i 位与 `nums[i]` 的第 i 位不同。这样构造出的字符串与每个 `nums[i]` 都至少有一位不同，因此一定不在 `nums` 中。

时间复杂度 O(n)，空间复杂度 O(n)。非常优雅的构造法。

## Solution

[SourceCode](./solution.js)
