# [1881] Maximum Value after Insertion

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-value-after-insertion/description/)

* algorithms
* Medium (39.30%)
* Likes:    401
* Dislikes: 67
* Testcase Example:  '"99"\n9'

```md
You are given a very large integer n, represented as a string,​​​​​​ and an integer digit x. The digits in n and the digit x are in the inclusive range [1, 9], and n may represent a negative number.
You want to maximize n&#39;s numerical value by inserting x anywhere in the decimal representation of n​​​​​​. You cannot insert x to the left of the negative sign.

For example, if n = 73 and x = 6, it would be best to insert it between 7 and 3, making n = 763.
If n = -55 and x = 2, it would be best to insert it before the first 5, making n = -255.

Return a string representing the maximum value of n​​​​​​ after the insertion.

Example 1:

Input: n = '99', x = 9
Output: '999'
Explanation: The result is the same regardless of where you insert 9.

Example 2:

Input: n = '-13', x = 2
Output: '-123'
Explanation: You can make n one of {-213, -123, -132}, and the largest of those three is -123.


Constraints:

1 <= n.length <= 105
1 <= x <= 9
The digits in n​​​ are in the range [1, 9].
n is a valid representation of an integer.
In the case of a negative n,​​​​​​ it will begin with &#39;-&#39;.


```

## 翻译

给定大整数字符串n和数字x，在n的任意位置插入x使数值最大。n可能为负数。

## 解题思路

正数：找第一个小于x的数字，在其前面插入x；没有则追加末尾。负数：找第一个大于x的数字，在其前面插入x；没有则追加末尾。

## Solution

[SourceCode](./solution.js)
