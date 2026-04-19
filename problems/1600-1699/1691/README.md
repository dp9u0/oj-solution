# [1691] Maximum Height by Stacking Cuboids

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/description/)

* algorithms
* Hard (61.85%)
* Likes:    1271
* Dislikes: 35
* Testcase Example:  '[[50,45,20],[95,37,53],[45,23,12]]'

```md
Given n cuboids where the dimensions of the ith cuboid is cuboids[i] = [widthi, lengthi, heighti] (0-indexed). Choose a subset of cuboids and place them on each other.
You can place cuboid i on cuboid j if widthi <= widthj and lengthi <= lengthj and heighti <= heightj. You can rearrange any cuboid&#39;s dimensions by rotating it to put it on another cuboid.
Return the maximum height of the stacked cuboids.

Example 1:


Input: cuboids = [[50,45,20],[95,37,53],[45,23,12]]
Output: 190
Explanation:
Cuboid 1 is placed on the bottom with the 53x37 side facing down with height 95.
Cuboid 0 is placed next with the 45x20 side facing down with height 50.
Cuboid 2 is placed next with the 23x12 side facing down with height 45.
The total height is 95 + 50 + 45 = 190.

Example 2:

Input: cuboids = [[38,25,45],[76,35,3]]
Output: 76
Explanation:
You can&#39;t place any of the cuboids on the other.
We choose cuboid 1 and rotate it so that the 35x3 side is facing down and its height is 76.

Example 3:

Input: cuboids = [[7,11,17],[7,17,11],[11,7,17],[11,17,7],[17,7,11],[17,11,7]]
Output: 102
Explanation:
After rearranging the cuboids, you can see that all cuboids have the same dimension.
You can place the 11x7 side down on all cuboids so their heights are 17.
The maximum height of stacked cuboids is 6 * 17 = 102.


Constraints:

n == cuboids.length
1 <= n <= 100
1 <= widthi, lengthi, heighti <= 100


```

## 翻译

给定 n 个长方体的三维尺寸，可旋转。选一个子集叠放（上层的宽≤下层宽，长≤下长，高≤下高），求最大总高度。

## 解题思路

每个长方体排序维度（小→大），再按 (w,l,h) 排序所有长方体。然后做类似 LIS 的 DP：dp[i] = 以第 i 个为顶的最大高度，转移检查三个维度均 ≤。O(n^2)。

## Solution

[SourceCode](./solution.js)
