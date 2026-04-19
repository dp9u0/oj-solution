# [1383] Maximum Performance of a Team

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-performance-of-a-team/description/)

* algorithms
* Hard (47.74%)
* Likes:    3215
* Dislikes: 85
* Testcase Example:  '6\n[2,10,3,1,5,8]\n[5,4,3,9,7,2]\n2'

```md
You are given two integers n and k and two integer arrays speed and efficiency both of length n. There are n engineers numbered from 1 to n. speed[i] and efficiency[i] represent the speed and efficiency of the ith engineer respectively.
Choose at most k different engineers out of the n engineers to form a team with the maximum performance.
The performance of a team is the sum of its engineers&#39; speeds multiplied by the minimum efficiency among its engineers.
Return the maximum performance of this team. Since the answer can be a huge number, return it modulo 109 + 7.

Example 1:

Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2
Output: 60
Explanation:
We have the maximum performance of the team by selecting engineer 2 (with speed=10 and efficiency=4) and engineer 5 (with speed=5 and efficiency=7). That is, performance = (10 + 5) * min(4, 7) = 60.

Example 2:

Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 3
Output: 68
Explanation:
This is the same example as the first but k = 3. We can select engineer 1, engineer 2 and engineer 5 to get the maximum performance of the team. That is, performance = (2 + 10 + 5) * min(5, 4, 7) = 68.

Example 3:

Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 4
Output: 72


Constraints:

1 <= k <= n <= 105
speed.length == n
efficiency.length == n
1 <= speed[i] <= 105
1 <= efficiency[i] <= 108


```

## 中文翻译

给你两个整数 `n` 和 `k`，以及两个长度为 `n` 的整数数组 `speed` 和 `efficiency`。有 `n` 个工程师，`speed[i]` 和 `efficiency[i]` 分别表示第 `i` 个工程师的速度和效率。

从 `n` 个工程师中**至多**选择 `k` 个不同工程师组成团队，使团队表现最大。

团队表现 = 工程师速度之和 × 团队中最小效率。

返回最大团队表现，结果对 10^9 + 7 取模。

## 解题思路

**排序 + 最小堆（贪心）**

1. 将工程师按效率从高到低排序
2. 遍历排序后的工程师，以当前工程师的效率作为团队最小效率
3. 维护一个大小至多为 k 的最小堆，存储已选工程师的速度
4. 当堆中元素超过 k 个时，弹出速度最小的工程师（因为效率是递减的，保留高速度更优）
5. 每次更新速度之和，计算当前表现并更新最大值

时间复杂度：O(n log n + n log k)
空间复杂度：O(k)

## Solution

[SourceCode](./solution.js)
