# [658] Find K Closest Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-k-closest-elements/description/)

* algorithms
* Medium (49.58%)
* Likes:    9070
* Dislikes: 927
* Testcase Example:  '[1,2,3,4,5]\n4\n3'

```md
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
An integer a is closer to x than an integer b if:


a - x
<
b - x
, or

a - x
==
b - x
and a < b


Example 1:

Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]

Example 2:

Input: arr = [1,1,2,3,4,5], k = 4, x = -1
Output: [1,1,2,3]


Constraints:

1 <= k <= arr.length
1 <= arr.length <= 104
arr is sorted in ascending order.
-104 <= arr[i], x <= 104


```

## 翻译

给定一个已排序的整数数组 `arr`、整数 `k` 和 `x`，返回 `arr` 中最接近 `x` 的 `k` 个整数。结果需按升序排列。距离相同时较小的数优先。

## Approach

二分查找左边界：在 `[0, n-k]` 范围内二分搜索最优窗口起点 `left`。对于候选起点 `mid`，比较 `x - arr[mid]` 和 `arr[mid+k] - x`：如果前者 > 后者，说明 `mid+k` 位置更近，left 应该右移到 `mid+1`；否则 right 缩小。

最终 `left` 即为窗口起点，返回 `arr[left..left+k-1]`。

时间复杂度 O(log n + k)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
