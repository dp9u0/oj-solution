# [898] Bitwise ORs of Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/bitwise-ors-of-subarrays/description/)

* algorithms
* Medium (56.82%)
* Likes:    1966
* Dislikes: 244
* Testcase Example:  '[0]'

```md
Given an integer array arr, return the number of distinct bitwise ORs of all the non-empty subarrays of arr.
The bitwise OR of a subarray is the bitwise OR of each integer in the subarray. The bitwise OR of a subarray of one integer is that integer.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: arr = [0]
Output: 1
Explanation: There is only one possible result: 0.

Example 2:

Input: arr = [1,1,2]
Output: 3
Explanation: The possible subarrays are [1], [1], [2], [1, 1], [1, 2], [1, 1, 2].
These yield the results 1, 1, 2, 1, 3, 3.
There are 3 unique values, so the answer is 3.

Example 3:

Input: arr = [1,2,4]
Output: 6
Explanation: The possible results are 1, 2, 3, 4, 6, and 7.


Constraints:

1 <= arr.length <= 5 * 104
0 <= arr[i] <= 109


```

## 中文翻译

给定整数数组 arr，返回所有非空子数组的按位或结果中不同值的数量。

## 解题思路

**集合滚动：**

1. 维护一个集合 cur，表示以当前位置结尾的所有子数组的 OR 结果
2. 对每个新元素 arr[i]，新的集合 = {arr[i]} ∪ {x | arr[i] : x ∈ cur}
3. 将所有 cur 中的值加入全局集合
4. 每个位置的 cur 集合大小最多为 32（因为 OR 只会置位），所以总复杂度为 O(n * log(maxVal))

时间复杂度：O(n * 32)，空间复杂度：O(n * 32)

## Solution

[SourceCode](./solution.js)
