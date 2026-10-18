# [面试题 01.01] 判定字符是否唯一

## Description


```md
https://leetcode.cn/problems/is-unique-lcci/description/
* lcci
* Easy (71.42%)
* Likes:    373
* Dislikes: -
* Testcase Example:  '"leetcode"'
实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
示例 1：
输入: s = "leetcode"
输出: false
示例 2：
输入: s = "abc"
输出: true
限制：
0 <= len(s) <= 100
s[i]仅包含小写字母
如果你不使用额外的数据结构，会很加分。
Hint 1: 试试散列表
Hint 2: 位向量有用吗？
Hint 3: 你能用O(NlogN)的时间复杂度解决它吗？这样的解法会是什么样呢？

```

## Description (English)

Implement an algorithm to determine whether all characters in a string s are unique.

Example 1: s = "leetcode" → false
Example 2: s = "abc" → true

Constraints: 0 <= len(s) <= 100; s[i] are lowercase letters only. Bonus for no extra data structures.

## 思路

26 位位向量 O(n)/O(1)（本题保证纯小写字母，位向量安全——区别于 01.04 的任意字符集）：逐字符检查比特位是否已置，重复即提前返回；长度 > 26 由鸽笼原理直接否决。

## Solution

[SourceCode](./solution.js)
