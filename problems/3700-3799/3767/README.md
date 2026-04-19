# [3767] Maximize Points After Choosing K Tasks

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-points-after-choosing-k-tasks/description/)

* algorithms
* Medium (59.97%)
* Likes:    74
* Dislikes: 5
* Testcase Example:  '[5,2,10]\n[10,3,8]\n2'

```md
You are given two integer arrays, technique1 and technique2, each of length n, where n represents the number of tasks to complete.

If the ith task is completed using technique 1, you earn technique1[i] points.
If it is completed using technique 2, you earn technique2[i] points.

You are also given an integer k, representing the minimum number of tasks that must be completed using technique 1.
You must complete at least k tasks using technique 1 (they do not need to be the first k tasks).
The remaining tasks may be completed using either technique.
Return an integer denoting the maximum total points you can earn.

Example 1:

Input: technique1 = [5,2,10], technique2 = [10,3,8], k = 2
Output: 22
Explanation:
We must complete at least k = 2 tasks using technique1.
Choosing technique1[1] and technique1[2] (completed using technique 1), and technique2[0] (completed using technique 2), yields the maximum points: 2 + 10 + 10 = 22.

Example 2:

Input: technique1 = [10,20,30], technique2 = [5,15,25], k = 2
Output: 60
Explanation:
We must complete at least k = 2 tasks using technique1.
Choosing all tasks using technique 1 yields the maximum points: 10 + 20 + 30 = 60.

Example 3:

Input: technique1 = [1,2,3], technique2 = [4,5,6], k = 0
Output: 15
Explanation:
Since k = 0, we are not required to choose any task using technique1.
Choosing all tasks using technique 2 yields the maximum points: 4 + 5 + 6 = 15.


Constraints:

1 <= n == technique1.length == technique2.length <= 105
1 <= technique1[i], technique2​​​​​​​[i] <= 10​​​​​​​5
0 <= k <= n


```

## 翻译

给定两个长度为 n 的整数数组 technique1 和 technique2。对于第 i 个任务：
- 使用技巧1完成可获得 technique1[i] 分
- 使用技巧2完成可获得 technique2[i] 分

还给定整数 k，表示必须至少用技巧1完成 k 个任务。剩余任务可以自由选择技巧。返回最大总得分。

## 解题思路

贪心。假设所有任务都用技巧1完成，然后我们可以把最多 (n-k) 个任务从技巧1换成技巧2。每次切换的收益为 technique2[i] - technique1[i]。按收益降序排序，贪心选择正收益的切换即可。

## Solution

[SourceCode](./solution.js)
