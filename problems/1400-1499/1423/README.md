# [1423] Maximum Points You Can Obtain from Cards

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/)

* algorithms
* Medium (57.48%)
* Likes:    7104
* Dislikes: 323
* Testcase Example:  '[1,2,3,4,5,6,1]\n3'

```md
There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.
In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
Your score is the sum of the points of the cards you have taken.
Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

Example 1:

Input: cardPoints = [1,2,3,4,5,6,1], k = 3
Output: 12
Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

Example 2:

Input: cardPoints = [2,2,2], k = 2
Output: 4
Explanation: Regardless of which two cards you take, your score will always be 4.

Example 3:

Input: cardPoints = [9,7,7,9,7,7,9], k = 7
Output: 55
Explanation: You have to take all the cards. Your score is the sum of points of all cards.


Constraints:

1 <= cardPoints.length <= 105
1 <= cardPoints[i] <= 104
1 <= k <= cardPoints.length


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

排成一行的卡片，每张有对应分数。每步可以从头部或尾部取一张牌，必须取恰好 k 张。返回能获得的最大分数。

## 解题思路

**滑动窗口（逆向思维）**

取 k 张等价于留下 n-k 张连续子数组。最大化取牌分数 = 总分 - 最小连续子数组和（长度 n-k）。

1. 先算前 n-k 个元素的和作为初始窗口
2. 滑动窗口遍历所有长度为 n-k 的子数组，记录最小和
3. 总分减去最小和即为答案

时间复杂度 O(n)，空间复杂度 O(1)。
