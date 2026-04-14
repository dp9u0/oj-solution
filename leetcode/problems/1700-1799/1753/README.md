# [1753] Maximum Score From Removing Stones

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-score-from-removing-stones/description/)

* algorithms
* Medium (68.52%)
* Likes:    988
* Dislikes: 58
* Testcase Example:  '2\n4\n6'

```md
You are playing a solitaire game with three piles of stones of sizes a​​​​​​, b,​​​​​​ and c​​​​​​ respectively. Each turn you choose two different non-empty piles, take one stone from each, and add 1 point to your score. The game stops when there are fewer than two non-empty piles (meaning there are no more available moves).
Given three integers a​​​​​, b,​​​​​ and c​​​​​, return the maximum score you can get.

Example 1:

Input: a = 2, b = 4, c = 6
Output: 6
Explanation: The starting state is (2, 4, 6). One optimal set of moves is:
- Take from 1st and 3rd piles, state is now (1, 4, 5)
- Take from 1st and 3rd piles, state is now (0, 4, 4)
- Take from 2nd and 3rd piles, state is now (0, 3, 3)
- Take from 2nd and 3rd piles, state is now (0, 2, 2)
- Take from 2nd and 3rd piles, state is now (0, 1, 1)
- Take from 2nd and 3rd piles, state is now (0, 0, 0)
There are fewer than two non-empty piles, so the game ends. Total: 6 points.

Example 2:

Input: a = 4, b = 4, c = 6
Output: 7
Explanation: The starting state is (4, 4, 6). One optimal set of moves is:
- Take from 1st and 2nd piles, state is now (3, 3, 6)
- Take from 1st and 3rd piles, state is now (2, 3, 5)
- Take from 1st and 3rd piles, state is now (1, 3, 4)
- Take from 1st and 3rd piles, state is now (0, 3, 3)
- Take from 2nd and 3rd piles, state is now (0, 2, 2)
- Take from 2nd and 3rd piles, state is now (0, 1, 1)
- Take from 2nd and 3rd piles, state is now (0, 0, 0)
There are fewer than two non-empty piles, so the game ends. Total: 7 points.

Example 3:

Input: a = 1, b = 8, c = 8
Output: 8
Explanation: One optimal set of moves is to take from the 2nd and 3rd piles for 8 turns until they are empty.
After that, there are fewer than two non-empty piles, so the game ends.


Constraints:

1 <= a, b, c <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

你有三个石子堆，大小分别为 a、b、c。每回合选择两个不同的非空堆，各取一个石子，得 1 分。当少于两个非空堆时游戏结束。求最大得分。

## 解题思路

排序使得 a ≤ b ≤ c。

- 若 a + b ≤ c：最大堆足够大，可以把 a 和 b 全部配对消耗完，答案 = a + b
- 若 a + b > c：可以配对消耗所有石子，答案 = (a + b + c) / 2

统一公式：`min((a + b + c) >> 1, a + b)`
