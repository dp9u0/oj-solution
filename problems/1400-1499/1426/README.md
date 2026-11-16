# [1426] 数元素

## Description


```md
https://leetcode.cn/problems/counting-elements/description/
* algorithms
* Easy (66.94%)
* Likes:    16
* Dislikes: -
* Testcase Example:  '[1,2,3]'
给你一个整数数组 arr， 对于元素 x ，只有当 x + 1 也在数组 arr 里时，才能记为 1 个数。
如果数组 arr 里有重复的数，每个重复的数单独计算。

示例 1：
输入：arr = [1,2,3]
输出：2
解释：1 和 2 被计算次数因为 2 和 3 在数组 arr 里。
示例 2：
输入：arr = [1,1,3,3,5,5,7,7]
输出：0
解释：所有的数都不算, 因为数组里没有 2、4、6、8。

提示：
1 <= arr.length <= 1000
0 <= arr[i] <= 1000
Hint 1: Use hashset to store all elements.
Hint 2: Loop again to count all valid elements.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an integer array `arr`, count elements `x` for which `x + 1` is also in `arr`. If there are duplicates, each duplicate counts separately.

**Example 1:**
arr = [1,2,3] → 2 (1 and 2 qualify since 2 and 3 exist)

**Constraints:**
- 1 <= arr.length <= 1000
- 0 <= arr[i] <= 1000

## Approach

Set 收集所有元素,再遍历一次统计 `set.has(x+1)` 的个数(重复元素各自统计)。

时间 O(n),空间 O(n)。
