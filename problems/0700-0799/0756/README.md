# [756] Pyramid Transition Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/pyramid-transition-matrix/description/)

* algorithms
* Medium (60.57%)
* Likes:    964
* Dislikes: 552
* Testcase Example:  '"BCD"\n["BCC","CDE","CEA","FFF"]'

```md
You are stacking blocks to form a pyramid. Each block has a color, which is represented by a single letter. Each row of blocks contains one less block than the row beneath it and is centered on top.
To make the pyramid aesthetically pleasing, there are only specific triangular patterns that are allowed. A triangular pattern consists of a single block stacked on top of two blocks. The patterns are givenas a list ofthree-letter strings allowed, where the first two characters of a pattern represent the left and right bottom blocks respectively, and the third character is the top block.

For example, 'ABC' represents a triangular pattern with a &#39;C&#39; block stacked on top of an &#39;A&#39; (left) and &#39;B&#39; (right) block. Note that this is different from 'BAC' where &#39;B&#39; is on the left bottom and &#39;A&#39; is on the right bottom.

You start with a bottom row of blocks bottom, given as a single string, that you must use as the base of the pyramid.
Given bottom and allowed, return true if you can build the pyramid all the way to the top such that every triangular pattern in the pyramid is in allowed, or false otherwise.

Example 1:


Input: bottom = 'BCD', allowed = ['BCC','CDE','CEA','FFF']
Output: true
Explanation: The allowed triangular patterns are shown on the right.
Starting from the bottom (level 3), we can build 'CE' on level 2 and then build 'A' on level 1.
There are three triangular patterns in the pyramid, which are 'BCC', 'CDE', and 'CEA'. All are allowed.

Example 2:


Input: bottom = 'AAAA', allowed = ['AAB','AAC','BCD','BBE','DEF']
Output: false
Explanation: The allowed triangular patterns are shown on the right.
Starting from the bottom (level 4), there are multiple ways to build level 3, but trying all the possibilites, you will get always stuck before building level 1.


Constraints:

2 <= bottom.length <= 6
0 <= allowed.length <= 216
allowed[i].length == 3
The letters in all input strings are from the set {&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;F&#39;}.
All the values of allowed are unique.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定底部一行方块字符串和允许的三角形规则 allowed，每条规则 "XYC" 表示 X(左) 和 Y(右) 上方可放 C。判断能否从底部建金字塔到顶部。

## 解题思路

DFS+回溯。预处理 allowed 构建 (左,右)->可放顶部字符集合的映射。对当前行逐位回溯生成下一行所有可能，递归直到行长为 1。bottom.length ≤ 6，搜索空间可控。
