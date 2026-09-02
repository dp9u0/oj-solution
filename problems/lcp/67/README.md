# [LCP 67] 装饰树

## Description


```md
https://leetcode.cn/problems/KnLfVT/description/
* algorithms
* Medium (86.45%)
* Likes:    15
* Dislikes: -
* Testcase Example:  '[7,5,6]'
力扣嘉年华上的 DIY 手工展位准备了一棵缩小版的 **二叉** 装饰树 `root` 和灯饰，你需要将灯饰逐一插入装饰树中，要求如下：
- 完成装饰的二叉树根结点与 `root` 的根结点值相同
- 若一个节点拥有父节点，则在该节点和他的父节点之间插入一个灯饰（即插入一个值为 `-1` 的节点）。具体地：
- 在一个 父节点 x 与其左子节点 y 之间添加 -1 节点， 节点 -1、节点 y 为各自父节点的左子节点，
- 在一个 父节点 x 与其右子节点 y 之间添加 -1 节点， 节点 -1、节点 y 为各自父节点的右子节点，

现给定二叉树的根节点 `root` ，请返回完成装饰后的树的根节点。
**示例 1：**
>输入：
>`root = [7,5,6]`
>
>输出：`[7,-1,-1,5,null,null,6]`
>
>解释：如下图所示，
>![image.png](https://pic.leetcode.cn/1663575757-yRLGaq-image.png){:width=400px}
**示例 2：**
>输入：
>`root = [3,1,7,3,8,null,4]`
>
>输出：`[3,-1,-1,1,null,null,7,-1,-1,null,-1,3,null,null,8,null,4]`
>
>解释：如下图所示
![image.png](https://pic.leetcode.cn/1663577920-sjrAYH-image.png){:width=500px}
**提示：**
>`0 <= root.Val <= 1000`
>`root` 节点数量范围为 `[1, 10^5]`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

A DIY booth at the carnival has a miniature **binary** decorative tree `root` and lights. Insert lights so that: the finished tree's root value equals `root`'s; if a node has a parent, insert a light (a `-1` node) between the node and its parent. Specifically, between parent `x` and its left child `y`, insert a `-1` node that is the left child of `x`, and `y` becomes the left child of that `-1` node; likewise for the right child.

Given `root`, return the root of the finished tree.

**Example 1:** `[7,5,6]` → `[7,-1,-1,5,null,null,6]`
**Example 2:** `[3,1,7,3,8,null,4]` → `[3,-1,-1,1,null,null,7,-1,-1,null,-1,3,null,null,8,null,4]`

**Constraints:** values `0..1000`, node count `[1, 10^5]`.

---

## Approach

**Recursive transform.** For a node, process children recursively; if a child exists, insert a new `-1` node as the parent's child, with the original child placed under it (preserving left/right sides). Then recurse into the real children.

Complexity: `O(n)`.
