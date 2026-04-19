# [386] Lexicographical Numbers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lexicographical-numbers/description/)

* algorithms
* Medium (76.21%)
* Likes:    3136
* Dislikes: 214
* Testcase Example:  '13'

```md
Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.
You must write an algorithm that runs inO(n)time and uses O(1) extra space.

Example 1:
Input: n = 13
Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]
Example 2:
Input: n = 2
Output: [1,2]


Constraints:

1 <= n <= 5 * 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数 n，返回 [1, n] 范围内所有数字的字典序排列。要求 O(n) 时间和 O(1) 额外空间。

## 解题思路

**字典树（Trie）DFS 遍历**

字典序即对数字按前缀树的方式遍历：1, 10, 100, ..., 11, 12, ..., 2, 20, ...

从 1 开始，优先尝试在末尾追加 0（即 curr * 10），如果超过 n 则回退到 curr // 10 然后 +1，处理进位。

具体算法：
1. 从 curr = 1 开始
2. 如果 curr * 10 <= n，进入下一层（curr *= 10）
3. 否则 curr++；如果 curr 超过 n 或 curr 的末尾进位（curr % 10 == 0），则回退（curr //= 10, curr++）直到不再进位

时间复杂度 O(n)，空间复杂度 O(1)。
