# [1732] Find the Highest Altitude

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-highest-altitude/description/)

* algorithms
* Easy (83.88%)
* Likes:    3264
* Dislikes: 431
* Testcase Example:  '[-5,1,5,0,-7]'

```md
There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.
You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

Example 1:

Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

Example 2:

Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.


Constraints:

n == gain.length
1 <= n <= 100
-100 <= gain[i] <= 100


```

## 翻译

给定海拔增益数组 gain，起点海拔为 0。gain[i] 是点 i 到点 i+1 的海拔变化。返回最高海拔。

## Approach

前缀和。遍历累加 gain，维护最大值。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
