# [2260] Minimum Consecutive Cards to Pick Up

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/description/)

* algorithms
* Medium (53.67%)
* Likes:    1093
* Dislikes: 45
* Testcase Example:  '[3,4,2,3,4,7]'

```md
You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.
Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.

Example 1:

Input: cards = [3,4,2,3,4,7]
Output: 4
Explanation: We can pick up the cards [3,4,2,3] which contain a matching pair of cards with value 3. Note that picking up the cards [4,2,3,4] is also optimal.

Example 2:

Input: cards = [1,0,5,3]
Output: -1
Explanation: There is no way to pick up a set of consecutive cards that contain a pair of matching cards.


Constraints:

1 <= cards.length <= 105
0 <= cards[i] <= 106


```

## 题目翻译

给定数组 cards，找到最短的连续子数组使得其中包含一对相同的值。返回该子数组长度，无则返回 -1。

## 解题思路

滑动窗口 / HashMap：用 Map 记录每个值最近出现的下标。遍历时若当前值已存在，计算距离 i - lastIndex + 1 并更新答案，同时更新下标。本质是找相同值的最小间距。

## Solution

[SourceCode](./solution.js)
