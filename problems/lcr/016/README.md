# [LCR 016] 无重复字符的最长子串

## Description


```md
https://leetcode.cn/problems/wtcaE1/description/
* algorithms
* Medium (48.33%)
* Likes:    131
* Dislikes: -
* Testcase Example:  '"abcabcbb"'
给定一个字符串 s ，请你找出其中不含有重复字符的 最长连续子字符串 的长度。

示例 1：
输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子字符串是 "abc"，所以其长度为 3。
示例 2：
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子字符串是 "b"，所以其长度为 1。
示例 3：
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4：
输入: s = ""
输出: 0

提示：
0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成

注意：本题与主站 3 题相同： https://leetcode.cn/problems/longest-substring-without-repeating-characters/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given a string `s`, find the length of the longest **substring** without repeating characters.

**Example 1:** `"abcabcbb"` → `3` (`"abc"`)
**Example 2:** `"bbbbb"` → `1`
**Example 3:** `"pwwkew"` → `3` (`"wke"`; substring, not subsequence)
**Example 4:** `""` → `0`

**Constraints:** `0 <= s.length <= 5*10^4`.

Note: same as LeetCode 3.

---

## Approach

**Sliding window.** Maintain a window `[left, right]` with no repeats. As `right` advances, if `s[right]` was seen at index `>= left`, move `left` just past that occurrence. Track `max(right - left + 1)`.

Keep a `last` map of each char's most recent index.

Complexity: `O(n)` time, `O(1)` space (char set bounded).
