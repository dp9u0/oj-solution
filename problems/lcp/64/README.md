# [LCP 64] 二叉树灯饰

## Description


```md
https://leetcode.cn/problems/U7WvvU/description/
* algorithms
* Medium (39.47%)
* Likes:    29
* Dislikes: -
* Testcase Example:  '[1,1,0,null,null,null,1]'
「力扣嘉年华」的中心广场放置了一个巨型的二叉树形状的装饰树。每个节点上均有一盏灯和三个开关。节点值为 `0` 表示灯处于「关闭」状态，节点值为 `1` 表示灯处于「开启」状态。每个节点上的三个开关各自功能如下：
- 开关 `1`：切换当前节点的灯的状态；
- 开关 `2`：切换 **以当前节点为根** 的子树中，所有节点上的灯的状态，；
- 开关 `3`：切换 **当前节点及其左右子节点**（若存在的话） 上的灯的状态；
给定该装饰的初始状态 `root`，请返回最少需要操作多少次开关，可以关闭所有节点的灯。
**示例 1：**
>输入：`root = [1,1,0,null,null,null,1]`
>
>输出：`2`
>
>解释：以下是最佳的方案之一，如图所示
![b71b95bf405e3b223e00b2820a062ba4.gif](https://pic.leetcode.cn/1629357030-GSbzpY-b71b95bf405e3b223e00b2820a062ba4.gif){:width="300px"}
**示例 2：**
>输入：`root = [1,1,1,1,null,null,1]`
>
>输出：`1`
>
>解释：以下是最佳的方案，如图所示
![a4091b6448a0089b4d9e8f0390ff9ac6.gif](https://pic.leetcode.cn/1629356950-HZsKZC-a4091b6448a0089b4d9e8f0390ff9ac6.gif){:width="300px"}
**示例 3：**
>输入：`root = [0,null,0]`
>
>输出：`0`
>
>解释：无需操作开关，当前所有节点上的灯均已关闭
**提示：**
- `1 <= 节点个数 <= 10^5`
- `0 <= Node.val <= 1`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

The "力扣嘉年华" central plaza holds a giant binary-tree-shaped decorative tree. Every node has a lamp and three switches. Node value `0` = lamp off, `1` = lamp on. The three switches on each node:

- Switch `1`: toggle the **current node's** lamp;
- Switch `2`: toggle the lamps of **all nodes in the subtree rooted at the current node**;
- Switch `3`: toggle the lamps of **the current node and its left & right children** (if present).

Given the initial state `root`, return the **minimum number of switch presses** needed to turn off all lamps.

**Example 1:** `root = [1,1,0,null,null,null,1]` → `2`
**Example 2:** `root = [1,1,1,1,null,null,1]` → `1`
**Example 3:** `root = [0,null,0]` → `0`

**Constraints:** `1 <= #nodes <= 10^5`, `Node.val in {0,1}`.

---

## Approach

**Tree DP with 2×2 state per node.** A lamp at node `u` is affected by three kinds of toggles: (1) switch-2 presses at any strict ancestor (each flips the whole subtree), combined parity `sub`; (2) a switch-3 press at `u`'s parent, parity `par3`; (3) `u`'s own presses `s1,s2,s3`. Only parity of presses matters, so a switch is pressed 0 or 1 time.

For node `u` with incoming `(sub, par3)`:
- Pick `s2, s3 ∈ {0,1}`; then `s1` is forced by the "lamp must be off" condition: `s1 = val[u] ^ sub ^ par3 ^ s2 ^ s3`.
- Children receive states: left and right each get `(sub ^ s2, s3)` (u's switch-2 flips their whole subtree; u's switch-3 toggles them directly).
- `dp[u][sub][par3] = min over (s2,s3) of [s1 + s2 + s3 + dp[left] + dp[right]]`.

Because the tree may be skewed with up to `10^5` nodes, compute bottom-up with an **explicit-stack postorder traversal** rather than recursion (to avoid stack overflow). Each node stores its 2×2 dp table.

Complexity: `O(n)` time, `O(n)` space.
