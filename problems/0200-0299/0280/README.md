# [280] 摆动排序

## Description


```md
https://leetcode.cn/problems/wiggle-sort/description/
* algorithms
* Medium (69.96%)
* Likes:    166
* Dislikes: -
* Testcase Example:  '[3,5,2,1,6,4]'
给你一个的整数数组 nums, 将该数组重新排序后使 nums[0] <= nums[1] >= nums[2] <= nums[3]...
输入数组总是有一个有效的答案。

示例 1:
输入：nums = [3,5,2,1,6,4]
输出：[3,5,1,6,2,4]
解释：[1,6,2,5,3,4]也是有效的答案
示例 2:
输入：nums = [6,6,5,6,3,8]
输出：[6,6,5,6,3,8]

提示：
1 <= nums.length <= 5 * 104
0 <= nums[i] <= 104

输入的 nums 保证至少有一个答案。


进阶：你能在 O(n) 时间复杂度下解决这个问题吗？

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Reorder `nums` in-place so that nums[0] <= nums[1] >= nums[2] <= nums[3]...

**Example:**
[3,5,2,1,6,4] → some valid output like [3,5,1,6,2,4]

**Constraints:**
- 0 <= nums.length <= 5*10^4 (duplicates allowed)

## Approach

一遍扫描:奇数位应为波峰、偶数位应为波谷,违反则与前一元素交换。交换不会破坏前面已满足的关系(交换后新前值 ≤ 后值,且新前值是上一关系中的较小端)。

时间 O(n),空间 O(1)。
