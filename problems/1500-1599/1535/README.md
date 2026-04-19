# [1535] Find the Winner of an Array Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-winner-of-an-array-game/description/)

* algorithms
* Medium (56.82%)
* Likes:    1627
* Dislikes: 88
* Testcase Example:  '[2,1,3,5,4,6,7]\n2'

```md
Given an integer array arr of distinct integers and an integer k.
A game will be played between the first two elements of the array (i.e. arr[0] and arr[1]). In each round of the game, we compare arr[0] with arr[1], the larger integer wins and remains at position 0, and the smaller integer moves to the end of the array. The game ends when an integer wins k consecutive rounds.
Return the integer which will win the game.
It is guaranteed that there will be a winner of the game.

Example 1:

Input: arr = [2,1,3,5,4,6,7], k = 2
Output: 5
Explanation: Let&#39;s see the rounds of the game:
Round
arr
winner
win_count
1
[2,1,3,5,4,6,7]
2
1
2
[2,3,5,4,6,7,1]
3
1
3
[3,5,4,6,7,1,2]
5
1
4
[5,4,6,7,1,2,3]
5
2
So we can see that 4 rounds will be played and 5 is the winner because it wins 2 consecutive games.

Example 2:

Input: arr = [3,2,1], k = 10
Output: 3
Explanation: 3 will win the first 10 rounds consecutively.


Constraints:

2 <= arr.length <= 105
1 <= arr[i] <= 106
arr contains distinct integers.
1 <= k <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定互不相同的整数数组 arr 和整数 k，游戏规则：比较前两个元素，大的留在位置 0，小的移到末尾。当某个整数连续赢 k 轮时游戏结束。返回赢家。

## 解题思路

**模拟**

不需要真正移动数组。只需维护当前赢家和连胜次数：

1. 初始赢家为 arr[0]，连胜为 0
2. 遍历后续元素，如果当前元素 > 赢家，则更新赢家并重置连胜为 1
3. 否则连胜 +1
4. 连胜达到 k 时返回赢家
5. 如果遍历完还没达到 k，说明赢家是数组最大值，直接返回

时间复杂度 O(n)，空间复杂度 O(1)。
