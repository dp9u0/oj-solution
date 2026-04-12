# [2094] Finding 3-Digit Even Numbers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/finding-3-digit-even-numbers/description/)

* algorithms
* Easy (78.78%)
* Likes:    1575
* Dislikes: 345
* Testcase Example:  '[2,1,3,0]'

```md
You are given an integer array digits, where each element is a digit. The array may contain duplicates.
You need to find all the unique integers that follow the given requirements:

The integer consists of the concatenation of three elements from digits in any arbitrary order.
The integer does not have leading zeros.
The integer is even.

For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.
Return a sorted array of the unique integers.

Example 1:

Input: digits = [2,1,3,0]
Output: [102,120,130,132,210,230,302,310,312,320]
Explanation: All the possible integers that follow the requirements are in the output array.
Notice that there are no odd integers or integers with leading zeros.

Example 2:

Input: digits = [2,2,8,8,2]
Output: [222,228,282,288,822,828,882]
Explanation: The same digit can be used as many times as it appears in digits.
In this example, the digit 8 is used twice each time in 288, 828, and 882.

Example 3:

Input: digits = [3,7,5]
Output: []
Explanation: No even integers can be formed using the given digits.


Constraints:

3 <= digits.length <= 100
0 <= digits[i] <= 9


```

## 翻译

给定一个整数数组 `digits`，其中每个元素都是一个数字（0-9），数组可能包含重复元素。

你需要找出所有满足以下要求的唯一整数：

- 该整数由 `digits` 中**三个元素的拼接**组成（可按任意顺序选取）
- 该整数**没有前导零**（百位不能为0）
- 该整数是**偶数**（个位是偶数）

返回一个**排序后**的唯一整数数组。

## Approach

枚举所有三位偶数（100~998，步长2），对每个候选数提取三个位上的数字，检查是否可以从 `digits` 数组中取出对应数量的数字。用频率计数来验证。

时间复杂度：O(450 × n)，其中 n 为 digits 长度。空间复杂度：O(n)。

## Solution

[SourceCode](./solution.js)
