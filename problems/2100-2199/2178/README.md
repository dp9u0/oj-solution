# [2178] Maximum Split of Positive Even Integers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-split-of-positive-even-integers/description/)

* algorithms
* Medium (59.65%)
* Likes:    829
* Dislikes: 75
* Testcase Example:  '12'

```md
You are given an integer finalSum. Split it into a sum of a maximum number of unique positive even integers.

For example, given finalSum = 12, the following splits are valid (unique positive even integers summing up to finalSum): (12), (2 + 10), (2 + 4 + 6), and (4 + 8). Among them, (2 + 4 + 6) contains the maximum number of integers. Note that finalSum cannot be split into (2 + 2 + 4 + 4) as all the numbers should be unique.

Return a list of integers that represent a valid split containing a maximum number of integers. If no valid split exists for finalSum, return an empty list. You may return the integers in any order.

Example 1:

Input: finalSum = 12
Output: [2,4,6]
Explanation: The following are valid splits: (12), (2 + 10), (2 + 4 + 6), and (4 + 8).
(2 + 4 + 6) has the maximum number of integers, which is 3. Thus, we return [2,4,6].
Note that [2,6,4], [6,2,4], etc. are also accepted.

Example 2:

Input: finalSum = 7
Output: []
Explanation: There are no valid splits for the given finalSum.
Thus, we return an empty array.

Example 3:

Input: finalSum = 28
Output: [6,8,2,12]
Explanation: The following are valid splits: (2 + 26), (6 + 8 + 2 + 12), and (4 + 24).
(6 + 8 + 2 + 12) has the maximum number of integers, which is 4. Thus, we return [6,8,2,12].
Note that [10,2,4,12], [6,2,4,16], etc. are also accepted.


Constraints:

1 <= finalSum <= 1010


```

## 翻译

给定整数 finalSum，将其拆分为最多数量的唯一正偶数之和。返回拆分结果数组。如果不存在有效拆分（finalSum 为奇数），返回空数组。

## 解题思路

贪心：要最大化数量，尽量使用最小的偶数 2, 4, 6, 8, ...。用 2+4+...+2k = k(k+1)，找到最大的 k 使得 k(k+1) <= finalSum。剩余部分加到最后一个元素上（保证唯一性）。若 finalSum 为奇数直接返回空。

## Solution

[SourceCode](./solution.js)
