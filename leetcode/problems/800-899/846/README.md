# [846] Hand of Straights

## Description

[LeetCode Problem Description](https://leetcode.com/problems/hand-of-straights/description/)

* algorithms
* Medium (57.89%)
* Likes:    3720
* Dislikes: 295
* Testcase Example:  '[1,2,3,6,2,3,4,7,8]\n3'

```md
Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.
Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

Example 1:

Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
Output: true
Explanation: Alice&#39;s hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

Example 2:

Input: hand = [1,2,3,4,5], groupSize = 4
Output: false
Explanation: Alice&#39;s hand can not be rearranged into groups of 4.


Constraints:

1 <= hand.length <= 104
0 <= hand[i] <= 109
1 <= groupSize <= hand.length


Note: This question is the same as 1296: https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/

```

## 翻译

给定整数数组 hand 和 groupSize，判断能否将手牌分成若干组，每组恰好 groupSize 张且是连续的数字。

## Approach

贪心 + 哈希表：统计每个数字出现次数，排序后从小到大遍历。对每个数字，如果有剩余，则尝试从该数字开始连续取 groupSize 个数字各一个，不够则返回 false。

## Solution

[SourceCode](./solution.js)
