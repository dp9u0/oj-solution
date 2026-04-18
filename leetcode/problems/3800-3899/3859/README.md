# [3859] Count Subarrays With K Distinct Integers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-subarrays-with-k-distinct-integers/description/)

* algorithms
* Hard (19.72%)
* Likes:    85
* Dislikes: 2
* Testcase Example:  '[1,2,1,2,2]\n2\n2'

```md
You are given an integer array nums and two integers k and m.
Return an integer denoting the count of subarrays of nums such that:

The subarray contains exactly k distinct integers.
Within the subarray, each distinct integer appears at least m times.


Example 1:

Input: nums = [1,2,1,2,2], k = 2, m = 2
Output: 2
Explanation:
The possible subarrays with k = 2 distinct integers, each appearing at least m = 2 times are:



Subarray
Distinct
numbers
Frequency




[1, 2, 1, 2]
{1, 2} &rarr; 2
{1: 2, 2: 2}


[1, 2, 1, 2, 2]
{1, 2} &rarr; 2
{1: 2, 2: 3}



Thus, the answer is 2.

Example 2:

Input: nums = [3,1,2,4], k = 2, m = 1
Output: 3
Explanation:
The possible subarrays with k = 2 distinct integers, each appearing at least m = 1 times are:



Subarray
Distinct
numbers
Frequency




[3, 1]
{3, 1} &rarr; 2
{3: 1, 1: 1}


[1, 2]
{1, 2} &rarr; 2
{1: 1, 2: 1}


[2, 4]
{2, 4} &rarr; 2
{2: 1, 4: 1}



Thus, the answer is 3.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
1 <= k, m <= nums.length


```

## 中文翻译

给定数组 nums 和整数 k, m。统计满足条件的子数组个数：恰好包含 k 个不同整数，且每个不同整数出现至少 m 次。

约束：n <= 10^5

## 解题思路

**滑动窗口**

定义 f(x) = 最多包含 x 个不同整数，且每个出现至少 m 次的子数组数。答案 = f(k) - f(k-1)。

计算 f(x)：双指针滑动窗口，维护 freq map，跟踪满足 freq[v]>=m 的整数个数 goodCount 和不同整数个数 distinct。当 distinct > x 时收缩左边界。

## Solution

[SourceCode](./solution.js)
