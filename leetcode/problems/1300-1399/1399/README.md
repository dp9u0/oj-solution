# [1399] Count Largest Group

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-largest-group/description/)

* algorithms
* Easy (74.71%)
* Likes:    806
* Dislikes: 1190
* Testcase Example:  '13'

```md
You are given an integer n.
We need to group the numbers from 1 to n according to the sum of its digits. For example, the numbers 14 and 5 belong to the same group, whereas 13 and 3 belong to different groups.
Return the number of groups that have the largest size, i.e. the maximum number of elements.

Example 1:

Input: n = 13
Output: 4
Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
There are 4 groups with largest size.

Example 2:

Input: n = 2
Output: 2
Explanation: There are 2 groups [1], [2] of size 1.


Constraints:

1 <= n <= 104


```

## 翻译

给定一个整数 n，将 1 到 n 的数字按照各位数字之和分组。例如 14 和 5 属于同一组（1+4=5），而 13 和 3 属于不同组（1+3≠3）。返回拥有最大元素数量的组的个数。

## Approach

直接模拟：用数组统计每个数字和出现的次数（n ≤ 10000，最大数字和为 36）。遍历 1 到 n 计算每位数字之和并计数，然后找出最大计数值，统计有多少个数字和达到了该最大值。

## Solution

[SourceCode](./solution.js)
