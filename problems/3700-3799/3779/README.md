# [3779] Minimum Number of Operations to Have Distinct Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-operations-to-have-distinct-elements/description/)

* algorithms
* Medium (42.19%)
* Likes:    46
* Dislikes: 2
* Testcase Example:  '[3,8,3,6,5,8]'

```md
You are given an integer array nums.
In one operation, you remove the first three elements of the current array. If there are fewer than three elements remaining, all remaining elements are removed.
Repeat this operation until the array is empty or contains no duplicate values.
Return an integer denoting the number of operations required.

Example 1:

Input: nums = [3,8,3,6,5,8]
Output: 1
Explanation:
In the first operation, we remove the first three elements. The remaining elements [6, 5, 8] are all distinct, so we stop. Only one operation is needed.

Example 2:

Input: nums = [2,2]
Output: 1
Explanation:
After one operation, the array becomes empty, which meets the stopping condition.

Example 3:

Input: nums = [4,3,5,1,2]
Output: 0
Explanation:
All elements in the array are distinct, therefore no operations are needed.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105


```

## 中文翻译

给定整数数组 nums，每次操作删除前三个元素（不足三个全删），重复直到数组为空或没有重复值。返回操作次数。

## 解题思路

从后往前遍历，用 Set 记录见过的元素。找第一个重复出现的位置 lastDup，则该位置之前的元素都需要被删掉，操作次数 = ceil(lastDupIndex / 3)。如果没有重复则返回0。

## Solution

[SourceCode](./solution.js)
