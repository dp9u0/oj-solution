# [1054] Distant Barcodes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/distant-barcodes/description/)

* algorithms
* Medium (48.83%)
* Likes:    1352
* Dislikes: 52
* Testcase Example:  '[1,1,1,2,2,2]'

```md
In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i].
Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists.

Example 1:
Input: barcodes = [1,1,1,2,2,2]
Output: [2,1,2,1,2,1]
Example 2:
Input: barcodes = [1,1,1,1,2,2,3,3]
Output: [1,3,1,3,1,2,1,2]


Constraints:

1 <= barcodes.length <= 10000
1 <= barcodes[i] <= 10000


```

## 中文翻译

给定一组条形码，重新排列使得没有两个相邻的条形码相同。保证一定有解。

## 解题思路

**贪心 + 计数排序**：统计每个条形码出现次数，按频率从高到低排列。先填偶数下标（0,2,4...），再填奇数下标（1,3,5...），这样出现最多的数被分散到间隔位置，不会相邻。

## Solution

[SourceCode](./solution.js)
