# [1198] 找出所有行中最小公共元素

## Description


```md
https://leetcode.cn/problems/find-smallest-common-element-in-all-rows/description/
* algorithms
* Medium (74.78%)
* Likes:    44
* Dislikes: -
* Testcase Example:  '[[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]'
给你一个 m x n 的矩阵 mat，其中每一行的元素均符合 严格递增 。请返回 所有行中的 最小公共元素 。
如果矩阵中没有这样的公共元素，就请返回 -1。

示例 1：
输入：mat = [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]
输出：5
示例 2:
输入：mat = [[1,2,3],[2,3,4],[2,3,5]]
输出： 2

提示：
m == mat.length
n == mat[i].length
1 <= m, n <= 500
1 <= mat[i][j] <= 104
mat[i] 已按严格递增顺序排列。
Hint 1: Notice that each row has no duplicates.
Hint 2: Is counting the frequency of elements enough to find the answer?
Hint 3: Use a data structure to count the frequency of elements.
Hint 4: Find an element whose frequency equals the number of rows.

```

## Solution

[SourceCode](./solution.js)

## Translation

m × n matrix, rows strictly increasing. Return the smallest element appearing in every row, else -1.

- Example: [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]] → `5`

## Approach

**计数扫描**。行内严格递增无重复 → 元素在矩阵中的出现次数 = 所在行数。freq[10⁴+1] 统计后从 1 升序找第一个 freq = m 的值即最小公共元素。O(m·n)。
