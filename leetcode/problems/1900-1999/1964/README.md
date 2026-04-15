# [1964] Find the Longest Valid Obstacle Course at Each Position

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/description/)

* algorithms
* Hard (62.52%)
* Likes:    1899
* Dislikes: 74
* Testcase Example:  '[1,2,3,2]'

```md
You want to build some obstacle courses. You are given a 0-indexed integer array obstacles of length n, where obstacles[i] describes the height of the ith obstacle.
For every index i between 0 and n - 1 (inclusive), find the length of the longest obstacle course in obstacles such that:

You choose any number of obstacles between 0 and i inclusive.
You must include the ith obstacle in the course.
You must put the chosen obstacles in the same order as they appear in obstacles.
Every obstacle (except the first) is taller than or the same height as the obstacle immediately before it.

Return an array ans of length n, where ans[i] is the length of the longest obstacle course for index i as described above.

Example 1:

Input: obstacles = [1,2,3,2]
Output: [1,2,3,3]
Explanation: The longest valid obstacle course at each position is:
- i = 0: [1], [1] has length 1.
- i = 1: [1,2], [1,2] has length 2.
- i = 2: [1,2,3], [1,2,3] has length 3.
- i = 3: [1,2,3,2], [1,2,2] has length 3.

Example 2:

Input: obstacles = [2,2,1]
Output: [1,2,1]
Explanation: The longest valid obstacle course at each position is:
- i = 0: [2], [2] has length 1.
- i = 1: [2,2], [2,2] has length 2.
- i = 2: [2,2,1], [1] has length 1.

Example 3:

Input: obstacles = [3,1,5,6,4,2]
Output: [1,1,2,3,2,2]
Explanation: The longest valid obstacle course at each position is:
- i = 0: [3], [3] has length 1.
- i = 1: [3,1], [1] has length 1.
- i = 2: [3,1,5], [3,5] has length 2. [1,5] is also valid.
- i = 3: [3,1,5,6], [3,5,6] has length 3. [1,5,6] is also valid.
- i = 4: [3,1,5,6,4], [3,4] has length 2. [1,4] is also valid.
- i = 5: [3,1,5,6,4,2], [1,2] has length 2.


Constraints:

n == obstacles.length
1 <= n <= 105
1 <= obstacles[i] <= 107


```

## 中文翻译

对每个位置 i，求以 obstacles[i] 结尾的最长非递减子序列的长度。

## 解题思路

**在线 LIS（Patience Sorting 变体）**

维护 tails 数组，tails[k] 表示当前看到的所有长度为 k+1 的非递减子序列中末尾元素的最小值。

对每个 obstacles[i]：
- 在 tails 中 bisect_right 找到最右位置 pos 满足 tails[pos] <= obstacles[i]
- ans[i] = pos + 1
- 若 pos < tails.length 则 tails[pos] = obstacles[i]，否则追加

时间复杂度：O(n log n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
