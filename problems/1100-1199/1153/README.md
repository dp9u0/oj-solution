# [1153] 字符串转化

## Description


```md
https://leetcode.cn/problems/string-transforms-into-another-string/description/
* algorithms
* Hard (40.51%)
* Likes:    91
* Dislikes: -
* Testcase Example:  '"aabcc"\n"ccdee"'
给出两个长度相同的字符串 str1 和 str2。请你帮忙判断字符串 str1 能不能在 零次 或 多次 转化 后变成字符串 str2。
每一次转化时，你可以将 str1 中出现的 所有 相同字母变成其他 任何 小写英文字母。
只有在字符串 str1 能够通过上述方式顺利转化为字符串 str2 时才能返回 true 。​​

示例 1：
输入：str1 = "aabcc", str2 = "ccdee"
输出：true
解释：将 'c' 变成 'e'，然后把 'b' 变成 'd'，接着再把 'a' 变成 'c'。注意，转化的顺序也很重要。
示例 2：
输入：str1 = "leetcode", str2 = "codeleet"
输出：false
解释：我们没有办法能够把 str1 转化为 str2。

提示：
1 <= str1.length == str2.length <= 104
str1 和 str2 中都只会出现小写英文字母
Hint 1: Model the problem as a graph problem. Add an edge from one character to another if you need to convert between them.
Hint 2: What if one character needs to be converted into more than one character?
Hint 3: There would be no solution. Thus, every node can have at most one outgoing edge.
Hint 4: How to process a linked list?
Hint 5: How to process a cycle?
Hint 6: What if there is a character with no outgoing edge? You can use it to break all cycles!

```

## Solution

[SourceCode](./solution.js)

## Translation

Can str1 become str2 by converting ALL occurrences of a letter to another letter (possibly multiple rounds)?

- Example: "aabcc" → "ccdee" = true (c→e, b→d, a→c)

## Approach

**映射 + 备用字符**。每个 str1 字符只能映射到一个 str2 字符,冲突即 false。链式映射可按逆拓扑序一次性转换;映射中出现环时需要 break,即用一个 str2 中未出现的字母作中转——因此 str1 ≠ str2 且 str2 用满 26 个字母时必 false(此时若映射无环,26 字满像 + 出度 ≤1 可推出必有环,判定自洽)。str1 === str2 直接 true。O(n)。
