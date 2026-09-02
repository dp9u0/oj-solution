# [LCR 115] 序列重建

## Description


```md
https://leetcode.cn/problems/ur2n8P/description/
* algorithms
* Medium (51.87%)
* Likes:    148
* Dislikes: -
* Testcase Example:  '[1,2,3]\n[[1,2],[1,3]]'
给定一个长度为 n 的整数数组 nums ，其中 nums 是范围为 [1，n] 的整数的排列。还提供了一个 2D 整数数组 sequences ，其中 sequences[i] 是 nums 的子序列。
检查 nums 是否是唯一的最短 超序列 。最短 超序列 是 长度最短 的序列，并且所有序列 sequences[i] 都是它的子序列。对于给定的数组 sequences ，可能存在多个有效的 超序列 。
例如，对于 sequences = [[1,2],[1,3]] ，有两个最短的 超序列 ，[1,2,3] 和 [1,3,2] 。
而对于 sequences = [[1,2],[1,3],[1,2,3]] ，唯一可能的最短 超序列 是 [1,2,3] 。[1,2,3,4] 是可能的超序列，但不是最短的。
如果 nums 是序列的唯一最短 超序列 ，则返回 true ，否则返回 false 。
子序列 是一个可以通过从另一个序列中删除一些元素或不删除任何元素，而不改变其余元素的顺序的序列。

示例 1：
输入：nums = [1,2,3], sequences = [[1,2],[1,3]]
输出：false
解释：有两种可能的超序列：[1,2,3]和[1,3,2]。
序列 [1,2] 是[1,2,3]和[1,3,2]的子序列。
序列 [1,3] 是[1,2,3]和[1,3,2]的子序列。
因为 nums 不是唯一最短的超序列，所以返回false。
示例 2：
输入：nums = [1,2,3], sequences = [[1,2]]
输出：false
解释：最短可能的超序列为 [1,2]。
序列 [1,2] 是它的子序列：[1,2]。
因为 nums 不是最短的超序列，所以返回false。
示例 3：
输入：nums = [1,2,3], sequences = [[1,2],[1,3],[2,3]]
输出：true
解释：最短可能的超序列为[1,2,3]。
序列 [1,2] 是它的一个子序列：[1,2,3]。
序列 [1,3] 是它的一个子序列：[1,2,3]。
序列 [2,3] 是它的一个子序列：[1,2,3]。
因为 nums 是唯一最短的超序列，所以返回true。

提示：
n == nums.length
1 <= n <= 104
nums 是 [1, n] 范围内所有整数的排列
1 <= sequences.length <= 104
1 <= sequences[i].length <= 104
1 <= sum(sequences[i].length) <= 105
1 <= sequences[i][j] <= n
sequences 的所有数组都是 唯一 的
sequences[i] 是 nums 的一个子序列

注意：本题与主站 444 题相同：https://leetcode.cn/problems/sequence-reconstruction/

```

## Solution

[SourceCode](./solution.js)

---

## English Description

Given an integer array `nums` of length `n`, where `nums` is a permutation of the integers in the range `[1, n]`. Also given a 2D integer array `sequences`, where each `sequences[i]` is a **subsequence** of `nums`.

Check whether `nums` is the **unique shortest supersequence**. The shortest supersequence is a sequence of the shortest possible length such that every `sequences[i]` is a subsequence of it. For the given `sequences`, there may be multiple valid supersequences.

For example, for `sequences = [[1,2],[1,3]]`, there are two shortest supersequences: `[1,2,3]` and `[1,3,2]`.

But for `sequences = [[1,2],[1,3],[1,2,3]]`, the only possible shortest supersequence is `[1,2,3]`. `[1,2,3,4]` is a possible supersequence but not the shortest.

Return `true` if `nums` is the unique shortest supersequence of `sequences`, otherwise return `false`.

A **subsequence** is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

**Example 1:**
```
Input: nums = [1,2,3], sequences = [[1,2],[1,3]]
Output: false
```
Explanation: There are two possible supersequences: `[1,2,3]` and `[1,3,2]`.

**Example 2:**
```
Input: nums = [1,2,3], sequences = [[1,2]]
Output: false
```
Explanation: The shortest possible supersequence is `[1,2]`.

**Example 3:**
```
Input: nums = [1,2,3], sequences = [[1,2],[1,3],[2,3]]
Output: true
```
Explanation: The shortest possible supersequence is `[1,2,3]`.

**Constraints:**
- `n == nums.length`
- `1 <= n <= 10^4`
- `nums` is a permutation of all integers in range `[1, n]`.
- `1 <= sequences.length <= 10^4`
- `1 <= sequences[i].length <= 10^4`
- `1 <= sum(sequences[i].length) <= 10^5`
- `1 <= sequences[i][j] <= n`
- All the arrays of `sequences` are **unique**.
- `sequences[i]` is a subsequence of `nums`.

## Approach (思路)

**拓扑排序 (Topological Sort) — Kahn 算法**

关键观察:
1. 每个子序列 `sequences[i]` 中相邻两元素 `a, b` 定义了相对顺序约束 `a` 必须在 `b` 之前 → 建立有向边 `a → b`。
2. `nums` 是唯一最短超序列 ⟺ 由这些相邻边构成的 DAG 的**拓扑序唯一**,且该唯一拓扑序恰好等于 `nums`。
3. Kahn 算法判唯一:每次从队列弹出并处理一个节点后,若入度降为 0 的"新"节点超过 1 个,说明存在多个合法后继,拓扑序不唯一 → 返回 false。
4. 贪心匹配:按 `nums` 的顺序依次检查每个元素是否就是当前唯一可处理的节点。若处理过程中某步队列为空或队首元素 ≠ `nums[i]`,则说明拓扑序不等于 `nums`(或图不覆盖全部 n 个节点)→ 返回 false。

实现细节:
- `inDegree[i]` 记录节点 `i` 的入度,`next[i]` 记录从 `i` 出发的后继集合(用 Set 或数组)。
- 因为每条子序列的相邻对构成了所有约束,无需添加多余边;节点数量最大 n,但实际参与约束的节点即为 `sequences` 中出现过的节点。
- 用 Set 建边去重(同一对边可能来自不同子序列,入度不能重复累加)。
- 需要覆盖全部 n 个节点:处理完的节点计数必须等于 n;同时过程中每一步唯一可选节点必须严格等于 `nums` 的对应元素。
- 复杂度 O(n + total length of sequences),空间 O(n)。
