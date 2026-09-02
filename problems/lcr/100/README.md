# [LCR 100] 三角形最小路径和

## Description


```md
https://leetcode.cn/problems/IlPe0q/description/
* algorithms
* Medium (73.23%)
* Likes:    53
* Dislikes: -
* Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
给定一个三角形 triangle ，找出自顶向下的最小路径和。
每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

示例 1：
输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
2
3 4
6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
示例 2：
输入：triangle = [[-10]]
输出：-10

提示：
1 <= triangle.length <= 200
triangle[0].length == 1
triangle[i].length == triangle[i - 1].length + 1
-104 <= triangle[i][j] <= 104

进阶：
你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题吗？

注意：本题与主站 120 题相同： https://leetcode.cn/problems/triangle/

```

## Solution

[SourceCode](./solution.js)

---

## English Description

Given a `triangle` array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index `i` on the current row, you may move to either index `i` or index `i + 1` on the next row.

**Example 1:**
```
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11.
```

**Example 2:**
```
Input: triangle = [[-10]]
Output: -10
```

**Constraints:**
- `1 <= triangle.length <= 200`
- `triangle[0].length == 1`
- `triangle[i].length == triangle[i - 1].length + 1`
- `-10^4 <= triangle[i][j] <= 10^4`

**Follow up:** Could you do this using only `O(n)` extra space, where `n` is the total number of rows in the triangle?

## Approach

Bottom-up dynamic programming with in-place modification:

1. Start from the second-last row and iterate upwards to the top.
2. For each cell `triangle[i][j]`, it can be reached from the two cells below it; accumulate the smaller one: `triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1])`.
3. Because the row below has already been fully processed before we touch the current row, the bottom-up order guarantees each accumulation uses finalized sub-problem answers.
4. After processing all rows, `triangle[0][0]` holds the minimum total path sum from top to bottom.

- **Time:** O(n²), each of the ~n(n+1)/2 cells is visited once.
- **Space:** O(1), modifies the input in place with no extra arrays.
