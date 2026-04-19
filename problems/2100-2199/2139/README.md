# [2139] Minimum Moves to Reach Target Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-moves-to-reach-target-score/description/)

* algorithms
* Medium (52.34%)
* Likes:    1092
* Dislikes: 28
* Testcase Example:  '5\n0'

```md
You are playing a game with integers. You start with the integer 1 and you want to reach the integer target.
In one move, you can either:

Increment the current integer by one (i.e., x = x + 1).
Double the current integer (i.e., x = 2 * x).

You can use the increment operation any number of times, however, you can only use the double operation at most maxDoubles times.
Given the two integers target and maxDoubles, return the minimum number of moves needed to reach target starting with 1.

Example 1:

Input: target = 5, maxDoubles = 0
Output: 4
Explanation: Keep incrementing by 1 until you reach target.

Example 2:

Input: target = 19, maxDoubles = 2
Output: 7
Explanation: Initially, x = 1
Increment 3 times so x = 4
Double once so x = 8
Increment once so x = 9
Double again so x = 18
Increment once so x = 19

Example 3:

Input: target = 10, maxDoubles = 4
Output: 4
Explanation: Initially, x = 1
Increment once so x = 2
Double once so x = 4
Increment once so x = 5
Double again so x = 10


Constraints:

1 <= target <= 109
0 <= maxDoubles <= 100


```

## 中文翻译

从 1 开始到达 target。每次操作可以 +1 或 ×2（最多用 maxDoubles 次翻倍）。求最少操作次数。

## 解题思路

逆向贪心。从 target 倒推回 1：若 target 为偶数且还有翻倍次数，则除以 2（操作 +1）；否则减 1。翻倍次数用完后直接加上剩余差值。

时间复杂度：O(maxDoubles)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
