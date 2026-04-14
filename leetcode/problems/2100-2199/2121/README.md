# [2121] Intervals Between Identical Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/intervals-between-identical-elements/description/)

* algorithms
* Medium (45.67%)
* Likes:    957
* Dislikes: 45
* Testcase Example:  '[2,1,3,1,2,3,3]'

```md
You are given a 0-indexed array of n integers arr.
The interval between two elements in arr is defined as the absolute difference between their indices. More formally, the interval between arr[i] and arr[j] is
i - j
.
Return an array intervals of length n where intervals[i] is the sum of intervals between arr[i] and each element in arr with the same value as arr[i].
Note:
x
is the absolute value of x.

Example 1:

Input: arr = [2,1,3,1,2,3,3]
Output: [4,2,7,2,4,4,5]
Explanation:
- Index 0: Another 2 is found at index 4.
0 - 4
= 4
- Index 1: Another 1 is found at index 3.
1 - 3
= 2
- Index 2: Two more 3s are found at indices 5 and 6.
2 - 5
+
2 - 6
= 7
- Index 3: Another 1 is found at index 1.
3 - 1
= 2
- Index 4: Another 2 is found at index 0.
4 - 0
= 4
- Index 5: Two more 3s are found at indices 2 and 6.
5 - 2
+
5 - 6
= 4
- Index 6: Two more 3s are found at indices 2 and 5.
6 - 2
+
6 - 5
= 5

Example 2:

Input: arr = [10,5,10,10]
Output: [5,0,3,4]
Explanation:
- Index 0: Two more 10s are found at indices 2 and 3.
0 - 2
+
0 - 3
= 5
- Index 1: There is only one 5 in the array, so its sum of intervals to identical elements is 0.
- Index 2: Two more 10s are found at indices 0 and 3.
2 - 0
+
2 - 3
= 3
- Index 3: Two more 10s are found at indices 0 and 2.
3 - 0
+
3 - 2
= 4


Constraints:

n == arr.length
1 <= n <= 105
1 <= arr[i] <= 105


Note: This question is the same as  2615: Sum of Distances.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定数组 arr，返回数组 intervals，其中 intervals[i] 是 arr[i] 与所有相同值元素的下标距离之和。

## 解题思路

按值分组索引，对每组用前缀和计算距离和。

对于组内位置 pi，距离和 = pi × leftCount - leftSum + (rightSum - pi × rightCount)。通过前缀和数组可 O(1) 计算每个位置的答案。

总时间复杂度 O(n)。
