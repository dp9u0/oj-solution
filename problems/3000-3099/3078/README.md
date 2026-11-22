# [3078] 矩阵中的字母数字模式匹配 I

## Description


```md
https://leetcode.cn/problems/match-alphanumerical-pattern-in-matrix-i/description/
* algorithms
* Medium (20.14%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '[[1,2,2],[2,2,3],[2,3,3]]\n["ab","bb"]'
给定一个二维整数矩阵 board 和一个二维字符矩阵 pattern。其中 0 <= board[r][c] <= 9 并且 pattern 的每个元素是一个数字或一个小写英文字母。
你的任务是找到 匹配 board 的子矩阵 pattern。
如果我们能用一些数字（每个 不同 的字母对应 不同 的数字）替换 pattern 中包含的字母使得结果矩阵与整数矩阵 part 相同，我们称整数矩阵 part 与 pattern 匹配。换句话说，
这两个矩阵具有相同的维数。
如果 pattern[r][c] 是一个数字，那么 part[r][c] 必须是 相同的 数字。
如果 pattern[r][c] 是一个字母 x：

对于每个 pattern[i][j] == x，part[i][j] 一定与 part[r][c] 相同。
对于每个 pattern[i][j] != x，part[i][j] 一定与 part[r][c] 不同。


返回一个长度为 2 的数组，包含匹配 pattern 的 board 的子矩阵左上角的行号和列号。如果有多个这样的子矩阵，返回行号更小的子矩阵。如果依然有多个，则返回列号更小的子矩阵。如果没有符合的答案，返回 [-1, -1]。

示例 1：


1
2
2


2
2
3


2
3
3




a
b


b
b


输入：board = [[1,2,2],[2,2,3],[2,3,3]], pattern = ["ab","bb"]
输出：[0,0]
解释：如果我们考虑这个映射："a" -> 1 并且 "b" -> 2；左上角为 (0,0) 的子矩阵与上面的矩阵中加粗的相匹配。
注意左上角为 (1,1) 的子矩阵同样匹配，但它在另一个之后出现，所以我们返回 [0,0]。
示例 2：


1
1
2


3
3
4


6
6
6




a
b


6
6


输入：board = [[1,1,2],[3,3,4],[6,6,6]], pattern = ["ab","66"]
输出：[1,1]
解释：如果我们考虑这个映射："a" -> 3 并且 "b" -> 4；左上角为 (1,1) 的子矩阵与上面的矩阵中加粗的匹配。
注意 "a" 和 "b" 对应的值必须不同，左上角为 (1,0) 的子矩阵不匹配。因此，我们返回 [1,1]。
示例 3：


1
2


2
1




x
x


输入：board = [[1,2],[2,1]], pattern = ["xx"]
输出：[-1,-1]
解释： 由于匹配子矩阵的值必须相同，因此不存在匹配。因此，我们返回 [-1,-1]。

提示：
1 <= board.length <= 50
1 <= board[i].length <= 50
0 <= board[i][j] <= 9
1 <= pattern.length <= 50
1 <= pattern[i].length <= 50
pattern[i][j] 表示为一个数字的字符串或一个小写英文字母。
Hint 1: Use brute force and check all the possible submatrices.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Find the top-left (row-major, then column) of a submatrix of board matching pattern: digit cells must equal the board value exactly; each letter maps injectively to distinct board values (same letter -> same value, different letters -> different values). Return [-1,-1] if none. Sizes <= 50.

Approach: brute force every top-left, early-exit mismatch. Per check: letter -> value map plus a used-values set enforcing injectivity. O(RC rc) worst ~6e6 checks.

Verified: [[1,2,2],[2,2,3],[2,3,3]]/"ab","bb" -> [0,0]; [[1,1,2],[3,3,4],[6,6,6]]/"ab","66" -> [1,1]; [[1,2],[2,1]]/"xx" -> [-1,-1].
