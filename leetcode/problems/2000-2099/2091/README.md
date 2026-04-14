# [2091] Removing Minimum and Maximum From Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/description/)

* algorithms
* Medium (56.38%)
* Likes:    1047
* Dislikes: 58
* Testcase Example:  '[2,10,7,5,4,1,8,6]'

```md
You are given a 0-indexed array of distinct integers nums.
There is an element in nums that has the lowest value and an element that has the highest value. We call them the minimum and maximum respectively. Your goal is to remove both these elements from the array.
A deletion is defined as either removing an element from the front of the array or removing an element from the back of the array.
Return the minimum number of deletions it would take to remove both the minimum and maximum element from the array.

Example 1:

Input: nums = [2,10,7,5,4,1,8,6]
Output: 5
Explanation:
The minimum element in the array is nums[5], which is 1.
The maximum element in the array is nums[1], which is 10.
We can remove both the minimum and maximum by removing 2 elements from the front and 3 elements from the back.
This results in 2 + 3 = 5 deletions, which is the minimum number possible.

Example 2:

Input: nums = [0,-4,19,1,8,-2,-3,5]
Output: 3
Explanation:
The minimum element in the array is nums[1], which is -4.
The maximum element in the array is nums[2], which is 19.
We can remove both the minimum and maximum by removing 3 elements from the front.
This results in only 3 deletions, which is the minimum number possible.

Example 3:

Input: nums = [101]
Output: 1
Explanation:
There is only one element in the array, which makes it both the minimum and maximum element.
We can remove it with 1 deletion.


Constraints:

1 <= nums.length <= 105
-105 <= nums[i] <= 105
The integers in nums are distinct.


```

## 翻译

给定互不相同的整数数组，只能从数组两端删除元素。求删掉最小值和最大值所需的最少删除次数。

## Approach

找到最小值和最大值的索引 minIdx 和 maxIdx（设 l = min(minIdx, maxIdx), r = max(minIdx, maxIdx)）。三种策略：
1. 都从左边删：r + 1
2. 都从右边删：n - l
3. 一个从左一个从右：(l + 1) + (n - r)

取三者最小值。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
