# [1838] Frequency of the Most Frequent Element

## Description

[LeetCode Problem Description](https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/)

* algorithms
* Medium (44.74%)
* Likes:    5753
* Dislikes: 312
* Testcase Example:  '[1,2,4]\n5'

```md
The frequency of an element is the number of times it occurs in an array.
You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.
Return the maximum possible frequency of an element after performing at most k operations.

Example 1:

Input: nums = [1,2,4], k = 5
Output: 3
Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
4 has a frequency of 3.
Example 2:

Input: nums = [1,4,8,13], k = 5
Output: 2
Explanation: There are multiple optimal solutions:
- Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
- Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
- Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.

Example 3:

Input: nums = [3,9,6], k = 2
Output: 1


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
1 <= k <= 105


```

## 翻译

给定整数数组 `nums` 和整数 `k`，每次操作可以将某个元素加 1，最多执行 k 次操作。返回操作后数组中某个元素可能出现的最大频率。

## Approach

排序 + 滑动窗口。排序后，窗口内的元素最终都变为 `nums[right]`。需要满足窗口内所有元素变为 `nums[right]` 的操作数 ≤ k，即 `nums[right] * windowSize - windowSum ≤ k`。用前缀和维护窗口和，当操作数超过 k 时左指针收缩。

时间复杂度 O(n log n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
