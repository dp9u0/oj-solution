# [3574] Maximize Subarray GCD Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-subarray-gcd-score/description/)

* algorithms
* Hard (24.88%)
* Likes:    47
* Dislikes: 4
* Testcase Example:  '[2,4]\n1'

```md
You are given an array of positive integers nums and an integer k.
You may perform at most k operations. In each operation, you can choose one element in the array and double its value. Each element can be doubled at most once.
The score of a contiguous subarray is defined as the product of its length and the greatest common divisor (GCD) of all its elements.
Your task is to return the maximum score that can be achieved by selecting a contiguous subarray from the modified array.
Note:

The greatest common divisor (GCD) of an array is the largest integer that evenly divides all the array elements.


Example 1:

Input: nums = [2,4], k = 1
Output: 8
Explanation:

Double nums[0] to 4 using one operation. The modified array becomes [4, 4].
The GCD of the subarray [4, 4] is 4, and the length is 2.
Thus, the maximum possible score is 2 &times; 4 = 8.


Example 2:

Input: nums = [3,5,7], k = 2
Output: 14
Explanation:

Double nums[2] to 14 using one operation. The modified array becomes [3, 5, 14].
The GCD of the subarray [14] is 14, and the length is 1.
Thus, the maximum possible score is 1 &times; 14 = 14.


Example 3:

Input: nums = [5,5,5], k = 1
Output: 15
Explanation:

The subarray [5, 5, 5] has a GCD of 5, and its length is 3.
Since doubling any element doesn&#39;t improve the score, the maximum score is 3 &times; 5 = 15.



Constraints:

1 <= n == nums.length <= 1500
1 <= nums[i] <= 109
1 <= k <= n


```

## 题目翻译

给定正整数数组 nums 和整数 k。最多对 k 个元素执行翻倍操作（每个最多一次）。选一个连续子数组，score = 长度 × GCD。求最大 score。

## 解题思路

**枚举子数组 + GCD 增量计算**

关键观察：翻倍只能增加 GCD 中 2 的幂次。对子数组 [l..r]：
- g = GCD，v_2(g) = min(v_2(各元素))
- 若达到最小 v_2 的元素个数 c ≤ k，翻倍这些元素可使 GCD 翻倍（g → 2g）
- 否则 GCD 不变

对每个左端点 l，向右扩展，增量维护 GCD、最小 v_2 及其计数。O(n²) 总复杂度。

## Solution

[SourceCode](./solution.js)
