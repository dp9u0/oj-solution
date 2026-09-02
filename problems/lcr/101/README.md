# [LCR 101] 分割等和子集

## Description


```md
https://leetcode.cn/problems/NUPfPr/description/
* algorithms
* Easy (48.61%)
* Likes:    102
* Dislikes: -
* Testcase Example:  '[1,5,11,5]'
给定一个非空的正整数数组 nums ，请判断能否将这些数字分成元素和相等的两部分。

示例 1：
输入：nums = [1,5,11,5]
输出：true
解释：nums 可以分割成 [1, 5, 5] 和 [11] 。
示例 2：
输入：nums = [1,2,3,5]
输出：false
解释：nums 不可以分为和相等的两部分

提示：
1 <= nums.length <= 200
1 <= nums[i] <= 100

注意：本题与主站 416 题相同： https://leetcode.cn/problems/partition-equal-subset-sum/

```

## Solution

[SourceCode](./solution.js)

### English Description

Given a non-empty array `nums` containing only positive integers, return `true` if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal, or `false` otherwise.

**Example 1:**
```
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
```

**Example 2:**
```
Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
```

**Constraints:**
- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 100`

> This problem is the same as LeetCode 416: Partition Equal Subset Sum.

### Approach (中文思路)

**0/1 背包 → 子集和 DP (Boolean Subset Sum / 0-1 Knapsack)**

- 先求总和 `sum`。若 `sum` 为奇数，直接返回 `false`（两个等和子集和必为整数）。
- 问题转化为：能否从 `nums` 中选出若干数，使其和恰好为 `target = sum / 2`（剩下的自然组成另一份）。
- 用一维布尔 DP 数组 `dp[s]` 表示「是否能凑出和为 s」。
- 外层遍历每个数 `num`，内层**倒序**遍历容量 `s` 从 `target` 到 `num`（0/1 背包保证每个数只用一次）：`dp[s] = dp[s] || dp[s - num]`。
- 初始化 `dp[0] = true`（空子集和为 0）。
- 也可用「每个数只能取一次」的二维转一维滚动数组写法，含义一致。
- 剪枝：若某个 `nums[i] > target` 则直接 false（该数不能放进任何一边）。
- 复杂度：O(n · target)，target ≤ 100·200/2 = 10000，可接受。空间 O(target)。
- 数组存布尔，JS 里用 `Uint8Array` 或普通布尔数组均可。
