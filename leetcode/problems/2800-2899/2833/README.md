# [2833] Furthest Point From Origin

## Description

[LeetCode Problem Description](https://leetcode.com/problems/furthest-point-from-origin/description/)

* algorithms
* Easy (65.65%)
* Likes:    285
* Dislikes: 53
* Testcase Example:  '"L_RL__R"'

```md
You are given a string moves of length n consisting only of characters &#39;L&#39;, &#39;R&#39;, and &#39;_&#39;. The string represents your movement on a number line starting from the origin 0.
In the ith move, you can choose one of the following directions:

move to the left if moves[i] = &#39;L&#39; or moves[i] = &#39;_&#39;
move to the right if moves[i] = &#39;R&#39; or moves[i] = &#39;_&#39;

Return the distance from the origin of the furthest point you can get to after n moves.

Example 1:

Input: moves = 'L_RL__R'
Output: 3
Explanation: The furthest point we can reach from the origin 0 is point -3 through the following sequence of moves 'LLRLLLR'.

Example 2:

Input: moves = '_R__LL_'
Output: 5
Explanation: The furthest point we can reach from the origin 0 is point -5 through the following sequence of moves 'LRLLLLL'.

Example 3:

Input: moves = '_______'
Output: 7
Explanation: The furthest point we can reach from the origin 0 is point 7 through the following sequence of moves 'RRRRRRR'.


Constraints:

1 <= moves.length == n <= 50
moves consists only of characters &#39;L&#39;, &#39;R&#39; and &#39;_&#39;.


```

## 中文翻译

给定移动字符串（L/R/_），'_' 可以选择左或右。求从原点出发能到达的最远距离。

## 解题思路

统计 L 和 R 的数量差，再加上 '_' 的数量（全部朝同一方向）。答案为 |countL - countR| + countUnderscore。

## Solution

[SourceCode](./solution.js)
