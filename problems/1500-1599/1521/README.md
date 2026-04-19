# [1521] Find a Value of a Mysterious Function Closest to Target

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/description/)

* algorithms
* Hard (47.12%)
* Likes:    406
* Dislikes: 21
* Testcase Example:  '[9,12,3,7,15]\n5'

```md

Winston was given the above mysterious function func. He has an integer array arr and an integer target and he wants to find the values l and r that make the value
func(arr, l, r) - target
minimum possible.
Return the minimum possible value of
func(arr, l, r) - target
.
Notice that func should be called with the values l and r where 0 <= l, r < arr.length.

Example 1:

Input: arr = [9,12,3,7,15], target = 5
Output: 2
Explanation: Calling func with all the pairs of [l,r] = [[0,0],[1,1],[2,2],[3,3],[4,4],[0,1],[1,2],[2,3],[3,4],[0,2],[1,3],[2,4],[0,3],[1,4],[0,4]], Winston got the following results [9,12,3,7,15,8,0,3,7,0,0,3,0,0,0]. The value closest to 5 is 7 and 3, thus the minimum difference is 2.

Example 2:

Input: arr = [1000000,1000000,1000000], target = 1
Output: 999999
Explanation: Winston called the func with all possible values of [l,r] and he always got 1000000, thus the min difference is 999999.

Example 3:

Input: arr = [1,2,4,8,16], target = 0
Output: 0


Constraints:

1 <= arr.length <= 105
1 <= arr[i] <= 106
0 <= target <= 107


```

## 题目翻译

给定数组 arr 和整数 target，func(arr, l, r) = arr[l] & arr[l+1] & ... & arr[r]（区间按位 AND）。求 min |func(arr, l, r) - target|。

## 解题思路

**按位 AND 的单调性 + 集合维护**

关键性质：AND 运算单调递减，每扩展一位，每个 bit 只能从 1 变 0。由于 arr[i] <= 10^6 < 2^20，每个值最多 20 个 bit，所以对于固定右端点，不同左端点最多产生 20 个不同的 AND 值。

用 Set 维护以当前位置为右端点的所有不同 AND 值：
- cur = {arr[i]} ∪ {arr[i] & v | v ∈ prev}

每次遍历 cur 中所有值取最小差。时间 O(n * 20) = O(n)。

## Solution

[SourceCode](./solution.js)
