# [2333] 最小差值平方和

## Description


```md
https://leetcode.cn/problems/minimum-sum-of-squared-difference/description/
* algorithms
* Medium (30.02%)
* Likes:    60
* Dislikes: -
* Testcase Example:  '[1,2,3,4]\n[2,10,20,19]\n0\n0'
给你两个下标从 0 开始的整数数组 nums1 和 nums2 ，长度为 n 。
数组 nums1 和 nums2 的 差值平方和 定义为所有满足 0 <= i < n 的 (nums1[i] - nums2[i])2 之和。
同时给你两个正整数 k1 和 k2 。你可以将 nums1 中的任意元素 +1 或者 -1 至多 k1 次。类似的，你可以将 nums2 中的任意元素 +1 或者 -1 至多 k2 次。
请你返回修改数组 nums1 至多 k1 次且修改数组 nums2 至多 k2 次后的最小 差值平方和 。
注意：你可以将数组中的元素变成 负 整数。

示例 1：
输入：nums1 = [1,2,3,4], nums2 = [2,10,20,19], k1 = 0, k2 = 0
输出：579
解释：nums1 和 nums2 中的元素不能修改，因为 k1 = 0 和 k2 = 0 。
差值平方和为：(1 - 2)2 + (2 - 10)2 + (3 - 20)2 + (4 - 19)2 = 579 。
示例 2：
输入：nums1 = [1,4,10,12], nums2 = [5,8,6,9], k1 = 1, k2 = 1
输出：43
解释：一种得到最小差值平方和的方式为：
- 将 nums1[0] 增加一次。
- 将 nums2[2] 增加一次。
最小差值平方和为：
(2 - 5)2 + (4 - 8)2 + (10 - 7)2 + (12 - 9)2 = 43 。
注意，也有其他方式可以得到最小差值平方和，但没有得到比 43 更小答案的方案。

提示：
n == nums1.length == nums2.length
1 <= n <= 105
0 <= nums1[i], nums2[i] <= 105
0 <= k1, k2 <= 109
Hint 1: There is no difference between the purpose of k1 and k2. Adding +1 to one element in nums1 is same as performing -1 to one element in nums2, and vice versa.
Hint 2: Reduce the sum of squared difference greedily. One operation of k should use the index that has the current maximum difference.
Hint 3: Binary search the maximum difference for the final result.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given two 0-indexed integer arrays `nums1` and `nums2`, both of length `n`.

The **sum of squared differences** of `nums1` and `nums2` is defined as the sum of `(nums1[i] - nums2[i])²` for all `0 <= i < n`.

You are also given two positive integers `k1` and `k2`. You can modify any element of `nums1` by `+1` or `-1` at most `k1` times. Similarly, you can modify any element of `nums2` by `+1` or `-1` at most `k2` times.

Return the minimum sum of squared differences after modifying `nums1` at most `k1` times and `nums2` at most `k2` times.

Note: you are allowed to modify the array elements to negative integers.

## 解题思路

- 只有差值的绝对值 `d[i] = |nums1[i] - nums2[i]|` 有意义，且 `k1`、`k2` 作用完全等价（对 nums1 加 1 等价于对 nums2 减 1），因此合并预算 `k = k1 + k2`，每次操作使某个 `d[i]` 减 1 或加 1；由于 `d[i] >= 0`，加 1 永远不优，即问题变成：用至多 `k` 次操作，每次把某个 `d[i]` 减 1，最小化 `Σ d[i]²`。
- 贪心是每次消减当前最大的差值，但 `k` 可达 `2e9`，逐次模拟会超时。
- 二分最终的"封顶值" `T`：`cost(T) = Σ max(0, d[i] - T)` 单调不增，找最小的 `T` 使 `cost(T) <= k`。此时所有 `d[i] > T` 都被削到 `T`，剩余次数 `r = k - cost(T)`。
- 剩余次数 `r` 继续把处于 `T` 的元素削到 `T-1`（由二分性质可证处于 `T` 的元素个数大于 `r`），每个元素使平方和减少 `T² - (T-1)² = 2T - 1`。
- 答案 = `Σ_{d[i]<=T} d[i]² + #{d[i]>T}·T² - r·(2T-1)`（`T = 0` 时无法再降，直接为 0）。
- 复杂度：二分 `O(n log V)`，`V` 为最大差值（`<= 1e5`）；数值用 JS Number 安全（和 `<= 1e15 < 2^53`）。
