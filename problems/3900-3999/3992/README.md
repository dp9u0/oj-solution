# [3992] Rearrange String to Avoid Character Pair

## Description

[LeetCode Problem Description](https://leetcode.com/problems/rearrange-string-to-avoid-character-pair/description/)

* algorithms
* Easy (78.18%)
* Likes:    30
* Dislikes: 1
* Testcase Example:  '"aabc"\n"a"\n"c"'

```md
You are given a string s and two distinct lowercase English letters x and y.
Rearrange the characters of s to construct a new string t such that:
t is a permutation of s.
Every occurrence of y appears before every occurrence of x in t.
Return any valid string t.

Example 1:
Input: s = "aabc", x = "a", y = "c"
Output: "cbaa"
Explanation:
The string "cbaa" is a permutation of "aabc", and every occurrence of 'c' appears before every occurrence of 'a'.
Example 2:
Input: s = "dcab", x = "d", y = "b"
Output: "cabd"
Explanation:
The string "cabd" is a permutation of "dcab", and every occurrence of 'b' appears before every occurrence of 'd'.
Example 3:
Input: s = "axe", x = "o", y = "x"
Output: "axe"
Explanation:
The string "axe" is already valid. Since 'o' does not occur in the string, the required condition is automatically satisfied.

Constraints:
1
s consists of lowercase English letters.
x and y are lowercase English letters.
x != y
Hint 1: Only the relative order between occurrences of x and y matters.
Hint 2: One approach is to place all occurrences of y before all other characters, and place all occurrences of x after them.
Hint 3: Another approach is to sort the characters of s. If x
After sorting this way, every occurrence of y will appear before every occurrence of x.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你一个字符串 `s` 和两个不同的小写英文字母 `x` 和 `y`。

重新排列 `s` 的字符，构造一个新字符串 `t`，满足：

- `t` 是 `s` 的一个排列（permutation）。
- `t` 中每一处 `y` 的出现都位于每一处 `x` 的出现之前。

返回任意一个满足条件的字符串 `t`。

示例 1：
输入：`s = "aabc", x = "a", y = "c"`
输出：`"cbaa"`
解释：`"cbaa"` 是 `"aabc"` 的一个排列，且所有的 `'c'` 都出现在所有的 `'a'` 之前。

示例 2：
输入：`s = "dcab", x = "d", y = "b"`
输出：`"cabd"`
解释：`"cabd"` 是 `"dcab"` 的一个排列，且所有的 `'b'` 都出现在所有的 `'d'` 之前。

示例 3：
输入：`s = "axe", x = "o", y = "x"`
输出：`"axe"`
解释：`"axe"` 本身已经合法。由于 `'o'` 不在字符串中出现，条件自动满足。

约束：
- `1 <= s.length`
- `s` 由小写英文字母组成。
- `x` 和 `y` 是小写英文字母。
- `x != y`

## 解题思路

关键观察：只有 `x` 和 `y` 之间的相对顺序有影响，其他字符放在哪里都无所谓（提示 1、2）。

因此一次遍历把 `s` 的字符分到三个桶里：

1. 等于 `y` 的字符
2. 既不是 `x` 也不是 `y` 的其他字符
3. 等于 `x` 的字符

按 `y 桶 + 其他桶 + x 桶` 的顺序拼接即为答案。因为 `x != y`，每个字符恰好落入一个桶，结果一定是 `s` 的排列，且所有 `y` 都排在所有 `x` 前面。

复杂度：时间 O(n)，空间 O(n)。
