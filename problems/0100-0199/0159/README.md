# [159] 至多包含两个不同字符的最长子串

## Description


```md
https://leetcode.cn/problems/longest-substring-with-at-most-two-distinct-characters/description/
* algorithms
* Medium (57.46%)
* Likes:    262
* Dislikes: -
* Testcase Example:  '"eceba"'
给你一个字符串 s ，请你找出 至多 包含 两个不同字符 的最长子串，并返回该子串的长度。

示例 1：
输入：s = "eceba"
输出：3
解释：满足题目要求的子串是 "ece" ，长度为 3 。
示例 2：
输入：s = "ccaabbb"
输出：5
解释：满足题目要求的子串是 "aabbb" ，长度为 5 。

提示：
1 <= s.length <= 105
s 由英文字母组成

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a string `s`, return the length of the longest substring containing at most **two** distinct characters.

**Example:**
s = "eceba" → 3 ("ece")

**Constraints:**
- 1 <= s.length <= 10^5

## Approach

滑动窗口 + Map(字符→窗口内最后位置):窗口内字符超过 2 种时,移除"最后位置最靠左"的字符并把左界推到其位置 +1,保证左界前字符全部清空。

时间 O(n)(Map ≤ 3 项,扫描常数),空间 O(1)。
