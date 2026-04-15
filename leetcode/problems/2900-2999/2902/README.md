# [2902] Count of Sub-Multisets With Bounded Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/description/)

* algorithms
* Hard (22.27%)
* Likes:    163
* Dislikes: 27
* Testcase Example:  '[1,2,2,3]\n6\n6'

```md
You are given a 0-indexed array nums of non-negative integers, and two integers l and r.
Return the count of sub-multisets within nums where the sum of elements in each subset falls within the inclusive range of [l, r].
Since the answer may be large, return it modulo 109 + 7.
A sub-multiset is an unordered collection of elements of the array in which a given value x can occur 0, 1, ..., occ[x] times, where occ[x] is the number of occurrences of x in the array.
Note that:

Two sub-multisets are the same if sorting both sub-multisets results in identical multisets.
The sum of an empty multiset is 0.


Example 1:

Input: nums = [1,2,2,3], l = 6, r = 6
Output: 1
Explanation: The only subset of nums that has a sum of 6 is {1, 2, 3}.

Example 2:

Input: nums = [2,1,4,2,7], l = 1, r = 5
Output: 7
Explanation: The subsets of nums that have a sum within the range [1, 5] are {1}, {2}, {4}, {2, 2}, {1, 2}, {1, 4}, and {1, 2, 2}.

Example 3:

Input: nums = [1,2,1,3,5,2], l = 3, r = 5
Output: 9
Explanation: The subsets of nums that have a sum within the range [3, 5] are {3}, {5}, {1, 2}, {1, 3}, {2, 2}, {2, 3}, {1, 1, 2}, {1, 1, 3}, and {1, 2, 2}.

Constraints:

1 <= nums.length <= 2 * 104
0 <= nums[i] <= 2 * 104
Sum of nums does not exceed 2 * 104.
0 <= l <= r <= 2 * 104


```

## 中文翻译

给定非负整数数组 nums 和整数 l、r，求 nums 的子多重集中元素和在 [l, r] 范围内的个数。结果对 10^9+7 取模。子多重集中每个值 x 可以出现 0 到 occ[x] 次。空集和为 0。

## 解题思路

多重背包 DP。先统计每个值的出现次数，用 dp[s] 表示和为 s 的子多重集数。对每个不同的值 v（出现 cnt 次），用前缀和优化转移：dp_new[s] = sum(dp[s-j*v] for j=0..cnt)，可以用前缀和在 O(total_sum) 内完成。最终答案为 sum(dp[s]) for s in [l, r]。注意值为 0 的元素特殊处理：有 z 个 0 时，答案乘 (z+1)。

时间复杂度：O(n + S)，S 为 nums 元素总和。空间复杂度：O(S)。

## Solution

[SourceCode](./solution.js)
