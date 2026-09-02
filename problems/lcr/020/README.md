# [LCR 020] 回文子串

## Description


```md
https://leetcode.cn/problems/a7VOhD/description/
* algorithms
* Medium (70.55%)
* Likes:    121
* Dislikes: -
* Testcase Example:  '"abc"'
给定一个字符串 s ，请计算这个字符串中有多少个回文子字符串。
具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

示例 1：
输入：s = "abc"
输出：3
解释：三个回文子串: "a", "b", "c"
示例 2：
输入：s = "aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"

提示：
1 <= s.length <= 1000
s 由小写英文字母组成

注意：本题与主站 647 题相同：https://leetcode.cn/problems/palindromic-substrings/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given string `s`, count how many **palindromic substrings** it has. Substrings at different start/end positions count separately even if same chars.

**Example:** `"abc"` → 3; `"aaa"` → 6.

**Constraints:** length ≤ 1000. Note: same as LeetCode 647.

---

## Approach

**Expand around centers**: every palindrome has a center at a character (odd length) or between two characters (even length). For each of the `2n-1` centers, expand while the two sides match and count.

Complexity: `O(n²)` time, `O(1)` space.
