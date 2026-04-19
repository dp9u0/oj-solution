# [1657] Determine if Two Strings Are Close

## Description

[LeetCode Problem Description](https://leetcode.com/problems/determine-if-two-strings-are-close/description/)

* algorithms
* Medium (54.26%)
* Likes:    4132
* Dislikes: 360
* Testcase Example:  '"abc"\n"bca"'

```md
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.

For example, abcde -> aecdb


Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.

For example, aacabb -> bbcbaa (all a&#39;s turn into b&#39;s, and all b&#39;s turn into a&#39;s)



You can use the operations on either string as many times as necessary.
Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:

Input: word1 = 'abc', word2 = 'bca'
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: 'abc' -> 'acb'
Apply Operation 1: 'acb' -> 'bca'

Example 2:

Input: word1 = 'a', word2 = 'aa'
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

Example 3:

Input: word1 = 'cabbba', word2 = 'abbccc'
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: 'cabbba' -> 'caabbb'
Apply Operation 2: 'caabbb' -> 'baaccc'
Apply Operation 2: 'baaccc' -> 'abbccc'


Constraints:

1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.


```

## 翻译

两个字符串被认为"接近"，如果你可以通过以下操作从一个得到另一个：

- **操作 1**：交换任意两个现有字符。
- **操作 2**：将一个现有字符的所有出现转换为另一个现有字符，反之亦然（交换两个字符的频率）。

给定两个字符串 `word1` 和 `word2`，如果它们是"接近"的返回 `true`，否则返回 `false`。

## Approach

**条件判断。** 操作 1 意味着字符的顺序不重要，操作 2 意味着字符的频次可以互换。

两个条件需要同时满足：
1. 两个字符串包含**相同的字符集**（字符种类一致）
2. 两个字符串的**频次排序后相同**（频次分布一致）

时间复杂度：O(n)，空间复杂度：O(1)（只有 26 个字母）

## Solution

[SourceCode](./solution.js)
