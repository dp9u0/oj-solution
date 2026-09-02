# [LCR 119] 最长连续序列

## Description


```md
https://leetcode.cn/problems/WhsWhI/description/
* algorithms
* Medium (48.22%)
* Likes:    95
* Dislikes: -
* Testcase Example:  '[100,4,200,1,3,2]'
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

示例 1：
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
示例 2：
输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9

提示：
0 <= nums.length <= 104
-109 <= nums[i] <= 109

进阶：可以设计并实现时间复杂度为 O(n) 的解决方案吗？

注意：本题与主站 128 题相同： https://leetcode.cn/problems/longest-consecutive-sequence/

```

## Solution

[SourceCode](./solution.js)

### English Description

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in `O(n)` time.

**Example 1:**
```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

**Example 2:**
```
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```

**Constraints:**
- `0 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

> This problem is the same as LeetCode 128: Longest Consecutive Sequence.

### Approach (中文思路)

**HashSet + 只从序列起点扩展 (O(n))**

- 朴素做法：对每个数向左右扩展找连续段，若不做去重最坏 O(n²)。
- 关键优化：把全部元素放入 `Set` 判重 O(1)。
- 遍历每个 `num`，**仅当 `num - 1` 不在集合中**（即它是某段连续序列的起点）时才向内扩展：不断 `+1` 直到不在集合中，统计该段长度。
- 这样每个数最多被遍历常数次：起点开始的一轮扩展访问它一次，作为起点判定时访问一次。总复杂度 O(n)。
- 重复元素天然被 Set 去重，不会影响序列长度计数。
- 时间复杂度 O(n)，空间复杂度 O(n)。
- 边界：空数组返回 0。
