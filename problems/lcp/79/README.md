# [LCP 79] 提取咒文

## Description


```md
https://leetcode.cn/problems/kjpLFZ/description/
* algorithms
* Medium (31.13%)
* Likes:    8
* Dislikes: -
* Testcase Example:  '["sd","ep"]\n"speed"'
随着兽群逐渐远去，一座大升降机缓缓的从地下升到了远征队面前。借由这台升降机，他们将能够到达地底的永恒至森。
在升降机的操作台上，是一个由魔法符号组成的矩阵，为了便于辨识，我们用小写字母来表示。 `matrix[i][j]` 表示矩阵第 `i` 行 `j` 列的字母。该矩阵上有一个提取装置，可以对所在位置的字母提取。
提取装置初始位于矩阵的左上角 `[0,0]`，可以通过每次操作移动到上、下、左、右相邻的 1 格位置中。提取装置每次移动或每次提取均记为一次操作。
远征队需要按照顺序，从矩阵中逐一取出字母以组成 `mantra`，才能够成功的启动升降机。请返回他们 **最少** 需要消耗的操作次数。如果无法完成提取，返回 `-1`。
**注意：**
- 提取装置可对同一位置的字母重复提取，每次提取一个
- 提取字母时，需按词语顺序依次提取
**示例 1：**
>输入：`matrix = ["sd","ep"], mantra = "speed"`
>
>输出：`10`
>
>解释：如下图所示
![矩阵 (2).gif](https://pic.leetcode.cn/1646288670-OTlvAl-矩阵 \(2\).gif)
**示例 2：**
>输入：`matrix = ["abc","daf","geg"]， mantra = "sad"`
>
>输出：`-1`
>
>解释：矩阵中不存在 `s` ，无法提取词语
**提示：**
- `0 < matrix.length, matrix[i].length <= 100`
- `0 < mantra.length <= 100`
- `matrix 和 mantra` 仅由小写字母组成

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

As the beasts recede, a great elevator slowly rises from underground before the expedition. With it they can reach the eternal forest below ground. On the elevator's console is a matrix of magic symbols, represented by lowercase letters. `matrix[i][j]` is the letter at row i, column j. An extractor sits on the matrix and can extract the letter at its current position.

The extractor starts at the top-left `[0,0]` and can move one cell up/down/left/right per operation. Each **move** OR each **extraction** counts as one operation.

The expedition must extract letters in order to spell `mantra`. Return the **minimum** number of operations. If impossible, return `-1`.

**Note:** A letter can be extracted repeatedly from the same cell, one at a time; letters must be extracted in word order.

**Example 1:** `matrix = ["sd","ep"], mantra = "speed"` → `10`
**Example 2:** `matrix = ["abc","daf","geg"], mantra = "sad"` → `-1` ('s' absent)

**Constraints:** `0 < matrix.length, matrix[i].length <= 100`, `0 < mantra.length <= 100`, lowercase letters only.

---

## Approach

The grid has no walls, so the shortest path between two cells is their **Manhattan distance**. Model as DP over the mantra index:

- `E_k[r][c]` = min operations after extracting the first `k` characters, standing at `(r,c)` (only defined where `matrix[r][c]` equals the k-th char).
- Baseline `E_0`: position `(0,0)` costs 0.
- For the next char `ch`: first compute `h` = L1 **distance transform** of `E_{k-1}` (`h[r][c] = min_p E_{k-1}[p] + manhattan(p,(r,c))`, exact via 4 directional sweeps). Then `E_k[r][c] = h[r][c] + 1` for cells equal to `ch` (move there, extract). If no cell has `ch`, return `-1`.

Answer = min `E_L` after the last character.

Complexity: `O(L · R · C)` time (each of the ≤100 characters does one `O(R·C)` transform over ≤10^4 cells).
