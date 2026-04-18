# [2811] Check if it is Possible to Split Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/description/)

* algorithms
* Medium (34.47%)
* Likes:    530
* Dislikes: 105
* Testcase Example:  '[2, 2, 1]\n4'

```md
You are given an array nums of length n and an integer m. You need to determine if it is possible to split the array into n arrays of size 1 by performing a series of steps.
An array is called good if:

The length of the array is one, or
The sum of the elements of the array is greater than or equal to m.

In each step, you can select an existing array (which may be the result of previous steps) with a length of at least two and split it into two arrays, if both resulting arrays are good.
Return true if you can split the given array into n arrays, otherwise return false.

Example 1:

Input: nums = [2, 2, 1], m = 4
Output: true
Explanation:

Split [2, 2, 1] to [2, 2] and [1]. The array [1] has a length of one, and the array [2, 2] has the sum of its elements equal to 4 >= m, so both are good arrays.
Split [2, 2] to [2] and [2]. both arrays have the length of one, so both are good arrays.


Example 2:

Input: nums = [2, 1, 3], m = 5
Output: false
Explanation:
The first move has to be either of the following:

Split [2, 1, 3] to [2, 1] and [3]. The array [2, 1] has neither length of one nor sum of elements greater than or equal to m.
Split [2, 1, 3] to [2] and [1, 3]. The array [1, 3] has neither length of one nor sum of elements greater than or equal to m.

So as both moves are invalid (they do not divide the array into two good arrays), we are unable to split nums into n arrays of size 1.

Example 3:

Input: nums = [2, 3, 3, 2, 3], m = 6
Output: true
Explanation:

Split [2, 3, 3, 2, 3] to [2] and [3, 3, 2, 3].
Split [3, 3, 2, 3] to [3, 3, 2] and [3].
Split [3, 3, 2] to [3, 3] and [2].
Split [3, 3] to [3] and [3].



Constraints:

1 <= n == nums.length <= 100
1 <= nums[i] <= 100
1 <= m <= 200


```

## 翻译

数组可以不断二分，每次分割要求两部分都是"好的"（长度为1或和>=m）。判断是否能完全拆成单个元素。

## 解题思路

关键观察：n<=2 一定可以。n>=3 时，必须存在相邻对 nums[i]+nums[i+1]>=m。因为最终需要把所有长度2的子数组也拆开，而拆长度2子数组需要它本身是good的（和>=m）。所以只要有一对相邻元素和>=m，就可以从两端逐个剥离，最后剩这对再拆。

## Solution

[SourceCode](./solution.js)
