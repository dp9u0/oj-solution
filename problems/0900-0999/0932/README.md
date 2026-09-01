# [932] Beautiful Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/beautiful-array/description/)

* algorithms
* Medium (69.02%)
* Likes:    1160
* Dislikes: 1600
* Testcase Example:  '4'

```md
An array nums of length n is beautiful if:

nums is a permutation of the integers in the range [1, n].
For every 0 <= i < j < n, there is no index k with i < k < j where 2 * nums[k] == nums[i] + nums[j].

Given the integer n, return any beautiful array nums of length n. There will be at least one valid answer for the given n.

Example 1:
Input: n = 4
Output: [2,1,4,3]
Example 2:
Input: n = 5
Output: [3,1,2,5,4]


Constraints:

1 <= n <= 1000


```

## 中文翻译

给定 n，构造长度为 n 的"漂亮数组"：是 [1,n] 的排列，且不存在 i < k < j 使得 2*nums[k] == nums[i] + nums[j]（即任何三个元素中，中间值不等于两端平均值）。

## 解题思路

分治法。关键性质：奇数 + 偶数 = 奇数（平均数非整数），所以将奇数放左边、偶数放右边，跨部分的三个元素一定满足条件。只需递归保证左右各自也是漂亮数组。

构造方法：从 [1] 开始，每步将数组变换为 [2x-1]（奇数部分）+ [2x]（偶数部分），数组长度翻倍，直到足够长，再过滤掉 > n 的元素。

时间复杂度：O(n log n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
