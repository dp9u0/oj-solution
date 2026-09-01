# [822] Card Flipping Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/card-flipping-game/description/)

* algorithms
* Medium (50.20%)
* Likes:    192
* Dislikes: 797
* Testcase Example:  '[1,2,4,4,7]\n[1,3,4,1,3]'

```md
You are given two 0-indexed integer arrays fronts and backs of length n, where the ith card has the positive integer fronts[i] printed on the front and backs[i] printed on the back. Initially, each card is placed on a table such that the front number is facing up and the other is facing down. You may flip over any number of cards (possibly zero).
After flipping the cards, an integer is considered good if it is facing down on some card and not facing up on any card.
Return the minimum possible good integer after flipping the cards. If there are no good integers, return 0.

Example 1:

Input: fronts = [1,2,4,4,7], backs = [1,3,4,1,3]
Output: 2
Explanation:
If we flip the second card, the face up numbers are [1,3,4,4,7] and the face down are [1,2,4,1,3].
2 is the minimum good integer as it appears facing down but not facing up.
It can be shown that 2 is the minimum possible good integer obtainable after flipping some cards.

Example 2:

Input: fronts = [1], backs = [1]
Output: 0
Explanation:
There are no good integers no matter how we flip the cards, so we return 0.


Constraints:

n == fronts.length == backs.length
1 <= n <= 1000
1 <= fronts[i], backs[i] <= 2000


```

## 翻译

给定正反面数组，可翻转任意卡片。好数指朝下出现且不在任何卡片上朝上的数。求最小好数。

## Approach

若某卡片正反面相同，该数永远朝上，不可能为好数。收集所有"坏数"（正反面相同的数），再遍历所有正反面值，取不在坏数集合中的最小值。

## Solution

[SourceCode](./solution.js)
