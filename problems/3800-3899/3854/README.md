# [3854] Minimum Operations to Make Array Parity Alternating

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-array-parity-alternating/description/)

* algorithms
* Medium (16.82%)
* Likes:    83
* Dislikes: 13
* Testcase Example:  '[-2,-3,1,4]'

```md
You are given an integer array nums.
An array is called parity alternating if for every index i where 0 <= i < n - 1, nums[i] and nums[i + 1] have different parity (one is even and the other is odd).
In one operation, you may choose any index i and either increase nums[i] by 1 or decrease nums[i] by 1.
Return an integer array answer of length 2 where:

answer[0] is the minimum number of operations required to make the array parity alternating.
answer[1] is the minimum possible value of max(nums) - min(nums) taken over all arrays that are parity alternating and can be obtained by performing exactly answer[0] operations.

An array of length 1 is considered parity alternating.

Example 1:

Input: nums = [-2,-3,1,4]
Output: [2,6]
Explanation:
Applying the following operations:

Increase nums[2] by 1, resulting in nums = [-2, -3, 2, 4].
Decrease nums[3] by 1, resulting in nums = [-2, -3, 2, 3].

The resulting array is parity alternating, and the value of max(nums) - min(nums) = 3 - (-3) = 6 is the minimum possible among all parity alternating arrays obtainable using exactly 2 operations.

Example 2:

Input: nums = [0,2,-2]
Output: [1,3]
Explanation:
Applying the following operation:

Decrease nums[1] by 1, resulting in nums = [0, 1, -2].

The resulting array is parity alternating, and the value of max(nums) - min(nums) = 1 - (-2) = 3 is the minimum possible among all parity alternating arrays obtainable using exactly 1 operation.

Example 3:

Input: nums = [7]
Output: [0,0]
Explanation:
No operations are required. The array is already parity alternating, and the value of max(nums) - min(nums) = 7 - 7 = 0, which is the minimum possible.


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109


```

## 题目翻译

给定整数数组 nums。奇偶交替数组要求相邻元素奇偶性不同。一次操作将 nums[i] 加 1 或减 1。返回 [最少操作数, 在恰好用最少操作数的情况下 max(nums)-min(nums) 的最小值]。

## 解题思路

**分类讨论 + 贪心**。

1. answer[0]（最少操作数）：
   - 两种模式：模式 A = 偶奇偶奇...，模式 B = 奇偶奇偶...
   - 对于每个元素，判断是否需要改变奇偶性。改变奇偶性只需 1 次操作。
   - 操作数 = 需要改变奇偶性的元素个数。
   - 两种模式取最小值。

