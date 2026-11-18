# [425] 单词方块

## Description


```md
https://leetcode.cn/problems/word-squares/description/
* algorithms
* Hard (64.69%)
* Likes:    111
* Dislikes: -
* Testcase Example:  '["area","lead","wall","lady","ball"]'
给定一个单词集合 words （没有重复），找出并返回其中所有的 单词方块 。 words 中的同一个单词可以被 多次 使用。你可以按 任意顺序 返回答案。
一个单词序列形成了一个有效的 单词方块 的意思是指从第 k 行和第 k 列  0 <= k < max(numRows, numColumns) 来看都是相同的字符串。
例如，单词序列 ["ball","area","lead","lady"] 形成了一个单词方块，因为每个单词从水平方向看和从竖直方向看都是相同的。

示例 1：
输入：words = ["area","lead","wall","lady","ball"]
输出: [["ball","area","lead","lady"],
["wall","area","lead","lady"]]
解释：
输出包含两个单词方块，输出的顺序不重要，只需要保证每个单词方块内的单词顺序正确即可。
示例 2：
输入：words = ["abat","baba","atan","atal"]
输出：[["baba","abat","baba","atal"],
["baba","abat","baba","atan"]]
解释：
输出包含两个单词方块，输出的顺序不重要，只需要保证每个单词方块内的单词顺序正确即可。

提示:
1 <= words.length <= 1000
1 <= words[i].length <= 4
words[i] 长度相同
words[i] 只由小写英文字母组成
words[i] 都 各不相同

```

## Solution

[SourceCode](./solution.js)

## Translation

Given a set of unique words (all the same length L ≤ 4), find all **word squares**: sequences where row k read horizontally equals column k read vertically for every k (i.e. word[i][k] == word[k][i]). A word may be reused. Return in any order.

- Example 1: ["area","lead","wall","lady","ball"] → [["ball","area","lead","lady"],["wall","area","lead","lady"]]
- Example 2: ["abat","baba","atan","atal"] → [["baba","abat","baba","atan"],["baba","abat","baba","atal"]]

Constraints: `1 <= words.length <= 1000`; all words share the same length.

## Approach

**前缀分组 + 回溯**。放第 r 行时,该行单词的前缀已由前面各行完全决定:`prefix(r) = words[0][r] + words[1][r] + ... + words[r-1][r]`(第 r 列已填部分)。

- 预处理:把每个单词挂到它的所有前缀(l = 0..L)下,`Map<prefix, words[]>`。
- DFS 逐行放词:查当前列前缀的候选词,放进 square 递归下一行;r == L 时收集一个完整方块。
- 方块必须完整 L 行(k 覆盖 max(numRows, numCols)),部分方块不合法。
