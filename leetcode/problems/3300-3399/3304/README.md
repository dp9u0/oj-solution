# [3304] Find the K-th Character in String Game I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/description/)

* algorithms
* Easy (81.64%)
* Likes:    650
* Dislikes: 137
* Testcase Example:  '5'

```md
Alice and Bob are playing a game. Initially, Alice has a string word = 'a'.
You are given a positive integer k.
Now Bob will ask Alice to perform the following operation forever:

Generate a new string by changing each character in word to its next character in the English alphabet, and append it to the original word.

For example, performing the operation on 'c' generates 'cd' and performing the operation on 'zb' generates 'zbac'.
Return the value of the kth character in word, after enough operations have been done for word to have at least k characters.

Example 1:

Input: k = 5
Output: 'b'
Explanation:
Initially, word = 'a'. We need to do the operation three times:

Generated string is 'b', word becomes 'ab'.
Generated string is 'bc', word becomes 'abbc'.
Generated string is 'bccd', word becomes 'abbcbccd'.


Example 2:

Input: k = 10
Output: 'c'


Constraints:

1 <= k <= 500


```

## 中文翻译

初始字符串为 "a"，每次操作将当前字符串的每个字符变为下一个字母，拼接到原字符串末尾（字符串长度翻倍）。求第 k 个字符。

## 解题思路

每次操作字符串翻倍，第 k 个字符的值取决于它在多少次翻倍中位于"新生成的后半部分"。等价于统计 (k-1) 的二进制中 1 的个数（popcount），每多一个 1 表示多一次递增。最终答案为 'a' + popcount(k-1)。

时间复杂度：O(log k)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
