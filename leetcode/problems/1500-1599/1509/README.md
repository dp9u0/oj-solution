# [1509] Minimum Difference Between Largest and Smallest Value in Three Moves

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/description/)

* algorithms
* Medium (59.21%)
* Likes:    2548
* Dislikes: 286
* Testcase Example:  '[5,3,2,4]'

```md
You are given an integer array nums.
In one move, you can choose one element of nums and change it to any value.
Return the minimum difference between the largest and smallest value of nums after performing at most three moves.

Example 1:

Input: nums = [5,3,2,4]
Output: 0
Explanation: We can make at most 3 moves.
In the first move, change 2 to 3. nums becomes [5,3,3,4].
In the second move, change 4 to 3. nums becomes [5,3,3,3].
In the third move, change 5 to 3. nums becomes [3,3,3,3].
After performing 3 moves, the difference between the minimum and maximum is 3 - 3 = 0.

Example 2:

Input: nums = [1,5,0,10,14]
Output: 1
Explanation: We can make at most 3 moves.
In the first move, change 5 to 0. nums becomes [1,0,0,10,14].
In the second move, change 10 to 0. nums becomes [1,0,0,0,14].
In the third move, change 14 to 1. nums becomes [1,0,0,0,1].
After performing 3 moves, the difference between the minimum and maximum is 1 - 0 = 1.
It can be shown that there is no way to make the difference 0 in 3 moves.
Example 3:

Input: nums = [3,100,20]
Output: 0
Explanation: We can make at most 3 moves.
In the first move, change 100 to 7. nums becomes [3,7,20].
In the second move, change 20 to 7. nums becomes [3,7,7].
In the third move, change 3 to 7. nums becomes [7,7,7].
After performing 3 moves, the difference between the minimum and maximum is 7 - 7 = 0.


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109


```

## 翻译

给定整数数组 nums，每次操作可将一个元素改为任意值。最多执行 3 次操作后，返回数组最大值与最小值的最小差值。

## Approach

排序后，3 次操作本质上可以从两端删除 3 个元素。等价于从 4 种策略中选最优：
1. 删 3 个最小值：nums[n-1] - nums[3]
2. 删 2 个最小 + 1 个最大：nums[n-2] - nums[2]
3. 删 1 个最小 + 2 个最大：nums[n-3] - nums[1]
4. 删 3 个最大值：nums[n-4] - nums[0]

若 n <= 4，直接返回 0。

时间复杂度 O(n log n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
