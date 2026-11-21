# [2297] 跳跃游戏 VIII

## Description


```md
https://leetcode.cn/problems/jump-game-viii/description/
* algorithms
* Medium (51.57%)
* Likes:    14
* Dislikes: -
* Testcase Example:  '[3,2,4,4,1]\n[3,7,6,4,2]'
给定一个长度为 n 的下标从 0 开始的整数数组 nums。初始位置为下标 0。当 i < j 时，你可以从下标 i 跳转到下标 j:
对于在 i < k < j 范围内的所有下标 k 有 nums[i] <= nums[j] 和 nums[k] < nums[i] , 或者
对于在 i < k < j 范围内的所有下标 k 有 nums[i] > nums[j] 和 nums[k] >= nums[i] 。
你还得到了一个长度为 n 的整数数组 costs，其中 costs[i] 表示跳转到下标 i 的代价。
返回跳转到下标 n - 1 的最小代价。
示例 1:
输入: nums = [3,2,4,4,1], costs = [3,7,6,4,2]
输出: 8
解释: 从下标 0 开始。
- 以 costs[2]= 6 的代价跳转到下标 2。
- 以 costs[4]= 2 的代价跳转到下标 4。
总代价是 8。可以证明，8 是所需的最小代价。
另外两个可能的路径是:下标 0 -> 1 -> 4 和下标 0 -> 2 -> 3 -> 4。
它们的总代价分别为9和12。
示例 2:
输入: nums = [0,1,2], costs = [1,1,1]
输出: 2
解释: 从下标 0 开始。
- 以 costs[1] = 1 的代价跳转到下标 1。
- 以 costs[2] = 1 的代价跳转到下标 2。
总代价是 2。注意您不能直接从下标 0 跳转到下标 2，因为 nums[0] <= nums[1]。

解释:
n == nums.length == costs.length
1 <= n <= 105
0 <= nums[i], costs[i] <= 105
Hint 1: For each index, find the indexes that you can jump to.
Hint 2: We can do this by using a monotonic stack and iterating through the array backwards.
Hint 3: Create another integer array of length n called dp where dp[i] is the minimum cost of getting to index i.

```

## Solution

[SourceCode](./solution.js)

## English Translation

From index i you may jump to j > i when either (a) nums[i] <= nums[j] and every k in between has nums[k] < nums[i], or (b) nums[i] > nums[j] and every k in between has nums[k] >= nums[i]. Jumping to j costs costs[j]. Starting at 0, return the minimum total cost to reach n-1.

Example 1:
Input: nums = [3,2,4,4,1], costs = [3,7,6,4,2]
Output: 8

Example 2:
Input: nums = [0,1,2], costs = [1,1,1]
Output: 2

Constraints: 1 <= n <= 10^5, 0 <= nums[i], costs[i] <= 10^5.

## Approach

The two jump targets of i are exactly: the nearest j with nums[j] >= nums[i] (case (a); everything between was strictly smaller) and the nearest j with nums[j] < nums[i] (case (b); everything between is >= nums[i]). Compute both arrays with two monotonic-stack scans right-to-left. Then a left-to-right DP over arrival costs: dp[j] = min(dp[i] + costs[j]) over predecessors i. O(n).
