# [3736] Minimum Moves to Equal Array Elements III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-iii/description/)

* algorithms
* Easy (81.55%)
* Likes:    38
* Dislikes: 2
* Testcase Example:  '[2,1,3]'

```md
You are given an integer array nums.
In one move, you may increase the value of any single element nums[i] by 1.
Return the minimum total number of moves required so that all elements in nums become equal.

Example 1:

Input: nums = [2,1,3]
Output: 3
Explanation:
To make all elements equal:

Increase nums[0] = 2 by 1 to make it 3.
Increase nums[1] = 1 by 1 to make it 2.
Increase nums[1] = 2 by 1 to make it 3.

Now, all elements of nums are equal to 3. The minimum total moves is 3.

Example 2:

Input: nums = [4,4,5]
Output: 2
Explanation:
To make all elements equal:

Increase nums[0] = 4 by 1 to make it 5.
Increase nums[1] = 4 by 1 to make it 5.

Now, all elements of nums are equal to 5. The minimum total moves is 2.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100


```

## 中文翻译

给定整数数组 nums，每次操作可将某个元素加 1，求使所有元素相等的最少操作次数。

## 解题思路

只能增加，所以最终所有元素都等于最大值。答案为所有元素与最大值之差的和。

## Solution

[SourceCode](./solution.js)
