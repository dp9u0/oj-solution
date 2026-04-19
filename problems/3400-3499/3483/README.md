# [3483] Unique 3-Digit Even Numbers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/unique-3-digit-even-numbers/description/)

* algorithms
* Easy (69.51%)
* Likes:    130
* Dislikes: 34
* Testcase Example:  '[1,2,3,4]'

```md
You are given an array of digits called digits. Your task is to determine the number of distinct three-digit even numbers that can be formed using these digits.
Note: Each copy of a digit can only be used once per number, and there may not be leading zeros.

Example 1:

Input: digits = [1,2,3,4]
Output: 12
Explanation: The 12 distinct 3-digit even numbers that can be formed are 124, 132, 134, 142, 214, 234, 312, 314, 324, 342, 412, and 432. Note that 222 cannot be formed because there is only 1 copy of the digit 2.

Example 2:

Input: digits = [0,2,2]
Output: 2
Explanation: The only 3-digit even numbers that can be formed are 202 and 220. Note that the digit 2 can be used twice because it appears twice in the array.

Example 3:

Input: digits = [6,6,6]
Output: 1
Explanation: Only 666 can be formed.

Example 4:

Input: digits = [1,3,5]
Output: 0
Explanation: No even 3-digit numbers can be formed.


Constraints:

3 <= digits.length <= 10
0 <= digits[i] <= 9


```

## 中文翻译

给定一个数字数组 digits，求可以用这些数字组成多少个不同的三位偶数。每个数字只能使用一次（但数组中重复出现的数字可以使用多次），不能有前导零。

## 解题思路

枚举所有三位偶数（100~998，步长2），检查是否可以用 digits 中的数字组成。用频率计数匹配即可。

时间复杂度：O(450 * n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
