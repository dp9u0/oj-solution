# [LCP 71] 集水器

## Description


```md
https://leetcode.cn/problems/kskhHQ/description/
* algorithms
* Hard (56.25%)
* Likes:    9
* Dislikes: -
* Testcase Example:  '["....rl","l.lr.r",".l..r.","..lr.."]'
字符串数组 `shape` 描述了一个二维平面中的矩阵形式的集水器，`shape[i][j]` 表示集水器的第 `i` 行 `j` 列为：
- `'l'`表示向左倾斜的隔板（即从左上到右下）；
- `'r'`表示向右倾斜的隔板（即从左下到右上）；
- `'.'` 表示此位置没有隔板
![image.png](https://pic.leetcode.cn/1664424667-wMnPja-image.png){:width=200px}
已知当隔板构成存储容器可以存水，每个方格代表的蓄水量为 `2`。集水器初始浸泡在水中，除内部密闭空间外，所有位置均被水填满。
现将其从水中竖直向上取出，请返回集水器最终的蓄水量。
**注意：**
- 隔板具有良好的透气性，因此空气可以穿过隔板，但水无法穿过
**示例 1：**
> 输入：
> `shape = ["....rl","l.lr.r",".l..r.","..lr.."]`
>
> 输出：`18`
>
> 解释：如下图所示，由于空气会穿过隔板，因此红框区域没有水
![image.png](https://pic.leetcode.cn/1664436239-eyYxeP-image.png){:width="280px"}
**示例 2：**
> 输入：
> `shape = [".rlrlrlrl","ll..rl..r",".llrrllrr","..lr..lr."]`
> 输出：`18`
>
> 解释：如图所示。由于红框右侧未闭合，因此多余的水会从该处流走。
![image.png](https://pic.leetcode.cn/1664436082-SibVMv-image.png){:width="400px"}
**示例 3：**
> 输入：
> `shape = ["rlrr","llrl","llr."]`
> 输出：`6`
>
> 解释：如图所示。
![image.png](https://pic.leetcode.cn/1664424855-dwpUHO-image.png){:width="230px"}
**示例 4：**
> 输入：
> `shape = ["...rl...","..r..l..",".r.rl.l.","r.r..l.l","l.l..rl.",".l.lr.r.","..l..r..","...lr..."]`
>
> 输出：`30`
>
> 解释：如下图所示。由于中间为内部密闭空间，无法蓄水。
![image.png](https://pic.leetcode.cn/1664424894-mClEXh-image.png){:width="350px"}
**提示**：
- `1 <= shape.length <= 50`
- `1 <= shape[i].length <= 50`
- `shape[i][j]` 仅为 `'l'`、`'r'` 或 `'.'`

```

## English Description

A string array `shape` describes a water collector as a 2D matrix. `shape[i][j]` at row `i`, column `j` is:
- `'l'`: a partition leaning left (i.e., from upper-left to lower-right);
- `'r'`: a partition leaning right (i.e., from lower-left to upper-right);
- `'.'`: no partition at this position.

When the partitions form a storage container, it can hold water, and each cell (square) holds a capacity of `2`. The collector is initially soaked in water: except for the enclosed (sealed) inner spaces, every position is filled with water. It is then lifted vertically out of the water; return the final amount of water the collector holds.

**Note:** The partitions are air-permeable: air can pass through a partition, but water cannot.

**Example 1:**
```
Input: shape = ["....rl","l.lr.r",".l..r.","..lr.."]
Output: 18
```

**Example 2:**
```
Input: shape = [".rlrlrlrl","ll..rl..r",".llrrllrr","..lr..lr."]
Output: 18
```

**Example 3:**
```
Input: shape = ["rlrr","llrl","llr."]
Output: 6
```

**Example 4:**
```
Input: shape = ["...rl...","..r..l..",".r.rl.l.","r.r..l.l","l.l..rl.",".l.lr.r.","..l..r..","...lr..."]
Output: 30
```

**Constraints:**
- 1 <= shape.length <= 50
- 1 <= shape[i].length <= 50
- `shape[i][j]` is only `'l'`, `'r'` or `'.'`

## Solution Approach

Model each cell by its four side-adjacent small triangle regions: **up(0), right(1), down(2), left(3)** (grid is padded with one empty row/column around the border). Adjacent cells share a side, so `right(i,j) <-> left(i,j+1)` and `down(i,j) <-> up(i+1,j)` always merge. Inside a cell the diagonal partition decides connectivity:
- `'.'`: all 4 regions merge (whole cell is one open cavity).
- `'l'` (`\`): merges `{up,right}` and `{down,left}` separately → two triangles (top-right & bottom-left).
- `'r'` (`/`): merges `{up,left}` and `{right,down}` separately → two triangles (top-left & bottom-right).

A virtual **water source** node merges with every outward-facing border region (the outside / air).

**Two DSU passes** (idea from the official editorial):
1. `dsuAll` fully merges everything (each row also connects upward): a region whose root equals the source is reachable from the outside — it will be drained.
2. `dsuRow` merges rows from bottom to top, but for the row being processed it does **not** yet connect upward. For each region of that row, if `dsuAll` says it touches the outside but `dsuRow` says it is not yet connected to the source (sealed from above), the water in it is trapped by the lower water cushion and does **not** drain away → `cnt++`.

Each cell contains 2 regions, so the answer is `cnt / 2`. Complexity O(R·C·α).

## Solution

[SourceCode](./solution.js)