2. answer[1]（最少操作数下的最小极差）：
   - 固定每个位置的奇偶性后，每个元素可以选择往上变或往下变（或不变）。
   - 对于需要改变奇偶性的元素：可以 +1 或 -1。
   - 对于不需要改变的元素：可以 +0（保持不变）。
   - 目标：在固定操作数下，最小化 max - min。
   - 对于每个需要改变的元素，选择 +1 或 -1，使得数组极差最小。

   进一步分析：对于需要改变奇偶性的位置，选择 +1 会增大值，选择 -1 会减小值。
   - 设不变的位置的值为 original，改变的位置可以选择 original+1 或 original-1。
   - 要最小化 max - min，需要让最大值尽量小、最小值尽量大。
   - 对每个需改变的位置：如果 original 接近最大值，选 -1（减小）；如果接近最小值，选 +1（增大）。

   策略：分别尝试两种模式，对每种模式：
   - 构造所有可能的值（每个位置的候选值列表）。
   - 用贪心或二分求最小极差。

   实际上，因为每个位置最多 2 个选择，可以直接用以下方法：
   - 计算每个位置的所有候选值。
   - 枚举最终的最小值候选，对每个最小值，贪心选择每个位置的值（尽量选不超过某个上限的最大值），二分搜索最小极差。

   更简洁的做法：枚举最终数组的最小值（从所有候选值中），然后对每个最小值，计算让所有元素 >= 该最小值所需的最小值，由此确定 max - min 的下界。

   但这仍然很复杂。让我换个思路：

   实际上，对于每种模式，每个需要改变的位置有两个选择：+1 或 -1。我们想最小化 max - min。这等价于：找到最优的 +1/-1 分配，使得最大值减最小值最小。

   这可以转化为：二分答案 diff，检查是否存在一种分配使得 max - min <= diff。
   检查方法：max - min <= diff ⟺ 对所有 i, nums'[i] ∈ [low, low+diff]。
   我们需要找到一个 low，使得每个位置都有一个候选值落在 [low, low+diff] 中。
   即对每个位置，其候选值区间（可能是 {x} 或 {x-1, x+1}）与 [low, low+diff] 有交集。
   这等价于：每个位置的候选最小值 <= low+diff，且候选最大值 >= low。
   即 low >= max(候选最大值 - diff) 且 low <= min(候选最小值)。
   如果 max(候选最大值 - diff) <= min(候选最小值)，则存在合法的 low。

   不对，这不对。每个位置的候选值不是区间，而是离散的点。

   让我重新想。每个位置的候选值集合 S_i 要么是 {x}（不需改变），要么是 {x-1, x+1}（需改变）。
   我们需要从每个 S_i 中选一个值，使得 max(选中值) - min(选中值) 最小。

   这个问题的经典解法：
   - 考虑所有候选值对所有 (a, b)，其中 a 来自某个 S_i，b 来自某个 S_j。
   - 对于目标 diff，检查是否可以从每个 S_i 选一个值，使得所有选中值在某个长度为 diff 的区间内。
   - 二分 diff，用贪心验证。

   验证方法：对于给定的 diff，枚举最小值 low（从所有候选值中），检查是否每个 S_i 都有值 <= low + diff。
   同时每个 S_i 的值都要 >= low。
   所以 low >= 每个 S_i 的最小候选值中的最大值... 不对。

   让我换一种方式。排序所有候选值，然后滑动窗口。维护窗口 [low, low+diff]，检查是否每个位置都有一个候选值在窗口内。

   实际上 n 可以很大 (10^5)，但每个位置只有 1-2 个候选值。总候选值数 = O(n)。

   算法：
   1. 收集所有 (值, 位置) 对，排序。
   2. 用滑动窗口，维护窗口大小 <= diff。
   3. 检查窗口内是否覆盖了所有位置。
   4. 二分 diff 或直接双指针扫描。

   不对，这不对。问题是从每个位置选一个值，不是选一个子集。

   让我用更直接的方法。对于二分的 diff：
   - low 的范围由所有位置的候选值决定。
   - low 必须满足：对每个位置 i，S_i 中存在一个值 v_i >= low 且 v_i <= low + diff。
   - 即 low <= v_i 且 v_i <= low + diff，所以 low ∈ [v_i - diff, v_i]。
   - 对每个位置 i，low 的有效范围是所有 v_i 的 [v_i - diff, v_i] 的并集。
   - 最终 low 的范围是所有位置有效范围的交集。
   - 如果交集非空，则 diff 可行。

   每个位置的候选值最多 2 个，所以有效范围是 1-2 个区间的并集。
   计算所有位置有效范围的交集：对每个位置，有效范围是 [min(S_i) - diff 的某个值 ... ]。

   这太复杂了。让我用更简单的二分验证方法。

   对于给定的 diff：
   - 枚举 low（所有候选值中选一个作为 low 的起点），检查是否每个位置都有候选值在 [low, low + diff] 中。
   - 但 low 可以是任意实数，不一定是候选值。

   实际上，最优解中，min 或 max 一定是某个候选值（否则可以缩小 diff）。所以可以枚举 min 是某个候选值，然后计算对应的 max，取最小的 diff。

   算法：
   1. 收集所有候选值。
   2. 排序。
   3. 对每个候选值作为 low，用贪心/扫描线检查是否每个位置都有值在 [low, low + diff] 中。

   但这需要枚举 O(n) 个候选值作为 low，每次检查 O(n) 个位置。总 O(n^2)。

   优化：对候选值排序后，用双指针。维护窗口 [low, high]，使得窗口内包含至少一个来自每个位置的值。

   这就是经典的"覆盖所有组的最小窗口"问题。用双指针：
   1. 将所有 (值, 位置) 对按值排序。
   2. 维护左右指针，用计数器跟踪窗口内覆盖了多少个不同位置。
   3. 当所有位置都被覆盖时，尝试收缩左指针。

   时间 O(n log n)。

## Solution

[SourceCode](./solution.js)
