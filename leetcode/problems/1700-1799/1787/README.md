# [1787] Make the XOR of All Segments Equal to Zero

## Description

[LeetCode Problem Description](https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/description/)

* algorithms
* Hard (40.83%)
* Likes:    425
* Dislikes: 27
* Testcase Example:  '[1,2,0,3,0]\n1'

```md
You are given an array nums​​​ and an integer k​​​​​. The XOR of a segment [left, right] where left <= right is the XOR of all the elements with indices between left and right, inclusive: nums[left] XOR nums[left+1] XOR ... XOR nums[right].
Return the minimum number of elements to change in the array such that the XOR of all segments of size k​​​​​​ is equal to zero.

Example 1:

Input: nums = [1,2,0,3,0], k = 1
Output: 3
Explanation: Modify the array from [1,2,0,3,0] to from [0,0,0,0,0].

Example 2:

Input: nums = [3,4,5,2,1,7,3,4,7], k = 3
Output: 3
Explanation: Modify the array from [3,4,5,2,1,7,3,4,7] to [3,4,7,3,4,7,3,4,7].

Example 3:

Input: nums = [1,2,4,1,2,5,1,2,6], k = 3
Output: 3
Explanation: Modify the array from [1,2,4,1,2,5,1,2,6] to [1,2,3,1,2,3,1,2,3].

Constraints:

1 <= k <= nums.length <= 2000
​​​​​​0 <= nums[i] < 210


```

## Solution

[SourceCode](./solution.js)

---

### 题目翻译

给定数组 nums 和整数 k，返回最少修改多少个元素使得所有长度为 k 的子段 XOR 都等于 0。

### 解题思路

**周期性 + DP**

1. 所有长度 k 段 XOR 为 0 意味着 `nums[i] = nums[i+k]`（周期为 k）
2. 按 `i % k` 将数组分为 k 组，每组内元素应相同
3. 最终约束：`nums[0] ^ nums[1] ^ ... ^ nums[k-1] = 0`
4. DP：`dp[i][x]` = 处理完前 i 组，XOR 为 x 的最小修改次数
5. 对第 i 组，统计频率，枚举目标值 v，转移 `dp[i][x^v] = min(dp[i-1][x] + 组大小 - freq[v])`
6. 优化：对每组记录最大频率，用最小代价转移未匹配的 XOR 值
