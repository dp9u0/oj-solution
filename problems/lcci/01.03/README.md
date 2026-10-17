# [面试题 01.03] URL化

## Description


```md
https://leetcode.cn/problems/string-to-url-lcci/description/
* lcci
* Easy (58.08%)
* Likes:    131
* Dislikes: -
* Testcase Example:  '"Mr John Smith    "\n13'
URL化。编写一种方法，将字符串中的空格全部替换为 。假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的“真实”长度。（注：用Java实现的话，请使用字符数组实现，以便直接在数组上操作。）

示例 1：
输入："Mr John Smith    ", 13
输出："Mr John Smith"
示例 2：
输入："               ", 5
输出："     "

提示：
字符串长度在 [0, 500000] 范围内。
Hint 1: 从尾到头开始修改字符串通常最容易。
Hint 2: 你可能需要知道空格的数量。你能数一下吗？

```

## Description (English)

URLify. Write a method to replace all spaces in a string with `%20`. The string has sufficient trailing space for the extra characters, and the "true" length is given. (In Java you would operate on a char array in-place.)

Example 1:
Input: "Mr John Smith    ", 13
Output: "Mr%20John%20Smith"

Example 2:
Input: "               ", 5
Output: "%20%20%20%20%20"

Note: string length in [0, 500000].

(Note: the `%20` literals were stripped from the fetched Chinese description; semantics per the original problem.)

## 思路

只处理前 `length` 个字符，逐字符拼接、空格替换为 `%20`，尾部缓冲区忽略。JS 字符串不可变，V8 的 rope 拼接对 5e5 长度足够；也可数组收集后 join。

## Solution

[SourceCode](./solution.js)
