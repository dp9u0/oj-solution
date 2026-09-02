# [LCR 065] 单词的压缩编码

## Description


```md
https://leetcode.cn/problems/iSwD2y/description/
* algorithms
* Medium (63.06%)
* Likes:    52
* Dislikes: -
* Testcase Example:  '["time","me","bell"]'
单词数组 words 的 有效编码 由任意助记字符串 s 和下标数组 indices 组成，且满足：
words.length == indices.length
助记字符串 s 以 '#' 字符结尾
对于每个下标 indices[i] ，s 的一个从 indices[i] 开始、到下一个 '#' 字符结束（但不包括 '#'）的 子字符串 恰好与 words[i] 相等
给定一个单词数组 words ，返回成功对 words 进行编码的最小助记字符串 s 的长度 。

示例 1：
输入：words = ["time", "me", "bell"]
输出：10
解释：一组有效编码为 s = "time#bell#" 和 indices = [0, 2, 5] 。
words[0] = "time" ，s 开始于 indices[0] = 0 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
words[1] = "me" ，s 开始于 indices[1] = 2 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
words[2] = "bell" ，s 开始于 indices[2] = 5 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
示例 2：
输入：words = ["t"]
输出：2
解释：一组有效编码为 s = "t#" 和 indices = [0] 。

提示：
1 <= words.length <= 2000
1 <= words[i].length <= 7
words[i] 仅由小写字母组成

注意：本题与主站 820 题相同： https://leetcode.cn/problems/short-encoding-of-words/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

A valid encoding of a word array `words` is a mnemonic string `s` (ending with `#`) and indices array where each `words[i]` equals the substring of `s` starting at `indices[i]` up to the next `#`. Given `words`, return the **minimum** length of the mnemonic string.

**Example 1:** `["time","me","bell"]` → `10` (`"time#bell#"`)
**Example 2:** `["t"]` → `2`

**Constraints:** `1 <= words.length <= 2000`, `1 <= words[i].length <= 7`.

Note: same as LeetCode 820.

---

## Approach

A word that is a **suffix** of another word is automatically covered and needn't be re-encoded. So keep only "maximal" words.

- Sort words by length descending; maintain a set of kept words.
- For each word, skip it if it is a suffix (`.endsWith`) of any already-kept longer word.
- Answer = `sum(keptWord.length + 1)` for the `#` terminators.

Complexity: `O(n²·L)` fine for n ≤ 2000, L ≤ 7.
