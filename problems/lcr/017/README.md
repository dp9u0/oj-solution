# [LCR 017] 最小覆盖子串

## Description


```md
https://leetcode.cn/problems/M1oyTv/description/
* algorithms
* Hard (51.11%)
* Likes:    141
* Dislikes: -
* Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
给定两个字符串 s 和 t 。返回 s 中包含 t 的所有字符的最短子字符串。如果 s 中不存在符合条件的子字符串，则返回空字符串 "" 。
如果 s 中存在多个符合条件的子字符串，返回任意一个。

注意： 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。

示例 1：
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
解释：最短子字符串 "BANC" 包含了字符串 t 的所有字符 'A'、'B'、'C'
示例 2：
输入：s = "a", t = "a"
输出："a"
示例 3：
输入：s = "a", t = "aa"
输出：""
解释：t 中两个字符 'a' 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。

提示：
1 <= s.length, t.length <= 105
s 和 t 由英文字母组成

进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？

注意：本题与主站 76 题相似（本题答案不唯一）：https://leetcode.cn/problems/minimum-window-substring/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given strings `s` and `t`, return the shortest substring of `s` that contains all characters of `t`. If none, return `""`. If multiple, return any. For repeated characters in `t`, the substring must contain at least that many of each.

**Example 1:** `s="ADOBECODEBANC", t="ABC"` → `"BANC"`
**Example 2:** `s="a", t="a"` → `"a"`
**Example 3:** `s="a", t="aa"` → `""`

**Constraints:** lengths up to 10^5, English letters.

Note: similar to LeetCode 76 (answer not unique here).

---

## Approach

**Sliding window with two count maps.**

- `need` = required char counts from `t`; `have` counts chars currently in the window; track `required` = distinct chars still not fully satisfied.
- Expand `right`; when a char reaches its required count, decrement `required`. When `required == 0`, shrink `left` while the window still satisfies, tracking the minimal window.

Complexity: `O(n)`.
