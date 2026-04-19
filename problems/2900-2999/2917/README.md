# [2917] Find the K-or of an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-k-or-of-an-array/description/)

* algorithms
* Easy (72.74%)
* Likes:    253
* Dislikes: 278
* Testcase Example:  '[7,12,9,8,9,15]\n4'

```md
You are given an integer array nums, and an integer k. Let&#39;s introduceK-or operation by extending the standard bitwise OR. In K-or, a bit position in the result is set to 1if at least k numbers in nums have a 1 in that position.
Return the K-or of nums.

Example 1:

Input: nums = [7,12,9,8,9,15], k = 4
Output: 9
Explanation:
Represent numbers in binary:



Number
Bit 3
Bit 2
Bit 1
Bit 0


7
0
1
1
1


12
1
1
0
0


9
1
0
0
1


8
1
0
0
0


9
1
0
0
1


15
1
1
1
1


Result = 9
1
0
0
1



Bit 0 is set in 7, 9, 9, and 15. Bit 3 is set in 12, 9, 8, 9, and 15.
Only bits 0 and 3 qualify. The result is (1001)2 = 9.

Example 2:

Input: nums = [2,12,1,11,4,5], k = 6
Output: 0
Explanation:No bit appears as 1 in all six array numbers, as required for K-or with k = 6. Thus, the result is 0.

Example 3:

Input: nums = [10,8,5,9,11,6,8], k = 1
Output: 15
Explanation:  Since k == 1, the 1-or of the array is equal to the bitwise OR of all its elements. Hence, the answer is 10 OR 8 OR 5 OR 9 OR 11 OR 6 OR 8 = 15.


Constraints:

1 <= nums.length <= 50
0 <= nums[i] < 231
1 <= k <= nums.length


```

## 翻译

给定整数数组nums和整数k。K-or操作：结果的每一位，如果nums中至少有k个数在该位为1，则该位设为1。返回K-or结果。

## 解题思路

逐位统计nums中每个数的各bit位出现1的次数，若某位出现次数>=k则置1。

## Solution

[SourceCode](./solution.js)
