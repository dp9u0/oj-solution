# [面试题 08.10] 颜色填充

## Description


```md
https://leetcode.cn/problems/color-fill-lcci/description/
* lcci
* Easy (56.37%)
* Likes:    67
* Dislikes: -
* Testcase Example:  '[[1,1,1],[1,1,0],[1,0,1]]\n1\n1\n2'
编写函数，实现许多图片编辑软件都支持的「颜色填充」功能。
待填充的图像用二维数组 image 表示，元素为初始颜色值。初始坐标点的行坐标为 sr 列坐标为 sc。需要填充的新颜色为 newColor 。
「周围区域」是指颜色相同且在上、下、左、右四个方向上存在相连情况的若干元素。
请用新颜色填充初始坐标点的周围区域，并返回填充后的图像。

示例：
输入：
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
输出：[[2,2,2],[2,2,0],[2,0,1]]
解释:
初始坐标点位于图像的正中间，坐标 (sr,sc)=(1,1) 。
初始坐标点周围区域上所有符合条件的像素点的颜色都被更改成 2 。
注意，右下角的像素没有更改为 2 ，因为它不属于初始坐标点的周围区域。

提示：
image 和 image[0] 的长度均在范围 [1, 50] 内。
初始坐标点 (sr,sc) 满足 0 <= sr < image.length 和 0 <= sc < image[0].length 。
image[i][j] 和 newColor 表示的颜色值在范围 [0, 65535] 内。
Hint 1: 把这个看成一个图。
Hint 2: 你可以使用深度优先搜索（或广度优先搜索）。“正确”颜色的每个相邻像素都是一个连接边。

```

## Description (English)

Implement the "color fill" function supported by many image editors. The image is a 2D array of initial color values; the seed pixel is at (sr, sc); fill with newColor. The "surrounding region" consists of pixels of the same color connected up/down/left/right. Fill the region and return the image.

Example:
image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]] (bottom-right stays 1 — not connected)

Notes: image and image[0] lengths in [1, 50]; color values in [0, 65535].

## 思路

Flood fill O(RC)：原图色缓存后显式栈扩散，4 邻接同色染色；`old === newColor` 时先短路，否则同色填充会在已染色格上无限往复。

## Solution

[SourceCode](./solution.js)
