# [LCR 061] 查找和最小的 K 对数字

## Description


```md
https://leetcode.cn/problems/qn8gGX/description/
* algorithms
* Medium (53.74%)
* Likes:    92
* Dislikes: -
* Testcase Example:  '[1,7,11]\n[2,4,6]\n3'
给定两个以升序排列的整数数组 nums1 和 nums2 , 以及一个整数 k 。
定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。
请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。

示例 1：
输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
输出: [1,2],[1,4],[1,6]
解释: 返回序列中的前 3 对数：
[1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
示例 2：
输入: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
输出: [1,1],[1,1]
解释: 返回序列中的前 2 对数：
[1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
示例 3：
输入: nums1 = [1,2], nums2 = [3], k = 3
输出: [1,3],[2,3]
解释: 也可能序列中所有的数对都被返回:[1,3],[2,3]

提示：
1 <= nums1.length, nums2.length <= 104
-109 <= nums1[i], nums2[i] <= 109
nums1, nums2 均为升序排列
1 <= k <= 1000

注意：本题与主站 373 题相同：https://leetcode.cn/problems/find-k-pairs-with-smallest-sums/

```

## English Description

You are given two integer arrays `nums1` and `nums2` sorted in ascending order and an integer `k`.

Define a pair `(u, v)` which consists of one element from the first array and one element from the second array.

Return the `k` pairs `(u1, v1), (u2, v2), ..., (uk, vk)` with the smallest sums.

**Example 1:**
Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]]
Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

**Example 2:**
Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [[1,1],[1,1]]

**Example 3:**
Input: nums1 = [1,2], nums2 = [3], k = 3
Output: [[1,3],[2,3]]
Explanation: All possible pairs are returned.

Constraints:
- 1 <= nums1.length, nums2.length <= 10^4
- -10^9 <= nums1[i], nums2[i] <= 10^9
- Both nums1 and nums2 are sorted in ascending order
- 1 <= k <= 1000

## Solution Approach

- 两个数组都升序，(nums1[i], nums2[j]) 的和随 i、j 单调递增，适合用**最小堆做多路归并**。
- 把 nums1 的前 `min(k, m)` 个元素分别与 nums2[0] 组合入堆，堆按 "和" 排序；每次弹出和最小的一对 (i, j) 即为下一个答案。
- 弹出后若 j+1 < n，说明 (i, j+1) 是 (i, j) 唯一更大的后继，将它入堆继续迭代——每条"流"(固定 i)内部保证有序，多路归并天然按全局和从小到大输出。
- 手写二叉最小堆，入堆/出堆均为 O(log L)，共弹出 k 次，整体 O(k·log min(m,k))，空间 O(min(m,k))，满足 m,n ≤ 1e4、k ≤ 1000。
- 边界：k 可能大于 m×n，此时输出全部数对即可（while 内同时判断 heap 非空）。

## Solution

[SourceCode](./solution.js)
