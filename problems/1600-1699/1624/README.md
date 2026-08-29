# [1624] Largest Substring Between Two Equal Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-substring-between-two-equal-characters/description/)

* algorithms
* Easy (68.30%)
* Likes:    1423
* Dislikes: 68
* Testcase Example:  '"aa"'

```md
Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.
A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = 'aa'
Output: 0
Explanation: The optimal substring here is an empty substring between the two &#39;a&#39;s.
Example 2:

Input: s = 'abca'
Output: 2
Explanation: The optimal substring here is 'bc'.

Example 3:

Input: s = 'cbzxy'
Output: -1
Explanation: There are no characters that appear twice in s.


Constraints:

1 <= s.length <= 300
s contains only lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你一个字符串 `s`，返回两个相同字符之间的最长子字符串的长度，**不含**这两个字符本身。如果不存在这样的子字符串，返回 `-1`。

子字符串是字符串中连续的字符序列。

示例 1：
- 输入：`s = "aa"`
- 输出：`0`
- 解释：两个 `'a'` 之间是空子字符串，长度为 0。

示例 2：
- 输入：`s = "abca"`
- 输出：`2`
- 解释：最优子字符串是 `"bc"`。

示例 3：
- 输入：`s = "cbzxy"`
- 输出：`-1`
- 解释：`s` 中没有出现两次的字符。

约束：
- `1 <= s.length <= 300`
- `s` 只包含小写英文字母

## 解题思路

对每个字符，让它配对"第一次出现的位置"和"当前（更靠后的）出现位置"，中间夹的子串最长。

1. 用长度为 26 的数组 `first` 记录每个字符第一次出现的下标（初始 -1）。
2. 从左到右遍历 `s`，设当前下标为 `i`、字符为 `c`：
   - 若 `first[c]` 已记录，则候选答案为 `i - first[c] - 1`（两端字符之间的长度），更新最大值；
   - 否则记录 `first[c] = i`。
3. 遍历结束若从未出现重复字符则返回 `-1`，否则返回最大值。

时间复杂度 O(n)，空间复杂度 O(1)（26 大小的数组）。
