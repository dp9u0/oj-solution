# [358] K 距离间隔重排字符串

## Description


```md
https://leetcode.cn/problems/rearrange-string-k-distance-apart/description/
* algorithms
* Hard (39.16%)
* Likes:    144
* Dislikes: -
* Testcase Example:  '"aabbcc"\n3'
给你一个非空的字符串 s 和一个整数 k ，你要将这个字符串 s 中的字母进行重新排列，使得重排后的字符串中相同字母的位置间隔距离 至少 为 k 。如果无法做到，请返回一个空字符串 ""。

示例 1：
输入: s = "aabbcc", k = 3
输出: "abcabc"
解释: 相同的字母在新的字符串中间隔至少 3 个单位距离。
示例 2:
输入: s = "aaabc", k = 3
输出: ""
解释: 没有办法找到可能的重排结果。
示例 3:
输入: s = "aaadbbcc", k = 2
输出: "abacabcd"
解释: 相同的字母在新的字符串中间隔至少 2 个单位距离。

提示：
1 <= s.length <= 3 * 105
s 仅由小写英文字母组成
0 <= k <= s.length

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Rearrange `s` so that identical characters are at least distance `k` apart; return "" if impossible. k <= 1 → s unchanged.

**Example:**
"aabbcc", k = 3 → "abcabc"

**Constraints:**
- 1 <= s.length <= 12^4? (practical), lowercase letters

## Approach

冷却队列贪心:每步取剩余计数最高的字符放入结果,随后将其压入冷却队列(位置 i 放入的字符在 i+k 才可复用);每步开始时把冷却到期的字符放回堆。堆空且有字符未放置 → ""。逐轮 top-k 的简化贪心在部分用例上不完备,冷却版是标准解。

时间 O(n × 字符集排序),空间 O(n)。
