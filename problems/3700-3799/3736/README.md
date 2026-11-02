# [3736] 最小操作次数使数组元素相等 III

## Description


```md
https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-iii/description/
* algorithms
* Easy (88.13%)
* Likes:    6
* Dislikes: -
* Testcase Example:  '[2,1,3]'
给你一个整数数组 nums。
在一步操作中，你可以将任意单个元素 nums[i] 的值 增加 1。
返回使数组中的所有元素都 相等 所需的 最小总操作次数 。

示例 1:
输入: nums = [2,1,3]
输出: 3
解释:
使所有元素相等的操作如下:
将 nums[0] = 2 增加 1, 变为 3。
将 nums[1] = 1 增加 1, 变为 2。
将 nums[1] = 2 增加 1, 变为 3。
现在，nums 中的所有元素都等于 3。最小总操作次数为 3。
示例 2:
输入: nums = [4,4,5]
输出: 2
解释:
使所有元素相等的操作如下:
将 nums[0] = 4 增加 1, 变为 5。
将 nums[1] = 4 增加 1, 变为 5。
现在，nums 中的所有元素都等于 5。最小总操作次数为 2。

提示:
1 <= nums.length <= 100
1 <= nums[i] <= 100
Hint 1: To make all numbers equal, they must all reach at least the maximum value in the array.

```

## Description (English)

```md
You are given an integer array nums.

In one operation, you can increase the value of any single element nums[i] by 1.

Return the minimum total number of operations required to make all elements in the array equal.

Example 1:
Input: nums = [2,1,3]
Output: 3
Explanation:
Make all elements equal as follows:
- Increase nums[0] = 2 by 1, it becomes 3.
- Increase nums[1] = 1 by 1, it becomes 2.
- Increase nums[1] = 2 by 1, it becomes 3.
Now all elements in nums are equal to 3. The minimum total number of operations is 3.

Example 2:
Input: nums = [4,4,5]
Output: 2

Constraints:
1 <= nums.length <= 100
1 <= nums[i] <= 100
```

## Approach

只能增加元素，所以所有元素最终都必须达到某个共同目标值 t >= max(nums)。目标值取 t = max(nums) 时总操作次数最小（任何更大的 t 只会额外增加 n*(t - max) 次操作）。

因此答案为：sum(max - nums[i]) = n * max - sum(nums)。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
