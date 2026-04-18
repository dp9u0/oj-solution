# [2337] Move Pieces to Obtain a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/move-pieces-to-obtain-a-string/description/)

* algorithms
* Medium (56.68%)
* Likes:    1469
* Dislikes: 86
* Testcase Example:  '"_L__R__R_"\n"L______RR"'

```md
You are given two strings start and target, both of length n. Each string consists only of the characters &#39;L&#39;, &#39;R&#39;, and &#39;_&#39; where:

The characters &#39;L&#39; and &#39;R&#39; represent pieces, where a piece &#39;L&#39; can move to the left only if there is a blank space directly to its left, and a piece &#39;R&#39; can move to the right only if there is a blank space directly to its right.
The character &#39;_&#39; represents a blank space that can be occupied by any of the &#39;L&#39; or &#39;R&#39; pieces.

Return true if it is possible to obtain the string target by moving the pieces of the string start any number of times. Otherwise, return false.

Example 1:

Input: start = '_L__R__R_', target = 'L______RR'
Output: true
Explanation: We can obtain the string target from start by doing the following moves:
- Move the first piece one step to the left, start becomes equal to 'L___R__R_'.
- Move the last piece one step to the right, start becomes equal to 'L___R___R'.
- Move the second piece three steps to the right, start becomes equal to 'L______RR'.
Since it is possible to get the string target from start, we return true.

Example 2:

Input: start = 'R_L_', target = '__LR'
Output: false
Explanation: The &#39;R&#39; piece in the string start can move one step to the right to obtain '_RL_'.
After that, no pieces can move anymore, so it is impossible to obtain the string target from start.

Example 3:

Input: start = '_R', target = 'R_'
Output: false
Explanation: The piece in the string start can move only to the right, so it is impossible to obtain the string target from start.

Constraints:

n == start.length == target.length
1 <= n <= 105
start and target consist of the characters &#39;L&#39;, &#39;R&#39;, and &#39;_&#39;.


```

## 翻译

给定两个等长字符串start和target（含L、R、_）。L只能左移，R只能右移。判断start能否变成target。

## 解题思路

双指针跳过空格，逐个匹配L/R。条件：字符相同；L在target位置<=start位置；R在target位置>=start位置。

## Solution

[SourceCode](./solution.js)
