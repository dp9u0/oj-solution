# [LCP 26] 导航装置

## Description


```md
https://leetcode.cn/problems/hSRGyL/description/
* algorithms
* Hard (38.27%)
* Likes:    22
* Dislikes: -
* Testcase Example:  '[1,2,null,3,4]'
小扣参加的秋日市集景区共有 $N$ 个景点，景点编号为 $1$~$N$。景点内设有 $N-1$ 条双向道路，使所有景点形成了一个二叉树结构，根结点记为 `root`，景点编号即为节点值。
由于秋日市集景区的结构特殊，游客很容易迷路，主办方决定在景区的若干个景点设置导航装置，按照所在景点编号升序排列后定义装置编号为 1 ~ M。导航装置向游客发送数据，数据内容为列表 `[游客与装置 1 的相对距离,游客与装置 2 的相对距离,...,游客与装置 M 的相对距离]`。由于游客根据导航装置发送的信息来确认位置，因此主办方需保证游客在每个景点接收的数据信息皆不相同。请返回主办方最少需要设置多少个导航装置。
**示例 1：**
>输入：`root = [1,2,null,3,4]`
>
>输出：`2`
>
>解释：在景点 1、3 或景点 1、4 或景点 3、4 设置导航装置。
>
>![image.png](https://pic.leetcode.cn/1597996812-tqrgwu-image.png){:height="250px"}
**示例 2：**
>输入：`root = [1,2,3,4]`
>
>输出：`1`
>
>解释：在景点 3、4 设置导航装置皆可。
>
>![image.png](https://pic.leetcode.cn/1597996826-EUQRyz-image.png){:height="200px"}
**提示：**
- `2 <= N <= 50000`
- 二叉树的非空节点值为 `1~N` 的一个排列。

```

## English Description

The autumn-market scenic area has N sights (numbered 1..N) connected by N-1 two-way paths forming a **binary tree** (root = the given `root`; a sight's number is its node value).

Because visitors get lost easily, the organizers set up navigation beacons at some sights. After sorting the chosen beacons by their sight number they are numbered 1..M. A beacon broadcasts a data list: `[distance from visitor to beacon 1, distance to beacon 2, ..., distance to beacon M]`. Since a visitor locates themselves from this data, the organizers must ensure **every sight receives a different data list**. Return the minimum number of beacons needed.

**Example 1:** `root = [1,2,null,3,4]` → `2` (beacons at sights 1,3 or 1,4 or 3,4)
**Example 2:** `root = [1,2,3,4]` → `1` (one beacon at 3 or 4 suffices)

**Constraints:** `2 <= N <= 50000`; the non-empty node values are a permutation of `1..N`.

## Approach

A set of beacons is valid iff no two sights share the same vector of distances to all beacons — exactly the definition of a **resolving set**, so the answer is the **metric dimension of the tree**.

For a tree that is **not a path**, the metric dimension has a classical closed form (Chartrand et al.): let a **major vertex** be one with degree ≥ 3. An **exterior leg** of a major vertex `v` is a path starting from `v` and going into one of its incident branches that reaches a **leaf** without passing through any other major vertex (branches that first reach another major vertex are *interior* legs and are not counted). Then

```
dim(tree) = Σ over major vertices v of max(0, exteriorLegs(v) - 1)
```

and if every vertex has degree ≤ 2 (the tree is a path), `dim = 1`.

**Intuition:** A leaf is only "recognized" relative to the beacons placed along the legs that end at it. To tell two exterior legs apart you must place a beacon in all but one of the leg branches hanging off a major vertex, and the branches are independent across major vertices.

**Implementation on the binary tree:**
1. Build the adjacency from the given root (edge = parent–child, treated as undirected).
2. Compute each vertex's degree.
3. If the maximum degree ≤ 2, return 1.
4. For each major vertex (degree ≥ 3), walk each incident branch: keep advancing while the neighbor is degree-2; stop counting when a leaf (degree-1) is reached (exterior leg) or when another major vertex is met (interior). Sum `exteriorLegs(v) - 1`.

**Complexity:** O(N) — each edge is traversed a constant number of times during branch walking.

## Solution

[SourceCode](./solution.js)
