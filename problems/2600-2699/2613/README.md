# [2613] 美数对

## Description


```md
https://leetcode.cn/problems/beautiful-pairs/description/
* algorithms
* Hard (33.40%)
* Likes:    4
* Dislikes: -
* Testcase Example:  '[1,2,3,2,4]\n[2,3,1,2,3]'
给定两个长度相同的 下标从 0 开始 的整数数组 nums1 和 nums2 ，如果
nums1[i] - nums1[j]
+
nums2[i] - nums2[j]
在所有可能的下标对中是最小的，其中 i < j ，则称下标对 (i,j) 为 美 数对，
返回美数对。如果有多个美数对，则返回字典序最小的美数对。
注意：

x
表示 x 的绝对值。
一对索引 (i1, j1) 在字典序意义下小于 (i2, j2) ，当且仅当 i1 < i2 或 i1 == i2 且 j1 < j2 。

示例 1 ：
输入：nums1 = [1,2,3,2,4], nums2 = [2,3,1,2,3]
输出：[0,3]
解释：取下标为 0 和下标为 3 的数对，计算出
nums1[0]-nums1[3]
+
nums2[0]-nums2[3]
的值为 1 ，这是我们能够得到的最小值。
示例 2 ：
输入：nums1 = [1,2,4,3,2,5], nums2 = [1,4,2,3,5,1]
输出：[1,4]
解释：取下标为 1 和下标为 4 的数对，计算出
nums1[1]-nums1[4]
+
nums2[1]-nums2[4]
的值为 1，这是我们可以达到的最小值。

提示：
2 <= nums1.length, nums2.length <= 105
nums1.length == nums2.length
0 <= nums1i <= nums1.length
0 <= nums2i <= nums2.length
Hint 1: Use Range Queries Data Structures to optimize the algorithm

```

## Solution

[SourceCode](./solution.js)

## English Translation

Among all pairs (i, j), i < j, minimize |nums1[i] - nums1[j]| + |nums2[i] - nums2[j]|; return the lexicographically smallest minimizing pair.

Example 1:
Input: nums1 = [1,2,3,2,4], nums2 = [2,3,1,2,3]
Output: [0,3]

Example 2:
Input: nums1 = [1,2,4,3,2,5], nums2 = [1,4,2,3,5,1]
Output: [1,4]

Constraints: length <= 10^5, values <= length.

## Approach

Manhattan nearest-neighbor among earlier points, per point j, via 4 quadrant transforms: distance = (a_j+b_j) - (a_i+b_i), (a_i+b_i) - (a_j+b_j), etc. Each quadrant reduces to an extreme-value query over b-coordinate ranges, answered with Fenwick trees storing (extreme value, smallest index). Two sweeps (a ascending for a_i <= a_j quadrants, descending for a_i >= a_j); equal-a pairs belong to the ascending sweep with query-before-insert interleaving so same-a smaller-index pairs are seen. Guard the Fenwick update against non-positive positions (reversed coordinates can go to 0 -> 0 & -0 loops forever). Track the lexicographically smallest (i, j) among minimal distances. O(n log n).
