# [531] 孤独像素 I

## Description


```md
https://leetcode.cn/problems/lonely-pixel-i/description/
* algorithms
* Medium (64.83%)
* Likes:    63
* Dislikes: -
* Testcase Example:  '[["W","W","B"],["W","B","W"],["B","W","W"]]'
给你一个大小为 m x n 的图像 picture ，图像由黑白像素组成，'B' 表示黑色像素，'W' 表示白色像素，请你统计并返回图像中 黑色 孤独像素的数量。
黑色孤独像素 的定义为：如果黑色像素 'B' 所在的同一行和同一列不存在其他黑色像素，那么这个黑色像素就是黑色孤独像素。

示例 1：
输入：picture = [["W","W","B"],["W","B","W"],["B","W","W"]]
输出：3
解释：全部三个 'B' 都是黑色的孤独像素
示例 2：
输入：picture = [["B","B","B"],["B","B","W"],["B","B","B"]]
输出：0

提示：
m == picture.length
n == picture[i].length
1 <= m, n <= 500
picture[i][j] 为 'W' 或 'B'

```

## Solution

[SourceCode](./solution.js)

## Translation

Count "lonely" black pixels: a 'B' is lonely iff its row and column contain no other 'B'.

- Example 1: [["W","W","B"],["W","B","W"],["B","W","W"]] → `3` (diagonal)
- Example 2: [["B","B","B"],["B","B","W"],["B","B","B"]] → `0`

Constraints: up to 500×500.

## Approach

两次线性扫描:先统计每行/列的 'B' 个数 rows[]、cols[],再统计满足 `rows[i] == 1 && cols[j] == 1` 的 'B'。O(mn) 时间,O(m+n) 空间。
