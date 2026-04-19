# [2216] Minimum Deletions to Make Array Beautiful

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/description/)

* algorithms
* Medium (49.91%)
* Likes:    836
* Dislikes: 96
* Testcase Example:  '[1,1,2,3,5]'

```md
You are given a 0-indexed integer array nums. The array nums is beautiful if:

nums.length is even.
nums[i] != nums[i + 1] for all i % 2 == 0.

Note that an empty array is considered beautiful.
You can delete any number of elements from nums. When you delete an element, all the elements to the right of the deleted element will be shifted one unit to the left to fill the gap created and all the elements to the left of the deleted element will remain unchanged.
Return the minimum number of elements to delete from nums to make it beautiful.

Example 1:

Input: nums = [1,1,2,3,5]
Output: 1
Explanation: You can delete either nums[0] or nums[1] to make nums = [1,2,3,5] which is beautiful. It can be proven you need at least 1 deletion to make nums beautiful.

Example 2:

Input: nums = [1,1,2,2,3,3]
Output: 2
Explanation: You can delete nums[0] and nums[5] to make nums = [1,2,2,3] which is beautiful. It can be proven you need at least 2 deletions to make nums beautiful.


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105


```

## 翻译

给定数组 nums，美丽数组需要满足：长度为偶数，且所有偶数下标 i 处 nums[i] != nums[i+1]。可以删除任意元素，求最少删除次数。

## Approach

贪心。从左到右遍历，维护当前有效数组的长度 count。当 count 为偶数时，直接加入当前元素；当 count 为奇数时，检查当前元素是否等于上一个元素（即 nums[count-1]），如果相等则删除当前元素（deletions++），否则加入。

最后如果有效长度为奇数，还需删一个。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
