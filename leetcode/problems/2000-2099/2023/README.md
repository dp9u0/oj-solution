# [2023] Number of Pairs of Strings With Concatenation Equal to Target

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/description/)

* algorithms
* Medium (75.36%)
* Likes:    750
* Dislikes: 57
* Testcase Example:  '["777","7","77","77"]\n"7777"'

```md
Given an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.

Example 1:

Input: nums = ['777','7','77','77'], target = '7777'
Output: 4
Explanation: Valid pairs are:
- (0, 1): '777' + '7'
- (1, 0): '7' + '777'
- (2, 3): '77' + '77'
- (3, 2): '77' + '77'

Example 2:

Input: nums = ['123','4','12','34'], target = '1234'
Output: 2
Explanation: Valid pairs are:
- (0, 1): '123' + '4'
- (2, 3): '12' + '34'

Example 3:

Input: nums = ['1','1','1'], target = '11'
Output: 6
Explanation: Valid pairs are:
- (0, 1): '1' + '1'
- (1, 0): '1' + '1'
- (0, 2): '1' + '1'
- (2, 0): '1' + '1'
- (1, 2): '1' + '1'
- (2, 1): '1' + '1'


Constraints:

2 <= nums.length <= 100
1 <= nums[i].length <= 100
2 <= target.length <= 100
nums[i] and target consist of digits.
nums[i] and target do not have leading zeros.


```

## 中文翻译

给定数字字符串数组 `nums` 和目标字符串 `target`，返回满足 `nums[i] + nums[j] == target` 且 `i != j` 的索引对 (i, j) 的数量。

## 解题思路

**哈希计数：**

1. 用 Map 统计每个字符串的出现次数
2. 对每个字符串 s，检查 target 是否以 s 开头
3. 如果是，取后缀 suffix = target.slice(s.length)，count += map[s] * map[suffix]
4. 如果 s === suffix（前后缀相同），则配对数为 count * (count - 1)（不能自身配对）

时间复杂度：O(n * L)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
