# [1213] 三个有序数组的交集

## Description


```md
https://leetcode.cn/problems/intersection-of-three-sorted-arrays/description/
* algorithms
* Easy (78.42%)
* Likes:    47
* Dislikes: -
* Testcase Example:  '[1,2,3,4,5]\n[1,2,5,7,9]\n[1,3,4,5,8]'
给出三个均为 严格递增排列 的整数数组 arr1，arr2 和 arr3。返回一个由 仅 在这三个数组中 同时出现 的整数所构成的有序数组。

示例 1：
输入: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
输出: [1,5]
解释: 只有 1 和 5 同时在这三个数组中出现.
示例 2:
输入: arr1 = [197,418,523,876,1356], arr2 = [501,880,1593,1710,1870], arr3 = [521,682,1337,1395,1764]
输出: []

提示：
1 <= arr1.length, arr2.length, arr3.length <= 1000
1 <= arr1[i], arr2[i], arr3[i] <= 2000
Hint 1: Count the frequency of all elements in the three arrays.
Hint 2: The elements that appeared in all the arrays would have a frequency of 3.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given three integer arrays `arr1`, `arr2`, `arr3` sorted in **strictly increasing** order, return a sorted array of only the integers that appeared in all three arrays.

**Example 1:**
arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8] → [1,5]

**Constraints:**
- 1 <= arr1.length, arr2.length, arr3.length <= 1000

## Approach

三指针同步推进:三值相等即收集并三指针同进;否则移动指向最小值的指针。

时间 O(n1 + n2 + n3),空间 O(1)。
