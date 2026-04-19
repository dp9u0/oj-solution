# [3668] Restore Finishing Order

## Description

[LeetCode Problem Description](https://leetcode.com/problems/restore-finishing-order/description/)

* algorithms
* Easy (91.16%)
* Likes:    121
* Dislikes: 5
* Testcase Example:  '[3,1,2,5,4]\n[1,3,4]'

```md
You are given an integer array order of length n and an integer array friends.

order contains every integer from 1 to n exactly once, representing the IDs of the participants of a race in their finishing order.
friends contains the IDs of your friends in the race sorted in strictly increasing order. Each ID in friends is guaranteed to appear in the order array.

Return an array containing your friends&#39; IDs in their finishing order.

Example 1:

Input: order = [3,1,2,5,4], friends = [1,3,4]
Output: [3,1,4]
Explanation:
The finishing order is [3, 1, 2, 5, 4]. Therefore, the finishing order of your friends is [3, 1, 4].

Example 2:

Input: order = [1,4,5,3,2], friends = [2,5]
Output: [5,2]
Explanation:
The finishing order is [1, 4, 5, 3, 2]. Therefore, the finishing order of your friends is [5, 2].


Constraints:

1 <= n == order.length <= 100
order contains every integer from 1 to n exactly once
1 <= friends.length <= min(8, n)
1 <= friends[i] <= n
friends is strictly increasing


```

## 中文翻译

给定比赛完成顺序 order 和朋友 ID 列表 friends，返回朋友按完成顺序排列的 ID。

## 解题思路

将 friends 转为 Set，遍历 order 过滤出在 friends 中的元素。

## Solution

[SourceCode](./solution.js)
