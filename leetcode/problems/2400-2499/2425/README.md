# [2425] Bitwise XOR of All Pairings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/bitwise-xor-of-all-pairings/description/)

* algorithms
* Medium (66.92%)
* Likes:    921
* Dislikes: 59
* Testcase Example:  '[2,1,3]\n[10,2,5,0]'

```md
You are given two 0-indexed arrays, nums1 and nums2, consisting of non-negative integers. Let there be another array, nums3, which contains the bitwise XOR of all pairings of integers between nums1 and nums2 (every integer in nums1 is paired with every integer in nums2 exactly once).
Return the bitwise XOR of all integers in nums3.

Example 1:

Input: nums1 = [2,1,3], nums2 = [10,2,5,0]
Output: 13
Explanation:
A possible nums3 array is [8,0,7,2,11,3,4,1,9,1,6,3].
The bitwise XOR of all these numbers is 13, so we return 13.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 0
Explanation:
All possible pairs of bitwise XORs are nums1[0] ^ nums2[0], nums1[0] ^ nums2[1], nums1[1] ^ nums2[0],
and nums1[1] ^ nums2[1].
Thus, one possible nums3 array is [2,5,1,6].
2 ^ 5 ^ 1 ^ 6 = 0, so we return 0.


Constraints:

1 <= nums1.length, nums2.length <= 105
0 <= nums1[i], nums2[j] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定两个数组 nums1 和 nums2，将 nums1 中每个数与 nums2 中每个数做 XOR 配对，得到数组 nums3。返回 nums3 中所有数的 XOR 结果。

## 解题思路

**XOR 性质推导**

nums3 的总 XOR = XOR 所有 (nums1[i] ^ nums2[j])。

利用 XOR 性质：
- x ^ x = 0，x ^ 0 = x
- 每个 nums1[i] 出现 nums2.length 次，每个 nums2[j] 出现 nums1.length 次
- 如果出现偶数次则抵消为 0，奇数次则保留

所以：
- 如果 nums2.length 为偶数，nums1 的贡献为 0；否则为 XOR(nums1)
- 如果 nums1.length 为偶数，nums2 的贡献为 0；否则为 XOR(nums2)
- 最终结果 = 两者贡献的 XOR

时间复杂度 O(n+m)，空间复杂度 O(1)。
