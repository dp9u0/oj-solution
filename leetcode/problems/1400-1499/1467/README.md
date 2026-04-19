# [1467] Probability of a Two Boxes Having The Same Number of Distinct Balls

## Description

[LeetCode Problem Description](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/description/)

* algorithms
* Hard (61.02%)
* Likes:    299
* Dislikes: 178
* Testcase Example:  '[1,1]'

```md
Given 2n balls of k distinct colors. You will be given an integer array balls of size k where balls[i] is the number of balls of color i.
All the balls will be shuffled uniformly at random, then we will distribute the first n balls to the first box and the remaining n balls to the other box (Please read the explanation of the second example carefully).
Please note that the two boxes are considered different. For example, if we have two balls of colors a and b, and two boxes [] and (), then the distribution [a] (b) is considered different than the distribution [b] (a) (Please read the explanation of the first example carefully).
Return the probability that the two boxes have the same number of distinct balls. Answers within 10-5 of the actual value will be accepted as correct.

Example 1:

Input: balls = [1,1]
Output: 1.00000
Explanation: Only 2 ways to divide the balls equally:
- A ball of color 1 to box 1 and a ball of color 2 to box 2
- A ball of color 2 to box 1 and a ball of color 1 to box 2
In both ways, the number of distinct colors in each box is equal. The probability is 2/2 = 1

Example 2:

Input: balls = [2,1,1]
Output: 0.66667
Explanation: We have the set of balls [1, 1, 2, 3]
This set of balls will be shuffled randomly and we may have one of the 12 distinct shuffles with equal probability (i.e. 1/12):
[1,1 / 2,3], [1,1 / 3,2], [1,2 / 1,3], [1,2 / 3,1], [1,3 / 1,2], [1,3 / 2,1], [2,1 / 1,3], [2,1 / 3,1], [2,3 / 1,1], [3,1 / 1,2], [3,1 / 2,1], [3,2 / 1,1]
After that, we add the first two balls to the first box and the second two balls to the second box.
We can see that 8 of these 12 possible random distributions have the same number of distinct colors of balls in each box.
Probability is 8/12 = 0.66667

Example 3:

Input: balls = [1,2,1,2]
Output: 0.60000
Explanation: The set of balls is [1, 2, 2, 3, 4, 4]. It is hard to display all the 180 possible random shuffles of this set but it is easy to check that 108 of them will have the same number of distinct colors in each box.
Probability = 108 / 180 = 0.6


Constraints:

1 <= balls.length <= 8
1 <= balls[i] <= 6
sum(balls) is even.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 balls 数组，balls[i] 表示颜色 i 的球数。共 2n 个球随机打乱后前 n 个放盒子1、后 n 个放盒子2。求两盒子中不同颜色数相同的概率。

## 解题思路

回溯枚举每种颜色分到盒子1的数量 x[i]（0 ≤ x[i] ≤ balls[i]，sum = n）。对每种有效分配，用多项式系数计算排列数 = n!² / ∏(x[i]!·(balls[i]-x[i])!)。统计两盒子颜色种类数相等的情况占总情况的比例。用 BigInt 精确计算。
