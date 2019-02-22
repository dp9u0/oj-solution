# [215] Kth Largest Element in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/kth-largest-element-in-an-array/description/)

* algorithms
* Medium (45.69%)
* Testcase Example:  '[3,2,1,5,6,4]\n2'

```md
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
Example 1:
Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.

```

## Solution

TOP-K 问题,这类问题可以使用`BFPRT算法`(*Blum,Floyd,Pratt,Rivest,Tarjan提出*)时间复杂度为 `O(n)`

其实还是快排,但是不是单纯的分治,而是分治减治:

1. 选取`pivot`,大于等于 `pivot` 为 `i` 个,小于 pivot 的为 `n-i` 个.
2. 如果 `i = k`,则需要返回 pivot;
3. 如果 `i < k`,只需要再对 pivot 右边的元素进行递归即可
4. 如果 `i > k`,只需要再对 pivot 左边的元素进行递归即可

3,4 即为减治.

这里 `pivot` 的选取算法:

1. n个元素分为5个一组.分别选取中位数.
2. 递归调用1获取唯一的中位数.
3. 选取中位数作为 `pivot`

[SourceCode](./solution.js)