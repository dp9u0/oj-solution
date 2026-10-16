# [面试题 17.05]  字母与数字

## Description


```md
https://leetcode.cn/problems/find-longest-subarray-lcci/description/
* lcci
* Medium (48.47%)
* Likes:    204
* Dislikes: -
* Testcase Example:  '["A","1","B","C","D","2","3","4","E","5","F","G","6","7","H","I","J","K","L","M"]'
给定一个放有字母和数字的数组，找到最长的子数组，且包含的字母和数字的个数相同。
返回该子数组，若存在多个最长子数组，返回左端点下标值最小的子数组。若不存在这样的数组，返回一个空数组。
示例 1：
输入：["A","1","B","C","D","2","3","4","E","5","F","G","6","7","H","I","J","K","L","M"]
输出：["A","1","B","C","D","2","3","4","E","5","F","G","6","7"]
示例 2：
输入：["A","A"]
输出：[]
提示：
array.length <= 100000
Hint 1: 是哪个字母或数字并不重要。你可以把该问题简化为只包含 A 和 B 的数组。然后寻找具有相同数量的 A 和 B 的最长子数组。
Hint 2: 从蛮力解法开始。
Hint 3: 如果你从一开始就计算 A 的个数和 B 的个数会怎样(试着构建数组构成的表并保存到目前为止 A 和 B 的数量)?
Hint 4: 当表中 A 和 B 的个数相等时，整个子数组(从索引 0 开始)的 A 和 B 的个数相等。如何使用该表来查找不以索引 0 开始的、符合条件的子数组?
Hint 5: 假设在这个表中，索引 i 满足 count(A, 0->i) = 3 和 count(B, 0->i) = 7。这意味着 B 比 A 多 4 个。如果你发现后面的某点 j 具有相同的差值(count(B, 0->j) - count(a, 0->j))，那么这表示子数组中有相同数量的 A 和 B。

```

## Description (English)

Given an array of letters and digits, find the longest subarray containing an equal number of letters and digits. Return that subarray; if several longest subarrays exist, return the one with the smallest left endpoint. If none exists, return an empty array.

Example 1:
Input: ["A","1","B","C","D","2","3","4","E","5","F","G","6","7","H","I","J","K","L","M"]
Output: ["A","1","B","C","D","2","3","4","E","5","F","G","6","7"]

Example 2:
Input: ["A","A"]
Output: []

Note: array.length <= 100000.

## 思路

前缀平衡 + 首现位置哈希，O(n)：字母记 +1、数字记 -1，前缀平衡相同的两个位置 i<j 之间即为字母数字等量区间。Map 只记每个平衡值的**首次**下标，j 再次遇到时用 `j - first[balance]` 更新答案；只接受严格更长（`>`），保证并列长度时左端点最小。平衡 0 初始记在下标 -1。

## Solution

[SourceCode](./solution.js)
