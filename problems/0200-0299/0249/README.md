# [249] 移位字符串分组

## Description


```md
https://leetcode.cn/problems/group-shifted-strings/description/
* algorithms
* Medium (64.83%)
* Likes:    151
* Dislikes: -
* Testcase Example:  '["abc","bcd","acef","xyz","az","ba","a","z"]'
对字符串进行 “移位” 的操作：
右移：将字符串中每个字母都变为其在字母表中 后续 的字母，其中用 'a' 替换 'z'。比如，"abc" 能够右移为 "bcd"，"xyz" 能够右移为 "yza"。
左移：将字符串中每个字母都变为其在字母表中 之前 的字母，其中用 'z' 替换 'a'。比如，"bcd" 能够左移为 "abc"，"yza" 能够左移为 "xyz"。
我们可以不断地向两个方向移动字符串，形成 无限的移位序列。
例如，移动 "abc" 来形成序列：... <-> "abc" <-> "bcd" <-> ... <-> "xyz" <-> "yza" <-> ... <-> "zab" <-> "abc" <-> ...
给定一个字符串数组 strings，将属于相同移位序列的所有 strings[i] 进行分组。你可以以 任意顺序 返回答案。

示例 1：
输入：strings = ["abc","bcd","acef","xyz","az","ba","a","z"]
输出：[["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]

示例 2：
输入：strings = ["a"]
输出：[["a"]]

提示：
1 <= strings.length <= 200
1 <= strings[i].length <= 50
strings[i] 只包含小写英文字母。

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an array of strings, group all strings that are **shift-equivalent**: one string can be obtained from the other by shifting each character by the same amount (wrapping z→a).

**Example:**
["abc","bcd","acef","xyz","az","ba","a","z"] → [["abc","bcd","xyz"],["acef"],["az","ba"],["a"],["z"]] (any order)

**Constraints:**
- 1 <= strings.length <= 200, 1 <= strings[i].length <= 50

## Approach

签名 = 每个字符相对首字符的偏移量 mod 26(拼接为键)。移位不变量:统一移位 k 后差值不变。Map 按签名分组。

时间 O(总字符数),空间 O(n)。
