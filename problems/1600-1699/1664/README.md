# [1664] Ways to Make a Fair Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/ways-to-make-a-fair-array/description/)

* algorithms
* Medium (66.63%)
* Likes:    1406
* Dislikes: 50
* Testcase Example:  '[2,1,6,4]'

```md
You are given an integer arraynums. You can choose exactly one index (0-indexed) and remove the element. Notice that the index of the elements may change after the removal.
For example, if nums = [6,1,7,4,1]:

Choosing to remove index 1 results in nums = [6,7,4,1].
Choosing to remove index 2 results in nums = [6,1,4,1].
Choosing to remove index 4 results in nums = [6,1,7,4].

An array is fair if the sum of the odd-indexed values equals the sum of the even-indexed values.
Return the number of indices that you could choose such that after the removal, nums is fair.

Example 1:

Input: nums = [2,1,6,4]
Output: 1
Explanation:
Remove index 0: [1,6,4] -> Even sum: 1 + 4 = 5. Odd sum: 6. Not fair.
Remove index 1: [2,6,4] -> Even sum: 2 + 4 = 6. Odd sum: 6. Fair.
Remove index 2: [2,1,4] -> Even sum: 2 + 4 = 6. Odd sum: 1. Not fair.
Remove index 3: [2,1,6] -> Even sum: 2 + 6 = 8. Odd sum: 1. Not fair.
There is 1 index that you can remove to make nums fair.

Example 2:

Input: nums = [1,1,1]
Output: 3
Explanation:You can remove any index and the remaining array is fair.

Example 3:

Input: nums = [1,2,3]
Output: 0
Explanation:You cannot make a fair array after removing any index.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 104


```

## 翻译

给定数组，恰好移除一个元素后新数组的奇数下标元素和等于偶数下标元素和。求满足条件的移除下标数。

## 解题思路

移除下标 i 后，i 之前元素奇偶性不变，之后元素奇偶性翻转。维护奇偶位前缀和，枚举每个 i 判断新奇偶和是否相等。时间 O(n)。

## Solution

[SourceCode](./solution.js)
