# [2019] The Score of Students Solving Math Expression

## Description

[LeetCode Problem Description](https://leetcode.com/problems/the-score-of-students-solving-math-expression/description/)

* algorithms
* Hard (34.14%)
* Likes:    281
* Dislikes: 85
* Testcase Example:  '"7+3*1*2"\n[20,13,42]'

```md
You are given a string s that contains digits 0-9, addition symbols &#39;+&#39;, and multiplication symbols &#39;*&#39; only, representing a valid math expression of single digit numbers (e.g., 3+5*2). This expression was given to n elementary school students. The students were instructed to get the answer of the expression by following this order of operations:

Compute multiplication, reading from left to right; Then,
Compute addition, reading from left to right.

You are given an integer array answers of length n, which are the submitted answers of the students in no particular order. You are asked to grade the answers, by following these rules:

If an answer equals the correct answer of the expression, this student will be rewarded 5 points;
Otherwise, if the answer could be interpreted as if the student applied the operators in the wrong order but had correct arithmetic, this student will be rewarded 2 points;
Otherwise, this student will be rewarded 0 points.

Return the sum of the points of the students.

Example 1:


Input: s = '7+3*1*2', answers = [20,13,42]
Output: 7
Explanation: As illustrated above, the correct answer of the expression is 13, therefore one student is rewarded 5 points: [20,13,42]
A student might have applied the operators in this wrong order: ((7+3)*1)*2 = 20. Therefore one student is rewarded 2 points: [20,13,42]
The points for the students are: [2,5,0]. The sum of the points is 2+5+0=7.

Example 2:

Input: s = '3+5*2', answers = [13,0,10,13,13,16,16]
Output: 19
Explanation: The correct answer of the expression is 13, therefore three students are rewarded 5 points each: [13,0,10,13,13,16,16]
A student might have applied the operators in this wrong order: ((3+5)*2 = 16. Therefore two students are rewarded 2 points: [13,0,10,13,13,16,16]
The points for the students are: [5,0,0,5,5,2,2]. The sum of the points is 5+0+0+5+5+2+2=19.

Example 3:

Input: s = '6+0*1', answers = [12,9,6,4,8,6]
Output: 10
Explanation: The correct answer of the expression is 6.
If a student had incorrectly done (6+0)*1, the answer would also be 6.
By the rules of grading, the students will still be rewarded 5 points (as they got the correct answer), not 2 points.
The points for the students are: [0,0,5,0,0,5]. The sum of the points is 10.


Constraints:

3 <= s.length <= 31
s represents a valid expression that contains only digits 0-9, &#39;+&#39;, and &#39;*&#39; only.
All the integer operands in the expression are in the inclusive range [0, 9].
1 <= The count of all operators (&#39;+&#39; and &#39;*&#39;) in the math expression <= 15
Test data are generated such that the correct answer of the expression is in the range of [0, 1000].
Test data are generated such that value never exceeds 109 in intermediate steps of multiplication.
n == answers.length
1 <= n <= 104
0 <= answers[i] <= 1000


```

## 中文翻译

给定一个只含数字 0-9、加号 '+' 和乘号 '*' 的字符串 s，表示一个合法的数学表达式（如 3+5*2）。
正确计算顺序：先从左到右算乘法，再从左到右算加法。
给定 answers 数组，按规则打分：
- 答案等于正确答案得 5 分
- 否则，如果是某种错误的运算顺序但算术正确的结果，得 2 分
- 否则得 0 分
返回总分。

## 解题思路

1. 先按正确顺序（先乘后加）计算出正确答案 correctAns
2. 用区间 DP 枚举所有可能的运算顺序能得到的结果集合
   - dp[i][j] 表示第 i 到第 j 个数字之间所有可能的结果
   - 枚举分割点 k，将 dp[i][k] 和 dp[k+1][j] 通过中间运算符合并
3. 遍历 answers，5 分给 correctAns，2 分给 dp 中存在但不等于 correctAns 的值

## Solution

[SourceCode](./solution.js)
