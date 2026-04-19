# [3748] Count Stable Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-stable-subarrays/description/)

* algorithms
* Hard (32.47%)
* Likes:    65
* Dislikes: 2
* Testcase Example:  '[3,1,2]\n[[0,1],[1,2],[0,2]]'

```md
You are given an integer array nums.
A subarray of nums is called stable if it contains no inversions, i.e., there is no pair of indices i < j such that nums[i] > nums[j].
You are also given a 2D integer array queries of length q, where each queries[i] = [li, ri] represents a query. For each query [li, ri], compute the number of stable subarrays that lie entirely within the segment nums[li..ri].
Return an integer array ans of length q, where ans[i] is the answer to the ith query.​​​​​​​​​​​​​​
Note:

A single element subarray is considered stable.


Example 1:

Input: nums = [3,1,2], queries = [[0,1],[1,2],[0,2]]
Output: [2,3,4]
Explanation:​​​​​

For queries[0] = [0, 1], the subarray is [nums[0], nums[1]] = [3, 1].

The stable subarrays are [3] and [1]. The total number of stable subarrays is 2.


For queries[1] = [1, 2], the subarray is [nums[1], nums[2]] = [1, 2].

The stable subarrays are [1], [2], and [1, 2]. The total number of stable subarrays is 3.


For queries[2] = [0, 2], the subarray is [nums[0], nums[1], nums[2]] = [3, 1, 2].

The stable subarrays are [3], [1], [2], and [1, 2]. The total number of stable subarrays is 4.



Thus, ans = [2, 3, 4].

Example 2:

Input: nums = [2,2], queries = [[0,1],[0,0]]
Output: [3,1]
Explanation:

For queries[0] = [0, 1], the subarray is [nums[0], nums[1]] = [2, 2].

The stable subarrays are [2], [2], and [2, 2]. The total number of stable subarrays is 3.


For queries[1] = [0, 0], the subarray is [nums[0]] = [2].

The stable subarray is [2]. The total number of stable subarrays is 1.



Thus, ans = [3, 1].


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
1 <= queries.length <= 105
queries[i] = [li, ri]
0 <= li <= ri <= nums.length - 1


```

## 翻译

给定数组 nums，稳定子数组指非递减子数组（无逆序对）。给定 q 个查询 [l,r]，求每个查询区间内稳定子数组的数量。

## 解题思路

对每个位置 i，计算 L[i] 表示以 i 结尾的最长非递减子数组的左端点。则以 i 结尾的稳定子数组有 cnt[i] = i - L[i] + 1 个。前缀和 S[i] = sum(cnt[0..i])。对于查询 [l,r]，答案 = S[r] - S[l-1] - 查询区间内那些 cnt[i] 超出查询范围的子数组数量。具体地，对于每个 i∈[l,r]，贡献为 min(cnt[i], i-l+1)，即 max(i-L[i]+1, i-l+1) = i - max(L[i], l) + 1。需要对 L[i] < l 的部分去掉多算的。

换一种思路：对于查询 [l,r]，答案 = sum_{i=l}^{r} min(i-L[i]+1, i-l+1) = sum_{i=l}^{r} (i - max(L[i],l) + 1)。拆分为 L[i] >= l 和 L[i] < l 两部分。用前缀和 + 离线处理（按 l 排序查询，用树状数组维护）。

O((n+q) log n)。

## Solution

[SourceCode](./solution.js)
