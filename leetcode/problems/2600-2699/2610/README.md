# [2610] Convert an Array Into a 2D Array With Conditions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/)

* algorithms
* Medium (86.37%)
* Likes:    1694
* Dislikes: 81
* Testcase Example:  '[1,3,4,1,2,3,1]'

```md
You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

The 2D array should contain only the elements of the array nums.
Each row in the 2D array contains distinct integers.
The number of rows in the 2D array should be minimal.

Return the resulting array. If there are multiple answers, return any of them.
Note that the 2D array can have a different number of elements on each row.

Example 1:

Input: nums = [1,3,4,1,2,3,1]
Output: [[1,3,4,2],[1,3],[1]]
Explanation: We can create a 2D array that contains the following rows:
- 1,3,4,2
- 1,3
- 1
All elements of nums were used, and each row of the 2D array contains distinct integers, so it is a valid answer.
It can be shown that we cannot have less than 3 rows in a valid array.
Example 2:

Input: nums = [1,2,3,4]
Output: [[4,3,2,1]]
Explanation: All elements of the array are distinct, so we can keep all of them in the first row of the 2D array.


Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= nums.length


```

## 中文翻译

将整数数组转为 2D 数组，满足：每行包含不同整数，行数最少。

## 解题思路

统计每个数字出现次数，行数 = 最大出现次数。遍历时根据出现次数分配到对应行。

## Solution

[SourceCode](./solution.js)
