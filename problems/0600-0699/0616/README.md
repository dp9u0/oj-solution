# [616] 给字符串添加加粗标签

## Description


```md
https://leetcode.cn/problems/add-bold-tag-in-string/description/
* algorithms
* Medium (52.50%)
* Likes:    128
* Dislikes: -
* Testcase Example:  '"abcxyz123"\n["abc","123"]'
给定字符串 s 和字符串数组 words。
对于 s 内部的子字符串，若其存在于 words 数组中， 则通过添加闭合的粗体标签  和  进行加粗标记。
如果两个这样的子字符串重叠，你应该仅使用一对闭合的粗体标签将它们包围起来。
如果被粗体标签包围的两个子字符串是连续的，你应该将它们合并。
返回添加加粗标签后的字符串 s 。

示例 1：
输入： s = "abcxyz123", words = ["abc","123"]
输出："abcxyz123"
解释：两个单词字符串是 s 的子字符串，如下所示: "abcxyz123"。
我们在每个子字符串之前添加，在每个子字符串之后添加。
示例 2：
输入：s = "aaabbb", words = ["aa","b"]
输出："aaabbb"
解释：
"aa"作为子字符串出现了两次: "aaabbb" 和 "aaabbb"。
"b"作为子字符串出现了三次: "aaabbb"、"aaabbb" 和 "aaabbb"。
我们在每个子字符串之前添加，在每个子字符串之后添加: "aaabbb"。
由于前两个重叠，把它们合并得到: "aaabbb"。
由于现在这四个是连续的，把它们合并得到: "aaabbb"。

提示：
1 <= s.length <= 1000
0 <= words.length <= 100
1 <= words[i].length <= 1000
s 和 words[i] 由英文字母和数字组成
words 中的所有值 互不相同

注：此题与「758 - 字符串中的加粗单词」相同 - https://leetcode.cn/problems/bold-words-in-string

```

## Solution

[SourceCode](./solution.js)

## Translation

Wrap every substring of `s` that appears in `words` with `<b>...</b>` tags; overlapping or adjacent bold parts merge into one tag pair.

- Example 1: s = "abcxyz123", words = ["abc","123"] → `"<b>abc</b>xyz<b>123</b>"`
- Example 2: s = "aaabbb", words = ["aa","b"] → `"<b>aaabbb</b>"`

Constraints: |s| ≤ 1000; ≤ 100 words.

## Approach

**布尔标记 + 单次扫描**。对每个位置 i、每个词 w:若 `s.startsWith(w, i)` 则标记区间 [i, i+w) 为粗体;然后从左到右扫 s,进入/离开粗体状态时插入 `<b>`/`</b>`——重叠与相邻自动合并。时间 O(|s|·Σ|w|)。
