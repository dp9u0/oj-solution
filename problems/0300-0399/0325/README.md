# [325] 和等于 k 的最长子数组长度

## Description


```md
https://leetcode.cn/problems/maximum-size-subarray-sum-equals-k/description/
* algorithms
* Medium (52.57%)
* Likes:    259
* Dislikes: -
* Testcase Example:  '[1,-1,5,-2,3]\n3'
给定一个数组 nums 和一个目标值 k，找到和等于 k 的最长连续子数组长度。如果不存在任意一个符合要求的子数组，则返回 0。

示例 1:
输入: nums = [1,-1,5,-2,3], k = 3
输出: 4
解释: 子数组 [1, -1, 5, -2] 和等于 3，且长度最长。
示例 2:
输入: nums = [-2,-1,2,1], k = 1
输出: 2
解释: 子数组 [-1, 2] 和等于 1，且长度最长。

提示：
1 <= nums.length <= 2 * 105
-104 <= nums[i] <= 104
-109 <= k <= 109
Hint 1: Compute the prefix sum array where psum[i] is the sum of all the elements from 0 to i.
Hint 2: At each index i, the sum of the prefix is psum[i], so we are searching for the index x where psum[x] = psum[i] - k.
The subarray [x + 1, i] will be of sum k.
Hint 3: Use a hashmap to get the index x efficiently or to determine that it does not exist.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an integer array `nums` and an integer `k`, return the maximum length of a subarray that sums to exactly `k` (0 if none). Contains negatives.

**Example:**
nums = [1,-1,5,-2,3], k = 3 → 4 ([1,-1,5,-2])

**Constraints:**
- 1 <= nums.length <= 2*10^5, values may be negative (sliding window won't work)

## Approach

前缀和 + Map:sum[i] - sum[j] = k ⇒ 查最早出现 sum[i] - k 的下标 j。Map 只记录每个前缀和的**最早**出现位置(保最长)。

时间 O(n),空间 O(n)。
