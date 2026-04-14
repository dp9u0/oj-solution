# [2554] Maximum Number of Integers to Choose From a Range I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/description/)

* algorithms
* Medium (67.97%)
* Likes:    826
* Dislikes: 57
* Testcase Example:  '[1,6,5]\n5\n6'

```md
You are given an integer array banned and two integers n and maxSum. You are choosing some number of integers following the below rules:

The chosen integers have to be in the range [1, n].
Each integer can be chosen at most once.
The chosen integers should not be in the array banned.
The sum of the chosen integers should not exceed maxSum.

Return the maximum number of integers you can choose following the mentioned rules.

Example 1:

Input: banned = [1,6,5], n = 5, maxSum = 6
Output: 2
Explanation: You can choose the integers 2 and 4.
2 and 4 are from the range [1, 5], both did not appear in banned, and their sum is 6, which did not exceed maxSum.

Example 2:

Input: banned = [1,2,3,4,5,6,7], n = 8, maxSum = 1
Output: 0
Explanation: You cannot choose any integer while following the mentioned conditions.

Example 3:

Input: banned = [11], n = 7, maxSum = 50
Output: 7
Explanation: You can choose the integers 1, 2, 3, 4, 5, 6, and 7.
They are from the range [1, 7], all did not appear in banned, and their sum is 28, which did not exceed maxSum.


Constraints:

1 <= banned.length <= 104
1 <= banned[i], n <= 104
1 <= maxSum <= 109


```

## 翻译

给定禁用数组 banned、范围 n 和最大和 maxSum。从 [1, n] 中选尽量多的数，不能选 banned 中的数，总和不超过 maxSum。求最多能选多少个数。

## Approach

贪心：从 1 开始，依次选不在 banned 中的最小数，累加直到超过 maxSum。用 Set 存储 banned 以 O(1) 查询。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
