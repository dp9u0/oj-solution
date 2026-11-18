# [533] 孤独像素 II

## Description


```md
https://leetcode.cn/problems/lonely-pixel-ii/description/
* algorithms
* Medium (51.40%)
* Likes:    31
* Dislikes: -
* Testcase Example:  '[["W","B","W","B","B","W"],["W","B","W","B","B","W"],["W","B","W","B","B","W"],["W","W","B","W","B","W"]]\n' +
'3'
给你一个大小为 m x n 的二维字符数组 picture ，表示一张黑白图像，数组中的 'B' 表示黑色像素，'W' 表示白色像素。另给你一个整数 target ，请你找出并返回符合规则的 黑色 孤独像素的数量。
黑色孤独像素是指位于某一特定位置 (r, c) 的字符 'B' ，其中：
行 r 和列 c 中的黑色像素恰好有 target 个。
列 c 中所有黑色像素所在的行必须和行 r 完全相同。

示例 1：
输入：picture = [["W","B","W","B","B","W"],["W","B","W","B","B","W"],["W","B","W","B","B","W"],["W","W","B","W","B","W"]], target = 3
输出：6
解释：所有绿色的 'B' 都是我们所求的像素(第 1 列和第 3 列的所有 'B' )
以行 r = 0 和列 c = 1 的 'B' 为例：
- 规则 1 ，行 r = 0 和列 c = 1 都恰好有 target = 3 个黑色像素
- 规则 2 ，列 c = 1 的黑色像素分别位于行 0，行 1 和行 2。和行 r = 0 完全相同。
示例 2：
输入：picture = [["W","W","B"],["W","W","B"],["W","W","B"]], target = 1
输出：0

提示：
m == picture.length
n == picture[i].length
1 <= m, n <= 200
picture[i][j] 为 'W' 或 'B'
1 <= target <= min(m, n)

```

## Solution

[SourceCode](./solution.js)

## Translation

Count 'B' cells (r, c) where: row r and column c each contain exactly `target` black pixels, AND every row containing a black pixel in column c is identical to row r.

- Example 1: 4×6 picture, target 3 → `6`
- Example 2: [["W","W","B"]×3], target 1 → `0`

Constraints: up to 200×200.

## Approach

**行签名 + 计数**。把每行 join 成字符串作签名,统计 sigCount;同时算 rows[]、cols[] 的黑像素数。'B'(r,c) 合法 ⟺ `rows[r] == target && cols[c] == target && sigCount[sig(r)] == target`:

- 与行 r 同签名的行有 target 个,它们内容相同 → 都在列 c 有 'B' → 列 c 至少 target 个 'B';
- 又 cols[c] == target → 列 c 的全部黑像素都来自这些行,满足规则 2。

一次扫描建计数,二次扫描统计,时间 O(mn)。
