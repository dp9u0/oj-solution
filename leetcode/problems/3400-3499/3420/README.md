# [3420] Count Non-Decreasing Subarrays After K Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-non-decreasing-subarrays-after-k-operations/description/)

* algorithms
* Hard (23.97%)
* Likes:    85
* Dislikes: 4
* Testcase Example:  '[6,3,1,2,4,4]\n7'

```md
You are given an array nums of n integers and an integer k.
For each subarray of nums, you can apply up to k operations on it. In each operation, you increment any element of the subarray by 1.
Note that each subarray is considered independently, meaning changes made to one subarray do not persist to another.
Return the number of subarrays that you can make non-decreasing ​​​​​after performing at most k operations.
An array is said to be non-decreasing if each element is greater than or equal to its previous element, if it exists.

Example 1:

Input: nums = [6,3,1,2,4,4], k = 7
Output: 17
Explanation:
Out of all 21 possible subarrays of nums, only the subarrays [6, 3, 1], [6, 3, 1, 2], [6, 3, 1, 2, 4] and [6, 3, 1, 2, 4, 4] cannot be made non-decreasing after applying up to k = 7 operations. Thus, the number of non-decreasing subarrays is 21 - 4 = 17.

Example 2:

Input: nums = [6,3,1,3,6], k = 4
Output: 12
Explanation:
The subarray [3, 1, 3, 6] along with all subarrays of nums with three or fewer elements, except [6, 3, 1], can be made non-decreasing after k operations. There are 5 subarrays of a single element, 4 subarrays of two elements, and 2 subarrays of three elements except [6, 3, 1], so there are 1 + 5 + 4 + 2 = 12 subarrays that can be made non-decreasing.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 109


```

## 翻译

给定数组 nums 和整数 k，对每个子数组可执行最多 k 次操作（每次将某元素+1），求能变为非递减的子数组数量。

## 解题思路

滑动窗口+单调栈。从右往左遍历，维护以 r 为右端点的最大合法窗口 [l, r]。要使子数组非递减，最优策略是将每个元素提升到其右侧不低于它的最大值。用单调栈维护从右往左的递减序列，当加入新元素 nums[l] 时，它需要被提升到栈中比它小的第一个元素的值，栈中所有更小的元素也需要被提升。

具体：从右往左滑动窗口。维护单调递减栈（从栈底到栈顶递减）。新元素入栈时，弹出所有 <= 它的元素，累计需要提升的代价。用前缀和辅助计算。O(n)。

## Solution

[SourceCode](./solution.js)
