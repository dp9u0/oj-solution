# [面试题 10.05] 稀疏数组搜索

## Description


```md
https://leetcode.cn/problems/sparse-array-search-lcci/description/
* lcci
* Easy (57.66%)
* Likes:    91
* Dislikes: -
* Testcase Example:  '["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""]\n"ta"'
稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。
示例 1：
输入：words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
输出：-1
说明：不存在返回-1。
示例 2：
输入：words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ball"
输出：4
提示:
words的长度在[1, 1000000]之间
Hint 1: 尝试修改二分查找来处理这个问题。

```

## Description (English)

Sparse array search. Given a sorted string array with some empty strings scattered throughout, write a method to find the position of a given string. Return -1 if it does not exist.

Example 1:
Input: words = ["at","","","","ball","","","car","","","dad","",""], s = "ta"
Output: -1

Example 2:
Input: words = ["at","","","","ball","","","car","","","dad","",""], s = "ball"
Output: 4

Note: words.length in [1, 1000000].

## 思路

变形二分：`words[mid]` 为空时向右探到最近的非空串——探不到说明右半全空，收缩为只搜左半；非空则按普通二分比较。空串不可能等于非空目标，跳过无正确性风险；均摊 O(log n)，全空退化为 O(n)。

## Solution

[SourceCode](./solution.js)
