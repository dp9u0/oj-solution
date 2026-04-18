# [3781] Maximum Score After Binary Swaps

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-score-after-binary-swaps/description/)

* algorithms
* Medium (35.04%)
* Likes:    79
* Dislikes: 2
* Testcase Example:  '[2,1,5,2,3]\n"01010"'

```md
You are given an integer array nums of length n and a binary string s of the same length.
Initially, your score is 0. Each index i where s[i] = &#39;1&#39; contributes nums[i] to the score.
You may perform any number of operations (including zero). In one operation, you may choose an index i such that 0 <= i < n - 1, where s[i] = &#39;0&#39;, and s[i + 1] = &#39;1&#39;, and swap these two characters.
Return an integer denoting the maximum possible score you can achieve.

Example 1:

Input: nums = [2,1,5,2,3], s = '01010'
Output: 7
Explanation:
We can perform the following swaps:

Swap at index i = 0: '01010' changes to '10010'
Swap at index i = 2: '10010' changes to '10100'

Positions 0 and 2 contain &#39;1&#39;, contributing nums[0] + nums[2] = 2 + 5 = 7. This is maximum score achievable.

Example 2:

Input: nums = [4,7,2,9], s = '0000'
Output: 0
Explanation:
There are no &#39;1&#39; characters in s, so no swaps can be performed. The score remains 0.


Constraints:

n == nums.length == s.length
1 <= n <= 105
1 <= nums[i] <= 109
s[i] is either &#39;0&#39; or &#39;1&#39;


```

## 翻译

给定nums数组和等长二进制字符串s。初始分数为s[i]='1'位置的nums[i]之和。操作：选择s[i]='0'且s[i+1]='1'的位置交换。求最大分数。

## 解题思路

'1'只能向左移动，且'1'之间不能跨越。从右向左扫描，维护最小堆记录已选位置。遇到'1'入堆，遇到'0'时若nums[i]大于堆顶则替换（贪心交换）。

## Solution

[SourceCode](./solution.js)
