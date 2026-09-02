# [LCR 007] 三数之和

## Description


```md
https://leetcode.cn/problems/1fGaJU/description/
* algorithms
* Medium (43.27%)
* Likes:    176
* Dislikes: -
* Testcase Example:  '[-1,0,1,2,-1,-4]'
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？请找出所有和为 0 且 不重复 的三元组。

示例 1：
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：
输入：nums = []
输出：[]
示例 3：
输入：nums = [0]
输出：[]

提示：
0 <= nums.length <= 3000
-105 <= nums[i] <= 105

注意：本题与主站 15 题相同：https://leetcode.cn/problems/3sum/

```

## Solution

[SourceCode](./solution.js)

## English Description

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

**Example 1:**
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```
**Example 2:**
```
Input: nums = []
Output: []
```
**Example 3:**
```
Input: nums = [0]
Output: []
```

**Constraints:**
- `0 <= nums.length <= 3000`
- `-10^5 <= nums[i] <= 10^5`

## 解题思路 (Approach)

**排序 + 双指针 (Sort + Two Pointers)**

要求所有和为 0 且不重复的三元组。暴力三重循环是 O(n³),不可取。

1. **排序**数组，便于去重与使用双指针。
2. 固定第一个元素 `nums[i]`，在右侧区间用**双指针** `left`/`right` 寻找两个数使其和为 `-nums[i]`。
3. **去重**：
   - 外层：若 `nums[i] === nums[i-1]` 跳过（同一首元素只处理一次）。
   - 内层：命中一组后，移动指针跳过相同值，避免重复三元组。
4. 因数组有序，`sum < 0` 时 `left++` 增大和，`sum > 0` 时 `right--` 减小和。

**复杂度**: 排序 O(n log n) + 外层 n 次内层 O(n) = O(n²) 时间，O(1)（不含排序栈）额外空间（结果集除外）。
