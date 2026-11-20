# [1885] 统计数对

## Description


```md
https://leetcode.cn/problems/count-pairs-in-two-arrays/description/
* algorithms
* Medium (54.70%)
* Likes:    24
* Dislikes: -
* Testcase Example:  '[2,1,2,1]\n[1,2,1,2]'
给你两个长度为 n 的整数数组 nums1 和 nums2 ，找出所有满足 i < j 且 nums1[i] + nums1[j] > nums2[i] + nums2[j] 的数对 (i, j) 。
返回满足条件数对的 个数 。

示例 1：
输入：nums1 = [2,1,2,1], nums2 = [1,2,1,2]
输出：1
解释：满足条件的数对有 1 个：(0, 2) ，因为 nums1[0] + nums1[2] = 2 + 2 > nums2[0] + nums2[2] = 1 + 1
示例 2：
输入：nums1 = [1,10,6,2], nums2 = [1,4,1,5]
输出：5
解释：以下数对满足条件：
- (0, 1) 因为 nums1[0] + nums1[1] = 1 + 10 > nums2[0] + nums2[1] = 1 + 4
- (0, 2) 因为 nums1[0] + nums1[2] = 1 + 6 > nums2[0] + nums2[2] = 1 + 1
- (1, 2) 因为 nums1[1] + nums1[2] = 10 + 6 > nums2[1] + nums2[2] = 4 + 1
- (1, 3) 因为 nums1[1] + nums1[3] = 10 + 2 > nums2[1] + nums2[3] = 4 + 5
- (2, 3) 因为 nums1[2] + nums1[3] = 6 + 2 > nums2[2] + nums2[3] = 1 + 5

提示：
n == nums1.length == nums2.length
1 <= n <= 105
1 <= nums1[i], nums2[i] <= 105
Hint 1: We can write it as nums1[i] - nums2[i] > nums2[j] - nums1[j] instead of nums1[i] + nums1[j] > nums2[i] + nums2[j].
Hint 2: Store nums1[idx] - nums2[idx] in a data structure.
Hint 3: Store nums2[idx] - nums1[idx] in a different data structure.
Hint 4: For each integer in the first data structure, count the number of the strictly smaller integers in the second data structure with a larger index in the original array.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given two integer arrays `nums1` and `nums2` of length `n`, count the pairs `(i, j)` with `i < j` such that `nums1[i] + nums1[j] > nums2[i] + nums2[j]`. Return the number of pairs.

Example 1:
Input: nums1 = [2,1,2,1], nums2 = [1,2,1,2]
Output: 1

Example 2:
Input: nums1 = [1,10,6,2], nums2 = [1,4,1,5]
Output: 5

Constraints: n == nums1.length == nums2.length, 1 <= n <= 10^5, 1 <= nums1[i], nums2[i] <= 10^5.

## Approach

With `d[k] = nums1[k] - nums2[k]` the condition becomes `d[i] + d[j] > 0`, which is symmetric in the pair — so the answer is the number of unordered pairs of distinct indices with `d[p] + d[q] > 0`, independent of order.

Sort `d` ascending and use two pointers: for each `r` from `n-1` downward, advance `l` while `d[l] + d[r] <= 0`; then `d[r]` forms a valid pair with each of the `r - l` elements at indices `l..r-1`. Once `l` reaches `r`, no smaller `r` can pair.

Time O(n log n) for the sort, O(n) for the sweep.
