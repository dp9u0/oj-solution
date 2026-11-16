# [3491] 电话号码前缀

## Description


```md
https://leetcode.cn/problems/phone-number-prefix/description/
* algorithms
* Easy (79.48%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '["1","2","4","3"]'
给定一个字符串数组 numbers 表示电话号码。如果没有电话号码是任何其他电话号码的前缀，则返回 true；否则，返回 false。

示例 1：
输入：numbers = ["1","2","4","3"]
输出：true
解释：
没有数字是其它数字的前缀，所以输出为 true。
示例 2：
输入：numbers = ["001","007","15","00153"]
输出：false
解释：
字符串 "001" 是字符串 "00153" 的前缀。因此，输出是 false。

提示：
2 <= numbers.length <= 50
1 <= numbers[i].length <= 50
所有数字只包含 '0' 到 '9' 的数位。
Hint 1: Sort the array.
Hint 2: For every adjacent pair, check if the left number is a prefix of the right number.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given a string array `numbers` representing phone numbers. Return `true` if no phone number is a prefix of any other phone number; otherwise, return `false`.

**Example 1:**
Input: numbers = ["1","2","4","3"]
Output: true

**Example 2:**
Input: numbers = ["001","007","15","00153"]
Output: false ("001" is a prefix of "00153")

**Constraints:**
- 2 <= numbers.length <= 50
- 1 <= numbers[i].length <= 50
- All numbers consist of digits '0'-'9'.

## Approach

字典序排序后只需检查相邻对:若 a 是 b 的前缀,则排序后位于 a、b 之间的串必然都以 a 为前缀,因此相邻检查不会漏。

时间 O(n log n × L),空间 O(n)。
