# [524] Longest Word in Dictionary through Deleting

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/description/)

* algorithms
* Medium (52.99%)
* Likes:    1878
* Dislikes: 367
* Testcase Example:  '"abpcplea"\n["ale","apple","monkey","plea"]'

```md
Given a string s and a string array dictionary, return the longest string in the dictionary that can be formed by deleting some of the given string characters. If there is more than one possible result, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

Example 1:
Input: s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
Output: "apple"
Example 2:
Input: s = "abpcplea", dictionary = ["a","b","c"]
Output: "a"

Constraints:
1
1
1
s and dictionary[i] consist of lowercase English letters.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个字符串 `s` 和一个字符串数组 `dictionary`，返回字典中能够通过删除 `s` 中某些字符而得到的最长字符串。如果有多个可能的结果，返回其中字典序最小的最长单词。如果不存在可能的结果，返回空字符串。

示例 1:
输入: s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
输出: "apple"

示例 2:
输入: s = "abpcplea", dictionary = ["a","b","c"]
输出: "a"

约束:
- 1 <= s.length, dictionary.length, dictionary[i].length
- s 和 dictionary[i] 仅由小写英文字母组成

## 解题思路

「通过删除字符得到」本质上是判断 dictionary 中的单词是否为 s 的子序列。

1. **子序列判断（双指针）**：对每个单词 `word`，用指针 `i` 指向 word、遍历 s，字符匹配则 i 前进；遍历结束后 `i === word.length` 说明 word 是 s 的子序列。
2. **贪心选最优**：遍历 dictionary，维护当前最优答案 `best`：
   - 若 word 更长，更新；
   - 若等长且字典序更小（`word < best`），更新。
3. 无匹配则返回空字符串。

时间复杂度：O(n·m)，n 为 s 长度，m 为所有单词总长度。空间复杂度：O(1)。
