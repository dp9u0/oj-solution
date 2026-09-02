# [LCR 033] 字母异位词分组

## Description


```md
https://leetcode.cn/problems/sfvd7V/description/
* algorithms
* Medium (75.04%)
* Likes:    72
* Dislikes: -
* Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
给定一个字符串数组 strs ，将 变位词 组合在一起。 可以按任意顺序返回结果列表。
注意：若两个字符串中每个字符出现的次数都相同，则称它们互为变位词。

示例 1：
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2：
输入: strs = [""]
输出: [[""]]
示例 3：
输入: strs = ["a"]
输出: [["a"]]

提示：
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] 仅包含小写字母

注意：本题与主站 49 题相同： https://leetcode.cn/problems/group-anagrams/

```

## Solution

[SourceCode](./solution.js)

## English Description

Given an array of strings `strs`, group the **anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```
Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Example 2:**

```
Input: strs = [""]
Output: [[""]]
```

**Example 3:**

```
Input: strs = ["a"]
Output: [["a"]]
```

**Constraints:**

- `1 <= strs.length <= 104`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.

**Note:** This problem is the same as LeetCode 49.

## Approach

**Core idea:** Two strings are anagrams iff they have identical character-count maps. So we use a hash map keyed by a canonical signature of each string's character counts.

Since `strs[i]` contains only lowercase letters, for each string we count occurrences of each of the 26 letters into an array, then build a signature string like `#2#1#0#...` (count per letter separated by `#`). All anagrams share the same signature and fall into the same bucket.

- **Time:** O(n·k) — for each of n strings, scan its k characters once.
- **Space:** O(n·k) — the hash map holds all strings.
