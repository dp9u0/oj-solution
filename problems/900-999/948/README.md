# [948] Bag of Tokens

## Description

[LeetCode Problem Description](https://leetcode.com/problems/bag-of-tokens/description/)

* algorithms
* Medium (59.56%)
* Likes:    3477
* Dislikes: 547
* Testcase Example:  '[100]\n50'

```md
You start with an initial power of power, an initial score of 0, and a bag of tokens given as an integer array tokens, where eachtokens[i] denotes the value of tokeni.
Your goal is to maximize the total score by strategically playing these tokens. In one move, you can play an unplayed token in one of the two ways (but not both for the same token):

Face-up: If your current power is at least tokens[i], you may play tokeni, losing tokens[i] power and gaining 1 score.
Face-down: If your current score is at least 1, you may play tokeni, gaining tokens[i] power and losing 1 score.

Return the maximum possible score you can achieve after playing any number of tokens.

Example 1:

border-color: var(--border-tertiary);
border-left-width: 2px;
color: var(--text-secondary);
font-size: .875rem;
margin-bottom: 1rem;
margin-top: 1rem;
overflow: visible;
padding-left: 1rem;
">
Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">tokens = [100], power = 50
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">0
Explanation: Since your score is 0 initially, you cannot play the token face-down. You also cannot play it face-up since your power (50) is less than tokens[0](100).

Example 2:

border-color: var(--border-tertiary);
border-left-width: 2px;
color: var(--text-secondary);
font-size: .875rem;
margin-bottom: 1rem;
margin-top: 1rem;
overflow: visible;
padding-left: 1rem;
">
Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">tokens = [200,100], power = 150
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">1
Explanation: Play token1 (100) face-up, reducing your power to50 and increasing your score to1.
There is no need to play token0, since you cannot play it face-up to add to your score. The maximum score achievable is 1.

Example 3:

border-color: var(--border-tertiary);
border-left-width: 2px;
color: var(--text-secondary);
font-size: .875rem;
margin-bottom: 1rem;
margin-top: 1rem;
overflow: visible;
padding-left: 1rem;
">
Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">tokens = [100,200,300,400], power = 200
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">2
Explanation: Play the tokens in this order to get a score of 2:

Play token0 (100) face-up, reducing power to 100 and increasing score to 1.
Play token3 (400) face-down, increasing power to 500 and reducing score to 0.
Play token1 (200) face-up, reducing power to 300 and increasing score to 1.
Play token2 (300) face-up, reducing power to 0 and increasing score to 2.

The maximum score achievable is 2.


Constraints:

0 <= tokens.length <= 1000
0 <= tokens[i], power < 104


```

## 题目翻译

给定 token 数组和初始 power，可以两种方式使用 token：
- Face-up：消耗 token[i] 的 power，获得 1 分
- Face-down：消耗 1 分，获得 token[i] 的 power
求最大可能得分。

## 解题思路

贪心 + 双指针：将 tokens 排序后，用最小的 token 换分数（face-up），用最大的 token 换能量（face-down），交替进行以最大化分数。

时间复杂度：O(n log n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
