# [3420] 统计 K 次操作以内得到非递减子数组的数目

## Description


```md
https://leetcode.cn/problems/count-non-decreasing-subarrays-after-k-operations/description/
* algorithms
* Hard (41.71%)
* Likes:    13
* Dislikes: -
* Testcase Example:  '[6,3,1,2,4,4]\n7'
给你一个长度为 n 的数组 nums 和一个整数 k 。
对于 nums 中的每一个子数组，你可以对它进行 至多 k 次操作。每次操作中，你可以将子数组中的任意一个元素增加 1 。
注意 ，每个子数组都是独立的，也就是说你对一个子数组的修改不会保留到另一个子数组中。
请你返回最多 k 次操作以内，有多少个子数组可以变成 非递减 的。
如果一个数组中的每一个元素都大于等于前一个元素（如果前一个元素存在），那么我们称这个数组是 非递减 的。

示例 1：
输入：nums = [6,3,1,2,4,4], k = 7
输出：17
解释：
nums 的所有 21 个子数组中，只有子数组 [6, 3, 1] ，[6, 3, 1, 2] ，[6, 3, 1, 2, 4] 和 [6, 3, 1, 2, 4, 4] 无法在 k = 7 次操作以内变为非递减的。所以非递减子数组的数目为 21 - 4 = 17 。
示例 2：
输入：nums = [6,3,1,3,6], k = 4
输出：12
解释：
子数组 [3, 1, 3, 6] 和 nums 中所有小于等于三个元素的子数组中，除了 [6, 3, 1] 以外，都可以在 k 次操作以内变为非递减子数组。总共有 5 个包含单个元素的子数组，4 个包含两个元素的子数组，除 [6, 3, 1] 以外有 2 个包含三个元素的子数组，所以总共有 1 + 5 + 4 + 2 = 12 个子数组可以变为非递减的。

提示：
1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 109
Hint 1: Use a sparse table.
Hint 2: Compute sp[e][i] = [lastElement, operations] where operations is the number of operations required to make the subarray nums[i...i + 2^e - 1] non-decreasing, and lastElement be the value of the last element after the operations were applied on it.
Hint 3: How can we combine sp[a][i] with sp[b][i + 2^a] to find the answer for the subarray nums[i...i + 2^a + 2^b - 1]?

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given a 0-indexed integer array `nums` of length `n` and an integer `k`.

For every subarray of `nums`, you may perform **at most** `k` operations on it. In one operation, you increment any element of the subarray by 1.

Note that each subarray is independent, i.e. changes made to one subarray do not persist to another.

Return the number of subarrays that can be made **non-decreasing** within at most `k` operations.

An array is non-decreasing if every element is greater than or equal to the previous one (if a previous one exists).

Example 1: nums = [6,3,1,2,4,4], k = 7 → Output: 17 (all 21 subarrays except [6,3,1], [6,3,1,2], [6,3,1,2,4], [6,3,1,2,4,4]).

Example 2: nums = [6,3,1,3,6], k = 4 → Output: 12.

Constraints: 1 <= n <= 10^5, 1 <= nums[i] <= 10^9, 1 <= k <= 10^9.

## 思路

**最小代价公式**：子数组 `[l, r]` 变为非递减的最小操作次数是贪心的从左到右扫描：

```
cost(l, r) = Σ_{j=l+1..r} max(0, max(nums[l..j-1]) - nums[j])
```

即每个元素被抬升到它左侧的最大值（若比它大）。

**单调性**：
- 固定 `l`，`cost(l, r)` 随 `r` 增大不减（每项增量 ≥ 0）；
- 固定 `r`，`cost(l, r)` 随 `l` 减小不减。

**分层（levels）结构**：把子数组按贪心过程分成若干层，层值为从左到右严格递增的“前缀最大值记录”。第 `i` 层用三元组 `(v, c, s)` 表示：层值 `v`、该层元素个数 `c`、该层原始值之和 `s`。总代价 = `Σ (v*c - s)`。

**从右往左枚举左端点 l（r 只减不增的双指针）**：

1. **前置（prepend）** `nums[l]`：把底部所有层值 `<= M` 的层依次吸收进新底层——每吸收一层 `(v, c, s)`，代价增加 `c * (M - v)`；新底层为 `(M, 1+Σc, M+Σs)`。均摊 O(1)。
2. **收缩 r**：若 `cost > k`，从右侧移除位置 `r` 的元素——它属于顶层：`cost -= v_top - nums[r]`，顶层计数减一，计数为 0 则弹出顶层。由单调性，`r` 在整个枚举过程中只向左移动，总收缩 O(n)。
3. 答案累加 `r - l + 1`。

整体均摊 O(n) 时间，O(n) 空间。用数组 `st`（底部在末尾，顶部用指针 `top` 定位）实现两端操作。

验证示例 1：[6,3,1,2,4,4], k=7 → 17 ✓；示例 2：[6,3,1,3,6], k=4 → 12 ✓。
