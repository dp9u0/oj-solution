# [2302] Count Subarrays With Score Less Than K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/description/)

* algorithms
* Hard (62.32%)
* Likes:    1622
* Dislikes: 62
* Testcase Example:  '[2,1,4,3,5]\n10'

```md
The score of an array is defined as the product of its sum and its length.

For example, the score of [1, 2, 3, 4, 5] is (1 + 2 + 3 + 4 + 5) * 5 = 75.

Given a positive integer array nums and an integer k, return the number of non-empty subarrays of nums whose score is strictly less than k.
A subarray is a contiguous sequence of elements within an array.

Example 1:

Input: nums = [2,1,4,3,5], k = 10
Output: 6
Explanation:
The 6 subarrays having scores less than 10 are:
- [2] with score 2 * 1 = 2.
- [1] with score 1 * 1 = 1.
- [4] with score 4 * 1 = 4.
- [3] with score 3 * 1 = 3.
- [5] with score 5 * 1 = 5.
- [2,1] with score (2 + 1) * 2 = 6.
Note that subarrays such as [1,4] and [4,3,5] are not considered because their scores are 10 and 36 respectively, while we need scores strictly less than 10.
Example 2:

Input: nums = [1,1,1], k = 5
Output: 5
Explanation:
Every subarray except [1,1,1] has a score less than 5.
[1,1,1] has a score (1 + 1 + 1) * 3 = 9, which is greater than 5.
Thus, there are 5 subarrays having scores less than 5.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
1 <= k <= 1015


```

## 翻译

数组的分数定义为其元素之和与长度的乘积。

例如，[1, 2, 3, 4, 5] 的分数为 (1 + 2 + 3 + 4 + 5) * 5 = 75。

给定一个正整数数组 nums 和一个整数 k，返回 nums 中分数严格小于 k 的非空子数组数量。子数组是数组中元素的连续序列。

## Approach

滑动窗口 / 双指针。由于所有元素都是正整数，当窗口扩大时，sum 增大且 length 增大，因此 score = sum × length 单调递增。

固定右端点 right，维护左端点 left 使得窗口 [left, right] 的 score < k。对于每个 right：
- 将 nums[right] 加入窗口和 sum
- 若 score = sum × (right - left + 1) >= k，则收缩左端点直到 score < k
- 以 right 结尾的合法子数组数量为 (right - left + 1)

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
