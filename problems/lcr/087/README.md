# [LCR 087] 复原 IP 地址

## Description


```md
https://leetcode.cn/problems/0on3uN/description/
* algorithms
* Medium (63.65%)
* Likes:    58
* Dislikes: -
* Testcase Example:  '"25525511135"'
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。你可以按任何顺序返回答案。
有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。

示例 1：
输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
示例 2：
输入：s = "0000"
输出：["0.0.0.0"]
示例 3：
输入：s = "1111"
输出：["1.1.1.1"]
示例 4：
输入：s = "010010"
输出：["0.10.0.10","0.100.1.0"]
示例 5：
输入：s = "10203040"
输出：["10.20.30.40","102.0.30.40","10.203.0.40"]

提示：
0 <= s.length <= 3000
s 仅由数字组成

注意：本题与主站 93 题相同：https://leetcode.cn/problems/restore-ip-addresses/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given a digit-only string `s` representing an IP address, return all **valid** IP addresses obtainable from `s`. A valid IPv4 is exactly four integers in `[0,255]`, no leading zeros (except the number 0 itself), separated by dots.

**Example 1:** `"25525511135"` → `["255.255.11.135","255.255.111.35"]`

**Constraints:** `0 <= s.length <= 3000`. Note: same as LeetCode 93.

---

## Approach

**Backtracking** splitting `s` into 4 segments: DFS over position with `parts` chosen; each part takes 1-3 digits, must be `<=255`, and no leading zero unless it's a single `0`. Collect when 4 parts consume the whole string (short-circuit if len outside [4,12]).

Complexity: exponential but heavily pruned.
