# [面试题 17.18] 最短超串

## Description


```md
https://leetcode.cn/problems/shortest-supersequence-lcci/description/
* lcci
* Medium (45.10%)
* Likes:    78
* Dislikes: -
* Testcase Example:  '[7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7]\n[1, 5, 9]'
假设你有两个数组，一个长一个短，短的元素均不相同。找到长数组中包含短数组所有的元素的最短子数组，其出现顺序无关紧要。
返回最短子数组的左端点和右端点，如有多个满足条件的子数组，返回左端点最小的一个。若不存在，返回空数组。
示例 1：
输入：
big = [7,5,9,0,2,1,3,5,7,9,1,1,5,8,8,9,7]
small = [1,5,9]
输出：[7,10]
示例 2：
输入：
big = [1,2,3]
small = [4]
输出：[]
提示：
big.length <= 100000
1 <= small.length <= 100000
Hint 1: 从蛮力解法开始。
Hint 2: 一种蛮力解决方案是对于每个起始位置不断向前移动，直到你找到一个包含所有目标字符的子序列为止。
Hint 3: 另一种对蛮力方法的考虑是，我们取每个起始索引，在目标字符串中寻找每个元素的下一个出现位置。所有这些出现位置的最大值标志着子序列的尾部（该子序列包含所有目标字符）。这个算法的时间复杂度是多少？怎样才能使它更快呢？
Hint 4: 考虑一下前面解释的蛮力解法。瓶颈在于我们反复查询某个特定字符的下一个出现位置。有办法优化该过程么？你应该能在O(1)时间内完成。
Hint 5: 你能从每个索引中预先计算一个特定字符的出现位置吗？尝试使用一个多维数组。
Hint 6: 在得到了预计算的解法之后，考虑一下如何降低空间复杂度。你应该能够将其降低到O(SB)的时间和O(B)的空间（其中B是较大数组的大小，S是较小数组的大小）。
Hint 7: 另一种考虑方法是：假设你有一个每个元素所在索引的列表。你能找到包含所有元素的第一个子序列吗？你能找到第二个吗？
Hint 8: 考虑使用堆。

```

## Description (English)

Given two arrays, one long and one short, where the short array's elements are all distinct, find the shortest subarray of the long array that contains all elements of the short array (order irrelevant). Return the left and right endpoints; if multiple subarrays qualify, return the one with the smallest left endpoint; if none exists, return an empty array.

Example 1:
Input: big = [7,5,9,0,2,1,3,5,7,9,1,1,5,8,8,9,7], small = [1,5,9]
Output: [7,10]

Example 2:
Input: big = [1,2,3], small = [4]
Output: []

Notes: big.length <= 100000; 1 <= small.length <= 100000.

## 思路

最小覆盖滑动窗口 O(B)：right 右扩时只统计属于 small 的元素，`covered` 记录已覆盖种类数；覆盖齐后左端收缩，收缩前记录候选，只在**严格更短**时更新——先到先得保证并列时左端点最小。Set/Map 均以元素值为键（small 元素互异）。

## Solution

[SourceCode](./solution.js)
