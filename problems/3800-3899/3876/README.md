# [3876] Construct Uniform Parity Array II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/construct-uniform-parity-array-ii/description/)

* algorithms
* Medium (49.76%)
* Likes:    69
* Dislikes: 7
* Testcase Example:  '[1,4,7]'

```md
You are given an array nums1 of n distinct integers.
You want to construct another array nums2 of length n such that the elements in nums2 are either all odd or all even.
For each index i, you must choose exactly one of the following (in any order):

nums2[i] = nums1[i]​​​​​​​
nums2[i] = nums1[i] - nums1[j], for an index j != i, such that nums1[i] - nums1[j] >= 1

Return true if it is possible to construct such an array, otherwise return false.

Example 1:

Input: nums1 = [1,4,7]
Output: true
Explanation:​​​​​​​​​​​​​​

Set nums2[0] = nums1[0] = 1.
Set nums2[1] = nums1[1] - nums1[0] = 4 - 1 = 3.
Set nums2[2] = nums1[2] = 7.
nums2 = [1, 3, 7], and all elements are odd. Thus, the answer is true.


Example 2:

Input: nums1 = [2,3]
Output: false
Explanation:
It is not possible to construct nums2 such that all elements have the same parity. Thus, the answer is false.

Example 3:

Input: nums1 = [4,6]
Output: true
Explanation:

Set nums2[0] = nums1[0] = 4.
Set nums2[1] = nums1[1] = 6.
nums2 = [4, 6], and all elements are even. Thus, the answer is true.



Constraints:

1 <= n == nums1.length <= 105
1 <= nums1[i] <= 109
nums1 consists of distinct integers.


```

## 题目翻译

给定 n 个不同整数数组 nums1，构造长度为 n 的 nums2，使 nums2 中元素全为奇数或全为偶数。对每个下标 i，选择：nums2[i] = nums1[i]，或 nums2[i] = nums1[i] - nums1[j]（j != i，差 >= 1）。判断是否可能。

## 解题思路

**奇偶性分析**

关键观察：对于每个 i，nums2[i] 的奇偶性取决于选择：
- 保持 nums1[i]：奇偶性 = nums1[i] % 2
- 减去 nums1[j]：奇偶性 = (nums1[i] - nums1[j]) % 2 = (nums1[i] + nums1[j]) % 2（同奇偶则差为偶，异奇偶则差为奇）

分析"全偶"目标：
- 偶数元素：保持即可 → 偶 ✓
- 奇数元素：需减去更小的奇数（奇-奇=偶）。最小奇数无更小奇数 → 无法变偶 → 全偶要求无奇数元素

分析"全奇"目标：
- 奇数元素：保持即可 → 奇 ✓
- 偶数元素：需减去更小的奇数（偶-奇=奇）。若最小值为奇数，所有偶数元素都有更小奇数可用 → 全奇可行

结论：answer = (最小值为奇数) || (所有元素为偶数)。O(n) 复杂度。

## Solution

[SourceCode](./solution.js)
