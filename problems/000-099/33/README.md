# 33. Search in Rotated Sorted Array

## Description

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

## Example

```javascript
Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

## Solution

可通过 `nums[length-1]` 找到 rotated 的位置. 要求是 logn 因此可以用二分查找.找到后 再使用二分查找`target`

需要考虑 : rotatedAt === 0 的情况

[SourceCode](./solution.js)