# [2350] Shortest Impossible Sequence of Rolls

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/description/)

* algorithms
* Hard (69.20%)
* Likes:    670
* Dislikes: 51
* Testcase Example:  '[4,2,1,2,3,3,2,4,1]\n4'

```md
You are given an integer array rolls of length n and an integer k. You roll a k sided dice numbered from 1 to k, n times, where the result of the ith roll is rolls[i].
Return the length of the shortest sequence of rolls so that there&#39;s no such subsequence in rolls.
A sequence of rolls of length len is the result of rolling a k sided dice len times.

Example 1:

Input: rolls = [4,2,1,2,3,3,2,4,1], k = 4
Output: 3
Explanation: Every sequence of rolls of length 1, [1], [2], [3], [4], can be taken from rolls.
Every sequence of rolls of length 2, [1, 1], [1, 2], ..., [4, 4], can be taken from rolls.
The sequence [1, 4, 2] cannot be taken from rolls, so we return 3.
Note that there are other sequences that cannot be taken from rolls.
Example 2:

Input: rolls = [1,1,2,2], k = 2
Output: 2
Explanation: Every sequence of rolls of length 1, [1], [2], can be taken from rolls.
The sequence [2, 1] cannot be taken from rolls, so we return 2.
Note that there are other sequences that cannot be taken from rolls but [2, 1] is the shortest.

Example 3:

Input: rolls = [1,1,3,2,2,2,3,3], k = 4
Output: 1
Explanation: The sequence [4] cannot be taken from rolls, so we return 1.
Note that there are other sequences that cannot be taken from rolls but [4] is the shortest.


Constraints:

n == rolls.length
1 <= n <= 105
1 <= rolls[i] <= k <= 105


```

## Solution

[SourceCode](./solution.js)

---

### 题目翻译

给定长度为 n 的数组 rolls 和整数 k。rolls 是掷 k 面骰子 n 次的结果。返回最短的骰子序列长度，使得该序列不能作为 rolls 的子序列出现。

### 解题思路

**贪心轮次计数**

1. 遍历 rolls，用 Set 收集当前轮中出现的不同数字
2. 当 Set 大小达到 k 时，说明长度为 `rounds+1` 的所有序列都能找到，完成一轮，清空 Set
3. 最终答案 = 完整轮数 + 1（第 rounds+1 轮无法完整收集）
4. 每完成一轮意味着所有长度为该轮数的序列都能在 rolls 中找到子序列
