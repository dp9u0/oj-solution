# [1385] 两个数组间的距离值

## Description


```md
https://leetcode.cn/problems/find-the-distance-value-between-two-arrays/description/
* algorithms
* Easy (66.93%)
* Likes:    183
* Dislikes: -
* Testcase Example:  '[4,5,8]\n[10,9,1,8]\n2'
给你两个整数数组 arr1 ， arr2 和一个整数 d ，请你返回两个数组之间的 距离值 。
「距离值」 定义为符合此距离要求的元素数目：对于元素 arr1[i] ，不存在任何元素 arr2[j] 满足
arr1[i]-arr2[j]
<= d 。

示例 1：
输入：arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
输出：2
解释：
对于 arr1[0]=4 我们有：
4-10
=6 > d=2
4-9
=5 > d=2
4-1
=3 > d=2
4-8
=4 > d=2
所以 arr1[0]=4 符合距离要求
对于 arr1[1]=5 我们有：
5-10
=5 > d=2
5-9
=4 > d=2
5-1
=4 > d=2
5-8
=3 > d=2
所以 arr1[1]=5 也符合距离要求
对于 arr1[2]=8 我们有：
8-10
=2 <= d=2
8-9
=1 <= d=2
8-1
=7 > d=2
8-8
=0 <= d=2
存在距离小于等于 2 的情况，不符合距离要求
故而只有 arr1[0]=4 和 arr1[1]=5 两个符合距离要求，距离值为 2
示例 2：
输入：arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
输出：2
示例 3：
输入：arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
输出：1

提示：
1 <= arr1.length, arr2.length <= 500
-10^3 <= arr1[i], arr2[j] <= 10^3
0 <= d <= 100
Hint 1: Sort 'arr2' and use binary search to get the closest element for each 'arr1[i]', it gives a time complexity of O(nlogn).

```

## Description (English)

Given two integer arrays `arr1` and `arr2`, and an integer `d`, return the distance value between the two arrays.

The "distance value" is defined as the number of elements `arr1[i]` for which there does not exist any element `arr2[j]` such that `|arr1[i] - arr2[j]| <= d`.

Example 1:
Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
Output: 2
Explanation: For arr1[0]=4 and arr1[1]=5, all distances to arr2 elements are greater than 2, so they satisfy the distance requirement. For arr1[2]=8, |8-8|=0 <= 2, so it does not qualify. The distance value is 2.

Example 2:
Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
Output: 2

Example 3:
Input: arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
Output: 1

Constraints:
- 1 <= arr1.length, arr2.length <= 500
- -10^3 <= arr1[i], arr2[j] <= 10^3
- 0 <= d <= 100

## Approach

对 arr2 排序后，对每个 arr1[i] 二分查找最接近的元素：
- 若 arr2 中存在元素落在 [arr1[i]-d, arr1[i]+d] 区间内，则 arr1[i] 不符合距离要求。
- 二分找到第一个 >= arr1[i]-d 的位置 idx，只需检查 arr2[idx] 是否 <= arr1[i]+d。

时间复杂度 O((m+n)·log n)，空间复杂度 O(1)（不计排序栈空间）。

## Solution

[SourceCode](./solution.js)
