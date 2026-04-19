# [3196] Maximize Total Cost of Alternating Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/description/)

* algorithms
* Medium (29.63%)
* Likes:    196
* Dislikes: 29
* Testcase Example:  '[1,-2,3,4]'

```md
You are given an integer array nums with length n.
The cost of a subarray nums[l..r], where 0 <= l <= r < n, is defined as:
cost(l, r) = nums[l] - nums[l + 1] + ... + nums[r] * (&minus;1)r &minus; l
Your task is to split nums into subarrays such that the total cost of the subarrays is maximized, ensuring each element belongs to exactly one subarray.
Formally, if nums is split into k subarrays, where k > 1, at indices i1, i2, ..., ik &minus; 1, where 0 <= i1 < i2 < ... < ik - 1 < n - 1, then the total cost will be:
cost(0, i1) + cost(i1 + 1, i2) + ... + cost(ik &minus; 1 + 1, n &minus; 1)
Return an integer denoting the maximum total cost of the subarrays after splitting the array optimally.
Note: If nums is not split into subarrays, i.e. k = 1, the total cost is simply cost(0, n - 1).

Example 1:

Input: nums = [1,-2,3,4]
Output: 10
Explanation:
One way to maximize the total cost is by splitting [1, -2, 3, 4] into subarrays [1, -2, 3] and [4]. The total cost will be (1 + 2 + 3) + 4 = 10.

Example 2:

Input: nums = [1,-1,1,-1]
Output: 4
Explanation:
One way to maximize the total cost is by splitting [1, -1, 1, -1] into subarrays [1, -1] and [1, -1]. The total cost will be (1 + 1) + (1 + 1) = 4.

Example 3:

Input: nums = [0]
Output: 0
Explanation:
We cannot split the array further, so the answer is 0.

Example 4:

Input: nums = [1,-1]
Output: 2
Explanation:
Selecting the whole array gives a total cost of 1 + 1 = 2, which is the maximum.


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109


```

## 题目翻译

给定数组nums。子数组cost(l,r)=nums[l]-nums[l+1]+nums[l+2]-...，即交替加减。将nums分成若干子数组使总cost最大。

## 解题思路

DP: dp[i][0] = 处理到第i个元素，当前子数组中i是奇数位置(负号)的最大cost。dp[i][1] = i是偶数位置(正号，即子数组第一个元素)的最大cost。

转移：
- 开始新子数组：dp[i][1] = dp[i-1][0] + nums[i] 或 dp[i-1][1] + nums[i]
- 继续当前子数组：dp[i][0] = dp[i-1][1] - nums[i]

答案 = max(dp[n-1][0], dp[n-1][1])。

## Solution

[SourceCode](./solution.js)
