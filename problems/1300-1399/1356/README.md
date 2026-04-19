# [1356] Sort Integers by The Number of 1 Bits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description/)

* algorithms
* Easy (82.31%)
* Likes:    2866
* Dislikes: 138
* Testcase Example:  '[0,1,2,3,4,5,6,7,8]'

```md
You are given an integer array arr. Sort the integers in the arrayin ascending order by the number of 1&#39;sin their binary representation and in case of two or more integers have the same number of 1&#39;s you have to sort them in ascending order.
Return the array after sorting it.

Example 1:

Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]

Example 2:

Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.


Constraints:

1 <= arr.length <= 500
0 <= arr[i] <= 104


```

## 翻译

给定整数数组，按二进制中 1 的个数升序排序，1 的个数相同则按数值升序排序。

## Approach

自定义排序：先比较 popcount，再比较数值本身。

时间复杂度 O(n log n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
