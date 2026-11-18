# [555] 分割连接字符串

## Description


```md
https://leetcode.cn/problems/split-concatenated-strings/description/
* algorithms
* Medium (38.94%)
* Likes:    36
* Dislikes: -
* Testcase Example:  '["abc","xyz"]'
给定一个字符串列表 strs，你可以将这些字符串连接成一个循环字符串，对于每个字符串，你可以选择是否翻转它。在所有可能的循环字符串中，你需要分割循环字符串（这将使循环字符串变成一个常规的字符串），然后找到字典序最大的字符串。
具体来说，要找到字典序最大的字符串，你需要经历两个阶段：
将所有字符串连接成一个循环字符串，你可以选择是否翻转某些字符串，并按照给定的顺序连接它们。
在循环字符串的某个位置分割它，这将使循环字符串从分割点变成一个常规的字符串。
你的工作是在所有可能的常规字符串中找到字典序最大的一个。

示例 1:
输入: strs = ["abc","xyz"]
输出: "zyxcba"
解释: 你可以得到循环字符串 "-abcxyz-", "-abczyx-", "-cbaxyz-", "-cbazyx-"，其中 '-' 代表循环状态。
答案字符串来自第四个循环字符串， 你可以从中间字符 'a' 分割开然后得到 "zyxcba"。
示例 2:
输入: strs = ["abc"]
输出: "cba"

提示:
1 <= strs.length <= 1000
1 <= strs[i].length <= 1000
1 <= sum(strs[i].length) <= 1000
strs[i] 只包含小写英文字母

```

## Solution

[SourceCode](./solution.js)

## Translation

Concatenate the strings (in order) into a loop; each string may individually be used reversed. Cut the loop at some point to make a linear string; find the lexicographically largest possible result.

- Example 1: ["abc","xyz"] → `"zyxcba"` (loop "-cbazyx-", cut inside "zyx")
- Example 2: ["abc"] → `"cba"`

Constraints: sum of lengths ≤ 1000.

## Approach

**焦点串枚举**。最优解的切点必落在某个字符串 i 内部;其余字符串贡献 `max(原串, 逆串)` 即可(顺序不变):

- 预处理 others[i]、前缀拼接 pre[i]、后缀拼接 suf[i]。**循环切点后从 i+1 绕回 0..i-1**,中段 = suf[i+1] + pre[i](首版写成 pre[i]+suf[i+1] 曾 WA)。
- 对每个焦点串的两个朝向、每个切点 p:候选 = 朝向串后半 + 中段 + 前半。比较取最大。

切点总数 O(S),每次拼串 O(S),总 O(S²) = 10^6 可过。
