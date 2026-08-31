# [3943] Number of Pairs After Increment

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-pairs-after-increment/description/)

* algorithms
* Hard (21.65%)
* Likes:    56
* Dislikes: 2
* Testcase Example:  '[1,2]\n[3,4]\n[[2,5],[1,0,0,2],[2,5]]'

```md
You are given two integer arrays nums1 and nums2, and a 2D integer array queries.
Each queries[i] is one of the following types:

[1, x, y, val] &ndash; Add val to every element in nums2[x..y].
[2, tot] &ndash; Compute the number of pairs (j, k) such that nums1[j] + nums2[k] == tot.

Return an integer array answer, where answer[j] is the number of pairs for the jth query of type 2.

Example 1:

Input: nums1 = [1,2], nums2 = [3,4], queries = [[2,5],[1,0,0,2],[2,5]]
Output: [2,1]
Explanation:

queries[0] = [2, 5]: Valid pairs are nums1[0] + nums2[1] = 1 + 4 = 5 and nums1[1] + nums2[0] = 2 + 3 = 5.
queries[1] = [1, 0, 0, 2]: Add 2 to nums2[0], resulting in nums2 = [5, 4].
queries[2] = [2, 5]: Valid pair is nums1[0] + nums2[1] = 1 + 4 = 5.
Thus, the answer = [2, 1].


Example 2:

Input: nums1 = [1,1], nums2 = [2,2,3], queries = [[2,4],[1,0,1,1],[2,4]]
Output: [2,6]
Explanation:

queries[0] = [2, 4]: Valid pairs are nums1[0] + nums2[2] = 1 + 3 and nums1[1] + nums2[2] = 1 + 3.
queries[1] = [1, 0, 1, 1]: Add 1 to nums2[0] and nums2[1], resulting in nums2 = [3, 3, 3].
queries[2] = [2, 4]: Every element of nums1 = [1, 1] pairs with every element of nums2 = [3, 3, 3] as 1 + 3 = 4. That gives 2 &times; 3 = 6 pairs in total.
Thus, the answer = [2, 6].


Example 3:

Input: nums1 = [2,5,8,4], nums2 = [1,3,8], queries = [[2,9],[1,1,2,1],[2,10]]
Output: [1,0]
Explanation:

queries[0] = [2, 9]: Only valid pair is nums1[2] + nums2[0] = 8 + 1 = 9.
queries[1] = [1, 1, 2, 1]: Add 1 to nums2[1] and nums2[2], resulting in​​​​​​​ nums2 = [1, 4, 9].
queries[2] = [2, 10]: No pair sums to 10.
Thus, the answer = [1, 0].



Constraints:

1 <= nums1.length <= 5
1 <= nums2.length <= 5 * 104
1 <= nums1[i], nums2[i] <= 105
1 <= queries.length <= 5 * 104
queries[i].length == 2 or 4

queries[i] == [1, x, y, val], or
queries[i] == [2, tot]
0 <= x <= y < nums2.length
1 <= val <= 105
1 <= tot <= 109​​​​​​​




```

## Solution

[SourceCode](./solution.js)

---

## 中文翻译

给定两个整数数组 `nums1` 和 `nums2`，以及一个二维整数数组 `queries`。
每个 `queries[i]` 是以下两种类型之一：

- `[1, x, y, val]` — 给 `nums2[x..y]` 中的每个元素加上 `val`。
- `[2, tot]` — 计算满足 `nums1[j] + nums2[k] == tot` 的配对 `(j, k)` 的数量。

返回一个整数数组 `answer`，其中 `answer[j]` 是第 j 个类型 2 查询的配对数量。

### 示例 1

输入：`nums1 = [1,2], nums2 = [3,4], queries = [[2,5],[1,0,0,2],[2,5]]`
输出：`[2,1]`

解释：
- `queries[0] = [2, 5]`：有效配对为 `nums1[0] + nums2[1] = 1 + 4 = 5` 和 `nums1[1] + nums2[0] = 2 + 3 = 5`。
- `queries[1] = [1, 0, 0, 2]`：给 `nums2[0]` 加 2，得到 `nums2 = [5, 4]`。
- `queries[2] = [2, 5]`：有效配对为 `nums1[0] + nums2[1] = 1 + 4 = 5`。
- 因此 `answer = [2, 1]`。

### 示例 2

输入：`nums1 = [1,1], nums2 = [2,2,3], queries = [[2,4],[1,0,1,1],[2,4]]`
输出：`[2,6]`

解释：
- `queries[0] = [2, 4]`：有效配对为 `nums1[0] + nums2[2] = 1 + 3` 和 `nums1[1] + nums2[2] = 1 + 3`。
- `queries[1] = [1, 0, 1, 1]`：给 `nums2[0]` 和 `nums2[1]` 各加 1，得到 `nums2 = [3, 3, 3]`。
- `queries[2] = [2, 4]`：`nums1` 的每个元素 `1` 与 `nums2` 的每个元素 `3` 都能配对为 `1 + 3 = 4`，共 `2 × 3 = 6` 对。
- 因此 `answer = [2, 6]`。

### 示例 3

输入：`nums1 = [2,5,8,4], nums2 = [1,3,8], queries = [[2,9],[1,1,2,1],[2,10]]`
输出：`[1,0]`

解释：
- `queries[0] = [2, 9]`：唯一有效配对为 `nums1[2] + nums2[0] = 8 + 1 = 9`。
- `queries[1] = [1, 1, 2, 1]`：给 `nums2[1]` 和 `nums2[2]` 各加 1，得到 `nums2 = [1, 4, 9]`。
- `queries[2] = [2, 10]`：没有任何配对的和等于 10。
- 因此 `answer = [1, 0]`。

### 约束

- `1 <= nums1.length <= 5`
- `1 <= nums2.length <= 5 * 10^4`
- `1 <= nums1[i], nums2[i] <= 10^5`
- `1 <= queries.length <= 5 * 10^4`
- `queries[i].length == 2 或 4`
- `queries[i] == [1, x, y, val]` 或 `queries[i] == [2, tot]`
- `0 <= x <= y < nums2.length`
- `1 <= val <= 10^5`
- `1 <= tot <= 10^9`

## 解题思路

- 由于 `nums1.length <= 5`，类型 2 查询只需对 `nums1` 中每个不同值 `a`，统计 `nums2` 中等于 `tot - a` 的元素个数并乘以 `a` 的频次。
- 核心难题是：`nums2` 需要支持「区间加」和「统计等于某值的元素个数」两种操作。值域会随区间加不断扩大（最大可达约 5×10^9），无法用值域上的树状数组，因此采用**位置分块（sqrt decomposition）**：
  - 将 `nums2` 分成大小为 B 的块，每个位置维护基准值 `vals[k]`（不含 lazy），每块另维护一个以基准值为键、频次为值的计数表。
  - 整块更新用 `lazy[b]` 延迟累加，不实际修改块内元素（真实值 = `vals[k] + lazy[b]`）。
  - 部分更新（块首尾不完整块）逐个改写区间内位置的 `vals[k]`，同步更新该块的计数表。
  - 查询时对每个块直接查计数表：`cnt[b][tot - a - lazy[b]]`，即统计等于 `tot - a - lazy[b]` 的基准值个数。
- 时间复杂度：更新 O(B + n/B)，查询 O(|nums1| × n/B)，比每块排序 + 二分快一个数量级。
- 块大小取 `B ≈ sqrt(|nums1|·n/2)` 平衡部分更新与查询成本。
