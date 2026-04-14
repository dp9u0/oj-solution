# [2364] Count Number of Bad Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-number-of-bad-pairs/description/)

* algorithms
* Medium (54.20%)
* Likes:    1794
* Dislikes: 62
* Testcase Example:  '[4,1,3,3]'

```md
You are given a 0-indexed integer array nums. A pair of indices (i, j) is a bad pair if i < j and j - i != nums[j] - nums[i].
Return the total number of bad pairs in nums.

Example 1:

Input: nums = [4,1,3,3]
Output: 5
Explanation: The pair (0, 1) is a bad pair since 1 - 0 != 1 - 4.
The pair (0, 2) is a bad pair since 2 - 0 != 3 - 4, 2 != -1.
The pair (0, 3) is a bad pair since 3 - 0 != 3 - 4, 3 != -1.
The pair (1, 2) is a bad pair since 2 - 1 != 3 - 1, 1 != 2.
The pair (2, 3) is a bad pair since 3 - 2 != 3 - 3, 1 != 0.
There are a total of 5 bad pairs, so we return 5.

Example 2:

Input: nums = [1,2,3,4,5]
Output: 0
Explanation: There are no bad pairs.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109


```

## 翻译

给定数组 nums，bad pair 定义为 i < j 且 j - i != nums[j] - nums[i]。求 bad pair 的总数。

## Approach

转换条件：j - i != nums[j] - nums[i] 等价于 nums[j] - j != nums[i] - i。

所以 good pair 满足 nums[i] - i 相同。用哈希表统计每个 diff = nums[i] - i 的出现次数，good pairs = sum of C(count, 2)。

答案 = 总对数 C(n, 2) - good pairs。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
