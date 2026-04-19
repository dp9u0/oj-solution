# [820] Short Encoding of Words

## Description

[LeetCode Problem Description](https://leetcode.com/problems/short-encoding-of-words/description/)

* algorithms
* Medium (60.84%)
* Likes:    1785
* Dislikes: 672
* Testcase Example:  '["time","me","bell"]'

```md
A valid encoding of an array of words is any reference string s and array of indices indices such that:

words.length == indices.length
The reference string s ends with the &#39;#&#39; character.
For each index indices[i], the substring of s starting from indices[i] and up to (but not including) the next &#39;#&#39; character is equal to words[i].

Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words.

Example 1:

Input: words = ['time', 'me', 'bell']
Output: 10
Explanation: A valid encoding would be s = 'time#bell#' and indices = [0, 2, 5].
words[0] = 'time', the substring of s starting from indices[0] = 0 to the next &#39;#&#39; is underlined in 'time#bell#'
words[1] = 'me', the substring of s starting from indices[1] = 2 to the next &#39;#&#39; is underlined in 'time#bell#'
words[2] = 'bell', the substring of s starting from indices[2] = 5 to the next &#39;#&#39; is underlined in 'time#bell#'

Example 2:

Input: words = ['t']
Output: 2
Explanation: A valid encoding would be s = 't#' and indices = [0].


Constraints:

1 <= words.length <= 2000
1 <= words[i].length <= 7
words[i] consists of only lowercase letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一组单词 words，找到最短的编码字符串 s 的长度。编码规则：s 中每个单词后跟一个 '#'，一个单词可以被包含在另一个单词的后缀中（如 "me" 是 "time" 的后缀），此时只需编码较长的单词。

## 解题思路

**后缀去重 / Trie**

如果一个单词是另一个单词的后缀，则该单词不需要额外编码。问题转化为：统计所有不是其他单词后缀的单词的 (长度 + 1) 之和。

方法：将每个单词反转后插入 Trie，只有叶子节点对应的单词需要被计入编码长度。或者更简单地：将所有单词反转后排序，检查相邻单词是否有前缀关系。

时间复杂度 O(n * L)，空间复杂度 O(n * L)。
