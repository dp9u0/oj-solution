# [3153] Sum of Digit Differences of All Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/description/)

* algorithms
* Medium (43.02%)
* Likes:    226
* Dislikes: 20
* Testcase Example:  '[13,23,12]'

```md
You are given an array nums consisting of positive integers where all integers have the same number of digits.
The digit difference between two integers is the count of different digits that are in the same position in the two integers.
Return the sum of the digit differences between all pairs of integers in nums.

Example 1:

Input: nums = [13,23,12]
Output: 4
Explanation:
We have the following:
- The digit difference between 13 and 23 is 1.
- The digit difference between 13 and 12 is 1.
- The digit difference between 23 and 12 is 2.
So the total sum of digit differences between all pairs of integers is 1 + 1 + 2 = 4.

Example 2:

Input: nums = [10,10,10,10]
Output: 0
Explanation:
All the integers in the array are the same. So the total sum of digit differences between all pairs of integers will be 0.


Constraints:

2 <= nums.length <= 105
1 <= nums[i] < 109
All integers in nums have the same number of digits.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定正整数数组 nums，所有整数位数相同。两个整数的数位差是在相同位置上不同数字的个数。返回所有数对之间数位差的总和。

## 解题思路

**逐位统计**

对于每个数位位置，统计每个数字(0-9)出现的次数。该位置对答案的贡献 = 总对数 - 相同数字的对数 = C(n,2) - ΣC(count[d], 2)。

等价于：该位置贡献 = Σ(count[d] * (n - count[d])) / 2，即不同数字的对数。

1. 确定数字位数
2. 对每个数位位置统计 0-9 的出现次数
3. 计算每个位置不同数字对数，累加

时间复杂度 O(n * d)，空间复杂度 O(d * 10)。
