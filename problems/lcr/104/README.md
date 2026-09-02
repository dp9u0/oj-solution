# [LCR 104] 组合总和 Ⅳ

## Description


```md
https://leetcode.cn/problems/D0F0SV/description/
* algorithms
* Medium (55.98%)
* Likes:    79
* Dislikes: -
* Testcase Example:  '[1,2,3]\n4'
给定一个由 不同 正整数组成的数组 nums ，和一个目标整数 target 。请从 nums 中找出并返回总和为 target 的元素组合的个数。数组中的数字可以在一次排列中出现任意次，但是顺序不同的序列被视作不同的组合。
题目数据保证答案符合 32 位整数范围。

示例 1：
输入：nums = [1,2,3], target = 4
输出：7
解释：
所有可能的组合为：
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
请注意，顺序不同的序列被视作不同的组合。
示例 2：
输入：nums = [9], target = 3
输出：0

提示：
1 <= nums.length <= 200
1 <= nums[i] <= 1000
nums 中的所有元素 互不相同
1 <= target <= 1000

进阶：如果给定的数组中含有负数会发生什么？问题会产生何种变化？如果允许负数出现，需要向题目中添加哪些限制条件？

注意：本题与主站 377 题相同：https://leetcode.cn/problems/combination-sum-iv/

```

## Solution

[SourceCode](./solution.js)

### English Description

Given an array of **distinct** positive integers `nums` and a target integer `target`, return the number of possible combinations that add up to `target`.

The test cases are generated so that the answer can fit in a **32-bit** integer.

The order of the sequence matters — different orderings are counted as different combinations.

**Example 1:**

```
Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
(1,1,1,1), (1,1,2), (1,2,1), (1,3), (2,1,1), (2,2), (3,1)
```

**Example 2:**

```
Input: nums = [9], target = 3
Output: 0
```

**Constraints:**

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 1000`
- All elements of `nums` are unique.
- `1 <= target <= 1000`

Follow-up: What if the given array contains negative numbers? What changes would it cause to the problem? If negative numbers are allowed, what additional constraints must be added?

Note: This problem is identical to LeetCode 377 Combination Sum IV.

### Approach

This is a **complete knapsack counting permutations** problem.

Let `dp[t]` be the number of ways to form sum exactly `t`. Since order matters, we enumerate the sum first (`t` from 1 to `target`), then for each number `num` in `nums`:

```
dp[t] += dp[t - num]  (if t >= num)
```

with base case `dp[0] = 1` (empty combination sums to 0).

- **Time:** O(target × nums.length)
- **Space:** O(target)

This works because iterating `t` in the outer loop and `num` in the inner loop counts each ordered sequence exactly once: for the final slot of a sequence summing to `t`, we pick any `num` and prepend the ways to form `t - num`.
