# [1079] Letter Tile Possibilities

## Description

[LeetCode Problem Description](https://leetcode.com/problems/letter-tile-possibilities/description/)

* algorithms
* Medium (83.53%)
* Likes:    3142
* Dislikes: 91
* Testcase Example:  '"AAB"'

```md
You have ntiles, where each tile has one letter tiles[i] printed on it.
Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

Example 1:

Input: tiles = 'AAB'
Output: 8
Explanation: The possible sequences are 'A', 'B', 'AA', 'AB', 'BA', 'AAB', 'ABA', 'BAA'.

Example 2:

Input: tiles = 'AAABBC'
Output: 188

Example 3:

Input: tiles = 'V'
Output: 1


Constraints:

1 <= tiles.length <= 7
tiles consists of uppercase English letters.


```

## 中文翻译

给定字母瓷砖，返回可以组成的所有非空序列的数量（考虑重复字母）。

## 解题思路

**回溯+计数**

统计每个字母频率，回溯枚举：对每种可用字母选一个加入序列，递归后恢复计数。每次递归进入时 count++（非空序列）。

时间复杂度：O(n!)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
