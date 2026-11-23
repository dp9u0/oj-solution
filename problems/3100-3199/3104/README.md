# [3104] 查找最长的自包含子串

## Description


```md
https://leetcode.cn/problems/find-longest-self-contained-substring/description/
* algorithms
* Hard (37.11%)
* Likes:    4
* Dislikes: -
* Testcase Example:  '"abba"'
给定字符串 s，你需要找到 s 的 最长自包含 子串 的长度。
如果 s 的一个子串 t 满足 t != s 且 t 中的每一个字符在 s 的剩余部分都不存在，则被称为是 自包含 的。
如果存在  s 的最长自包含子串，返回它的长度，否则返回 -1。

示例 1：
输入：s = "abba"
输出：2
解释：
让我们检查子串 "bb"。你可以发现子串外没有其它 "b"。因此答案为 2。
示例 2：
输入：s = "abab"
输出：-1
解释：
我们选择的每一个子串都不满足描述的特点（子串内外包含有一些字母）。所以答案是 -1。
示例 3：
输入：s = "abacd"
输出：4
解释：
让我们检查子串 "abac"。子串之外只有一个字母 "d"。子串内没有 "d"，所以它满足条件并且答案为 4。

提示：
2 <= s.length <= 5 * 104
s 只包含小写英文字母。
Hint 1: Fix the start index of the substring.
Hint 2: For some fixed index start, let's try to find some index end such that this substring satisfies the property and also end is as maximum as possible.
Hint 3: Write some recursive function shrink(start, end) that gives a substring. If the substring is valid, then return end. Otherwise, it reduces <end to reach some valid end.
Hint 4: For some shrink(start, end), if the substring is not valid, it means there is some character that is both inside and outside of the substring. Now try to reduce end such that it does not contain that character anymore.
Hint 5: If you implement the shrink(start, end) function optimally, you'll achieve O(n * 26 * 26) by using partial sum.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Find the longest substring t (t != s) such that no character of t appears elsewhere in s.

Approach: a valid window [i, e] must contain every occurrence of each char inside it: for all chars c occurring in [i, e]: first[c] >= i and last[c] <= e. The right end of an OPTIMAL window is the last occurrence of some char, so for each start i enumerate e = last[c] over 26 chars; verify closure with a 26-char scan (c occurs in window iff first[c] <= e && last[c] >= i); exclude the full string. O(26^2 * n).

Verified: "abba" -> 2; "abab" -> -1; "abacd" -> 4.
