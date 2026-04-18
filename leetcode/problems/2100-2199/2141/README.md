# [2141] Maximum Running Time of N Computers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-running-time-of-n-computers/description/)

* algorithms
* Hard (56.39%)
* Likes:    2447
* Dislikes: 71
* Testcase Example:  '2\n[3,3,3]'

```md
You have n computers. You are given the integer n and a 0-indexed integer array batteries where the ith battery can run a computer for batteries[i] minutes. You are interested in running all n computers simultaneously using the given batteries.
Initially, you can insert at most one battery into each computer. After that and at any integer time moment, you can remove a battery from a computer and insert another battery any number of times. The inserted battery can be a totally new battery or a battery from another computer. You may assume that the removing and inserting processes take no time.
Note that the batteries cannot be recharged.
Return the maximum number of minutes you can run all the n computers simultaneously.

Example 1:


Input: n = 2, batteries = [3,3,3]
Output: 4
Explanation:
Initially, insert battery 0 into the first computer and battery 1 into the second computer.
After two minutes, remove battery 1 from the second computer and insert battery 2 instead. Note that battery 1 can still run for one minute.
At the end of the third minute, battery 0 is drained, and you need to remove it from the first computer and insert battery 1 instead.
By the end of the fourth minute, battery 1 is also drained, and the first computer is no longer running.
We can run the two computers simultaneously for at most 4 minutes, so we return 4.

Example 2:


Input: n = 2, batteries = [1,1,1,1]
Output: 2
Explanation:
Initially, insert battery 0 into the first computer and battery 2 into the second computer.
After one minute, battery 0 and battery 2 are drained so you need to remove them and insert battery 1 into the first computer and battery 3 into the second computer.
After another minute, battery 1 and battery 3 are also drained so the first and second computers are no longer running.
We can run the two computers simultaneously for at most 2 minutes, so we return 2.


Constraints:

1 <= n <= batteries.length <= 105
1 <= batteries[i] <= 109


```

## 中文翻译

你有 n 台电脑和一组电池，batteries[i] 表示第 i 块电池能让一台电脑运行多少分钟。
你可以在任意整数时刻换电池（换电池不花时间），电池不可充电。
求所有 n 台电脑同时运行的最长分钟数。

约束：1 <= n <= batteries.length <= 10^5，1 <= batteries[i] <= 10^9

## 解题思路

**二分答案 + 贪心校验**

1. 二分答案 mid：判断能否让 n 台电脑同时运行 mid 分钟。
2. 校验：对于每块电池，它最多贡献 min(batteries[i], mid) 分钟（因为每台电脑同一时间只能用一块电池，一台电脑最多需要 mid 分钟）。
3. 如果总贡献 >= n * mid，则 mid 可行。
4. 二分上界为 total / n（所有电池总容量均分）。

## Solution

[SourceCode](./solution.js)
