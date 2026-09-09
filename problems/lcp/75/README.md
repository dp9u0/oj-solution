# [LCP 75] 传送卷轴

## Description


```md
https://leetcode.cn/problems/rdmXM7/description/
* algorithms
* Hard (42.50%)
* Likes:    10
* Dislikes: -
* Testcase Example:  '[".....","##S..","...#.","T.#..","###.."]'
随着不断的深入，小扣来到了守护者之森寻找的魔法水晶。首先，他必须先通过守护者的考验。
考验的区域是一个正方形的迷宫，`maze[i][j]` 表示在迷宫 `i` 行 `j` 列的地形：
- 若为 `.` ，表示可以到达的空地；
- 若为 `#` ，表示不可到达的墙壁；
- 若为 `S` ，表示小扣的初始位置；
- 若为 `T` ，表示魔法水晶的位置。
小扣每次可以向 上、下、左、右 相邻的位置移动一格。而守护者拥有一份「传送魔法卷轴」，使用规则如下：
- 魔法需要在小扣位于 **空地** 时才能释放，发动后卷轴消失；；
- 发动后，小扣会被传送到水平或者竖直的镜像位置，且目标位置不得为墙壁(如下图所示)；
![image.png](https://pic.leetcode.cn/1681789509-wTekFu-image.png){:width=400px}
在使用卷轴后，小扣将被「附加负面效果」，因此小扣需要尽可能缩短传送后到达魔法水晶的距离。而守护者的目标是阻止小扣到达魔法水晶的位置；如果无法阻止，则尽可能 **增加** 小扣传送后到达魔法水晶的距离。
假设小扣和守护者都按最优策略行事，返回小扣需要在 「附加负面效果」的情况下 **最少** 移动多少次才能到达魔法水晶。如果无法到达，返回 `-1`。
**注意：**
- 守护者可以不使用卷轴；
- 传送后的镜像位置可能与原位置相同。
**示例 1：**
>输入：`maze = [".....","##S..","...#.","T.#..","###.."]`
>
>输出：`7`
>
>解释：如下图所示：
>守护者释放魔法的两个最佳的位置为 [2,0] 或 [3,1]：
>若小扣经过 [2,0]，守护者在该位置释放魔法，
>小扣被传送至 [2,4] 处且加上负面效果，此时小扣还需要移动 7 次才能到达魔法水晶；
>若小扣经过 [3,1]，守护者在该位置释放魔法，
>小扣被传送至 [3,3] 处且加上负面效果，此时小扣还需要移动 9 次才能到达魔法水晶；
>因此小扣负面效果下最少需要移动 7 次才能到达魔法水晶。
![image.png](https://pic.leetcode.cn/1681714676-gksEMT-image.png){:width=300px}
**示例 2：**
>输入：`maze = [".#..","..##",".#S.",".#.T"]`
>
>输出：`-1`
>
>解释：如下图所示。
>若小扣向下移动至 [3,2]，守护者使其传送至 [0,2]，小扣将无法到达魔法水晶；
>若小扣向右移动至 [2,3]，守护者使其传送至 [2,0]，小扣将无法到达魔法水晶；
![image.png](https://pic.leetcode.cn/1681714693-LsxKAh-image.png){:width=300px}
**示例 3：**
>输入：`maze = ["S###.","..###","#..##","##..#","###.T"]`
>
>输出：`5`
>
>解释：如下图所示：
>守护者需要小扣在空地才能释放，因此初始无法将其从 [0,0] 传送至 [0,4];
>当小扣移动至 [2,1] 时，释放卷轴将其传送至水平方向的镜像位置 [2,1]（为原位置）
>而后小扣需要移动 5 次到达魔法水晶
![image.png](https://pic.leetcode.cn/1681800985-KrSdru-image.png){:width=300px}
**提示：**
- `4 <= maze.length == maze[i].length <= 200`
- `maze[i][j]` 仅包含 `"."`、`"#"`、`"S"`、`"T"`

```

## Solution

[SourceCode](./solution.js)

## English Translation

**LCP 75. Teleport Scroll**

A square maze (`.` empty, `#` wall, `S` start, `T` crystal). The hero moves one step up/down/left/right. The keeper owns one teleport scroll:

- it can only be cast while the hero stands on an **empty** cell (`.` only) and is consumed on use;
- the hero is teleported to the horizontal or vertical mirror position; the target must not be a wall.

After the teleport the hero is debuffed, and wants to minimize the remaining moves to `T`; the keeper wants to prevent reaching `T` altogether, or else maximize the post-teleport distance. Both play optimally. Return the minimum number of moves the hero makes **after the debuff** to reach `T`, or `-1` if unreachable. The keeper may also never use the scroll; a mirror may coincide with the original cell.

Constraints: `4 <= n <= 200`.

## Approach

1. BFS from `T` gives `distT[v]` for every walkable cell. If `S` cannot reach `T`, return `-1` (the keeper controls the only teleport and gains nothing by helping).
2. For each empty cell `c`, the keeper's value `val(c) = max(distT[rowMirror(c)], distT[colMirror(c)])` over mirrors that are not walls (`S`/`T` count as valid targets); `∞` if some valid mirror cannot reach `T` (the keeper would block); if both mirrors are walls the keeper cannot fire at `c`.
3. The game value is `min over S→T paths of max{ val(c) : empty cells c on the path }` — the keeper fires at the worst empty cell the hero traverses, the hero picks the path. Solved by Dijkstra minimizing the path maximum (`val = -1` cells are skipped since `max(d, -1) = d`; `∞` edges are not relaxed). Answer `0` if no fireable cell is traversed; `-1` if the value is `∞`.

Verified on the three official examples plus structural edge cases.

Time: `O(n² log n)`, Space: `O(n²)`.
