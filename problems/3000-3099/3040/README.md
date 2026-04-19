# [3040] Maximum Number of Operations With the Same Score II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/description/)

* algorithms
* Medium (34.15%)
* Likes:    188
* Dislikes: 16
* Testcase Example:  '[3,2,1,2,3,4]'

```md
Given an array of integers called nums, you can perform any of the following operation while nums contains at least 2 elements:

Choose the first two elements of nums and delete them.
Choose the last two elements of nums and delete them.
Choose the first and the last elements of nums and delete them.

The score of the operation is the sum of the deleted elements.
Your task is to find the maximum number of operations that can be performed, such that all operations have the same score.
Return the maximum number of operations possible that satisfy the condition mentioned above.

Example 1:

Input: nums = [3,2,1,2,3,4]
Output: 3
Explanation: We perform the following operations:
- Delete the first two elements, with score 3 + 2 = 5, nums = [1,2,3,4].
- Delete the first and the last elements, with score 1 + 4 = 5, nums = [2,3].
- Delete the first and the last elements, with score 2 + 3 = 5, nums = [].
We are unable to perform any more operations as nums is empty.

Example 2:

Input: nums = [3,2,6,1,4]
Output: 2
Explanation: We perform the following operations:
- Delete the first two elements, with score 3 + 2 = 5, nums = [6,1,4].
- Delete the last two elements, with score 1 + 4 = 5, nums = [6].
It can be proven that we can perform at most 2 operations.


Constraints:

2 <= nums.length <= 2000
1 <= nums[i] <= 1000


```

## 中文翻译

数组 nums，每次可删除前两个、后两个、或首尾元素，得分 = 删除元素之和。所有操作得分必须相同，求最多操作次数。

## 解题思路

**区间 DP + 枚举目标分数**

第一次操作决定目标分数，只有 3 种可能：nums[0]+nums[1]、nums[n-2]+nums[n-1]、nums[0]+nums[n-1]。

对每个目标分数，用记忆化 DFS：
- dp(l,r) = 子数组 [l,r] 上的最大操作数
- 三种选择匹配目标分数则递归
- 用 Map 记忆化避免重复计算

时间复杂度：O(n^2)，空间复杂度：O(n^2)

## Solution

[SourceCode](./solution.js)
