# [面试题 08.01] 三步问题

## Description


```md
https://leetcode.cn/problems/three-steps-problem-lcci/description/
* lcci
* Easy (36.51%)
* Likes:    132
* Dislikes: -
* Testcase Example:  '3'
三步问题。有个小孩正在上楼梯，楼梯有 n 阶台阶，小孩一次可以上 1 阶、2 阶或 3 阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模 1000000007。
示例 1：
输入：n = 3
输出：4
说明：有四种走法
示例 2：
输入：n = 5
输出：13
提示:
n 范围在[1, 1000000]之间
Hint 1: 自上而下地处理这个问题。小孩的最后一跳是什么？
Hint 2: 如果知道跳到第100级台阶之前的每一级台阶的跳法数量，可以计算第100级台阶的跳法数量吗？
Hint 3: 可以通过步数99、98、97的数量，来计算100步的数量。这对应孩子最后迈1步、2步或3步。我们把它们加起来还是相乘？也就是说，它是f(100) = f(99) + f(98)+ f(97) 或者f(100) = f(99)×f(98)×f(97)吗？
Hint 4: 当“我们这样做然后那样做”时，将这些值相乘。当“我们这样做或者那样做”时，将这些值相加。
Hint 5: 这个方法的运行时间是多少？仔细想想。你能优化它吗？
Hint 6: 尝试用制表法的方式优化效率低下的递归过程。

```

## Description (English)

Three Steps Problem. A child climbs a staircase with n steps, taking 1, 2 or 3 steps at a time. Implement a method to count how many possible ways the child can climb the stairs. The result can be large — return it modulo 1000000007.

Example 1: n = 3 → 4
Example 2: n = 5 → 13

Note: n in [1, 1000000].

## 思路

三步斐波那契递推 O(n)/O(1)：f(n) = f(n−1) + f(n−2) + f(n−3)（最后一步跨 1/2/3 阶，三类互斥相加），基线 f(1)=1、f(2)=2、f(3)=4，滚动三个变量全程取模。

## Solution

[SourceCode](./solution.js)
