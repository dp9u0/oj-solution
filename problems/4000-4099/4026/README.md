# [4026] Maximum Gap Between Stations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-gap-between-stations/description/)

* algorithms
* Medium (52.36%)
* Likes:    66
* Dislikes: 3
* Testcase Example:  '"aa"\n"aaaa"'

```md
You are given two strings skill and station of lengths n and m, respectively.
skill[i] represents the skill of worker i, and station[j] represents the skill supported by station j.
You must assign every worker to a distinct station. Let ji be the index of the station assigned to worker i. A valid assignment must satisfy:

station[ji] == skill[i] for every 0 <= i < n.
The assigned station indices must be strictly increasing in worker order, meaning j0 < j1 < ... < jn - 1.

The gap of an assignment is the maximum difference between the station indices assigned to two consecutive workers. In other words, it is max(ji - ji - 1) over all 1 <= i < n.
If there is only one worker, the gap is 0.
Return the maximum possible gap among all valid assignments. It is guaranteed that at least one valid assignment exists.

Example 1:

Input: skill = 'aa', station = 'aaaa'
Output: 3
Explanation:

The two workers must be assigned to two different &#39;a&#39; stations.
Assigning them to stations [0, 3] gives a gap of 3.


Example 2:

Input: skill = 'xyz', station = 'xyzz'
Output: 2
Explanation:

Assign worker 0 to station j = 0, and worker 1 to station j = 1.
To maximize the gap, assign worker 2 to station j = 3.
This gives the assignment [0, 1, 3] with gaps [1, 2], so the gap is 2.


Example 3:

Input: skill = 'cbc', station = 'cbcdbc'
Output: 4
Explanation:

Assign worker 0 to station j = 0, and worker 1 to station j = 1.
To maximize the gap, assign worker 2 to station j = 5.
This gives the assignment [0, 1, 5] with gaps [1, 4], so the gap is 4.



Constraints:

skill.length == n
station.length == m
1 <= n <= m <= 105
skill and station consist of lowercase English letters.
It is guaranteed that a valid assignment exists for every worker.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定长 n 的 `skill` 与长 m 的 `station`。把每个工人 i 分配到不同工位 jᵢ，要求 `station[jᵢ] == skill[i]` 且 j₀ < j₁ < … < j_{n−1}。**间隔** = 相邻工人分到的工位下标差的最大值（单工人为 0）。返回所有合法分配中**最大可能的间隔**。保证存在合法分配。

示例 1：`'aa','aaaa'` → `3`；示例 2：`'xyz','xyzz'` → `2`；示例 3：`'cbc','cbcdbc'` → `4`

## 解题思路

最大间隔必在某对相邻工人 (i−1, i) 处取到，且 `jᵢ − j_{i−1} ≤ latest[i] − earliest[i−1]`：

- `earliest[i]`：左贪心（每个工人取 ≥ 前驱+1 的最早匹配位）——任何合法分配中 jᵢ ≥ earliest[i]，且前缀 0..i 可行；
- `latest[i]`：右贪心（取 ≤ 后继−1 的最晚匹配位）——任何合法分配中 jᵢ ≤ latest[i]，且后缀 i..n−1 可行；
- 两段可独立拼接（earliest 前缀 + latest 后缀，只要 earliest[i−1] < latest[i]，由保证存在合法分配可证），故答案 = `max_i (latest[i] − earliest[i−1])`。

每个字符的位置列表 + 二分定位，O((n+m) log m)。

验证示例 3：earliest=[0,1,2]，latest=[3,4,5] → max(4−0, 5−1) = 4 ✓
