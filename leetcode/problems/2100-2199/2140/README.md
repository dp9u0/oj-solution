# [2140] Solving Questions With Brainpower

## Description

[LeetCode Problem Description](https://leetcode.com/problems/solving-questions-with-brainpower/description/)

* algorithms
* Medium (60.21%)
* Likes:    2954
* Dislikes: 86
* Testcase Example:  '[[3,2],[4,3],[4,4],[2,5]]'

```md
You are given a 0-indexed 2D integer array questions where questions[i] = [pointsi, brainpoweri].
The array describes the questions of an exam, where you have to process the questions in order (i.e., starting from question 0) and make a decision whether to solve or skip each question. Solving question i will earn you pointsi points but you will be unable to solve each of the next brainpoweri questions. If you skip question i, you get to make the decision on the next question.

For example, given questions = [[3, 2], [4, 3], [4, 4], [2, 5]]:

If question 0 is solved, you will earn 3 points but you will be unable to solve questions 1 and 2.
If instead, question 0 is skipped and question 1 is solved, you will earn 4 points but you will be unable to solve questions 2 and 3.



Return the maximum points you can earn for the exam.

Example 1:

Input: questions = [[3,2],[4,3],[4,4],[2,5]]
Output: 5
Explanation: The maximum points can be earned by solving questions 0 and 3.
- Solve question 0: Earn 3 points, will be unable to solve the next 2 questions
- Unable to solve questions 1 and 2
- Solve question 3: Earn 2 points
Total points earned: 3 + 2 = 5. There is no other way to earn 5 or more points.

Example 2:

Input: questions = [[1,1],[2,2],[3,3],[4,4],[5,5]]
Output: 7
Explanation: The maximum points can be earned by solving questions 1 and 4.
- Skip question 0
- Solve question 1: Earn 2 points, will be unable to solve the next 2 questions
- Unable to solve questions 2 and 3
- Solve question 4: Earn 5 points
Total points earned: 2 + 5 = 7. There is no other way to earn 7 or more points.


Constraints:

1 <= questions.length <= 105
questions[i].length == 2
1 <= pointsi, brainpoweri <= 105


```

## 翻译

给定题目数组 questions，每题有 points 和 brainpower。解题 i 获得 points[i] 但跳过后 brainpower[i] 题；跳过则继续下一题。求最大得分。

## Approach

倒序 DP。dp[i] 表示从第 i 题开始能获得的最大分数。

- 选做第 i 题：points[i] + dp[i + brainpower[i] + 1]（如果存在）
- 跳过第 i 题：dp[i + 1]

dp[i] = max(points[i] + dp[i + brainpower[i] + 1], dp[i + 1])

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
