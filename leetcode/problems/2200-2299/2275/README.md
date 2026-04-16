# [2275] Largest Combination With Bitwise AND Greater Than Zero

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/description/)

* algorithms
* Medium (80.77%)
* Likes:    1138
* Dislikes: 60
* Testcase Example:  '[16,17,71,62,12,24,14]'

```md
The bitwise AND of an array nums is the bitwise AND of all integers in nums.

For example, for nums = [1, 5, 3], the bitwise AND is equal to 1 &amp; 5 &amp; 3 = 1.
Also, for nums = [7], the bitwise AND is 7.

You are given an array of positive integers candidates. Compute the bitwise AND for all possible combinations of elements in the candidates array.
Return the size of the largest combination of candidates with a bitwise AND greater than 0.

Example 1:

Input: candidates = [16,17,71,62,12,24,14]
Output: 4
Explanation: The combination [16,17,62,24] has a bitwise AND of 16 &amp; 17 &amp; 62 &amp; 24 = 16 > 0.
The size of the combination is 4.
It can be shown that no combination with a size greater than 4 has a bitwise AND greater than 0.
Note that more than one combination may have the largest size.
For example, the combination [62,12,24,14] has a bitwise AND of 62 &amp; 12 &amp; 24 &amp; 14 = 8 > 0.

Example 2:

Input: candidates = [8,8]
Output: 2
Explanation: The largest combination [8,8] has a bitwise AND of 8 &amp; 8 = 8 > 0.
The size of the combination is 2, so we return 2.


Constraints:

1 <= candidates.length <= 105
1 <= candidates[i] <= 107


```

## 中文翻译

给定正整数数组 candidates，求最大子集大小使得子集中所有元素按位 AND 的结果大于 0。

## 解题思路

按位 AND > 0 意味着至少有一个二进制位在所有选中的元素中都是 1。对每个二进制位统计有多少个元素该位为 1，取最大值即为答案。

## Solution

[SourceCode](./solution.js)
