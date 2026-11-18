# [444] 序列重建

## Description


```md
https://leetcode.cn/problems/sequence-reconstruction/description/
* algorithms
* Medium (33.07%)
* Likes:    92
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

```

## Solution

[SourceCode](./solution.js)

## Translation

`nums` is a permutation of [1..n]; `sequences[i]` are subsequences of nums. Return true iff `nums` is the **unique shortest supersequence** of all sequences.

- Example 1: nums=[1,2,3], sequences=[[1,2],[1,3]] → `false` ([1,2,3] and [1,3,2] both valid)
- Example 2: sequences=[[1,2]] → `false` (shortest is [1,2], not [1,2,3])
- Example 3: sequences=[[1,2],[1,3],[2,3]] → `true`

Constraints: n ≤ 10^4; sum of lengths ≤ 10^5; sequences[i] are subsequences of nums.

## Approach

把每个 sequence 的相邻对建成边 a→b,则最短超序列 = 拓扑序,nums 唯一 ⟺ **拓扑序每一步唯一**:

- Kahn 算法,任意时刻队列 > 1 个零入度节点 → 至少两种合法顺序 → false。
- 全部 n 个处理完且顺序逐位等于 nums → true。

由于 sequences 都是 nums 的子序列,所有边与 nums 相容,nums 必是一个合法拓扑序;因此"每步唯一"就等价于"唯一超序列是 nums"。元素未被任何 sequence 覆盖时其入度为 0,会在队列里与其他节点并存 → 自动判 false。
