# [4017] Peaks in Array II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/peaks-in-array-ii/description/)

* algorithms
* Hard (27.83%)
* Likes:    29
* Dislikes: 3
* Testcase Example:  '[1,3,2,4]\n[[1,0,3],[2,1,1],[1,0,3]]'

```md
You are given an integer array nums of length n and a 2D integer array queries.
A subarray nums[i..j] is called a peak subarray if:

Its length is at least 3.
There exists an index k such that i < k < j and:

nums[k] > nums[k - 1]
nums[k] > nums[k + 1]



You have to process queries of two types:

[1, li, ri]: Calculate the number of peak subarrays fully contained within nums[li..ri].
[2, indexi, vali]: Update nums[indexi] to vali. This update applies to all subsequent queries.

Return an array answer, where answer[i] is the answer to the ith query of type 1 in the order they appear.

Example 1:

Input: nums = [1,3,2,4], queries = [[1,0,3],[2,1,1],[1,0,3]]
Output: [2,0]
Explanation:​​​​​​​

Query [1, 0, 3]:

[1, 3, 2]: choose k = 1. Then nums[k] = 3, nums[k - 1] = 1, and nums[k + 1] = 2. Since 3 > 1 and 3 > 2, this is a peak subarray.
[1, 3, 2, 4]: choose k = 1. Then nums[k] = 3, nums[k - 1] = 1, and nums[k + 1] = 2. Since 3 > 1 and 3 > 2, this is a peak subarray.


Query [2, 1, 1]: Update nums[1] to 1. The array becomes [1, 1, 2, 4].
Query [1, 0, 3]: There are no peak subarrays now.
Thus, answer = [2, 0].


Example 2:

Input: nums = [9,8,9,8], queries = [[1,1,3],[2,2,1],[1,0,2]]
Output: [1,0]
Explanation:

Query [1, 1, 3]:

nums[1..3] = [8, 9, 8]: choose k = 2. Then nums[k] = 9, nums[k - 1] = 8, and nums[k + 1] = 8. Since 9 > 8 and 9 > 8, this is a peak subarray.


Query [2, 2, 1]: Update nums[2] to 1. The array becomes [9, 8, 1, 8].
Query [1, 0, 2]: There are no peak subarrays.
Thus, answer = [1, 0].


Example 3:

Input: nums = [3,6,2,7,1], queries = [[1,1,3],[2,3,0],[1,0,4]]
Output: [0,3]
Explanation:

Query [1, 1, 3]: The only subarray of length at least 3 is [6, 2, 7]. Its only possible peak index is k = 2, but nums[2] = 2 is less than both nums[1] = 6 and nums[3] = 7, so it is not a peak subarray.
Query [2, 3, 0]: Update nums[3] to 0. The array becomes [3, 6, 2, 0, 1].
Query [1, 0, 4]:

[3, 6, 2]: choose k = 1. Then nums[k] = 6, nums[k - 1] = 3, and nums[k + 1] = 2. Since 6 > 3 and 6 > 2, this is a peak subarray.
[3, 6, 2, 0]: choose k = 1. Then nums[k] = 6, nums[k - 1] = 3, and nums[k + 1] = 2. Since 6 > 3 and 6 > 2, this is a peak subarray.
[3, 6, 2, 0, 1]: choose k = 1. Then nums[k] = 6, nums[k - 1] = 3, and nums[k + 1] = 2. Since 6 > 3 and 6 > 2, this is a peak subarray.


Thus, answer = [0, 3].



Constraints:

3 <= n == nums.length <= 105
0 <= nums[i] <= 105
1 <= queries.length <= 105
queries[i] = [1, li, ri] or queries[i] = [2, indexi, vali]
0 <= li < ri <= n - 1
0 <= indexi <= n - 1
0 <= vali <= 105


```

## Solution

[SourceCode](./solution.js)

---

## 中文翻译

给你一个长度为 n 的整数数组 nums 和一个二维整数数组 queries。

如果子数组 nums[i..j] 满足以下条件，则称之为"峰子数组"：

- 长度至少为 3。
- 存在下标 k 使得 i < k < j，且 nums[k] > nums[k-1] 且 nums[k] > nums[k+1]。

你需要处理两类查询：

- [1, li, ri]：计算完全包含在 nums[li..ri] 内的峰子数组的数量。
- [2, indexi, vali]：将 nums[indexi] 更新为 vali，该更新对后续所有查询生效。

返回数组 answer，其中 answer[i] 是按出现顺序第 i 个类型 1 查询的答案。

## 解题思路

1. **转化计数**：子数组 [i, j] 是峰子数组 ⟺ 存在峰下标 k（nums[k] 严格大于两侧）满足 i < k < j（长度 ≥3 自动成立）。设 P(j) = 最大的满足 p < j 的峰下标 p（无峰记 0），则对固定 j，合法 i 的个数为 max(0, P(j) - l)。故查询 [l, r] 的答案为 Σ_{j=l..r} max(0, P(j) - l)。

2. **单调性**：P(j) 随 j 单调不减。于是答案 = Σ_{j=j*..r} P(j) - (r-j*+1)·l，其中 j* 是 [l, r] 内第一个 P(j) ≥ l+1 的下标，可用线段树按最大值二分下降 O(log n) 求出；区间和由线段树直接给出。

3. **更新**：修改 nums[x] 只可能改变 k ∈ {x-1, x, x+1} 处的峰状态。设峰集合（用树状数组维护，支持前驱/后继查询）：
   - k 变成峰：对 j ∈ [k+1, next-1]（next 为 k 之后的下一个峰，无则 n-1）区间赋值 P(j) = k。
   - k 不再是峰：对同一段区间赋值 P(j) = prev（prev 为 k 之前的上一个峰，无则 0）。

4. **数据结构**：线段树支持区间赋值（懒标记）+ 区间和 + 区间最大值（用于单调二分找 j*）。总复杂度 O((n + q) log n)。
