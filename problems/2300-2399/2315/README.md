# [2315] Count Asterisks

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-asterisks/description/)

* algorithms
* Easy (83.31%)
* Likes:    683
* Dislikes: 118
* Testcase Example:  '"l
*e*et

```md
c**o
*de
"'
You are given a string s, where every two consecutive vertical bars &#39;
&#39; are grouped into a pair. In other words, the 1st and 2nd &#39;
&#39; make a pair, the 3rd and 4th &#39;
&#39; make a pair, and so forth.
Return the number of &#39;*&#39; in s, excluding the &#39;*&#39; between each pair of &#39;
&#39;.
Note that each &#39;
&#39; will belong to exactly one pair.

Example 1:

Input: s = 'l
*e*et
c**o
*de
'
Output: 2
Explanation: The considered characters are underlined: 'l
*e*et
c**o
*de
'.
The characters between the first and second &#39;
&#39; are excluded from the answer.
Also, the characters between the third and fourth &#39;
&#39; are excluded from the answer.
There are 2 asterisks considered. Therefore, we return 2.
Example 2:

Input: s = 'iamprogrammer'
Output: 0
Explanation: In this example, there are no asterisks in s. Therefore, we return 0.

Example 3:

Input: s = 'yo
uar
e**
b
e***au
tifu
l'
Output: 5
Explanation: The considered characters are underlined: 'yo
uar
e**
b
e***au
tifu
l'. There are 5 asterisks considered. Therefore, we return 5.

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters, vertical bars &#39;
&#39;, and asterisks &#39;*&#39;.
s contains an even number of vertical bars &#39;
&#39;.


```

## 题目翻译

给定字符串s，每两个连续的竖线`|`配成一对。返回不在配对竖线之间的`*`的数量。

## 解题思路

遍历字符串，用一个布尔值标记当前是否在竖线对内部。遇到`|`时翻转标记，遇到`*`时如果不在内部则计数。

## Solution

[SourceCode](./solution.js)
