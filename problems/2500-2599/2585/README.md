# [2585] Number of Ways to Earn Points

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-to-earn-points/description/)

* algorithms
* Hard (59.58%)
* Likes:    513
* Dislikes: 12
* Testcase Example:  '6\n[[6,1],[3,2],[2,3]]'

```md
There is a test that has n types of questions. You are given an integer target and a 0-indexed 2D integer array types where types[i] = [counti, marksi] indicates that there are counti questions of the ith type, and each one of them is worth marksi points.


Return the number of ways you can earn exactly target points in the exam. Since the answer may be too large, return it modulo 109 + 7.
Note that questions of the same type are indistinguishable.

For example, if there are 3 questions of the same type, then solving the 1st and 2nd questions is the same as solving the 1st and 3rd questions, or the 2nd and 3rd questions.


Example 1:

Input: target = 6, types = [[6,1],[3,2],[2,3]]
Output: 7
Explanation: You can earn 6 points in one of the seven ways:
- Solve 6 questions of the 0th type: 1 + 1 + 1 + 1 + 1 + 1 = 6
- Solve 4 questions of the 0th type and 1 question of the 1st type: 1 + 1 + 1 + 1 + 2 = 6
- Solve 2 questions of the 0th type and 2 questions of the 1st type: 1 + 1 + 2 + 2 = 6
- Solve 3 questions of the 0th type and 1 question of the 2nd type: 1 + 1 + 1 + 3 = 6
- Solve 1 question of the 0th type, 1 question of the 1st type and 1 question of the 2nd type: 1 + 2 + 3 = 6
- Solve 3 questions of the 1st type: 2 + 2 + 2 = 6
- Solve 2 questions of the 2nd type: 3 + 3 = 6

Example 2:

Input: target = 5, types = [[50,1],[50,2],[50,5]]
Output: 4
Explanation: You can earn 5 points in one of the four ways:
- Solve 5 questions of the 0th type: 1 + 1 + 1 + 1 + 1 = 5
- Solve 3 questions of the 0th type and 1 question of the 1st type: 1 + 1 + 1 + 2 = 5
- Solve 1 questions of the 0th type and 2 questions of the 1st type: 1 + 2 + 2 = 5
- Solve 1 question of the 2nd type: 5

Example 3:

Input: target = 18, types = [[6,1],[3,2],[2,3]]
Output: 1
Explanation: You can only earn 18 points by answering all questions.


Constraints:

1 <= target <= 1000
n == types.length
1 <= n <= 50
types[i].length == 2
1 <= counti, marksi <= 50


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 target 和 types[i] = [count_i, marks_i]，表示第 i 类题有 count_i 道，每道 marks_i 分。同类型题不可区分。求恰好得到 target 分的方案数，对 10^9+7 取模。

## 解题思路

分组背包计数。dp[j] = 恰好 j 分的方案数。对每个类型 (count, marks)，转移：newDp[j] = sum(dp[j - k*marks]) for k=0..min(count, j/marks)。O(n * target * max_count)。
