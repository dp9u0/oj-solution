# [1395] Count Number of Teams

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-number-of-teams/description/)

* algorithms
* Medium (70.16%)
* Likes:    3457
* Dislikes: 237
* Testcase Example:  '[2,5,3,4,1]'

```md
There are n soldiers standing in a line. Each soldier is assigned a unique rating value.
You have to form a team of 3 soldiers amongst them under the following rules:

Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).

Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

Example 1:

Input: rating = [2,5,3,4,1]
Output: 3
Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1).

Example 2:

Input: rating = [2,1,3]
Output: 0
Explanation: We can&#39;t form any team given the conditions.

Example 3:

Input: rating = [1,2,3,4]
Output: 4


Constraints:

n == rating.length
3 <= n <= 1000
1 <= rating[i] <= 105
All the integers in rating are unique.


```

## 翻译

n 个士兵各有一个唯一 rating，选 3 个索引 i < j < k，要求 rating 严格递增或严格递减。求满足条件的组数。

## Approach

枚举中间元素 j，统计左边比它小的个数 leftLess 和右边比它大的个数 rightGreater，递增三元组贡献 leftLess * rightGreater。同理统计左边比它大的 leftGreater 和右边比它小的 rightLess，递减贡献 leftGreater * rightLess。

时间复杂度 O(n^2)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
