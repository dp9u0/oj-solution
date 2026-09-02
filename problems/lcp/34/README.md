# [LCP 34] 二叉树染色

## Description


```md
https://leetcode.cn/problems/er-cha-shu-ran-se-UGC/description/
* algorithms
* Medium (58.00%)
* Likes:    121
* Dislikes: -
* Testcase Example:  '[5,2,3,4]\n2'
小扣有一个根结点为 `root` 的二叉树模型，初始所有结点均为白色，可以用蓝色染料给模型结点染色，模型的每个结点有一个 `val` 价值。小扣出于美观考虑，希望最后二叉树上每个蓝色相连部分的结点个数不能超过 `k` 个，求所有染成蓝色的结点价值总和最大是多少？
**示例 1：**
> 输入：`root = [5,2,3,4], k = 2`
>
> 输出：`12`
>
> 解释：`结点 5、3、4 染成蓝色，获得最大的价值 5+3+4=12`
![image.png](https://pic.leetcode.cn/1616126267-BqaCRj-image.png)
**示例 2：**
> 输入：`root = [4,1,3,9,null,null,2], k = 2`
>
> 输出：`16`
>
> 解释：结点 4、3、9 染成蓝色，获得最大的价值 4+3+9=16
![image.png](https://pic.leetcode.cn/1616126301-gJbhba-image.png)
**提示：**
+ `1 <= k <= 10`
+ `1 <= val <= 10000`
+ `1 <= 结点数量 <= 10000`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

A binary tree model initially all white; color some nodes blue. Every connected blue component (via tree edges) may have at most `k` nodes. Maximize the total `val` of blue nodes.

**Example:** `[5,2,3,4]`, k=2 → 12 (nodes 5,3,4).

**Constraints:** `k <= 10`, nodes ≤ 10^4.

---

## Approach

**Tree DP with knapsack.** `dp[u][c]` = max blue value in u's subtree when the blue component **touching u** has exactly `c` nodes (`c=0` means u stays white).

- u white: `dp[u][0] = Σ_child opt[child]`, where `opt[v] = max dp[v][*]`.
- u blue: knapsack over children — for each child either take its disconnected optimum (component size unchanged) or merge its touching component of size `t` (value `dp[v][t]`, size grows by `t`). Start from size 1 / value val[u]; total connected size ≤ k.

Postorder traversal; answer `opt[root]`.

Complexity: `O(n·k²)`.
