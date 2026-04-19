# [1496] Path Crossing

## Description

[LeetCode Problem Description](https://leetcode.com/problems/path-crossing/description/)

* algorithms
* Easy (62.60%)
* Likes:    1559
* Dislikes: 50
* Testcase Example:  '"NES"'

```md
Given a string path, where path[i] = &#39;N&#39;, &#39;S&#39;, &#39;E&#39; or &#39;W&#39;, each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

Example 1:


Input: path = 'NES'
Output: false
Explanation: Notice that the path doesn&#39;t cross any point more than once.

Example 2:


Input: path = 'NESWW'
Output: true
Explanation: Notice that the path visits the origin twice.

Constraints:

1 <= path.length <= 104
path[i] is either &#39;N&#39;, &#39;S&#39;, &#39;E&#39;, or &#39;W&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定方向字符串 path（NESW），从原点出发，判断路径是否经过之前到过的点。

## 解题思路

用 Set 记录访问过的坐标。每步更新坐标，检查是否重复。O(n)。
