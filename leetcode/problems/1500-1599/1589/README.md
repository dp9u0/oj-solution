# [1589] Maximum Sum Obtained of Any Permutation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/description/)

* algorithms
* Medium (40.64%)
* Likes:    831
* Dislikes: 40
* Testcase Example:  '[1,2,3,4,5]\n[[1,3],[0,1]]'

```md
We have an array of integers, nums, and an array of requests where requests[i] = [starti, endi]. The ith request asks for the sum of nums[starti] + nums[starti + 1] + ... + nums[endi - 1] + nums[endi]. Both starti and endi are 0-indexed.
Return the maximum total sum of all requests among all permutations of nums.
Since the answer may be too large, return it modulo 109 + 7.

Example 1:

Input: nums = [1,2,3,4,5], requests = [[1,3],[0,1]]
Output: 19
Explanation: One permutation of nums is [2,1,3,4,5] with the following result:
requests[0] -> nums[1] + nums[2] + nums[3] = 1 + 3 + 4 = 8
requests[1] -> nums[0] + nums[1] = 2 + 1 = 3
Total sum: 8 + 3 = 11.
A permutation with a higher total sum is [3,5,4,2,1] with the following result:
requests[0] -> nums[1] + nums[2] + nums[3] = 5 + 4 + 2 = 11
requests[1] -> nums[0] + nums[1] = 3 + 5  = 8
Total sum: 11 + 8 = 19, which is the best that you can do.

Example 2:

Input: nums = [1,2,3,4,5,6], requests = [[0,1]]
Output: 11
Explanation: A permutation with the max total sum is [6,5,4,3,2,1] with request sums [11].
Example 3:

Input: nums = [1,2,3,4,5,10], requests = [[0,2],[1,3],[1,1]]
Output: 47
Explanation: A permutation with the max total sum is [4,10,5,3,2,1] with request sums [19,18,10].

Constraints:

n == nums.length
1 <= n <= 105
0 <= nums[i]<= 105
1 <= requests.length <=105
requests[i].length == 2
0 <= starti<= endi<n


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums 和请求列表 requests，requests[i] = [starti, endi] 表示求 nums[starti..endi] 的和。可以任意重排 nums，返回所有请求总和的最大值，对 10^9+7 取模。

## 解题思路

**差分数组 + 贪心**

1. 用差分数组统计每个位置被请求覆盖的次数（频率）
2. 频率最高的位置放最大的数（贪心）
3. 对频率数组和 nums 都降序排序，对应相乘求和

差分数组：diff[start]++, diff[end+1]--，前缀和还原频率。

时间复杂度 O(n log n + m)，空间复杂度 O(n)。
