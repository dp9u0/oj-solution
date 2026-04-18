# [3692] Majority Frequency Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/majority-frequency-characters/description/)

* algorithms
* Easy (67.08%)
* Likes:    55
* Dislikes: 15
* Testcase Example:  '"aaabbbccdddde"'

```md
You are given a string s consisting of lowercase English letters.
The frequency group for a value k is the set of characters that appear exactly k times in s.
The majority frequency group is the frequency group that contains the largest number of distinct characters.
Return a string containing all characters in the majority frequency group, in any order. If two or more frequency groups tie for that largest size, pick the group whose frequency k is larger.

Example 1:

Input: s = 'aaabbbccdddde'
Output: 'ab'
Explanation:



Frequency (k)
Distinct characters in group
Group size
Majority?




4
{d}
1
No


3
{a, b}
2
Yes


2
{c}
1
No


1
{e}
1
No



Both characters &#39;a&#39; and &#39;b&#39; share the same frequency 3, they are in the majority frequency group. 'ba' is also a valid answer.

Example 2:

Input: s = 'abcd'
Output: 'abcd'
Explanation:



Frequency (k)
Distinct characters in group
Group size
Majority?




1
{a, b, c, d}
4
Yes



All characters share the same frequency 1, they are all in the majority frequency group.

Example 3:

Input: s = 'pfpfgi'
Output: 'fp'
Explanation:



Frequency (k)
Distinct characters in group
Group size
Majority?




2
{p, f}
2
Yes


1
{g, i}
2
No (tied size, lower frequency)



Both characters &#39;p&#39; and &#39;f&#39; share the same frequency 2, they are in the majority frequency group. There is a tie in group size with frequency 1, but we pick the higher frequency: 2.


Constraints:

1 <= s.length <= 100
s consists only of lowercase English letters.


```

## 翻译

统计每个字符出现次数，按频率分组。找包含最多不同字符的频率组（平局取频率更大的），返回该组所有字符。

## 解题思路

计数→按频率分组→找组大小最大的频率（平局取较大频率）→收集该频率的所有字符。

## Solution

[SourceCode](./solution.js)
