# [面试题 16.19] 水域大小

## Description


```md
https://leetcode.cn/problems/pond-sizes-lcci/description/
* lcci
* Medium (67.89%)
* Likes:    176
* Dislikes: -
* Testcase Example:  '[[0,2,1,0],[0,1,0,1],[1,1,0,1],[0,1,0,1]]'
你有一个用于表示一片土地的整数矩阵land，该矩阵中每个点的值代表对应地点的海拔高度。若值为0则表示水域。由垂直、水平或对角连接的水域为池塘。池塘的大小是指相连接的水域的个数。编写一个方法来计算矩阵中所有池塘的大小，返回值需要从小到大排序。
示例：
输入：
[
[0,2,1,0],
[0,1,0,1],
[1,1,0,1],
[0,1,0,1]
]
输出： [1,2,4]
提示：
0 < len(land) <= 1000
0 < len(land[i]) <= 1000
Hint 1: 如果给你一个指代水的单元格的行和列，你如何找到所有相邻的水域？
Hint 2: 尝试递归计算含水单元格的数目。
Hint 3: 你如何确保不会再次访问相同的单元格？考虑一下图上的广度优先搜索或深度优先搜索是如何工作的。
Hint 4: 你应该有一个算法，其在N×N矩阵上的时间复杂度是O(N2)。如果你的算法并非如此，请考虑是否错误地计算了时间复杂度，或者是否你的算法不是最优的。

```

## Description (English)

You have an integer matrix `land` representing a plot of land where each cell's value is its elevation; 0 means water. Water cells connected vertically, horizontally or diagonally form a pond. The size of a pond is the number of connected water cells. Write a method to compute the sizes of all ponds, sorted from smallest to largest.

Example:
Input: [[0,2,1,0],[0,1,0,1],[1,1,0,1],[0,1,0,1]]
Output: [1,2,4]

Notes: 0 < len(land) <= 1000; 0 < len(land[i]) <= 1000.

## 思路

8 连通洪泛 O(RC)：扫到 0 就用显式队列 BFS/DFS 收缩整片水域计数并就地置 -1 防重访，尺寸收集后升序排序。网格达 1e6 格，必须用显式队列——递归 DFS 会被整片大水域打爆调用栈。

## Solution

[SourceCode](./solution.js)
