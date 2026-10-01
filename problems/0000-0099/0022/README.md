# [22] 括号生成

## Description


```md
https://leetcode.cn/problems/generate-parentheses/description/
* algorithms
* Medium (79.02%)
* Likes:    4153
* Dislikes: -
* Testcase Example:  '3'
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例 1：
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：
输入：n = 1
输出：["()"]

提示：
1 <= n <= 8

```

## Description (English)

Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

Constraints:
1 <= n <= 8

## 思路

回溯（DFS）生成所有合法组合。维护两个计数器：已使用的左括号数 `left`、右括号数 `right`：

- 当 `left < n` 时，可以放置左括号；
- 当 `right < left` 时，可以放置右括号（保证前缀合法）；
- 当字符串长度达到 `2n` 时，得到一个完整合法组合。

每个合法组合恰好对应一条唯一的构造路径，因此不会产生重复结果，无需去重。时间复杂度为第 n 个卡特兰数 C(2n, n)/(n+1) 乘以 O(n) 的拷贝开销，n <= 8 时规模很小。

## Solution

[SourceCode](./solution.js)
