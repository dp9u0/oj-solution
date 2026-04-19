# [1481] Least Number of Unique Integers after K Removals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/description/)

* algorithms
* Medium (63.79%)
* Likes:    2340
* Dislikes: 234
* Testcase Example:  '[5,5,4]\n1'

```md
Given an array of integersarrand an integer k.Find the least number of unique integersafter removing exactly k elements.



Example 1:

Input: arr = [5,5,4], k = 1
Output: 1
Explanation: Remove the single 4, only 5 is left.

Example 2:

Input: arr = [4,3,1,1,3,3,2], k = 3
Output: 2
Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.

Constraints:

1 <= arr.length<= 10^5
1 <= arr[i] <= 10^9
0 <= k<= arr.length


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 arr 和整数 k，恰好移除 k 个元素后，返回数组中不同整数的最少数量。

## 解题思路

**贪心 + 计数排序**

1. 统计每个数字的出现频率
2. 按频率从小到大排序，优先移除频率低的数字（贪心）
3. 依次消耗 k，当 k 不够移除某个数字时停止

时间复杂度 O(n)，空间复杂度 O(n)。
