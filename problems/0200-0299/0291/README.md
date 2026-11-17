# [291] 单词规律 II

## Description


```md
https://leetcode.cn/problems/word-pattern-ii/description/
* algorithms
* Medium (52.89%)
* Likes:    130
* Dislikes: -
* Testcase Example:  '"abab"\n"redblueredblue"'
给你一种规律 pattern 和一个字符串 s，请你判断 s 是否和 pattern 的规律相匹配。
如果存在单个字符到 非空 字符串的 双射映射 ，那么字符串 s 匹配 pattern ，即：如果 pattern 中的每个字符都被它映射到的字符串替换，那么最终的字符串则为 s 。双射 意味着映射双方一一对应，不会存在两个字符映射到同一个字符串，也不会存在一个字符分别映射到两个不同的字符串。

示例 1：
输入：pattern = "abab", s = "redblueredblue"
输出：true
解释：一种可能的映射如下：
'a' -> "red"
'b' -> "blue"
示例 2：
输入：pattern = "aaaa", s = "asdasdasdasd"
输出：true
解释：一种可能的映射如下：
'a' -> "asd"
示例 3：
输入：pattern = "aabb", s = "xyzabcxzyabc"
输出：false

提示：
1 <= pattern.length, s.length <= 20
pattern 和 s 由小写英文字母组成

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a `pattern` and a string `s`, return whether `s` matches `pattern` where each pattern character maps to a **non-empty** substring of s, and the mapping is a bijection (two chars cannot map to the same substring).

**Example:**
pattern = "abab", s = "redblueredblue" → true (a="red", b="blue")

**Constraints:**
- 1 <= pattern.length, s.length <= 20

## Approach

回溯双射:已映射的字符直接校验前缀;新字符枚举其所有可能子串(跳过已被占用的子串),递归后撤销。双射由 charToWord + usedWords 两侧共同保证。

时间指数级(剪枝后对 20 长度可行),空间 O(pattern 字符数)。
