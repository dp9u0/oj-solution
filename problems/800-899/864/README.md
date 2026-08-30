# [864] Shortest Path to Get All Keys

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-path-to-get-all-keys/description/)

* algorithms
* Hard (54.99%)
* Likes:    2528
* Dislikes: 107
* Testcase Example:  '["@.a..","###.#","b.A.B"]'

```md
You are given an m x n grid grid where:

&#39;.&#39; is an empty cell.
&#39;#&#39; is a wall.
&#39;@&#39; is the starting point.
Lowercase letters represent keys.
Uppercase letters represent locks.

You start at the starting point and one move consists of walking one space in one of the four cardinal directions. You cannot walk outside the grid, or walk into a wall.
If you walk over a key, you can pick it up and you cannot walk over a lock unless you have its corresponding key.
For some 1 <= k <= 6, there is exactly one lowercase and one uppercase letter of the first k letters of the English alphabet in the grid. This means that there is exactly one key for each lock, and one lock for each key; and also that the letters used to represent the keys and locks were chosen in the same order as the English alphabet.
Return the lowest number of moves to acquire all keys. If it is impossible, return -1.

Example 1:


Input: grid = ['@.a..','###.#','b.A.B']
Output: 8
Explanation: Note that the goal is to obtain all the keys not to open all the locks.

Example 2:


Input: grid = ['@..aA','..B#.','....b']
Output: 6

Example 3:


Input: grid = ['@Aa']
Output: -1


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 30
grid[i][j] is either an English letter, &#39;.&#39;, &#39;#&#39;, or &#39;@&#39;.
There is exactly one&#39;@&#39;in the grid.
The number of keys in the grid is in the range [1, 6].
Each key in the grid is unique.
Each key in the grid has a matching lock.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个 m x n 的网格 `grid`,其中:

- `'.'` 表示空地。
- `'#'` 表示墙。
- `'@'` 表示起点。
- 小写字母表示钥匙。
- 大写字母表示锁。

你从起点出发,每次移动可以向四个基本方向中的一个方向走一格。你不能走出网格边界,也不能走进墙里。

如果你走过一把钥匙,你可以捡起它;你不能走过一把锁,除非你持有对应的钥匙。

对于某个 `1 <= k <= 6`,网格中恰好包含英文字母表前 k 个字母的小写和大写形式各一个。也就是说每把钥匙对应一把锁,每把锁对应一把钥匙,且表示钥匙和锁的字母按英文字母表顺序选取。

返回获取所有钥匙所需的最少移动次数。如果无法获取所有钥匙,返回 `-1`。

示例 1:

```
输入: grid = ["@.a..","###.#","b.A.B"]
输出: 8
解释: 注意目标是获得所有钥匙,而不是打开所有锁。
```

示例 2:

```
输入: grid = ["@..aA","..B#.","....b"]
输出: 6
```

示例 3:

```
输入: grid = ["@Aa"]
输出: -1
```

提示:

- `m == grid.length`,`n == grid[i].length`
- `1 <= m, n <= 30`
- `grid[i][j]` 是英文字母、`'.'`、`'#'` 或 `'@'` 之一
- 网格中恰好有一个 `'@'`
- 钥匙数量在 `[1, 6]` 范围内
- 每把钥匙唯一,且都有匹配的锁

## 解题思路

**BFS + 状态压缩(位掩码)**

难点:同一个格子可能需要多次经过(先拿钥匙再回来开锁),所以不能只用 (行, 列) 作为访问状态,必须把"当前持有的钥匙集合"纳入状态。

1. **状态定义**:`(x, y, keys)`,其中 `keys` 是一个位掩码,第 i 位为 1 表示已持有钥匙 `i`(字母表第 i 个小写字母)。钥匙数 k ≤ 6,掩码最多 64 种。
2. **预处理**:扫描网格,记录起点 `@` 的位置和钥匙总数 `k`,目标状态为 `keys === (1 << k) - 1`。
3. **BFS 过程**:
   - 从 `(sx, sy, 0)` 开始,队列中存 `(x, y, keys, steps)`。
   - 每次向四方向扩展一格:
     - 越界或 `#` → 跳过;
     - 是锁(大写)→ 若 `keys` 中无对应位则跳过,否则可通行;
     - 是钥匙(小写)→ 更新掩码 `keys | bit`,若达到目标直接返回步数;
     - 空地 / `@` → 正常通行。
   - `visited[x][y][keys]` 三维布尔数组去重,同一格不同钥匙集合视为不同状态。
4. **复杂度**:状态数 `O(m·n·2^k)` = 30×30×64 = 57600,每个状态扩展 4 次,时间与空间均为 `O(m·n·2^k)`。
5. 队列耗尽仍未集齐钥匙 → 返回 `-1`(例如钥匙被锁挡住拿不到)。
