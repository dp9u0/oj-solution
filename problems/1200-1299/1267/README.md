# [1267] 统计参与通信的服务器

## Description


```md
https://leetcode.cn/problems/count-servers-that-communicate/description/
* algorithms
* Medium (69.78%)
* Likes:    139
* Dislikes: -
* Testcase Example:  '[[1,0],[0,1]]'
这里有一幅服务器分布图，服务器的位置标识在 m * n 的整数矩阵网格 grid 中，1 表示单元格上有服务器，0 表示没有。
如果两台服务器位于同一行或者同一列，我们就认为它们之间可以进行通信。
请你统计并返回能够与至少一台其他服务器进行通信的服务器的数量。

示例 1：
输入：grid = [[1,0],[0,1]]
输出：0
解释：没有一台服务器能与其他服务器进行通信。
示例 2：
输入：grid = [[1,0],[1,1]]
输出：3
解释：所有这些服务器都至少可以与一台别的服务器进行通信。
示例 3：
输入：grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
输出：4
解释：第一行的两台服务器互相通信，第三列的两台服务器互相通信，但右下角的服务器无法与其他服务器通信。

提示：
m == grid.length
n == grid[i].length
1 <= m <= 250
1 <= n <= 250
grid[i][j] == 0 or 1
Hint 1: Store number of computer in each row and column.
Hint 2: Count all servers that are not isolated.

```

## Description (English)

```md
You are given a map of a server center, represented as a m * n integer matrix grid, where 1 means that on the cell with the value 1 there is a server and 0 means no server. Two servers are said to communicate if they are on the same row or on the same column.

Return the number of servers that communicate with any other server.

Example 1:
Input: grid = [[1,0],[0,1]]
Output: 0
Explanation: There are no servers that can communicate with any other server.

Example 2:
Input: grid = [[1,0],[1,1]]
Output: 3
Explanation: All three servers can communicate with at least one other server.

Example 3:
Input: grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
Output: 4
Explanation: The two servers in the first row can communicate with each other. The two servers in the third column can communicate with each other. The server at the bottom right corner can't communicate with any other server.

Constraints:
m == grid.length
n == grid[i].length
1 <= m <= 250
1 <= n <= 250
grid[i][j] is 0 or 1
```

## 思路

统计通信服务器的数量：一台服务器 `(i, j)` 能通信，当且仅当它所在的第 `i` 行中服务器数量 `> 1`，或所在的第 `j` 列中服务器数量 `> 1`。

1. 一次遍历网格，统计每行的服务器数 `rowCount[m]` 和每列的服务器数 `colCount[n]`。
2. 再次遍历网格，对每个 `grid[i][j] === 1` 的位置，若 `rowCount[i] > 1 || colCount[j] > 1` 则计数 +1。

时间复杂度 O(m·n)，空间复杂度 O(m + n)。相比并查集做法（O(m·n·α)），这是该题的最优解法。
