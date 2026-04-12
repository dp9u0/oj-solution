# [670] Maximum Swap

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-swap/description/)

* algorithms
* Medium (52.00%)
* Likes:    4289
* Dislikes: 276
* Testcase Example:  '2736'

```md
You are given an integer num. You can swap two digits at most once to get the maximum valued number.
Return the maximum valued number you can get.

Example 1:

Input: num = 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.

Example 2:

Input: num = 9973
Output: 9973
Explanation: No swap.


Constraints:

0 <= num <= 108


```

## 翻译

给定一个非负整数 `num`，最多可以交换两个数字一次，使其值最大。返回能获得的最大值。

## Approach

贪心：将数字转为字符数组，从左到右遍历每一位，寻找右侧最大的数字（如果有多个相同最大值，取最右边的）。如果该最大数字大于当前位，则交换并返回。

预处理每个位置右侧最大数字的索引，从右往左扫描记录 `lastMax[i]` 表示 i 右侧（含 i）最大数字的最后出现位置。

时间复杂度 O(d)，d 为数字位数。空间复杂度 O(d)。

## Solution

[SourceCode](./solution.js)
