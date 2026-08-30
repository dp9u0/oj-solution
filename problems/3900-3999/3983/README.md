# [3983] Subsequence After One Replacement

## Description

[LeetCode Problem Description](https://leetcode.com/problems/subsequence-after-one-replacement/description/)

* algorithms
* Medium (21.86%)
* Likes:    105
* Dislikes: 20
* Testcase Example:  '"cat"\n"chat"'

```md
You are given two strings s and t consisting of lowercase English letters.
You may choose at most one index in s and replace the character at that index with any lowercase English letter.
Return true if it is possible to make s a subsequence of t; otherwise, return false.

Example 1:
Input: s = "cat", t = "chat"
Output: true
Explanation:
Replace s[1] from 'a' to 'h'. The resulting string is "cht".
"cht" is a subsequence of "chat" because we can match 'c', 'h', and 't' in order.
Example 2:
Input: s = "plane", t = "apple"
Output: false
Explanation:
The characters 'p', 'l', and 'e' can be matched in t, but the remaining characters cannot be matched while preserving the required order.
Even after replacing any one character in s, it is impossible to make s a subsequence of t.

Constraints:
1 <= s.length, t.length <= 105
s and t consist only of lowercase English letters.
Hint 1: If s.length > t.length, the answer is false.
Hint 2: First check whether s is already a subsequence of t.
Hint 3: For each index i in s, compute the earliest position in t after matching s[0..i-1], and the latest position in t before matching s[i+1..s.length - 1].
Hint 4: Try each index i of s as the character to replace. The characters before i and after i must still be matchable in order inside t, with at least one unused position between them for the replaced character.

```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你两个字符串 `s` 和 `t`,均由小写英文字母组成。

你可以**至多选择一个** `s` 中的下标,并将该下标处的字符替换为任意小写英文字母。

判断能否使 `s` 成为 `t` 的子序列(替换后),能则返回 `true`,否则返回 `false`。

**示例 1:**
输入:`s = "cat", t = "chat"`
输出:`true`
解释:将 `s[1]` 从 `'a'` 替换为 `'h'`,得到 `"cht"`。`"cht"` 是 `"chat"` 的子序列(按顺序匹配 `'c'`、`'h'`、`'t'`)。

**示例 2:**
输入:`s = "plane", t = "apple"`
输出:`false`
解释:即使替换 `s` 中任意一个字符,也无法使 `s` 成为 `t` 的子序列。

**约束:**
- `1 <= s.length, t.length <= 10^5`
- `s` 和 `t` 仅由小写英文字母组成

## 解题思路

核心:枚举替换 `s` 中哪个下标 `i`,判断替换后能否匹配。前后缀分离 + 贪心,O(n + m)。

1. **长度剪枝**:若 `n > m`(`s` 比 `t` 长),直接返回 `false`。
2. **前缀最早匹配位置** `pre[i]`:贪心从左到右,`pre[i]` 表示在 `t` 中匹配完 `s[0..i-1]` 后最早的结束位置(即下一个可用下标)。`pre[0] = 0`。若 `pre[n]` 存在,说明 `s` 本身就是 `t` 的子序列,直接返回 `true`(允许"至多"替换一次,零次也行)。
3. **后缀最晚匹配位置** `suf[i]`:贪心从右到左,`suf[i]` 表示 `s[i..n-1]` 能在 `t[suf[i]..m-1]` 中匹配的最晚起始下标。`suf[n] = m`。
4. **枚举替换下标 `i`**:替换 `s[i]` 后,`s[0..i-1]` 用掉 `t` 中 `0..pre[i]-1`,`s[i+1..n-1]` 用掉 `t` 中 `suf[i+1]..m-1`。新字符可任选,所以只要两者之间还有一个空位放新字符即可,条件为 `pre[i] < suf[i+1]`。任一 `i` 满足即返回 `true`。

正确性:`pre[i]` 是所有匹配方案中最小的前缀结束位置,`suf[i+1]` 是最大的后缀起始位置,存在合法方案当且仅当最小结束位置 < 最大起始位置(此时空位 `pre[i]` 可以放任意字符,直接取 `t[pre[i]]`)。
