# [LCR 015] 找到字符串中所有字母异位词

## Description


```md
https://leetcode.cn/problems/VabMRr/description/
* algorithms
* Medium (60.13%)
* Likes:    71
* Dislikes: -
* Testcase Example:  '"cbaebabacd"\n"abc"'
给定两个字符串 s 和 p，找到 s 中所有 p 的 变位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
变位词 指字母相同，但排列不同的字符串。

示例 1：
输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的变位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的变位词。
示例 2：
输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的变位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的变位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的变位词。

提示：
1 <= s.length, p.length <= 3 * 104
s 和 p 仅包含小写字母

注意：本题与主站 438 题相同： https://leetcode.cn/problems/find-all-anagrams-in-a-string/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given strings `s` and `p`, find the starting indices of all substrings of `s` that are **anagrams** of `p`. Order of output doesn't matter.

**Example 1:** `s="cbaebabacd", p="abc"` → `[0,6]`
**Example 2:** `s="abab", p="ab"` → `[0,1,2]`

**Constraints:** lengths ≤ 3*10^4, lowercase.

Note: same as LeetCode 438.

---

## Approach

**Sliding window of length `p.length`** over `s`, maintaining a 26-count `diff` vs `p` (number of letters whose window count differs from p's).

- Seed with `p` counts (as negatives); slide one char in on the right and one out on the left.
- Whenever `diff === 0`, the window is an anagram → record `i - len(p) + 1`.

Complexity: `O(n)`.
