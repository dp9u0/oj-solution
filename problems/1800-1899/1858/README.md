# [1858] 包含所有前缀的最长单词

## Description


```md
https://leetcode.cn/problems/longest-word-with-all-prefixes/description/
* algorithms
* Medium (67.68%)
* Likes:    18
* Dislikes: -
* Testcase Example:  '["k","ki","kir","kira","kiran"]'
给定一个字符串数组 words，找出 words 中所有的前缀都在 words 中的最长字符串。
例如，令 words = ["a", "app", "ap"]。字符串 "app" 含前缀 "ap" 和 "a" ，都在 words 中。
返回符合上述要求的字符串。如果存在多个（符合条件的）相同长度的字符串，返回字典序中最小的字符串，如果这样的字符串不存在，返回 ""。

示例 1:
输入： words = ["k","ki","kir","kira", "kiran"]
输出： "kiran"
解释： "kiran" 含前缀 "kira"、 "kir"、 "ki"、 和 "k"，这些前缀都出现在 words 中。
示例 2:
输入： words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
输出： "apple"
解释： "apple" 和 "apply" 都在 words 中含有各自的所有前缀。
然而，"apple" 在字典序中更小，所以我们返回之。
示例 3:
输入： words = ["abc", "bc", "ab", "qwe"]
输出： ""

提示：
1 <= words.length <= 105
1 <= words[i].length <= 105
1 <= sum(words[i].length) <= 105
words[i] 只包含小写英文字母。
Hint 1: Add all the words to a trie.
Hint 2: Check the longest path where all the nodes are words.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given an array of strings `words`, find the longest string in `words` such that every prefix of it is also in `words`.

For example, let `words = ["a", "app", "ap"]`. The string `"app"` has prefixes `"ap"` and `"a"`, all of which are in `words`.

Return the string described above. If there is more than one string with the same (valid) length, return the lexicographically smallest one; if no such string exists, return `""`.

Example 1:
Input: words = ["k","ki","kir","kira","kiran"]
Output: "kiran"

Example 2:
Input: words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
Output: "apple"

Constraints: 1 <= words.length <= 10^5, 1 <= words[i].length <= 10^5, 1 <= sum(words[i].length) <= 10^5, words[i] consists of lowercase English letters.

## Approach

Sort `words` lexicographically and keep a set of "valid" words (those whose every prefix is also in `words`).

Key fact: a word `w` is valid iff its immediate prefix `w[:-1]` is valid — since `w[:-1]` is lexicographically smaller than `w`, it was processed earlier, and its validity already transitively guarantees all shorter prefixes. Single-char words are trivially valid.

Iterating in sorted order, the first valid word of any given length is the lexicographically smallest, so `best` is replaced only on strictly greater length.

Time O(total characters) after an O(n log n) sort; space O(total characters).
