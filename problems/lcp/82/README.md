# [LCP 82] 万灵之树

## Description


```md
https://leetcode.cn/problems/cnHoX6/description/
* algorithms
* Hard (16.23%)
* Likes:    19
* Dislikes: -
* Testcase Example:  '[2,3]\n100000007\n11391299'
探险家小扣终于来到了万灵之树前，挑战最后的谜题。
已知小扣拥有足够数量的链接节点和 `n` 颗幻境宝石，`gem[i]` 表示第 `i` 颗宝石的数值。现在小扣需要使用这些链接节点和宝石组合成一颗二叉树，其组装规则为：
- 链接节点将作为二叉树中的非叶子节点，且每个链接节点必须拥有 `2` 个子节点；
- 幻境宝石将作为二叉树中的叶子节点，所有的幻境宝石都必须被使用。
能量首先进入根节点，而后将按如下规则进行移动和记录：
- 若能量首次到达该节点时：
- 记录数字 `1`；
- 若该节点为叶节点，将额外记录该叶节点的数值；
- 若存在未到达的子节点，则选取未到达的一个子节点（优先选取左子节点）进入；
- 若无子节点或所有子节点均到达过，此时记录 `9`，并回到当前节点的父节点（若存在）。
如果最终记下的数依序连接成一个整数 `num`，满足 $num \mod~p=target$，则视为解开谜题。
请问有多少种二叉树的组装方案，可以使得最终记录下的数字可以解开谜题
**注意：**
- 两棵结构不同的二叉树，作为不同的组装方案
- 两棵结构相同的二叉树且存在某个相同位置处的宝石编号不同，也作为不同的组装方案
- 可能存在数值相同的两颗宝石
**示例 1：**
> 输入：`gem = [2,3]`
> `p = 100000007`
> `target = 11391299`
>
> 输出：`1`
>
> 解释：
> 包含 `2` 个叶节点的结构只有一种。
> 假设 B、C 节点的值分别为 3、2，对应 target 为 11391299，如下图所示。
> 11391299 % 100000007 = 11391299，满足条件;
> 假设 B、C 节点的值分别为 2、3，对应 target 为 11291399;
> 11291399 % 100000007 = 11291399，不满足条件；
> 因此只存在 1 种方案，返回 1
![万灵 (1).gif](https://pic.leetcode.cn/1682397079-evMssw-万灵 \(1\).gif){:height=300px}
**示例 2：**
> 输入：`gem = [3,21,3]`
> `p = 7`
> `target = 5`
>
> 输出：`4`
>
> 解释：
包含 `3` 个叶节点树结构有两种，列举如下：
满足条件的组合有四种情况：
> 当结构为下图（1）时：叶子节点的值为 [3,3,21] 或 [3,3,21]，得到的整数为 `11139139912199`。
> 当结构为下图（2）时：叶子节点的值为 [21,3,3] 或 [21,3,3]，得到的整数为 `11219113913999`。
![image.png](https://pic.leetcode.cn/1682322894-vfqJIV-image.png){:width=500px}
**提示：**
- `1 <= gem.length <= 9`
- `0 <= gem[i] <= 10^9`
- `1 <= p <= 10^9`，保证 $p$ 为素数。
- `0 <= target < p`
- 存在 2 组 `gem.length == 9` 的用例

```

## Solution

[SourceCode](./solution.js)

## English Translation

**LCP 82. Tree of Infinite Souls**

With enough link nodes and `n` dream gems (`gem[i]` is the i-th gem's value), assemble a full binary tree: link nodes are internal (each with exactly 2 children), gems are leaves, all gems used. Energy starts at the root and moves by:

- on first arrival at a node: record digit `1`; if it is a leaf, additionally record the gem's value; then enter an unvisited child (left first) if any;
- when leaving a node (no unvisited children): record digit `9` and return to the parent.

The recorded digits concatenated form a number `num`; a plan solves the puzzle iff `num mod p == target`. Count assembly plans — different tree shapes differ, and equal shapes with different gems at some position also differ (gems with equal values are distinct).

Constraints: `1 <= gem.length <= 9`, `0 <= gem[i] <= 1e9`, `p` prime `<= 1e9`, `0 <= target < p`; two tests have `gem.length == 9`.

## Approach

A leaf emits `1, gem, 9`; an internal node emits `1, str(L), str(R), 9`. Concatenation is affine: `v = 10^{1+lenL+lenR} + vL·10^{lenR} + 10·vR + 9 (mod p)`, and a string's `(value, length)` fully determines its behavior.

Direct enumeration is `Catalan(8)·9! ≈ 5·10^8` — too slow, and a subset DP's value maps explode. Instead, per tree shape (≤ 1430), split the token stream at the middle gem slot and meet-in-the-middle over gem-to-slot injections:

- All tokens after the `k1`-th gem slot (from the left) form side 2; `v = v2 + 10^{len2}·v1`, where `len2` (side-2 digit count) depends only on the gem set placed there — so both sides are self-contained given the side partition.
- Paren runs between slots contribute `10^{SL}·c_seg` (segment constant `c_seg` precomputed per shape), a gem at a slot contributes `g·10^{SL}` where `SL` = digits to its right, maintained while enumerating injections right-to-left.
- Enumerate all injections of gems into side-2 slots (`P(9, k2)`), hashing `(usedSet, v2) → count`; then all injections into side-1 slots (`P(9, k1)`), looking up the complementary `(B, target − 10^{len2}·v1)`.

All modular products use an exact split multiply (`a,b < 2^30`, products kept `< 2^46`). Complexity ≈ `shapes · (P(9,⌊n/2⌋) + P(9,⌈n/2⌉))` ≈ 32M DFS nodes + ~26M hash ops for `n = 9`.

Verified against brute force (all shapes × all permutations, exact string mod via BigInt) for `n ≤ 5` and random parameters.

Time: `O(Catalan(n−1) · P(n, n/2))`, Space: `O(P(9, 4))` per shape.
