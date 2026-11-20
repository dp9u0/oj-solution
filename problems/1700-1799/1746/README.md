# [1746] 经过一次操作后的最大子数组和

## Description


```md
https://leetcode.cn/problems/maximum-subarray-sum-after-one-operation/description/
* algorithms
* Medium (60.05%)
* Likes:    33
* Dislikes: -
* Testcase Example:  '[2,-1,-4,-3]'
你有一个整数数组 nums。你只能将一个元素 nums[i] 替换为 nums[i] * nums[i]。
返回替换后的最大子数组和。

示例 1：
输入：nums = [2,-1,-4,-3]
输出：17
解释：你可以把-4替换为16(-4*(-4))，使nums = [2,-1,16,-3]. 现在，最大子数组和为 2 + -1 + 16 = 17.
示例 2：
输入：nums = [1,-1,1,1,-1,-1,1]
输出：4
解释：你可以把第一个-1替换为1，使 nums = [1,1,1,1,-1,-1,1]. 现在，最大子数组和为 1 + 1 + 1 + 1 = 4.

提示：
1 <= nums.length <= 105
-104 <= nums[i] <= 104
Hint 1: Think about dynamic programming
Hint 2: Define an array dp[nums.length][2], where dp[i][0] is the max subarray sum including nums[i] and without squaring any element.
Hint 3: dp[i][1] is the max subarray sum including nums[i] and having only one element squared.

```

## Solution

[SourceCode](./solution.js)

## Translation

Replace exactly one element by its square; return the maximum subarray sum afterwards.

## Approach

**双状态 Kadane**。noSq = 以 i 结尾未平方的最大和;sq = 以 i 结尾恰好平方一个的最大和:转移 sq = max(sq+x, noSq+x², x²),noSq = max(noSq+x, x)。任一子数组平方其中一元素都不会更差,故答案即 max(sq)。O(n) O(1)。
