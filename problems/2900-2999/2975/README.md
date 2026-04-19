# [2975] Maximum Square Area by Removing Fences From a Field

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/description/)

* algorithms
* Medium (49.44%)
* Likes:    454
* Dislikes: 162
* Testcase Example:  '4\n3\n[2,3]\n[2]'

```md
There is a large (m - 1) x (n - 1) rectangular field with corners at (1, 1) and (m, n) containing some horizontal and vertical fences given in arrays hFences and vFences respectively.
Horizontal fences are from the coordinates (hFences[i], 1) to (hFences[i], n) and vertical fences are from the coordinates (1, vFences[i]) to (m, vFences[i]).
Return the maximum area of a square field that can be formed by removing some fences (possibly none) or -1 if it is impossible to make a square field.
Since the answer may be large, return it modulo 109 + 7.
Note: The field is surrounded by two horizontal fences from the coordinates (1, 1) to (1, n) and (m, 1) to (m, n) and two vertical fences from the coordinates (1, 1) to (m, 1) and (1, n) to (m, n). These fences cannot be removed.

Example 1:


Input: m = 4, n = 3, hFences = [2,3], vFences = [2]
Output: 4
Explanation: Removing the horizontal fence at 2 and the vertical fence at 2 will give a square field of area 4.

Example 2:


Input: m = 6, n = 7, hFences = [2], vFences = [4]
Output: -1
Explanation: It can be proved that there is no way to create a square field by removing fences.


Constraints:

3 <= m, n <= 109
1 <= hFences.length, vFences.length <= 600
1 < hFences[i] < m
1 < vFences[i] < n
hFences and vFences are unique.


```

## Solution

[SourceCode](./solution.js)

## 翻译

给定一个 (m-1) x (n-1) 的矩形田地，四角坐标为 (1,1) 和 (m,n)，田地中有水平和垂直的栅栏。通过移除一些栅栏（可以不移除），找到能形成的最大正方形面积，或返回 -1。

## 解题思路

**集合求交集**

1. 将水平栅栏加上边界 {1, m}，计算所有相邻栅栏间距，存入 Set
2. 将垂直栅栏加上边界 {1, n}，计算所有相邻栅栏间距
3. 找水平间距和垂直间距的最大交集，即为正方形边长
4. 面积可能超出 Number 精度，用 BigInt 计算模运算
5. 时间复杂度 O(h^2 + v^2)，空间复杂度 O(h^2)
