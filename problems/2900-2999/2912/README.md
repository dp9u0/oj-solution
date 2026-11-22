# [2912] 在网格上移动到目的地的方法数

## Description


```md
https://leetcode.cn/problems/number-of-ways-to-reach-destination-in-the-grid/description/
* algorithms
* Hard (25.14%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '3\n2\n2\n[1,1]\n[2,2]'
给定两个整数 n 和 m，它们表示一个 下标从 1 开始 的网格的大小。还给定一个整数 k，以及两个 下标从 1 开始 的整数数组 source 和 dest。这两个数组 source 和 dest 形如 [x, y]，表示网格上的一个单元格。
你可以按照以下方式在网格上移动：
你可以从单元格 [x1, y1] 移动到 [x2, y2]，只要 x1 == x2 或 y1 == y2。
注意，你 不能 移动到当前所在的单元格，即 x1 == x2 且 y1 == y2。
请返回你在网格上从 source 到 dest 移动 k 次一共可以有 多少种 方法。
由于答案可能非常大，因此请对 109 + 7 取模 后返回。

示例 1:
输入： n = 3, m = 2, k = 2, source = [1,1], dest = [2,2]
输出： 2
解释： 有两种可能的方式从 [1,1] 到达 [2,2]：
- [1,1] -> [1,2] -> [2,2]
- [1,1] -> [2,1] -> [2,2]
示例 2:
输入： n = 3, m = 4, k = 3, source = [1,2], dest = [2,3]
输出： 9
解释： 有 9 种可能的方式从 [1,2] 到达 [2,3]：:
- [1,2] -> [1,1] -> [1,3] -> [2,3]
- [1,2] -> [1,1] -> [2,1] -> [2,3]
- [1,2] -> [1,3] -> [3,3] -> [2,3]
- [1,2] -> [1,4] -> [1,3] -> [2,3]
- [1,2] -> [1,4] -> [2,4] -> [2,3]
- [1,2] -> [2,2] -> [2,1] -> [2,3]
- [1,2] -> [2,2] -> [2,4] -> [2,3]
- [1,2] -> [3,2] -> [2,2] -> [2,3]
- [1,2] -> [3,2] -> [3,3] -> [2,3]

提示：
2 <= n, m <= 109
1 <= k <= 105
source.length == dest.length == 2
1 <= source[1], dest[1] <= n
1 <= source[2], dest[2] <= m
Hint 1: We are asked to count the number of sequences of length k + 1 that start from (xs, ys) and end with (xd, yd). i.e., (xs, ys), (x1, y1), ..., (xk - 1, yk - 1), (xd, yd).
Hint 2: The key point is to see x and y separately.
Hint 3: Suppose we do i vertical moves and k - i horizontal moves.
Hint 4: In each vertical move, we change only y. Now let's count the number of sequences of length i + 1 that start with source[2] and end with dest[2]. Let's call this number vertical_count.
Hint 5: Do the same for horizontal moves and let it be horizontal_count.
Hint 6: For each i, the number of ways would be vertical_count * horizontal_count * C(n, i) since the order of vertical and horizontal moves could be arbitrary.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): n x m grid (n, m up to 1e9), k moves (k up to 1e5). Each move: jump along the current row or column to any different cell. Count walks from source to dest of exactly k moves, mod 1e9+7.

Approach: decompose by coordinate. Row-moves only change x, column-moves only change y. For each coordinate, count sequences of length r where consecutive values differ, from s to d — 3-state DP (at s / at d / elsewhere; 2 states if s == d): arrive-at-s = from elsewhere + from d; arrive-at-d = from s + from elsewhere; elsewhere = (size-2)*(at s) + (size-2)*(at d) + (size-3)*elsewhere. Then answer = sum over i column-moves: yCount(i) * xCount(k-i) * C(k, i). All arithmetic in BigInt (multipliers up to 1e9 meet counts up to 1e9+7, product ~1e18 > 2^53).

Verified: example 1 -> 2, example 2 -> 9.
