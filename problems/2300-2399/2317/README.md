# [2317] Maximum XOR After Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-xor-after-operations/description/)

* algorithms
* Medium (79.83%)
* Likes:    644
* Dislikes: 171
* Testcase Example:  '[3,2,4,6]'

```md
You are given a 0-indexed integer array nums. In one operation, select any non-negative integer x and an index i, then update nums[i] to be equal to nums[i] AND (nums[i] XOR x).
Note that AND is the bitwise AND operation and XOR is the bitwise XOR operation.
Return the maximum possible bitwise XOR of all elements of nums after applying the operation any number of times.

Example 1:

Input: nums = [3,2,4,6]
Output: 7
Explanation: Apply the operation with x = 4 and i = 3, num[3] = 6 AND (6 XOR 4) = 6 AND 2 = 2.
Now, nums = [3, 2, 4, 2] and the bitwise XOR of all the elements = 3 XOR 2 XOR 4 XOR 2 = 7.
It can be shown that 7 is the maximum possible bitwise XOR.
Note that other operations may be used to achieve a bitwise XOR of 7.
Example 2:

Input: nums = [1,2,3,9,2]
Output: 11
Explanation: Apply the operation zero times.
The bitwise XOR of all the elements = 1 XOR 2 XOR 3 XOR 9 XOR 2 = 11.
It can be shown that 11 is the maximum possible bitwise XOR.

Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 108


```

## 翻译

给定数组 nums，操作为选择任意 x 和索引 i，将 nums[i] 更新为 nums[i] AND (nums[i] XOR x)。该操作可以将 nums[i] 的任意位从 1 变为 0，但不能从 0 变为 1。返回任意次操作后所有元素异或的最大值。

## 解题思路

操作 nums[i] AND (nums[i] XOR x) 只能清除 nums[i] 中的位（将 1 变为 0）。所以每个元素只能变成自身的子集（位运算意义）。对于异或结果的每一位，只要有至少一个元素的该位为 1，我们总可以通过保留/清除操作使得该位在异或中为 1（保留奇数个该位为 1 的元素即可）。因此答案就是所有元素按位 OR 的结果。

## Solution

[SourceCode](./solution.js)
