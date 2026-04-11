# [881] Boats to Save People

## Description

[LeetCode Problem Description](https://leetcode.com/problems/boats-to-save-people/description/)

* algorithms
* Medium (61.62%)
* Likes:    6946
* Dislikes: 179
* Testcase Example:  '[1,2]\n3'

```md
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
Return the minimum number of boats to carry every given person.

Example 1:

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)

Example 2:

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)

Example 3:

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)


Constraints:

1 <= people.length <= 5 * 104
1 <= people[i] <= limit <= 3 * 104


```

## 题目翻译

给定数组 `people`，people[i] 是第 i 个人的体重。每条船最多载两人，总重不超过 `limit`。返回运送所有人的最少船数。

**示例 1：** people = [1,2], limit = 3 → 1（1条船载两人）
**示例 2：** people = [3,2,2,1], limit = 3 → 3
**示例 3：** people = [3,5,3,4], limit = 5 → 4

**约束：**
- 1 <= people.length <= 5*10^4
- 1 <= people[i] <= limit <= 3*10^4

## 解题思路 (Approach)

排序 + 双指针贪心。排序后，用左右指针分别指向最轻和最重的人。如果最轻+最重 <= limit，则两人同船（left++）；否则最重的人独占一船。每轮 right--，船数+1。

时间复杂度：O(n log n)，空间复杂度：O(1)。

## Solution

[SourceCode](./solution.js)
