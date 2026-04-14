# [1389] Create Target Array in the Given Order

## Description

[LeetCode Problem Description](https://leetcode.com/problems/create-target-array-in-the-given-order/description/)

* algorithms
* Easy (86.46%)
* Likes:    2303
* Dislikes: 1919
* Testcase Example:  '[0,1,2,3,4]\n[0,1,2,2,1]'

```md
Given two arrays of integersnums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i]the value nums[i]intarget array.
Repeat the previous step until there are no elements to read in nums and index.

Return the target array.
It is guaranteed that the insertion operations will be valid.

Example 1:

Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]

Example 2:

Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
Output: [0,1,2,3,4]
Explanation:
nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]

Example 3:

Input: nums = [1], index = [0]
Output: [1]


Constraints:

1 <= nums.length, index.length <= 100
nums.length == index.length
0 <= nums[i] <= 100
0 <= index[i] <= i


```

## 翻译

给定 nums 和 index 数组，依次将 nums[i] 插入到目标数组的 index[i] 位置，返回最终的目标数组。

## Approach

使用数组的 splice 方法在指定位置插入元素即可。

时间复杂度 O(n^2)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
