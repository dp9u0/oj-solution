# [758] 字符串中的加粗单词

## Description


```md
https://leetcode.cn/problems/bold-words-in-string/description/
* algorithms
* Medium (49.28%)
* Likes:    60
* Dislikes: -
* Testcase Example:  '["ab","bc"]\n"aabcd"'
给定一个关键词集合 words 和一个字符串 s，将所有 s 中出现的关键词 words[i] 加粗。所有在标签  和  中的字母都会加粗。
加粗后返回 s 。返回的字符串需要使用尽可能少的标签，当然标签应形成有效的组合。

示例 1:
输入: words = ["ab","bc"], s = "aabcd"
输出: "aabcd"
解释: 注意返回 "aabcd" 会使用更多的标签，因此是错误的。
示例 2:
输入: words = ["ab","cb"], s = "aabcd"
输出: "aabcd"

提示:
1 <= s.length <= 500
0 <= words.length <= 50
1 <= words[i].length <= 10
s 和 words[i] 由小写英文字母组成

注：此题与「616 - 给字符串添加加粗标签」相同 - https://leetcode.cn/problems/add-bold-tag-in-string/
Hint 1: First, determine which letters are bold and store that information in mask[i] = if i-th character is bold.
Then, insert the tags at the beginning and end of groups.  The start of a group is if and only if (mask[i] and (i == 0 or not mask[i-1])), and the end of a group is similar.

```

## Solution

[SourceCode](./solution.js)

## Translation

Given a set of keywords `words` and a string `s`, bold all occurrences of any words[i] in s. Return s wrapped with the fewest valid `<b>` tags (merge overlapping/adjacent bold segments). Note: the sample outputs above lost their tags in plain-text rendering — example 1 is really `"a<b>abc</b>d"` (word "ab" at index 1 and "bc" at index 2 overlap-merge into one run); example 2 is `"a<b>ab</b>cd"`.

## Approach

**布尔掩码**。mask[i] 表示 s[i] 是否加粗:对每个位置 i 检查每个 word 是否从这里开始匹配,是则把 mask[i..i+len-1] 全置 true。然后扫一遍拼结果:mask 由 false 变 true 处插 `<b>`,由 true 变 false 处插 `</b>`,末尾仍为 true 则补 `</b>`。复杂度 O(|s|·|words|·maxLen) = 500×50×10,直解。
