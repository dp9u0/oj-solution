# [3819] Rotate Non Negative Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/rotate-non-negative-elements/description/)

* algorithms
* Medium (47.95%)
* Likes:    75
* Dislikes: 10
* Testcase Example:  '[1,-2,3,-4]\n3'

```md
You are given an integer array nums and an integer k.
Rotate only the non-negative elements of the array to the left by k positions, in a cyclic manner.
All negative elements must stay in their original positions and must not move.
After rotation, place the non-negative elements back into the array in the new order, filling only the positions that originally contained non-negative values and skipping all negative positions.
Return the resulting array.

Example 1:

Input: nums = [1,-2,3,-4], k = 3
Output: [3,-2,1,-4]
Explanation:​​​​​​​

The non-negative elements, in order, are [1, 3].
Left rotation with k = 3 results in:

[1, 3] -> [3, 1] -> [1, 3] -> [3, 1]


Placing them back into the non-negative indices results in [3, -2, 1, -4].


Example 2:

Input: nums = [-3,-2,7], k = 1
Output: [-3,-2,7]
Explanation:

The non-negative elements, in order, are [7].
Left rotation with k = 1 results in [7].
Placing them back into the non-negative indices results in [-3, -2, 7].


Example 3:

Input: nums = [5,4,-9,6], k = 2
Output: [6,5,-9,4]
Explanation:

The non-negative elements, in order, are [5, 4, 6].
Left rotation with k = 2 results in [6, 5, 4].
Placing them back into the non-negative indices results in [6, 5, -9, 4].



Constraints:

1 <= nums.length <= 105
-105 <= nums[i] <= 105
0 <= k <= 105


```

## 翻译

给定整数数组 nums 和整数 k。仅对数组中的非负元素循环左移 k 位。所有负元素保持原位不动。左移后将非负元素按新顺序放回原来的非负位置。

## Approach

1. 遍历数组，记录非负元素的位置和值
2. 对非负元素数组做循环左移 k 位（k %= len）
3. 将旋转后的非负元素放回原位置
时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
