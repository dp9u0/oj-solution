# 442. Find All Duplicates in an Array

## Description

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements that appear twice in this array.
Could you do it without extra space and in O(n) runtime?

## Example

```shell
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
```

## Solution

重点是 `1<= a[i] <= n`  因此每个 element 都可以作为 数组的index

可以用标记法 将nums[nums[index]] 标记为负数

当 `nums[nums[index2]]` 是负数时候  说明之前访问过这个 位置 即 `nums[index] === nums [index2]`

[SourceCode](./solution.js)
