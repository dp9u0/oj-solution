# [4038] Count Integers Appearing in a Single Block

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-integers-appearing-in-a-single-block/description/)

* algorithms
* Easy (45.95%)
* Likes:    24
* Dislikes: 4
* Testcase Example:  '[1,2,2,1]'

```md
You are given an integer array nums.
An integer x is special if all occurrences of x in nums appear in a single contiguous block.
Return the number of distinct special integers in nums.

Example 1:
Input: nums = [1,2,2,1]
Output: 1
Explanation:
1 appears at indices 0 and 3, forming two separate blocks, so it is not special.
2 appears in a single contiguous block at indices [1, 2], so it is special.
Therefore, there is one special integer.
Example 2:
Input: nums = [3,3,1,2,2,1]
Output: 2
Explanation:
3 appears in a single contiguous block at indices [0, 1], so it is special.
1 appears at indices 2 and 5, forming two separate blocks, so it is not special.
2 appears in a single contiguous block at indices [3, 4], so it is special.
Therefore, there are two special integers.

Constraints:
1 <= nums.length <= 100
1 <= nums[i] <= 100
Hint 1: For each distinct value x, let l and r be its first and last positions. All occurrences of x form one contiguous block exactly when r - l + 1 equals the frequency of x.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个整数数组 nums。

如果整数 x 在 nums 中所有出现的下标构成一段连续区间（单个连续块），则称 x 为「特殊整数」。

返回 nums 中不同特殊整数的个数。

示例 1：
输入：nums = [1,2,2,1]
输出：1
解释：
1 出现在下标 0 和 3，形成两个独立的块，因此不是特殊整数。
2 出现在下标 [1, 2] 构成的一个连续块中，因此是特殊整数。
所以特殊整数只有一个。

示例 2：
输入：nums = [3,3,1,2,2,1]
输出：2
解释：
3 出现在下标 [0, 1] 的单个连续块中，是特殊整数。
1 出现在下标 2 和 5，形成两个独立的块，不是特殊整数。
2 出现在下标 [3, 4] 的单个连续块中，是特殊整数。
所以有两个特殊整数。

约束：
1 <= nums.length <= 100
1 <= nums[i] <= 100

## 解题思路

对每个不同的值 x，记录它的首次出现下标 first、末次出现下标 last 以及出现次数 count。
所有出现恰好构成一个连续块，当且仅当 last - first + 1 === count。

一次遍历用三个 Map 统计，再遍历不同的值统计满足条件的个数。

时间复杂度 O(n)，空间复杂度 O(n)。

另一种等价的一趟判定：扫描时记录每个值上次出现的下标 lastIdx，若当前下标 i > lastIdx + 1（中间隔了别的数），则该值必然分散在多个块中，标记为不特殊；最后用「不同值总数 − 不特殊值数」即为答案。
