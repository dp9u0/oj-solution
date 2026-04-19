# [3312] Sorted GCD Pair Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sorted-gcd-pair-queries/description/)

* algorithms
* Hard (22.70%)
* Likes:    101
* Dislikes: 5
* Testcase Example:  '[2,3,4]\n[0,2,2]'

```md
You are given an integer array nums of length n and an integer array queries.
Let gcdPairs denote an array obtained by calculating the GCD of all possible pairs (nums[i], nums[j]), where 0 <= i < j < n, and then sorting these values in ascending order.
For each query queries[i], you need to find the element at index queries[i] in gcdPairs.
Return an integer array answer, where answer[i] is the value at gcdPairs[queries[i]] for each query.
The term gcd(a, b) denotes the greatest common divisor of a and b.

Example 1:

Input: nums = [2,3,4], queries = [0,2,2]
Output: [1,2,2]
Explanation:
gcdPairs = [gcd(nums[0], nums[1]), gcd(nums[0], nums[2]), gcd(nums[1], nums[2])] = [1, 2, 1].
After sorting in ascending order, gcdPairs = [1, 1, 2].
So, the answer is [gcdPairs[queries[0]], gcdPairs[queries[1]], gcdPairs[queries[2]]] = [1, 2, 2].

Example 2:

Input: nums = [4,4,2,1], queries = [5,3,1,0]
Output: [4,2,1,1]
Explanation:
gcdPairs sorted in ascending order is [1, 1, 1, 2, 2, 4].

Example 3:

Input: nums = [2,2], queries = [0,0]
Output: [2,2]
Explanation:
gcdPairs = [2].


Constraints:

2 <= n == nums.length <= 105
1 <= nums[i] <= 5 * 104
1 <= queries.length <= 105
0 <= queries[i] < n * (n - 1) / 2


```

## 中文翻译

给定数组 nums 和查询数组 queries。计算所有 nums 中两两 GCD，排序后，对每个 queries[i] 返回排序后第 queries[i] 个元素。

约束：n <= 10^5, nums[i] <= 5*10^4, queries.length <= 10^5

## 解题思路

**倍数容斥（类莫比乌斯反演）**

1. cnt[g] = nums 中 g 的倍数的个数（调和级数求和）。
2. pairCount[g] = C(cnt[g],2) - sum(pairCount[k*g], k>=2)。从大到小处理，排除 GCD 为 g 的倍数的对。
3. prefix[g] = pairCount[1..g] 的前缀和 = GCD <= g 的对数。
4. 对每个查询二分查找最小的 g 使 prefix[g] > q。

## Solution

[SourceCode](./solution.js)
