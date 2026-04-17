# [2080] Range Frequency Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/range-frequency-queries/description/)

* algorithms
* Medium (42.67%)
* Likes:    747
* Dislikes: 29
* Testcase Example:  '["RangeFreqQuery","query","query"]\n' +

```md
'[[[12,33,4,56,22,2,34,33,22,12,34,56]],[1,2,4],[0,11,33]]'
Design a data structure to find the frequency of a given value in a given subarray.
The frequency of a value in a subarray is the number of occurrences of that value in the subarray.
Implement the RangeFreqQuery class:

RangeFreqQuery(int[] arr) Constructs an instance of the class with the given 0-indexed integer array arr.
int query(int left, int right, int value) Returns the frequency of value in the subarray arr[left...right].

A subarray is a contiguous sequence of elements within an array. arr[left...right] denotes the subarray that contains the elements of nums between indices left and right (inclusive).

Example 1:

Input
['RangeFreqQuery', 'query', 'query']
[[[12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]], [1, 2, 4], [0, 11, 33]]
Output
[null, 1, 2]
Explanation
RangeFreqQuery rangeFreqQuery = new RangeFreqQuery([12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]);
rangeFreqQuery.query(1, 2, 4); // return 1. The value 4 occurs 1 time in the subarray [33, 4]
rangeFreqQuery.query(0, 11, 33); // return 2. The value 33 occurs 2 times in the whole array.


Constraints:

1 <= arr.length <= 105
1 <= arr[i], value <= 104
0 <= left <= right < arr.length
At most 105 calls will be made to query


```

## 题目翻译

设计数据结构，支持查询给定值在子数组中的出现次数。构造函数接收数组 arr，query(left, right, value) 返回 value 在 arr[left..right] 中的频率。

## 解题思路

**哈希表 + 位置数组 + 二分查找**

预处理：对每个值记录其所有出现位置的有序数组。查询时，在 value 对应的位置数组中二分查找 left 的下界和 right 的上界，二者之差即为频率。

构造 O(n)，每次查询 O(log k)，k 为 value 的出现次数。

## Solution

[SourceCode](./solution.js)
