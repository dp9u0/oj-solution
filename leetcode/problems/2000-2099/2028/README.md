# [2028] Find Missing Observations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-missing-observations/description/)

* algorithms
* Medium (57.39%)
* Likes:    1128
* Dislikes: 108
* Testcase Example:  '[3,2,4,3]\n4\n2'

```md
You have observations of n + m 6-sided dice rolls with each face numbered from 1 to 6. n of the observations went missing, and you only have the observations of m rolls. Fortunately, you have also calculated the average value of the n + m rolls.
You are given an integer array rolls of length m where rolls[i] is the value of the ith observation. You are also given the two integers mean and n.
Return an array of length n containing the missing observations such that the average value of the n + m rolls is exactly mean. If there are multiple valid answers, return any of them. If no such array exists, return an empty array.
The average value of a set of k numbers is the sum of the numbers divided by k.
Note that mean is an integer, so the sum of the n + m rolls should be divisible by n + m.

Example 1:

Input: rolls = [3,2,4,3], mean = 4, n = 2
Output: [6,6]
Explanation: The mean of all n + m rolls is (3 + 2 + 4 + 3 + 6 + 6) / 6 = 4.

Example 2:

Input: rolls = [1,5,6], mean = 3, n = 4
Output: [2,3,2,2]
Explanation: The mean of all n + m rolls is (1 + 5 + 6 + 2 + 3 + 2 + 2) / 7 = 3.

Example 3:

Input: rolls = [1,2,3,4], mean = 6, n = 4
Output: []
Explanation: It is impossible for the mean to be 6 no matter what the 4 missing rolls are.


Constraints:

m == rolls.length
1 <= n, m <= 105
1 <= rolls[i], mean <= 6


```

## 翻译

有 n+m 次掷骰子记录，每面 1-6。其中 m 次已知（rolls 数组），n 次缺失。已知所有 n+m 次的平均值恰好为 mean。求缺失的 n 次记录，不存在则返回空数组。

## Approach

计算缺失部分的和：target = mean * (m + n) - sum(rolls)。如果 target < n 或 target > 6n，不可能，返回空。否则将 target 均匀分配到 n 个元素：base = floor(target / n)，extra = target % n，前 extra 个元素为 base+1，其余为 base。

时间复杂度 O(m + n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
