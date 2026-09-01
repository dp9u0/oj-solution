# 4. Median of Two Sorted Arrays

## Description

There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

## Example

### Example 1

```shell
nums1 = [1, 3]
nums2 = [2]
#The median is 2.0
```

### Example 2

```shell
nums1 = [1, 2]
nums2 = [3, 4]
#The median is (2 + 3)/2 = 2.5
```

## Solution

两个数组的中位数 即 两个数组合并后 处于 (数组1个数+数组2个数)/2 位置的数,因为两个数字是排好顺序的 可以遍历两个数组 取当前每个数组中的最小值 并计数 直到遍历到中间位置

[SourceCode](./solution.js)