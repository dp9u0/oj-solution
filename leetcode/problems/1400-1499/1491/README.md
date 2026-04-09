# [1491] Average Salary Excluding the Minimum and Maximum Salary

## Description

[LeetCode Problem Description](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/description/)

* algorithms
* Easy (63.54%)
* Likes:    2280
* Dislikes: 187
* Testcase Example:  '[4000,3000,1000,2000]'

```md
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

Example 1:

Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

Example 2:

Input: salary = [1000,2000,3000]
Output: 2000.00000
Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
Average salary excluding minimum and maximum salary is (2000) / 1 = 2000


Constraints:

3 <= salary.length <= 100
1000 <= salary[i] <= 106
All the integers of salary are unique.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定互不相同的薪资数组，排除最低和最高薪资后求平均值。

## 解题思路

**Approach: 一次遍历**

1. 遍历数组，记录总和、最小值和最大值
2. 结果 = (sum - min - max) / (n - 2)
3. 复杂度 O(n)
