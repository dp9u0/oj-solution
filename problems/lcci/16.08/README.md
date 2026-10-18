# [面试题 16.08] 整数的英语表示

## Description


```md
https://leetcode.cn/problems/english-int-lcci/description/
* lcci
* Hard (40.50%)
* Likes:    27
* Dislikes: -
* Testcase Example:  '123'
给定一个整数，打印该整数的英文描述。
示例 1：
输入：123
输出："One Hundred Twenty Three"
示例 2：
输入：12345
输出："Twelve Thousand Three Hundred Forty Five"
示例 3：
输入：1234567
输出："One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
示例 4：
输入：1234567891
输出："One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
注意：本题与 273 题相同：https://leetcode.cn/problems/integer-to-english-words/
Hint 1: 试着从三位作为一段的角度思考。
Hint 2: 你考虑过负数吗？你的解决方案是否适用于100 030 000这样的值？
Hint 3: 考虑把一个数字分成由3位数组成的序列。

```

## Description (English)

Given an integer, print its English description.

Example 1: 123 → "One Hundred Twenty Three"
Example 2: 12345 → "Twelve Thousand Three Hundred Forty Five"
Example 3: 1234567 → "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Example 4: 1234567891 → "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

Note: same as LC 273 (integer to English words).

## 思路

按 **3 位一段**拆分（千/百万/十亿），每段内部独立转英文（百位 + 十位/个位特殊表），段尾追加单位词；0 单独输出 Zero，空段（如 100030000 的百万段为 0）跳过。

## Solution

[SourceCode](./solution.js)
