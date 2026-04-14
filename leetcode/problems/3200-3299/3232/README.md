# [3232] Find if Digit Game Can Be Won

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-if-digit-game-can-be-won/description/)

* algorithms
* Easy (81.53%)
* Likes:    202
* Dislikes: 13
* Testcase Example:  '[1,2,3,4,10]'

```md
You are given an array of positive integers nums.
Alice and Bob are playing a game. In the game, Alice can choose either all single-digit numbers or all double-digit numbers from nums, and the rest of the numbers are given to Bob. Alice wins if the sum of her numbers is strictly greater than the sum of Bob&#39;s numbers.
Return true if Alice can win this game, otherwise, return false.

Example 1:

Input: nums = [1,2,3,4,10]
Output: false
Explanation:
Alice cannot win by choosing either single-digit or double-digit numbers.

Example 2:

Input: nums = [1,2,3,4,5,14]
Output: true
Explanation:
Alice can win by choosing single-digit numbers which have a sum equal to 15.

Example 3:

Input: nums = [5,5,5,25]
Output: true
Explanation:
Alice can win by choosing double-digit numbers which have a sum equal to 25.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 99


```

## 题目翻译

给定正整数数组 nums。Alice 可以选择所有一位数或所有两位数，其余给 Bob。若 Alice 的数之和严格大于 Bob 的，则 Alice 赢。判断 Alice 能否获胜。

## 解题思路

分别统计一位数之和 singleSum 和两位数之和 doubleSum，总和 totalSum。判断 singleSum > totalSum - singleSum 或 doubleSum > totalSum - doubleSum。

## Solution

[SourceCode](./solution.js)
