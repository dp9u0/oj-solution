# [1299] Replace Elements with Greatest Element on Right Side

## Description

[LeetCode Problem Description](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/description/)

* algorithms
* Easy (72.04%)
* Likes:    2865
* Dislikes: 268
* Testcase Example:  '[17,18,5,4,6,1]'

```md
Given an array arr,replace every element in that array with the greatest element among the elements to itsright, and replace the last element with -1.
After doing so, return the array.

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation:
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.

Example 2:

Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.


Constraints:

1 <= arr.length <= 104
1 <= arr[i] <= 105


```

## 翻译

将数组中每个元素替换为其右侧最大的元素，最后一个元素替换为 -1。

## Approach

从右向左遍历，维护当前最大值。对每个位置，先记录当前值，用当前最大值替换，然后更新最大值。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
