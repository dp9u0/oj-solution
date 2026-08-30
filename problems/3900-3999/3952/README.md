# [3952] Maximum Total Value of Covered Indices

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-total-value-of-covered-indices/description/)

* algorithms
* Medium (28.77%)
* Likes:    71
* Dislikes: 6
* Testcase Example:  '[9,2,6,1]\n"0101"'

```md
You are given an integer array nums of length n and a binary string s of length n, where s[i] == &#39;1&#39; means index i initially contains a token and s[i] == &#39;0&#39; means it does not.
You may perform the following operation any number of times:

Choose a token currently located at index i, where i > 0, such that this token has not been moved before.
Move this token from index i to index i - 1.

An index is considered covered if it contains a token after all moves.
Return an integer denoting the maximum total value of nums at the covered indices after optimally performing the operations.

Example 1:

Input: nums = [9,2,6,1], s = '0101'
Output: 15
Explanation:

Initially, indices 1 and 3 contain tokens.
Move the token from index 3 to index 2.
Move the token from index 1 to index 0.
The covered indices are [0, 2], so the total value is nums[0] + nums[2] = 9 + 6 = 15.


Example 2:

Input: nums = [5,1,4], s = '001'
Output: 4
Explanation:

Initially, only index 2 contains a token.
It is optimal to leave the token at index 2.
The covered index is [2], so the total value is nums[2] = 4.


Example 3:

Input: nums = [9,3,5], s = '011'
Output: 14
Explanation:

Initially, indices 1 and 2 contain tokens.
Move the token from index 1 to index 0.
The covered indices are [0, 2], so the total value is nums[0] + nums[2] = 9 + 5 = 14.



Constraints:

1 <= n == nums.length == s.length <= 105
1 <= nums[i] <= 105
​​​​​​​s[i] is either &#39;0&#39; or &#39;1&#39;


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定长度为 n 的整数数组 nums 和长度为 n 的二进制字符串 s,其中 s[i] == '1' 表示下标 i 初始有一个令牌,s[i] == '0' 表示没有。可以任意次执行以下操作:

- 选择一个当前位于下标 i(i > 0)且**从未被移动过**的令牌;
- 将该令牌从下标 i 移动到下标 i - 1。

如果所有移动结束后某个下标上含有令牌,则称该下标被覆盖。返回最优操作后,所有被覆盖下标对应的 nums 值之和的最大值。

示例 1:nums = [9,2,6,1], s = "0101" → 输出 15(覆盖下标 0 和 2,9 + 6 = 15)
示例 2:nums = [5,1,4], s = "001" → 输出 4(令牌留在原地)
示例 3:nums = [9,3,5], s = "011" → 输出 14(覆盖下标 0 和 2,9 + 5 = 14)

约束:1 <= n <= 1e5,1 <= nums[i] <= 1e5,s[i] 为 '0' 或 '1'。

## 解题思路

**关键观察:**

1. 每个令牌至多移动一次,且只能从 i 移到 i-1。因此位于 i 的令牌最终只可能覆盖 `{i-1, i}` 两个位置之一(或不动留在 i)。
2. 反过来看,位置 i 只可能被两个令牌覆盖:令牌 i(选择不动)或令牌 i+1(选择左移)。
3. 冲突只会发生在相邻令牌之间:仅当"左令牌停在 i 且右令牌(i+1)移到 i"时两个令牌覆盖同一位置,此时该位置价值只计一次。

**建模:** 把"位置"与"令牌"看成二分图,位置 i 可匹配令牌 i 或令牌 i+1,每个令牌至多匹配一个位置,最大化匹配位置的价值和。由于图是一条路径,可用线性 DP。

**DP 设计(从左到右扫描位置):**

设 `dp[i][j]` 表示已处理位置 0..i-1,`j` 表示令牌 i 是否已被用掉(即已左移到 i-1):

- `dp[i][0]`:令牌 i 空闲(不存在或未移动);
- `dp[i][1]`:令牌 i 存在且已被用于覆盖位置 i-1。

转移(j ∈ {0,1}):

1. **跳过位置 i**:`dp[i+1][0] = max(dp[i+1][0], dp[i][j])`(令牌 i 不动,令牌 i+1 未被用);
2. **用令牌 i 覆盖位置 i**(需 j == 0 且 s[i]=='1'):`dp[i+1][0] = max(..., dp[i][0] + nums[i])`;
3. **用令牌 i+1 左移覆盖位置 i**(需 i+1 < n 且 s[i+1]=='1'):`dp[i+1][1] = max(..., dp[i][j] + nums[i])`。

答案为 `dp[n][0]`(令牌 n 不存在,dp[n][1] 恒为 -inf)。

**复杂度:** 时间 O(n),空间 O(1)(滚动两个状态)。

**验证示例 3:** nums=[9,3,5], s="011"。位置 0 由令牌 1 左移覆盖得 9,位置 1 跳过,位置 2 由令牌 2 不动覆盖得 5,合计 14 ✓。
