# [LCR 102] 目标和

## Description


```md
https://leetcode.cn/problems/YaVDxD/description/
* algorithms
* Medium (56.41%)
* Likes:    90
* Dislikes: -
* Testcase Example:  '[1,1,1,1,1]\n3'
给定一个正整数数组 nums 和一个整数 target 。
向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

示例 1：
输入：nums = [1,1,1,1,1], target = 3
输出：5
解释：一共有 5 种方法让最终目标和为 3 。
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
示例 2：
输入：nums = [1], target = 1
输出：1

提示：
1 <= nums.length <= 20
0 <= nums[i] <= 1000
0 <= sum(nums[i]) <= 1000
-1000 <= target <= 1000

注意：本题与主站 494 题相同： https://leetcode.cn/problems/target-sum/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given an array of positive integers `nums` and a target `target`, add `'+'` or `'-'` before each integer and concatenate to form an expression. Return the number of different expressions whose value equals `target`.

**Example 1:** `nums=[1,1,1,1,1], target=3` → `5`
**Example 2:** `nums=[1], target=1` → `1`

**Constraints:** `1 <= nums.length <= 20`, `sum(nums) <= 1000`.

Note: same as LeetCode 494.

---

## Approach

Let `sum = Σnums`, and suppose the positive-signed subset sums to `P`. Then `P - (sum - P) = target`, i.e. `P = (target + sum)/2`. So we need the number of subsets of `nums` summing to `P`.

- If `(target + sum)` is odd or `P < 0` or `P > sum`, return 0.
- Otherwise 0/1 **knapsack DP**: `dp[s]` = ways to reach subset sum `s`. For each num, update descending. Answer `dp[P]`.

Complexity: `O(n·P)` time, `O(P)` space.
