# [2212] Maximum Points in an Archery Competition

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-points-in-an-archery-competition/description/)

* algorithms
* Medium (51.40%)
* Likes:    515
* Dislikes: 56
* Testcase Example:  '9\n[1,1,0,1,0,0,2,1,0,1,2,0]'

```md
Alice and Bob are opponents in an archery competition. The competition has set the following rules:

Alice first shoots numArrows arrows and then Bob shoots numArrows arrows.
The points are then calculated as follows:

The target has integer scoring sections ranging from 0 to 11 inclusive.
For each section of the target with score k (in between 0 to 11), say Alice and Bob have shot ak and bk arrows on that section respectively. If ak >= bk, then Alice takes k points. If ak < bk, then Bob takes k points.
However, if ak == bk == 0, then nobody takes k points.





For example, if Alice and Bob both shot 2 arrows on the section with score 11, then Alice takes 11 points. On the other hand, if Alice shot 0 arrows on the section with score 11 and Bob shot 2 arrows on that same section, then Bob takes 11 points.


You are given the integer numArrows and an integer array aliceArrows of size 12, which represents the number of arrows Alice shot on each scoring section from 0 to 11. Now, Bob wants to maximize the total number of points he can obtain.
Return the array bobArrows which represents the number of arrows Bob shot on each scoring section from 0 to 11. The sum of the values in bobArrows should equal numArrows.
If there are multiple ways for Bob to earn the maximum total points, return any one of them.

Example 1:


Input: numArrows = 9, aliceArrows = [1,1,0,1,0,0,2,1,0,1,2,0]
Output: [0,0,0,0,1,1,0,0,1,2,3,1]
Explanation: The table above shows how the competition is scored.
Bob earns a total point of 4 + 5 + 8 + 9 + 10 + 11 = 47.
It can be shown that Bob cannot obtain a score higher than 47 points.

Example 2:


Input: numArrows = 3, aliceArrows = [0,0,1,0,0,0,0,0,0,0,0,2]
Output: [0,0,0,0,0,0,0,0,1,1,1,0]
Explanation: The table above shows how the competition is scored.
Bob earns a total point of 8 + 9 + 10 = 27.
It can be shown that Bob cannot obtain a score higher than 27 points.


Constraints:

1 <= numArrows <= 105
aliceArrows.length == bobArrows.length == 12
0 <= aliceArrows[i], bobArrows[i] <= numArrows
sum(aliceArrows[i]) == numArrows


```

## 翻译

Bob 有 numArrows 支箭，分配到 12 个得分区域。每个区域 Bob 需要超过 Alice 的箭数才能得分。求最大得分的分配方案。

## 解题思路

只有 12 个区域，枚举所有 2^12=4096 种 Bob 赢的子集。对每个子集计算所需箭数和得分，取最大得分的合法子集。剩余箭数放到任意区域。

## Solution

[SourceCode](./solution.js)
