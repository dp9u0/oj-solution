# [2593] Find Score of an Array After Marking All Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/description/)

* algorithms
* Medium (64.51%)
* Likes:    943
* Dislikes: 22
* Testcase Example:  '[2,1,3,4,5,2]'

```md
You are given an array nums consisting of positive integers.
Starting with score = 0, apply the following algorithm:

Choose the smallest integer of the array that is not marked. If there is a tie, choose the one with the smallest index.
Add the value of the chosen integer to score.
Mark the chosen element and its two adjacent elements if they exist.
Repeat until all the array elements are marked.

Return the score you get after applying the above algorithm.

Example 1:

Input: nums = [2,1,3,4,5,2]
Output: 7
Explanation: We mark the elements as follows:
- 1 is the smallest unmarked element, so we mark it and its two adjacent elements: [2,1,3,4,5,2].
- 2 is the smallest unmarked element, so we mark it and its left adjacent element: [2,1,3,4,5,2].
- 4 is the only remaining unmarked element, so we mark it: [2,1,3,4,5,2].
Our score is 1 + 2 + 4 = 7.

Example 2:

Input: nums = [2,3,5,1,3,2]
Output: 5
Explanation: We mark the elements as follows:
- 1 is the smallest unmarked element, so we mark it and its two adjacent elements: [2,3,5,1,3,2].
- 2 is the smallest unmarked element, since there are two of them, we choose the left-most one, so we mark the one at index 0 and its right adjacent element: [2,3,5,1,3,2].
- 2 is the only remaining unmarked element, so we mark it: [2,3,5,1,3,2].
Our score is 1 + 2 + 2 = 5.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 106


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定正整数数组 nums，重复以下操作：选最小的未标记元素（相同值选最小索引），将其值加入分数，然后标记该元素及其相邻两个元素。返回最终分数。

## 解题思路

**排序 + 模拟**

1. 将所有元素按 (值, 索引) 排序
2. 用 marked 数组记录已标记的位置
3. 按排序顺序遍历，跳过已标记的，将未标记的加入分数，并标记自身和相邻元素

时间复杂度 O(n log n)，空间复杂度 O(n)。
