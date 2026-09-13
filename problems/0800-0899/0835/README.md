# [835] 图像重叠

## Description


```md
https://leetcode.cn/problems/image-overlap/description/
* algorithms
* Medium (63.84%)
* Likes:    124
* Dislikes: -
* Testcase Example:  '[[1,1,0],[0,1,0],[0,1,0]]\n[[0,0,0],[0,1,1],[0,0,1]]'
给你两个图像 img1 和 img2 ，两个图像的大小都是 n x n ，用大小相同的二进制正方形矩阵表示。二进制矩阵仅由若干 0 和若干 1 组成。
转换 其中一个图像，将所有的 1 向左，右，上，或下滑动任何数量的单位；然后把它放在另一个图像的上面。该转换的 重叠 是指两个图像 都 具有 1 的位置的数目。
请注意，转换 不包括 向任何方向旋转。越过矩阵边界的 1 都将被清除。
最大可能的重叠数量是多少？

示例 1：
输入：img1 = [[1,1,0],[0,1,0],[0,1,0]], img2 = [[0,0,0],[0,1,1],[0,0,1]]
输出：3
解释：将 img1 向右移动 1 个单位，再向下移动 1 个单位。
两个图像都具有 1 的位置的数目是 3（用红色标识）。
示例 2：
输入：img1 = [[1]], img2 = [[1]]
输出：1
示例 3：
输入：img1 = [[0]], img2 = [[0]]
输出：0

提示：
n == img1.length == img1[i].length
n == img2.length == img2[i].length
1 <= n <= 30
img1[i][j] 为 0 或 1
img2[i][j] 为 0 或 1

```

## Solution

[SourceCode](./solution.js)

## English Translation

You are given two images, `img1` and `img2`, both of size `n x n`, represented as binary square matrices (containing only 0s and 1s).

Translate one of the images by sliding all of its 1s left, right, up, or down by any number of units, then place it over the other image. The overlap of a translation is the number of positions where both images have a 1.

Note: rotations are not allowed. Any 1s shifted outside the matrix boundary are cleared.

Return the largest possible overlap.

Example 1: img1 = [[1,1,0],[0,1,0],[0,1,0]], img2 = [[0,0,0],[0,1,1],[0,0,1]] → Output: 3 (shift img1 right by 1 and down by 1).

Example 2: img1 = [[1]], img2 = [[1]] → Output: 1

Example 3: img1 = [[0]], img2 = [[0]] → Output: 0

## Approach

Shift-vector counting:

- A translation is fully described by a shift vector `(dr, dc)`.
- For every 1 at `(r1, c1)` in `img1` and every 1 at `(r2, c2)` in `img2`, the shift `(r2-r1, c2-c1)` brings that pair of 1s into overlap. Count occurrences of each shift vector in a hash map.
- The answer is the maximum count over all shift vectors.

Complexity: O(n^4) time (at most 30^4 = 810k pairs), O(n^2) space. Encode the shift vector as `(r2-r1)*100 + (c2-c1)` since offsets lie in [-29, 29], so no collisions.
