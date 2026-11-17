# [161] 相隔为 1 的编辑距离

## Description


```md
https://leetcode.cn/problems/one-edit-distance/description/
* algorithms
* Medium (34.77%)
* Likes:    164
* Dislikes: -
* Testcase Example:  '"ab"\n"acb"'
给定两个字符串 s 和 t ，如果它们的编辑距离为 1 ，则返回 true ，否则返回 false 。
字符串 s 和字符串 t 之间满足编辑距离等于 1 有三种可能的情形：
往 s 中插入 恰好一个 字符得到 t
从 s 中删除 恰好一个 字符得到 t
在 s 中用 一个不同的字符 替换 恰好一个 字符得到 t

示例 1：
输入: s = "ab", t = "acb"
输出: true
解释: 可以将 'c' 插入字符串 s 来得到 t。
示例 2:
输入: s = "cab", t = "ad"
输出: false
解释: 无法通过 1 步操作使 s 变为 t。

提示:
0 <= s.length, t.length <= 104
s 和 t 由小写字母，大写字母和数字组成

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given two strings `s` and `t`, return `true` if they are both one edit distance apart (exactly one insert/delete/replace — identical strings return false).

**Example:**
s = "ab", t = "acb" → true (insert 'c')

## Approach

令 s 为较短者,长度差 > 1 直接 false。扫描到首个失配:等长则比较失配后的后缀(替换);差一则 s 从失配位起与 t 从失配位 +1 起比较(插入)。全程无失配时,仅当 t 恰好多一个字符才为 true。

时间 O(n),空间 O(n)(切片;可改双指针 O(1))。
