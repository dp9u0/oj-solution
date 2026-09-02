# [LCR 005] 最大单词长度乘积

## Description


```md
https://leetcode.cn/problems/aseY1I/description/
* algorithms
* Medium (71.40%)
* Likes:    162
* Dislikes: -
* Testcase Example:  '["abcw","baz","foo","bar","xtfn","abcdef"]'
给定一个字符串数组 words，请计算当两个字符串 words[i] 和 words[j] 不包含相同字符时，它们长度的乘积的最大值。假设字符串中只包含英语的小写字母。如果没有不包含相同字符的一对字符串，返回 0。

示例 1：
输入：words = ["abcw","baz","foo","bar","fxyz","abcdef"]
输出：16
解释：这两个单词为 "abcw", "fxyz"。它们不包含相同字符，且长度的乘积最大。
示例 2：
输入：words = ["a","ab","abc","d","cd","bcd","abcd"]
输出：4
解释：这两个单词为 "ab", "cd"。
示例 3：
输入：words = ["a","aa","aaa","aaaa"]
输出：0
解释：不存在这样的两个单词。

提示：
2 <= words.length <= 1000
1 <= words[i].length <= 1000
words[i] 仅包含小写字母

注意：本题与主站 318 题相同：https://leetcode.cn/problems/maximum-product-of-word-lengths/

```

## English Translation

Given a string array `words`, find the maximum value of `length(words[i]) * length(words[j])` where the two words do not share any common letters. Assume that `words[i]` only contains lowercase English letters. If no such pair of words exists, return `0`.

**Example 1:**
```
Input: words = ["abcw","baz","foo","bar","fxyz","abcdef"]
Output: 16
Explanation: The two words are "abcw" and "fxyz". They share no common letters, and their length product is maximized.
```

**Example 2:**
```
Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4
Explanation: The two words are "ab" and "cd".
```

**Example 3:**
```
Input: words = ["a","aa","aaa","aaaa"]
Output: 0
Explanation: No such pair exists.
```

**Constraints:**
- `2 <= words.length <= 1000`
- `1 <= words[i].length <= 1000`
- `words[i]` consists of lowercase English letters only.

## Solution

[SourceCode](./solution.js)

## Approach

1. Represent the set of characters of each word as a 26-bit bitmask: bit `k` is set iff the word contains the `k`-th lowercase letter (`words[i].charCodeAt(k) - 97`).
2. Two words share no common letters **iff** `maskA & maskB === 0`.
3. Deduplicate by mask keeping only the longest word for each mask (a shorter word with the same mask can never win a product).
4. Brute-force over all pairs of distinct masks; when `maskA & maskB === 0`, update the answer with `lenA * lenB`.

Complexity: O(n²) time in the number of distinct masks (≤1000), O(n) space for the bitmasks.
