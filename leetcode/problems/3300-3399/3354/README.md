# [3354] Make Array Elements Equal to Zero

## Description

[LeetCode Problem Description](https://leetcode.com/problems/make-array-elements-equal-to-zero/description/)

* algorithms
* Easy (68.30%)
* Likes:    562
* Dislikes: 165
* Testcase Example:  '[1,0,2,0,3]'

```md
You are given an integer array nums.
Start by selecting a starting position curr such that nums[curr] == 0, and choose a movement direction ofeither left or right.
After that, you repeat the following process:

If curr is out of the range [0, n - 1], this process ends.
If nums[curr] == 0, move in the current direction by incrementing curr if you are moving right, or decrementing curr if you are moving left.
Else if nums[curr] > 0:

Decrement nums[curr] by 1.
Reverseyour movement direction (left becomes right and vice versa).
Take a step in your new direction.



A selection of the initial position curr and movement direction is considered valid if every element in nums becomes 0 by the end of the process.
Return the number of possible valid selections.

Example 1:

Input: nums = [1,0,2,0,3]
Output: 2
Explanation:
The only possible valid selections are the following:

Choose curr = 3, and a movement direction to the left.

[1,0,2,0,3] -> [1,0,2,0,3] -> [1,0,1,0,3] -> [1,0,1,0,3] -> [1,0,1,0,2] -> [1,0,1,0,2] -> [1,0,0,0,2] -> [1,0,0,0,2] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,0].


Choose curr = 3, and a movement direction to the right.

[1,0,2,0,3] -> [1,0,2,0,3] -> [1,0,2,0,2] -> [1,0,2,0,2] -> [1,0,1,0,2] -> [1,0,1,0,2] -> [1,0,1,0,1] -> [1,0,1,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [0,0,0,0,0].




Example 2:

Input: nums = [2,3,4,0,4,1,0]
Output: 0
Explanation:
There are no possible valid selections.


Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100
There is at least one element i where nums[i] == 0.


```

## 中文翻译

给定整数数组，选择一个 nums[curr]==0 的起始位置和方向（左/右），然后模拟：遇到0继续前进，遇到正数减1并反向。若最终所有元素都变为0则有效。返回有效选择的数量。

## 解题思路

**模拟**

数组长度和值都很小（n<=100, val<=100），直接对每个0位置的两个方向分别模拟即可。

时间复杂度：O(n * sum(nums))，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
