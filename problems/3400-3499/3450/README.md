# [3450] 一张长椅上的最多学生

## Description


```md
https://leetcode.cn/problems/maximum-students-on-a-single-bench/description/
* algorithms
* Easy (28.41%)
* Dislikes: -
* Testcase Example:  '[[1,2],[2,2],[3,3],[1,3],[2,3]]'
给定一个包含学生数据的 2 维数组 students，其中 students[i] = [student_id, bench_id] 表示学生 student_id 正坐在长椅 bench_id 上。
返回单个长凳上坐着的不同学生的 最大 数量。如果没有学生，返回 0。
注意：一个学生在输入中可以出现在同一张长椅上多次，但每个长椅上只能计算一次。

示例 1：
输入：students = [[1,2],[2,2],[3,3],[1,3],[2,3]]
输出：3
解释：
长椅 2 上有 2 个不同学生：[1, 2]。
长椅 3 上有 3 个不同学生：[1, 2, 3]。
一张长椅上不同学生的最大数量是 3。
示例 2：
输入：students = [[1,1],[2,1],[3,1],[4,2],[5,2]]
输出：3
示例：
长椅 1 上有 3 个不同学生：[1, 2, 3]。
长椅 2 上有 2 个不同学生：[4, 5]。
一张长椅上不同学生的最大数量是 3。
示例 3：
输入：students = [[1,1],[1,1]]
输出：1
解释：
一张长椅上不同学生的最大数量是 1。
示例 4：
输入：students = []
输出：0
解释：
由于不存在学生，输出为 0。

提示：
0 <= students.length <= 100
students[i] = [student_id, bench_id]
1 <= student_id <= 100
1 <= bench_id <= 100
Hint 1: Use a hash table (or dictionary) to group students by their bench ID.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given a 2D array `students` where `students[i] = [student_id, bench_id]` means student `student_id` is sitting on bench `bench_id`. Return the **maximum** number of distinct students sitting on a single bench. If there are no students, return `0`.

Note: a student may appear multiple times on the same bench in the input, but is only counted once per bench.

**Example 1:**
Input: students = [[1,2],[2,2],[3,3],[1,3],[2,3]]
Output: 3 (bench 3 has distinct students 1, 2, 3)

**Constraints:**
- 0 <= students.length <= 100
- 1 <= student_id <= 100, 1 <= bench_id <= 100

## Approach

按 bench_id 用 Map 分组,每组用 Set 去重学生,取最大 Set 大小。空输入返回 0。

时间 O(n),空间 O(n)。
