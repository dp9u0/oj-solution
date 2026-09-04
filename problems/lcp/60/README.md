# [LCP 60] 力扣泡泡龙

## Description


```md
https://leetcode.cn/problems/WInSav/description/
* algorithms
* Hard (20.95%)
* Likes:    16
* Dislikes: -
* Testcase Example:  '[6,0,3,null,8]'
欢迎各位勇者来到力扣城，本次试炼主题为「力扣泡泡龙」。
游戏初始状态的泡泡形如二叉树 `root`，每个节点值对应了该泡泡的分值。勇者最多可以击破一个节点泡泡，要求满足：
- 被击破的节点泡泡 **至多** 只有一个子节点泡泡
- 当被击破的节点泡泡有子节点泡泡时，则子节点泡泡将取代被击破泡泡的位置
> 注：即整棵子树泡泡上移
请问在击破一个节点泡泡操作或无击破操作后，二叉泡泡树的最大「层和」是多少。
**注意：**
- 「层和」为同一高度的所有节点的分值之和
**示例 1：**
> 输入：`root = [6,0,3,null,8]`
>
> 输出：`11`
>
> 解释：勇者的最佳方案如图所示
>![image.png](https://pic.leetcode.cn/1648180809-XSWPLu-image.png){:height="100px"}
**示例 2：**
> 输入：`root = [5,6,2,4,null,null,1,3,5]`
>
> 输出：`9`
>
> 解释：勇者击破 6 节点，此时「层和」最大为 3+5+1 = 9
>![image.png](https://pic.leetcode.cn/1648180769-TLpYop-image.png){:height="200px"}
**示例 3：**
> 输入：`root = [-5,1,7]`
>
> 输出：`8`
>
> 解释：勇者不击破节点，「层和」最大为 1+7 = 8
**提示**：
- `2 <= 树中节点个数 <= 10^5`
- `-10000 <= 树中节点的值 <= 10000`

```

## Solution

[SourceCode](./solution.js)

## 中文翻译

欢迎各位勇者来到力扣城，本次试炼主题为「力扣泡泡龙」。
游戏初始状态的泡泡形如二叉树 `root`，每个节点值对应了该泡泡的分值。勇者最多可以击破一个节点泡泡，要求满足：
- 被击破的节点泡泡 **至多** 只有一个子节点泡泡
- 当被击破的节点泡泡有子节点泡泡时，则子节点泡泡将取代被击破泡泡的位置
> 注：即整棵子树泡泡上移

请问在击破一个节点泡泡操作或无击破操作后，二叉泡泡树的最大「层和」是多少。

**注意：**
- 「层和」为同一高度的所有节点的分值之和

**示例 1：** 输入 `root = [6,0,3,null,8]`，输出 `11`（击破根节点 6 后其右子树为 0→[8]，层变为 [6] 与 [8,3]，第 2 层和为 11）
**示例 2：** 输入 `root = [5,6,2,4,null,null,1,3,5]`，输出 `9`（击破 6 后子树(4,3,5)上移，第 3 层变第 2 层，和 = 3+5+1 = 9）
**示例 3：** 输入 `root = [-5,1,7]`，输出 `8`（不击破任何节点，第 2 层和 1+7=8 最大）
**提示：** 节点个数 `2 <= n <= 10^5`，节点值 `-10000 <= 10000`

## 解题思路

**操作语义**：击破一个至多只有一个子节点的节点 `v`：
- 若 `v` 是叶子：仅将其值从所在层删去。
- 若 `v` 只有一个子节点 `c`：`v` 被删除，`c` 的**整棵子树**上移一层。于是原来位于全局深度 `d` 的子树节点移到深度 `d-1`。

**核心观察**：击破 `v`（子节点 `c`）后，层和的变化只发生在 `c` 子树竖直覆盖的深度窗口 `[depth(v), depth(v)+1+h]` 内。对窗口内深度 `d`，新的层和满足：
`newSum[d] = levelSum[d] - subSum(d) + subSum(d+1)`
其中 `subSum(t)` 是「子树 `c` 内恰好位于全局深度 `t` 的节点值之和」。直觉：子树里原来在 `d+1` 层的节点上移到 `d` 层（加入），原来在 `d` 层的节点继续上移到 `d-1`（离开）；`v` 自身被删。窗口外的层和不变。

**算法**：
1. 用 DFS 序给节点编号：`in[node]` 表示进入时间、`out[node]` 表示子树内最大进入时间。DFS 序保证：任一子树中同一深度的节点，在「该深度节点按 in 序排列的数组」里构成**连续区间**。
2. 对每个深度 `d` 维护：该深度所有节点的 `val` 按 in 序排列后的数组，及其**前缀和** `pre[d]`。层和 `levelSum[d]` 即整层和。
3. 对任意子树 `t` 和深度 `d`，`subSum(d)`（子树内深度 `d` 的节点和）= 在深度 `d` 的数组中二分出子树区间 `[L,R]`，取前缀和差值。
4. 枚举每个可击破节点 `v`（0 或 1 个子节点）：从 `d = depth(v)+1` 逐层向下推进其子子树区间（每层用二分/指针得到子区间），用公式更新 `answer`。
5. 剪枝：若某深度下子树的 DFS 区间已完整覆盖该深度整层，或某区间之前已被同样地处理过，则更深层不可能再产生更大的新层和，可提前终止。

**复杂度**：每个深度区间至多被访问常数次，整体近似 `O(n log n)`（配合前缀和查询）。

## Approach (English)

- Break a node with ≤1 child; a single child's whole subtree lifts one level.
- Effect on level sums is confined to the subtree's vertical column:
  `newSum[d] = levelSum[d] − subSum(d) + subSum(d+1)`.
- Use DFS intervals + per-level prefix sums so a subtree's contribution at any depth is an O(log n) interval-sum query.
- Enumerate breakable nodes; advance the column one level at a time with early-exit pruning.
- Answer = max over all configurations (no break included).
