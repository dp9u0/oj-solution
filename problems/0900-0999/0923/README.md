# [923] 3Sum With Multiplicity

## Description

[LeetCode Problem Description](https://leetcode.com/problems/3sum-with-multiplicity/description/)

* algorithms
* Medium (46.25%)
* Likes:    2683
* Dislikes: 331
* Testcase Example:  '[1,1,2,2,3,3,4,4,5,5]\n8'

```md
Given an integer array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and arr[i] + arr[j] + arr[k] == target.
As the answer can be very large, return it modulo 109 + 7.

Example 1:

Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
Output: 20
Explanation:
Enumerating by the values (arr[i], arr[j], arr[k]):
(1, 2, 5) occurs 8 times;
(1, 3, 4) occurs 8 times;
(2, 2, 4) occurs 2 times;
(2, 3, 3) occurs 2 times.

Example 2:

Input: arr = [1,1,2,2,2,2], target = 5
Output: 12
Explanation:
arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
We choose one 1 from [1,1] in 2 ways,
and two 2s from [2,2,2,2] in 6 ways.

Example 3:

Input: arr = [2,1,3], target = 6
Output: 1
Explanation: (1, 2, 3) occured one time in the array so we return 1.


Constraints:

3 <= arr.length <= 3000
0 <= arr[i] <= 100
0 <= target <= 300


```

## 中文翻译

给定整数数组 arr 和 target，求满足 i < j < k 且 arr[i] + arr[j] + arr[k] == target 的三元组个数，结果对 10^9+7 取模。

## 解题思路

统计每个值的频率 freq，然后枚举三个值 a <= b <= c，检查 a + b + c == target：
- 若 a < b < c：组合数 = freq[a] * freq[b] * freq[c]
- 若 a == b < c：组合数 = C(freq[a], 2) * freq[c]
- 若 a < b == c：组合数 = freq[a] * C(freq[b], 2)
- 若 a == b == c：组合数 = C(freq[a], 3)

值域 [0, 100]，三重循环最多 101^3 ≈ 100 万次。

时间复杂度：O(V^3)，V = max_val。空间复杂度：O(V)。

## Solution

[SourceCode](./solution.js)
