# [2091] Removing Minimum and Maximum From Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/description/)

* algorithms
* Medium (56.38%)
* Likes:    1065
* Dislikes: 58
* Testcase Example:  '[2,10,7,5,4,1,8,6]'

```md
You are given a 0-indexed array of distinct integers nums.
There is an element in nums that has the lowest value and an element that has the highest value. We call them the minimum and maximum respectively. Your goal is to remove both these elements from the array.
A deletion is defined as either removing an element from the front of the array or removing an element from the back of the array.
Return the minimum number of deletions it would take to remove both the minimum and maximum element from the array.

Example 1:

Input: nums = [2,10,7,5,4,1,8,6]
Output: 5
Explanation:
The minimum element in the array is nums[5], which is 1.
The maximum element in the array is nums[1], which is 10.
We can remove both the minimum and maximum by removing 2 elements from the front and 3 elements from the back.
This results in 2 + 3 = 5 deletions, which is the minimum number possible.

Example 2:

Input: nums = [0,-4,19,1,8,-2,-3,5]
Output: 3
Explanation:
The minimum element in the array is nums[1], which is -4.
The maximum element in the array is nums[2], which is 19.
We can remove both the minimum and maximum by removing 3 elements from the front.
This results in only 3 deletions, which is the minimum number possible.

Example 3:

Input: nums = [101]
Output: 1
Explanation:
There is only one element in the array, which makes it both the minimum and maximum element.
We can remove it with 1 deletion.


Constraints:

1 <= nums.length <= 105
-105 <= nums[i] <= 105
The integers in nums are distinct.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你一个下标从 0 开始、由互不相同的整数组成的数组 `nums`。

数组中存在一个值最小的元素和一个值最大的元素，分别称为最小值和最大值。你的目标是将这两个元素都从数组中删除。

一次删除操作定义为：从数组的**前面**移除一个元素，或从数组的**后面**移除一个元素。

返回删除最小值和最大值所需的**最少**删除次数。

示例 1：
- 输入：`nums = [2,10,7,5,4,1,8,6]`
- 输出：`5`
- 解释：最小值是 `nums[5] = 1`，最大值是 `nums[1] = 10`。从前端删 2 个、从后端删 3 个，共 `2 + 3 = 5` 次删除，是最少次数。

示例 2：
- 输入：`nums = [0,-4,19,1,8,-2,-3,5]`
- 输出：`3`
- 解释：最小值是 `nums[1] = -4`，最大值是 `nums[2] = 19`。从前端删 3 个即可同时删掉两者。

示例 3：
- 输入：`nums = [101]`
- 输出：`1`
- 解释：只有一个元素，它既是最小值也是最大值，删除 1 次即可。

约束：
- `1 <= nums.length <= 10^5`
- `-10^5 <= nums[i] <= 10^5`
- `nums` 中的整数互不相同

## 解题思路

关键点：删除只能从数组的头部或尾部进行，因此两个目标元素（最小值、最大值）各自只能通过"从左挖"或"从右挖"的方式被删掉。

1. 一次线性扫描找到最小值和最大值的下标 `minIdx`、`maxIdx`，令 `l = min(minIdx, maxIdx)`，`r = max(minIdx, maxIdx)`（即两者中靠左和靠右的位置），`n` 为数组长度。
2. 只有三种互斥的删除策略（不存在"右边那个从左边挖"更优的情况，因为从左边挖到 r 已经覆盖了策略 1）：
   - **两边都从左边删**：需要删掉前 `r + 1` 个元素，代价 `r + 1`；
   - **两边都从右边删**：需要删掉后 `n - l` 个元素，代价 `n - l`；
   - **左边那个从左边删、右边那个从右边删**：代价 `(l + 1) + (n - r)`。
3. 三者取最小即为答案。

时间复杂度 O(n)（找最小/最大下标的一次遍历），空间复杂度 O(1)。

验证示例 1：`l = 1, r = 5, n = 8` → `min(6, 7, 2 + 3) = 5` ✓
