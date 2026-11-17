# [269] 火星词典

## Description


```md
https://leetcode.cn/problems/alien-dictionary/description/
* algorithms
* Hard (38.34%)
* Likes:    348
* Dislikes: -
* Testcase Example:  '["wrt","wrf","er","ett","rftt"]'
现有一种使用英语字母的火星语言，这门语言的字母顺序对你来说是未知的。
给你一个来自这种外星语言字典的字符串列表 words ，words 中的字符串已经 按这门新语言的字典序进行了排序 。
如果这种说法是错误的，并且给出的 words 不能对应任何字母的顺序，则返回 "" 。
否则，返回一个按新语言规则的 字典递增顺序 排序的独特字符串。如果有多个解决方案，则返回其中 任意一个 。

示例 1：
输入：words = ["wrt","wrf","er","ett","rftt"]
输出："wertf"
示例 2：
输入：words = ["z","x"]
输出："zx"
示例 3：
输入：words = ["z","x","z"]
输出：""
解释：不存在合法字母顺序，因此返回 "" 。

提示：
1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] 仅由小写英文字母组成

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a list of words sorted lexicographically in an alien language, derive the character order. Return any valid order; if no valid order exists (cycle, or a longer word before its own prefix), return "".

**Example:**
["wrt","wrf","er","ett","rftt"] → "wertf"

**Constraints:**
- 1 <= words.length <= 100, total chars <= 100

## Approach

Kahn 拓扑排序:相邻两词首个不同字符建边(去重);较长词出现在自身前缀之前直接非法;入度 0 的字符入队处理,处理数 < 字符总数说明有环。

时间 O(总字符数),空间 O(26)。
