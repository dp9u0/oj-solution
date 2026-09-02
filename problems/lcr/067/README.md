# [LCR 067] 数组中两个数的最大异或值

## Description


```md
https://leetcode.cn/problems/ms70jA/description/
* algorithms
* Medium (65.16%)
* Likes:    89
* Dislikes: -
* Testcase Example:  '[3,10,5,25,2,8]'
给定一个整数数组 nums ，返回 nums[i] XOR nums[j] 的最大运算结果，其中 0 ≤ i ≤ j < n 。

示例 1：
输入：nums = [3,10,5,25,2,8]
输出：28
解释：最大运算结果是 5 XOR 25 = 28.
示例 2：
输入：nums = [0]
输出：0
示例 3：
输入：nums = [2,4]
输出：6
示例 4：
输入：nums = [8,10,2]
输出：10
示例 5：
输入：nums = [14,70,53,83,49,91,36,80,92,51,66,70]
输出：127

提示：
1 <= nums.length <= 2 * 105
0 <= nums[i] <= 231 - 1

进阶：你可以在 O(n) 的时间解决这个问题吗？

注意：本题与主站 421 题相同： https://leetcode.cn/problems/maximum-xor-of-two-numbers-in-an-array/

```

## English Translation

Given an integer array `nums`, return the maximum result of `nums[i] XOR nums[j]`, where `0 <= i <= j < n`.

Example 1:
```
Input: nums = [3,10,5,25,2,8]
Output: 28
Explanation: The maximum result is 5 XOR 25 = 28.
```

Example 2:
```
Input: nums = [0]
Output: 0
```

Example 3:
```
Input: nums = [2,4]
Output: 6
```

Example 4:
```
Input: nums = [8,10,2]
Output: 10
```

Example 5:
```
Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
Output: 127
```

Constraints:
- `1 <= nums.length <= 2 * 10^5`
- `0 <= nums[i] <= 2^31 - 1`

Follow-up: Can you solve it in O(n) time?

## Solution Approach

**贪心 + 哈希集合（逐位确定答案）**，复杂度 O(32·n)，满足进阶要求。

思路：
- 从最高位向最低位逐位构建最大异或值 `max`。
- 第 `bit` 轮时，尝试把答案的第 `bit` 位设为 1（候选 `candidate = max | (1 << bit)`）。
- 用 `mask`（高 bit 位全为 1）对每个数截取前缀，放入哈希集合 `set`。
- 若集合中存在两个前缀 `a`、`b` 满足 `a ^ b == candidate`，即 `set.has(prefix ^ candidate)`，说明最高位的 `candidate` 可行，更新 `max = candidate`。
- 逐位贪心，最终 `max` 即为全局最大异或值。

核心依据：若高 bit 位确定的答案前缀可行，低 bit 位继续在此基础上贪心扩展即可保证全局最优。

## Solution

[SourceCode](./solution.js)
