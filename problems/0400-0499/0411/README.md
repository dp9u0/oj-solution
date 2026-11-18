# [411] 最短独占单词缩写

## Description


```md
https://leetcode.cn/problems/minimum-unique-word-abbreviation/description/
* algorithms
* Hard (52.41%)
* Likes:    31
* Dislikes: -
* Testcase Example:  '"apple"\n["blade"]'
通过将任意数量的 不相邻 子字符串替换为它们的长度，可以完成对字符串的 缩写 。 例如，像 "substitution" 这样的字符串可以缩写为（但不限于）：
"s10n" ("s ubstitutio n")
"sub4u4" ("sub stit u tion")
"12" ("substitution")
"su3i1u2on" ("su bst i t u ti on")
"substitution" (不替换子字符串)
注意："s55n" ("s ubsti tutio n") 不是 "substitution" 的有效缩写形式，因为它试图替换两个相邻的子字符串。
缩写的 长度 是未被替换的字母数加上被替换的字符串数。例如，缩写 "s10n" 的长度为 3（2 个字母 + 1 个子字符串），而 "su3i1u2on" 的长度为 9（6 个字母 + 3 子字符串）。
给你一个目标字符串 target 和一个字符串数组 dictionary 作为字典，为 target 找出并返回一个 最短 长度的缩写字符串，同时这个缩写字符串 不是 字典 dictionary 中其他字符串的缩写形式。如果有多个有效答案，可以返回其中任意一个。

示例 1：
输入：target = "apple", dictionary = ["blade"]
输出："a4"
解释："apple" 的最短缩写形式为 "5" ，但这也是 "blade" 的缩写形式之一。
下一组最短缩写是 "a4" 和 "4e" ，其中 "4e" 也是 "blade" 的缩写形式之一，而 "a4" 不是。
因此，返回 "a4" 。
示例 2：
输入：target = "apple", dictionary = ["blade","plain","amber"]
输出："1p3"
解释："5" 同时是 "apple" 和字典中所有单词的缩写形式。
"a4" 同时是 "apple" 和 "amber" 的缩写形式。
"4e" 同时是 "apple" 和 "blade" 的缩写形式。
"1p3"、"2p2" 和 "3l1" 是 "apple" 的下一组最短缩写形式。
因为它们不是字典中其他单词的缩写形式，返回其中任意一个都是正确的。

提示：
target.length == m
dictionary.length == n
1 <= m <= 21
0 <= n <= 1000
1 <= dictionary[i].length <= 100
如果 n > 0 ，那么 log2(n) + m <= 21
target 和 dictionary[i] 仅包含小写字符
dictionary 不包含 target。

```

## Solution

[SourceCode](./solution.js)

## Translation

A word abbreviation replaces any number of **non-adjacent** substrings with their lengths, e.g. "substitution" → "s10n", "sub4u4", "12". Adjacent replacements like "s55n" are invalid. An abbreviation's length = number of kept letters + number of replaced substrings. Given `target` and a `dictionary`, return **any shortest** abbreviation of `target` that is **not** an abbreviation of any dictionary word.

- Example 1: target = "apple", dictionary = ["blade"] → `"a4"` ("5" would also abbreviate "blade")
- Example 2: target = "apple", dictionary = ["blade","plain","amber"] → `"1p3"`

Constraints: `m = target.length ≤ 21`; `n ≤ 1000`; if n > 0 then `log2(n) + m ≤ 21`; dictionary contains no target.

## Approach

**位掩码枚举 keep 集合**(约束保证 n·2^m ≈ 2·10^6 可枚举):

- 长度不同的字典词不可能冲突,过滤只留等长词;每词算 diff 掩码 = 与 target 不同的位置集合。
- 缩写由 keep 掩码定义(1 = 保留字母)。缩写"独占" ⟺ 对每个词 w:`keep & diff[w] ≠ 0`(至少一个保留位证明两者不同)。
- 枚举全部 2^m 个 keep 掩码,过滤独占者,长度 = popcount(keep) + **被替换段数**(0 的连续段,含首尾),取最小。注意不是保留段的连续段数:"1e4d1" 是 3 段替换 + 2 字母 = 5,而 "le5e" 是 1 段替换 + 3 字母 = 4。
- 独占掩码为空(无等长词)→ 直接返回 String(m)。
