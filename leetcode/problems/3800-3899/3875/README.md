# [3875] Construct Uniform Parity Array I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/construct-uniform-parity-array-i/description/)

* algorithms
* Easy (76.07%)
* Likes:    54
* Dislikes: 18
* Testcase Example:  '[2,3]'

```md
You are given an array nums1 of n distinct integers.
You want to construct another array nums2 of length n such that the elements in nums2 are either all odd or all even.
For each index i, you must choose exactly one of the following (in any order):

nums2[i] = nums1[i]
nums2[i] = nums1[i] - nums1[j], for an index j != i

Return true if it is possible to construct such an array, otherwise, return false.

Example 1:

Input: nums1 = [2,3]
Output: true
Explanation:

Choose nums2[0] = nums1[0] - nums1[1] = 2 - 3 = -1.
Choose nums2[1] = nums1[1] = 3.
nums2 = [-1, 3], and both elements are odd. Thus, the answer is true​​​​​​​.


Example 2:

Input: nums1 = [4,6]
Output: true
Explanation:​​​​​​​

Choose nums2[0] = nums1[0] = 4.
Choose nums2[1] = nums1[1] = 6.
nums2 = [4, 6], and all elements are even. Thus, the answer is true.



Constraints:

1 <= n == nums1.length <= 100
1 <= nums1[i] <= 100
nums1 consists of distinct integers.


```

## 中文翻译

给定数组 nums1，构造 nums2 使得所有元素同奇偶。每个 nums2[i] 可以取 nums1[i] 或 nums1[i]-nums1[j](j!=i)。判断是否可能。

## 解题思路

分析奇偶性：nums1[i]-nums1[j] 的奇偶性等于 (nums1[i]+nums1[j])%2。若数组中同时存在奇数和偶数，每个位置都能通过选择不同的 j 得到两种奇偶性。若全是偶数，则结果全是偶数。若全是奇数且 n>=2，用差（奇-奇=偶）即可全部偶数。n=1 时单个元素天然满足。因此恒为 true。

## Solution

[SourceCode](./solution.js)
