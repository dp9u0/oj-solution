# [2616] Minimize the Maximum Difference of Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/description/)

* algorithms
* Medium (50.90%)
* Likes:    2929
* Dislikes: 329
* Testcase Example:  '[10,1,2,7,1,3]\n2'

```md
You are given a 0-indexed integer array nums and an integer p. Find p pairs of indices of nums such that the maximum difference amongst all the pairs is minimized. Also, ensure no index appears more than once amongst the p pairs.
Note that for a pair of elements at the index i and j, the difference of this pair is
nums[i] - nums[j]
, where
x
represents the absolute value of x.
Return the minimum maximum difference among all p pairs. We define the maximum of an empty set to be zero.

Example 1:

Input: nums = [10,1,2,7,1,3], p = 2
Output: 1
Explanation: The first pair is formed from the indices 1 and 4, and the second pair is formed from the indices 2 and 5.
The maximum difference is max(
nums[1] - nums[4]
,
nums[2] - nums[5]
) = max(0, 1) = 1. Therefore, we return 1.

Example 2:

Input: nums = [4,2,1,2], p = 1
Output: 0
Explanation: Let the indices 1 and 3 form a pair. The difference of that pair is
2 - 2
= 0, which is the minimum we can attain.


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109
0 <= p <= (nums.length)/2


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定一个 0-indexed 整数数组 `nums` 和一个整数 `p`。找到 p 对索引，使得所有对的最大差值最小化。每个索引最多出现一次。

一对元素 (i, j) 的差值为 |nums[i] - nums[j]|。返回 p 对中最小化的最大差值。空集的最大值定义为 0。

**示例 1：** nums = [10,1,2,7,1,3], p = 2 → 1（配对 (1,4) 差值0, (2,5) 差值1）
**示例 2：** nums = [4,2,1,2], p = 1 → 0（配对 (1,3) 差值0）

**约束：** 1 <= nums.length <= 10^5, 0 <= p <= n/2

## Approach

二分答案 + 贪心。

排序后，差值只可能在相邻元素之间（贪心配对相邻更优）。二分最大差值 threshold，检查是否能凑出 p 对相邻差 <= threshold 的配对。

- 排序 nums
- 二分范围 [0, max-min]
- check(mid)：贪心从左到右遍历，如果相邻差 <= mid 则配对并跳过下一个，统计配对数是否 >= p

时间复杂度 O(n log(max-min))，空间复杂度 O(1)。
