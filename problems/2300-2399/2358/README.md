# [2358] Maximum Number of Groups Entering a Competition

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/description/)

* algorithms
* Medium (68.53%)
* Likes:    713
* Dislikes: 122
* Testcase Example:  '[10,6,12,7,3,5]'

```md
You are given a positive integer array grades which represents the grades of students in a university. You would like to enter all these students into a competition in ordered non-empty groups, such that the ordering meets the following conditions:

The sum of the grades of students in the ith group is less than the sum of the grades of students in the (i + 1)th group, for all groups (except the last).
The total number of students in the ith group is less than the total number of students in the (i + 1)th group, for all groups (except the last).

Return the maximum number of groups that can be formed.

Example 1:

Input: grades = [10,6,12,7,3,5]
Output: 3
Explanation: The following is a possible way to form 3 groups of students:
- 1st group has the students with grades = [12]. Sum of grades: 12. Student count: 1
- 2nd group has the students with grades = [6,7]. Sum of grades: 6 + 7 = 13. Student count: 2
- 3rd group has the students with grades = [10,3,5]. Sum of grades: 10 + 3 + 5 = 18. Student count: 3
It can be shown that it is not possible to form more than 3 groups.

Example 2:

Input: grades = [8,8]
Output: 1
Explanation: We can only form 1 group, since forming 2 groups would lead to an equal number of students in both groups.


Constraints:

1 <= grades.length <= 105
1 <= grades[i] <= 105


```

## 翻译

给定正整数数组 grades，将学生分成尽可能多的有序组，满足：第 i 组的人数 < 第 i+1 组的人数，第 i 组的分数和 < 第 i+1 组的分数和。返回最大组数。

## Approach

排序后贪心分配，组大小依次为 1, 2, 3, ...。问题转化为求最大 k 使得 k(k+1)/2 ≤ n，用求根公式 k = floor((-1 + sqrt(1+8n)) / 2)。

## Solution

[SourceCode](./solution.js)
