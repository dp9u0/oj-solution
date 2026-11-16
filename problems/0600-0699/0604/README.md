# [604] 迭代压缩字符串

## Description


```md
https://leetcode.cn/problems/design-compressed-string-iterator/description/
* algorithms
* Easy (38.66%)
* Likes:    67
* Dislikes: -
* Testcase Example:  '["StringIterator","next","next","next","next","next","next","hasNext","next","hasNext"]\n' +
'[["L1e2t1C1o1d1e1"],[],[],[],[],[],[],[],[],[]]'
设计并实现一个迭代压缩字符串的数据结构。给定的压缩字符串的形式是，每个字母后面紧跟一个正整数，表示该字母在原始未压缩字符串中出现的次数。
设计一个数据结构，它支持如下两种操作： next 和 hasNext。
next() - 如果原始字符串中仍有未压缩字符，则返回下一个字符，否则返回空格。
hasNext() - 如果原始字符串中存在未压缩的的字母，则返回true，否则返回false。

示例 1：
输入：
["StringIterator", "next", "next", "next", "next", "next", "next", "hasNext", "next", "hasNext"]
[["L1e2t1C1o1d1e1"], [], [], [], [], [], [], [], [], []]
输出：
[null, "L", "e", "e", "t", "C", "o", true, "d", true]
解释：
StringIterator stringIterator = new StringIterator("L1e2t1C1o1d1e1");
stringIterator.next(); // 返回 "L"
stringIterator.next(); // 返回 "e"
stringIterator.next(); // 返回 "e"
stringIterator.next(); // 返回 "t"
stringIterator.next(); // 返回 "C"
stringIterator.next(); // 返回 "o"
stringIterator.hasNext(); // 返回 True
stringIterator.next(); // 返回 "d"
stringIterator.hasNext(); // 返回 True

提示：
1 <= compressedString.length <= 1000
compressedString 由小写字母、大写字母和数字组成。
在 compressedString 中，单个字符的重复次数在 [1,10 ^9] 范围内。
next 和 hasNext 的操作数最多为 100 。

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Design `StringIterator` over a compressed string of "letter + count" groups. `next()` returns the next uncompressed character or a space if exhausted; `hasNext()` reports whether any character remains.

**Constraints:**
- 1 <= compressedString.length <= 1000, counts up to 10^9
- at most 100 calls to next/hasNext

## Approach

惰性解析:维护原始串指针、当前字母与剩余计数;计数耗尽时才解析下一组(数字可能多位,计数用数值累加)。

时间:构造 O(1),每次操作均摊 O(1)(总解析量 O(n));空间 O(1)。
