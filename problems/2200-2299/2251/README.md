# [2251] Number of Flowers in Full Bloom

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-flowers-in-full-bloom/description/)

* algorithms
* Hard (57.77%)
* Likes:    1820
* Dislikes: 46
* Testcase Example:  '[[1,6],[3,7],[9,12],[4,13]]\n[2,3,7,11]'

```md
You are given a 0-indexed 2D integer array flowers, where flowers[i] = [starti, endi] means the ith flower will be in full bloom from starti to endi (inclusive). You are also given a 0-indexed integer array people of size n, where people[i] is the time that the ith person will arrive to see the flowers.
Return an integer array answer of size n, where answer[i] is the number of flowers that are in full bloom when the ith person arrives.

Example 1:


Input: flowers = [[1,6],[3,7],[9,12],[4,13]], people = [2,3,7,11]
Output: [1,2,2,2]
Explanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival.

Example 2:


Input: flowers = [[1,10],[3,3]], people = [3,3,2]
Output: [2,2,1]
Explanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival.


Constraints:

1 <= flowers.length <= 5 * 104
flowers[i].length == 2
1 <= starti <= endi <= 109
1 <= people.length <= 5 * 104
1 <= people[i] <= 109


```

## 中文翻译

给定 flowers[i] = [start, end] 表示花开区间，以及 people[i] 表示到达时间。对每个到达时间，统计有多少花正在盛开（start ≤ t ≤ end）。

## 解题思路

差分 + 二分。提取所有 start 和 end，分别排序。对于时间 t，盛开数 = 已开始的花数 - 已结束的花数。已开始的花数 = start 中 ≤ t 的个数（二分 upper_bound），已结束的花数 = end 中 < t 的个数（二分 lower_bound）。

时间复杂度：O((n+m) log n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
