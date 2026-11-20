# [1874] 两个数组的最小乘积和

## Description


```md
https://leetcode.cn/problems/minimize-product-sum-of-two-arrays/description/
* algorithms
* Medium (83.05%)
* Likes:    13
* Dislikes: -
* Testcase Example:  '[5,3,4,2]\n[4,2,2,5]'
给定两个长度相等的数组a和b，它们的乘积和为数组中所有的a[i] * b[i]之和，其中0 <= i < a.length。
比如a = [1,2,3,4]，b = [5,2,3,1]时，它们的乘积和为1*5 + 2*2 + 3*3 + 4*1 = 22
现有两个长度都为n的数组nums1和nums2，你可以以任意顺序排序nums1，请返回它们的最小乘积和。
示例 1:
输入: nums1 = [5,3,4,2], nums2 = [4,2,2,5]
输出: 40
解释: 将 num1 重新排列为 [3,5,4,2] 后，可由 [3,5,4,2] 和 [4,2,2,5] 得到最小乘积和 3*4 + 5*2 + 4*2 + 2*5 = 40。
示例 2:
输入: nums1 = [2,1,4,5,7], nums2 = [3,2,4,8,6]
输出: 65
解释: 将 num1 重新排列为 [5,7,4,1,2] 后，可由 [5,7,4,1,2] 和 [3,2,4,8,6] 得到最小乘积和 5*3 + 7*2 + 4*4 + 1*8 + 2*6 = 65。

提示:
n == nums1.length == nums2.length
1 <= n <= 105
1 <= nums1[i], nums2[i] <= 100
Hint 1: Is there a particular way we should order the arrays such that the product sum is minimized?
Hint 2: Would you want to multiply two numbers that are closer to one another or further?

```

## Solution

[SourceCode](./solution.js)

## English Translation

The product sum of two arrays `a` and `b` of equal length is `sum(a[i] * b[i])` for `0 <= i < a.length`.

Given two arrays `nums1` and `nums2` of the same length `n`, you may rearrange `nums1` in any order. Return the minimum possible product sum.

Example 1:
Input: nums1 = [5,3,4,2], nums2 = [4,2,2,5]
Output: 40

Example 2:
Input: nums1 = [2,1,4,5,7], nums2 = [3,2,4,8,6]
Output: 65

Constraints: n == nums1.length == nums2.length, 1 <= n <= 10^5, 1 <= nums1[i], nums2[i] <= 100.

## Approach

Rearrangement inequality: pairing the largest of one array with the smallest of the other minimizes the sum of products. Sort `nums1` ascending and `nums2` descending, then accumulate `nums1[i] * nums2[i]`.

(Exchange argument: if a larger element were paired with a larger one while a smaller pair exists elsewhere, swapping partners reduces the total — a*b + c*d > a*d + c*b for a <= c, b <= d.)

Time O(n log n) for the sorts (values <= 100 would also allow counting sort).
