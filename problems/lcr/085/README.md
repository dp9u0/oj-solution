# [LCR 085] 括号生成

## Description


```md
https://leetcode.cn/problems/IDBivT/description/
* algorithms
* Medium (83.97%)
* Likes:    99
* Dislikes: -
* Testcase Example:  '3'
正整数 n 代表生成括号的对数，请设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例 1：
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：
输入：n = 1
输出：["()"]

提示：
1 <= n <= 8

注意：本题与主站 22 题相同： https://leetcode.cn/problems/generate-parentheses/

```

## Solution

[SourceCode](./solution.js)

## Translation (English)

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

Constraints:
1 <= n <= 8

Note: This problem is the same as LeetCode problem 22: https://leetcode.com/problems/generate-parentheses/

## Approach

Backtracking (DFS):
- Maintain counts of open `(` and close `)` parentheses already placed in the current string.
- Always allow adding `(` while `open < n`.
- Only allow adding `)` while `close < open` (keeps the prefix valid).
- When `open === n && close === n`, a complete valid combination is reached, push it to the result.
- Time: O(4^n / sqrt(n)) (Catalan number of combinations); Space: O(n) recursion depth.
