# [2511] Maximum Enemy Forts That Can Be Captured

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/description/)

* algorithms
* Easy (41.25%)
* Likes:    332
* Dislikes: 304
* Testcase Example:  '[1,0,0,-1,0,0,0,0,1]'

```md
You are given a 0-indexed integer array forts of length n representing the positions of several forts. forts[i] can be -1, 0, or 1 where:

-1 represents there is no fort at the ith position.
0 indicates there is an enemy fort at the ith position.
1 indicates the fort at the ith the position is under your command.

Now you have decided to move your army from one of your forts at position i to an empty position j such that:

0 <= i, j <= n - 1
The army travels over enemy forts only. Formally, for all k where min(i,j) < k < max(i,j), forts[k] == 0.

While moving the army, all the enemy forts that come in the way are captured.
Return the maximum number of enemy forts that can be captured. In case it is impossible to move your army, or you do not have any fort under your command, return 0.

Example 1:

Input: forts = [1,0,0,-1,0,0,0,0,1]
Output: 4
Explanation:
- Moving the army from position 0 to position 3 captures 2 enemy forts, at 1 and 2.
- Moving the army from position 8 to position 3 captures 4 enemy forts.
Since 4 is the maximum number of enemy forts that can be captured, we return 4.

Example 2:

Input: forts = [0,0,1,-1]
Output: 0
Explanation: Since no enemy fort can be captured, 0 is returned.


Constraints:

1 <= forts.length <= 1000
-1 <= forts[i] <= 1


```

## 中文翻译

给定数组 forts（-1=空地，0=敌方，1=我方），从己方堡垒移动到空地，中间必须全是敌方堡垒。求最多能捕获多少敌方堡垒。

## 解题思路

等价于找最长的连续0段，其一端是1另一端是-1。遍历数组，遇到1或-1时往后数连续0的个数，遇到相反值时更新答案。

## Solution

[SourceCode](./solution.js)
