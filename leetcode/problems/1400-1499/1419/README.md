# [1419] Minimum Number of Frogs Croaking

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-frogs-croaking/description/)

* algorithms
* Medium (51.13%)
* Likes:    1125
* Dislikes: 95
* Testcase Example:  '"croakcroak"'

```md
You are given the string croakOfFrogs, which represents a combination of the string 'croak' from different frogs, that is, multiple frogs can croak at the same time, so multiple 'croak' are mixed.
Return the minimum number of different frogs to finish all the croaks in the given string.
A valid 'croak' means a frog is printing five letters &#39;c&#39;, &#39;r&#39;, &#39;o&#39;, &#39;a&#39;, and &#39;k&#39; sequentially. The frogs have to print all five letters to finish a croak. If the given string is not a combination of a valid 'croak' return -1.

Example 1:

Input: croakOfFrogs = 'croakcroak'
Output: 1
Explanation: One frog yelling 'croak' twice.

Example 2:

Input: croakOfFrogs = 'crcoakroak'
Output: 2
Explanation: The minimum number of frogs is two.
The first frog could yell 'crcoakroak'.
The second frog could yell later 'crcoakroak'.

Example 3:

Input: croakOfFrogs = 'croakcrook'
Output: -1
Explanation: The given string is an invalid combination of 'croak' from different frogs.


Constraints:

1 <= croakOfFrogs.length <= 105
croakOfFrogs is either &#39;c&#39;, &#39;r&#39;, &#39;o&#39;, &#39;a&#39;, or &#39;k&#39;.


```

## 翻译

给定混合蛙鸣字符串，每只蛙依次发出"croak"，求最少需要几只蛙。无效返回-1。

## 解题思路

维护5个计数器对应c/r/o/a/k各阶段。遇c递增活跃蛙数，遇k递减。最大活跃数即答案。任一阶段计数为负则无效。

## Solution

[SourceCode](./solution.js)
