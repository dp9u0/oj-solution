# [1792] Maximum Average Pass Ratio

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-average-pass-ratio/description/)

* algorithms
* Medium (74.09%)
* Likes:    1940
* Dislikes: 140
* Testcase Example:  '[[1,2],[3,5],[2,2]]\n2'

```md
There is a school that has classes of students and each class will be having a final exam. You are given a 2D integer array classes, where classes[i] = [passi, totali]. You know beforehand that in the ith class, there are totali total students, but only passi number of students will pass the exam.
You are also given an integer extraStudents. There are another extraStudents brilliant students that are guaranteed to pass the exam of any class they are assigned to. You want to assign each of the extraStudents students to a class in a way that maximizes the average pass ratio across all the classes.
The pass ratio of a class is equal to the number of students of the class that will pass the exam divided by the total number of students of the class. The average pass ratio is the sum of pass ratios of all the classes divided by the number of the classes.
Return the maximum possible average pass ratio after assigning the extraStudents students. Answers within 10-5 of the actual answer will be accepted.

Example 1:

Input: classes = [[1,2],[3,5],[2,2]], extraStudents = 2
Output: 0.78333
Explanation: You can assign the two extra students to the first class. The average pass ratio will be equal to (3/4 + 3/5 + 2/2) / 3 = 0.78333.

Example 2:

Input: classes = [[2,4],[3,9],[4,5],[2,10]], extraStudents = 4
Output: 0.53485


Constraints:

1 <= classes.length <= 105
classes[i].length == 2
1 <= passi <= totali <= 105
1 <= extraStudents <= 105


```

## 题目翻译

给定 classes 数组，classes[i] = [passi, totali] 表示第 i 个班级有 totali 个学生，passi 个通过。另有 extraStudents 个优秀学生，保证无论分配到哪个班级都会通过。求分配后所有班级平均通过率的最大值。

## 解题思路

**贪心 + 最大堆**

每次将一个优秀学生分配到收益最大的班级。收益定义为：添加一个学生后通过率的增量 (pass+1)/(total+1) - pass/total。用最大堆维护每个班级的边际收益，每次取堆顶分配一个学生，更新后重新入堆。O((n+extraStudents) * log(n)) 时间。

## Solution

[SourceCode](./solution.js)
