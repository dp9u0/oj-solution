# [517] Super Washing Machines

## Description

[LeetCode Problem Description](https://leetcode.com/problems/super-washing-machines/description/)

* algorithms
* Hard (44.14%)
* Likes:    827
* Dislikes: 222
* Testcase Example:  '[1,0,5]'

```md
You have n super washing machines on a line. Initially, each washing machine has some dresses or is empty.
For each move, you could choose any m (1 <= m <= n) washing machines, and pass one dress of each washing machine to one of its adjacent washing machines at the same time.
Given an integer array machines representing the number of dresses in each washing machine from left to right on the line, return the minimum number of moves to make all the washing machines have the same number of dresses. If it is not possible to do it, return -1.

Example 1:

Input: machines = [1,0,5]
Output: 3
Explanation:
1st move:    1     0 <-- 5    =>    1     1     4
2nd move:    1 <-- 1 <-- 4    =>    2     1     3
3rd move:    2     1 <-- 3    =>    2     2     2

Example 2:

Input: machines = [0,3,0]
Output: 2
Explanation:
1st move:    0 <-- 3     0    =>    1     2     0
2nd move:    1     2 --> 0    =>    1     1     1

Example 3:

Input: machines = [0,2,0]
Output: -1
Explanation:
It&#39;s impossible to make all three washing machines have the same number of dresses.


Constraints:

n == machines.length
1 <= n <= 104
0 <= machines[i] <= 105


```

## 中文翻译

n 台洗衣机排成一行，每台有若干衣服。每步可选任意 m 台机器，同时各向相邻机器传一件衣服。求使所有机器衣服数相等的最少步数，不可能则返回 -1。

## 解题思路

**贪心 + 前缀和**

首先检查总衣服数能否被 n 整除，不能则返回 -1。设 avg = total / n，diff[i] = machines[i] - avg。

关键观察：
- 每台机器 i 需要给出 diff[i] 件衣服（正值给出，负值接收），该机器自身需要 diff[i] 步（可同时向左右给）
- 每个边界 i|i+1 需要通过 |prefix_sum[0..i]| 件衣服，每步只能过一件

答案 = max(所有边界的 |prefix_sum|, 所有机器的 max(diff[i], 0))

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
