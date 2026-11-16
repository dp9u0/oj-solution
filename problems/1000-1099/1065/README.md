# [1065] 字符串的索引对

## Description


```md
https://leetcode.cn/problems/index-pairs-of-a-string/description/
* algorithms
* Easy (58.01%)
* Likes:    42
* Dislikes: -
* Testcase Example:  '"thestoryofleetcodeandme"\n["story","fleet","leetcode"]'
给出 字符串 text 和 字符串列表 words, 返回所有的索引对 [i, j] 使得子字符串 text[i]...text[j]（包括 i 和 j）属于字符串列表 words。
按顺序返回索引对 [i, j]（即，按它们的第一个坐标进行排序，如果相同，则按它们的第二个坐标对它们进行排序）。

示例 1:
输入: text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"]
输出: [[3,7],[9,13],[10,17]]
示例 2:
输入: text = "ababa", words = ["aba","ab"]
输出: [[0,1],[0,2],[2,3],[2,4]]
解释:
注意，返回的配对可以有交叉，比如，"aba" 既在 [0,2] 中也在 [2,4] 中

提示:
1 <= text.length <= 100
1 <= words.length <= 20
1 <= words[i].length <= 50
text 和 words[i] 都只包含小写字母。
保证 words 中的字符串无重复。
Hint 1: For each string of the set, look for matches and store those matches indices.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a string `text` and an array of strings `words`, return all index pairs `[i, j]` such that the substring `text[i..j]` (inclusive) is a word in `words`, sorted by start then end.

**Example:**
text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"] → [[3,7],[9,13],[10,17]]

## Approach

对每个词用 indexOf 步进 1 找所有出现位置(允许重叠),收集 [起,止] 后双关键字排序。

时间 O(W × n × L),W 词数、L 词长;排序 O(m log m)。
