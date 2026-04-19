# [1014] Best Sightseeing Pair

## Description

[LeetCode Problem Description](https://leetcode.com/problems/best-sightseeing-pair/description/)

* algorithms
* Medium (62.64%)
* Likes:    3288
* Dislikes: 78
* Testcase Example:  '[8,1,5,2,6]'

```md
You are given an integer array values where values[i] represents the value of the ith sightseeing spot. Two sightseeing spots i and j have a distance j - i between them.
The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the values of the sightseeing spots, minus the distance between them.
Return the maximum score of a pair of sightseeing spots.

Example 1:

Input: values = [8,1,5,2,6]
Output: 11
Explanation: i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11

Example 2:

Input: values = [1,2]
Output: 2


Constraints:

2 <= values.length <= 5 * 104
1 <= values[i] <= 1000


```

## 翻译

给定景点值数组 `values`，景点对 (i, j)（i < j）的得分为 `values[i] + values[j] + i - j`。返回最大得分。

## Approach

**一次遍历。** 将得分拆分为 `(values[i] + i) + (values[j] - j)`。遍历时维护前面 `values[i] + i` 的最大值 `maxLeft`，当前位置的贡献为 `maxLeft + values[j] - j`。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
