# [373] Find K Pairs with Smallest Sums

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description/)

* algorithms
* Medium (41.73%)
* Testcase Example:  '[1,7,11]\n[2,4,6]\n3'

```md
You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.
Define a pair (u, v) which consists of one element from the first array and one element from the second array.
Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

Example 1:
Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]]
Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
Example 2:
Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [[1,1],[1,1]]
Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

Constraints:
1
-10^9
nums1 and nums2 both are sorted in non-decreasing order.
1
k

```

## Solution

[SourceCode](./solution.js)

### 题目描述 (翻译)
给定两个以非递减顺序排序的整数数组 `nums1` 和 `nums2` ，以及一个整数 `k` 。
定义一对值 `(u,v)`，其中第一个元素来自 `nums1`，第二个元素来自 `nums2`。
请找到和最小的 `k` 个数对 `(u1, v1), (u2, v2), ..., (uk, vk)`。

示例 1:
输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
输出: [[1,2],[1,4],[1,6]]

示例 2:
输入: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
输出: [[1,1],[1,1]]

约束:
1 <= nums1.length, nums2.length <= 10^5
-10^9 <= nums1[i], nums2[i] <= 10^9
`nums1` 和 `nums2` 都是非递减排序的。
1 <= k <= 10^4
k <= nums1.length * nums2.length

### 解题思路 (Approach)
这是一道经典的使用优先队列（小顶堆）解决的题目（多路归并）。
因为数组是有序的，所以最小的数对肯定是 `(nums1[0], nums2[0])`。
我们可以将初始可能的数对放入堆中。
更高效的方法是：
初始时，我们将 `nums1` 的前 `min(k, nums1.length)` 个元素与 `nums2[0]` 组成的数对加入最小堆中。即 `(nums1[i], nums2[0])`，其中 `i` 从 0 到 `min(k, len(nums1))-1`。
在堆中存储元素：`[sum, i, j]`，表示和为 `sum`，对应的元素下标分别是 `nums1` 的 `i` 和 `nums2` 的 `j`。

然后执行 `k` 次以下操作：
1. 从堆中弹出和最小的数对，即 `[sum, i, j]`，将 `[nums1[i], nums2[j]]` 加入结果列表。
2. 接下来，由于 `nums1[i]` 已经与 `nums2[j]` 配对，下一个可能与 `nums1[i]` 配对的元素是 `nums2[j+1]`。
3. 如果 `j+1 < nums2.length`，将新的数对 `[nums1[i] + nums2[j+1], i, j+1]` 加入堆中。

通过这种方式，我们避免了生成所有的数对，并且利用最小堆能高效地找到最小的 `k` 个数对。
JS 没有内置堆，需要手动实现一个简单的最小堆。
