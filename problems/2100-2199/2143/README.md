# [2143] 在两个数组的区间中选取数字

## Description


```md
https://leetcode.cn/problems/choose-numbers-from-two-arrays-in-range/description/
* algorithms
* Hard (53.72%)
* Likes:    11
* Dislikes: -
* Testcase Example:  '[1,2,5]\n[2,6,3]'
给你两个 下标从 0 开始，长度为 n 的整数数组 nums1 和 nums2。
如果一个区间 [l, r] （包含左右端点，0 <= l <= r < n）满足下列条件，那么这个区间就是 平衡 的：
对每个在区间 [l, r] 范围内的 i，你需要选取 nums1[i] 或者 nums2[i]；
从 nums1 中选取的数字和与从 nums2 中选取的数字和相等。（如果你没有从某个数组中选取任何数字，那么数字和被视为 0）。
如果两个 平衡 的区间 [l1, r1] 和 [l2, r2] 满足下列条件之一，那么它们就是 不同 的：
l1 != l2
r1 != r2
两个区间中的数字选取情况不同（也就是说，存在至少一个 i，使得在第一个区间中，nums1[i] 被选中, 而在第二个区间中，nums2[i] 被选中，或者相反的情况）。
请返回 不同 的平衡的区间数目。由于答案可能很大，请返回答案 模 109+7 的结果。

示例 1:
输入: nums1 = [1,2,5], nums2 = [2,6,3]
输出: 3
解释: 平衡的区间有:
- [0, 1], 我们选取 nums2[0] 和 nums1[1]。
从 nums1 中选取的数字和与从 nums2 中选取的数字和相等: 2 = 2.
- [0, 2], 我们选取 nums1[0], nums2[1] 和 nums1[2]。
从 nums1 中选取的数字和与从 nums2 中选取的数字和相等: 1 + 5 = 6。
- [0, 2], 我们选取 nums1[0], nums1[1] 和 nums2[2]。
从 nums1 中选取的数字和与从 nums2 中选取的数字和相等: 1 + 2 = 3。
注意第二个区间和第三个区间是不同的。
因为在第二个平衡的区间中，我们选取了 nums2[1]，但是在第三个平衡的区间中，我们选取了 nums1[1]。
示例 2：
输入: nums1 = [0,1], nums2 = [1,0]
输出: 4
解释: 平衡的区间有:
- [0, 0], 我们选取 nums1[0]。
从 nums1 中选取的数字和与从 nums2 中选取的数字和相等: 0 = 0。
- [1, 1], 我们选取 nums2[1]。
从 nums1 中选取的数字和与从 nums2 中选取的数字和相等: 0 = 0。
- [0, 1], 我们选取 nums1[0] 和 nums2[1]。
从 nums1 中选取的数字和与从 nums2 中选取的数字和相等: 0 = 0。
- [0, 1], 我们选取 nums2[0] 和 nums1[1]。
从 nums1 中选取的数字和与从 nums2 中选取的数字和相等: 1 = 1。

提示:
n == nums1.length == nums2.length
1 <= n <= 100
0 <= nums1[i], nums2[i] <= 100
Hint 1: If you know the possible sums you can get for a range [l, r], how can you use this information to calculate the possible sums you can get for a range [l, r + 1]?
Hint 2: For the range [l, r], if it is possible to choose elements such that the sum of elements you picked from nums1 is x and the sum of elements you picked from nums2 is y, then (x + nums1[r + 1], y) and (x, y + nums2[r + 1]) are possible sums you can get in the range [l, r + 1].
Hint 3: How can we save the possible sums obtainable at a given index so that we can reuse this information later?

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given two length-n arrays `nums1`, `nums2`, a range `[l, r]` is balanced if we can pick, for every i in [l, r], either `nums1[i]` or `nums2[i]` such that the sum picked from nums1 equals the sum picked from nums2. Two balanced ranges differ if endpoints differ or any selection differs. Count distinct balanced ranges modulo 1e9 + 7.

Example 1:
Input: nums1 = [1,2,5], nums2 = [2,6,3]
Output: 3

Example 2:
Input: nums1 = [0,1], nums2 = [1,0]
Output: 4

Constraints: 1 <= n <= 100, 0 <= nums*[i] <= 100.

## Approach

For each left endpoint `l`, sweep `r` from `l` to `n-1` keeping `dp[d]` = number of selections over `nums*_[l..r]` with difference `d = sum1 - sum2` (offset by 10^4). Each new element splits every state into `d + nums1[r]` and `d - nums2[r]`. After processing `r`, add `dp[0]` (balanced selections for this [l, r]) to the answer.

Max |difference| = n * 100 = 10^4. Total O(n^2 * 20001) with typed arrays.
