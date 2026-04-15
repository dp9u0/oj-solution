# [3411] Maximum Subarray With Equal Products

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-subarray-with-equal-products/description/)

* algorithms
* Easy (46.70%)
* Likes:    104
* Dislikes: 44
* Testcase Example:  '[1,2,1,2,1,1,1]'

```md
You are given an array of positive integers nums.
An array arr is called product equivalent if prod(arr) == lcm(arr) * gcd(arr), where:

prod(arr) is the product of all elements of arr.
gcd(arr) is the GCD of all elements of arr.
lcm(arr) is the LCM of all elements of arr.

Return the length of the longest product equivalent subarray of nums.

Example 1:

Input: nums = [1,2,1,2,1,1,1]
Output: 5
Explanation:
The longest product equivalent subarray is [1, 2, 1, 1, 1], whereprod([1, 2, 1, 1, 1]) = 2,gcd([1, 2, 1, 1, 1]) = 1, andlcm([1, 2, 1, 1, 1]) = 2.

Example 2:

Input: nums = [2,3,4,5,6]
Output: 3
Explanation:
The longest product equivalent subarray is [3, 4, 5].

Example 3:

Input: nums = [1,2,3,1,4,5,1]
Output: 5


Constraints:

2 <= nums.length <= 100
1 <= nums[i] <= 10


```

## 中文翻译

给定正整数数组 nums，找最长子数组使其满足 prod == lcm * gcd。其中 prod 为乘积，lcm 为最小公倍数，gcd 为最大公约数。

## 解题思路

**数学 + 枚举：**

1. 关键性质：长度为 2 的子数组总是满足（lcm(a,b)*gcd(a,b)=a*b）
2. 长度 >= 3 时，prod==lcm*gcd 当且仅当所有非 1 元素两两互质
3. nums[i] <= 10，质因子只有 2,3,5,7，用 4 位 bitmask 表示
4. 从每个起点向右扩展，遇到质因子冲突则停止，记录最长长度

时间复杂度：O(n^2)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
