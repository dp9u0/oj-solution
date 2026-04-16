# [2568] Minimum Impossible OR

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-impossible-or/description/)

* algorithms
* Medium (58.92%)
* Likes:    384
* Dislikes: 22
* Testcase Example:  '[2,1]'

```md
You are given a 0-indexedinteger array nums.
We say that an integer x is expressible from nums if there exist some integers 0 <= index1 < index2 < ... < indexk < nums.length for which nums[index1]
nums[index2]
...
nums[indexk] = x. In other words, an integer is expressible if it can be written as the bitwise OR of some subsequence of nums.
Return the minimum positive non-zero integerthat is not expressible from nums.

Example 1:

Input: nums = [2,1]
Output: 4
Explanation: 1 and 2 are already present in the array. We know that 3 is expressible, since nums[0]
nums[1] = 2
1 = 3. Since 4 is not expressible, we return 4.

Example 2:

Input: nums = [5,3,2]
Output: 1
Explanation: We can show that 1 is the smallest number that is not expressible.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109


```

## 中文翻译

给定数组 nums，一个整数 x 可表示为 nums 的某个子序列的按位 OR。返回不能用这种方式表示的最小正整数。

## 解题思路

关键观察：最小的不可表示数一定是 2 的幂。因为 2^k 只能由包含 2^k 这一位的数来 OR 出来，如果 nums 中没有值为 2^k 的元素，则 2^k 不可表示。所以只需从 1,2,4,8,... 依次检查是否在 nums 的集合中，第一个不在的就是答案。

## Solution

[SourceCode](./solution.js)
