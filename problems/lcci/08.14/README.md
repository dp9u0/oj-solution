# [面试题 08.14] 布尔运算

## Description


```md
https://leetcode.cn/problems/boolean-evaluation-lcci/description/
* lcci
* Medium (51.03%)
* Likes:    106
* Dislikes: -
* Testcase Example:  '"1"\n0'
给定一个布尔表达式和一个期望的布尔结果 result，布尔表达式由 0 (false)、1 (true)、& (AND)、
(OR) 和 ^ (XOR) 符号组成。实现一个函数，算出有几种可使该表达式得出 result 值的括号方法。
示例 1：
输入：s = "1^0
0
1", result = 0
输出：2
解释：两种可能的括号方法是
1^(0
(0
1))
1^((0
0)
1)
示例 2：
输入：s = "0&0&0&1^1
0", result = 1
输出：10
提示：
运算符的数量不超过 19 个
Hint 1: 我们能试试所有的可能性吗？这看起来像什么？
Hint 2: 我们可以把每种可能性都看作是每个可以放置括号的地方。这意味着围绕每个操作符，使表达式在运算符上被分割。基线条件是什么？
Hint 3: 基本情况是我们有一个值，1或0。
Hint 4: 如果你的代码看起来很长，有很多的if（基于每个可能的操作符、“目标”布尔结果和左/右侧），考虑不同部分之间的关系。尽量简化代码。它不需要大量复杂的if语句。例如，考虑OR与AND的表达式。两者可能都需要知道计算结果为true的数量。看看你可以重用哪些代码。
Hint 5: 着眼于你的递归上。有重复调用吗？可以将结果存起来吗？

```

## Description (English)

Given a boolean expression consisting of `0` (false), `1` (true), `&` (AND), `|` (OR) and `^` (XOR), and a desired boolean result, implement a function to count the number of ways of parenthesizing the expression such that it evaluates to `result`. (Note: `|` in the expression was rendered as a line break by the description fetcher; e.g. example 1 is `s = "1^0|0|1"`.)

Example 1:
Input: s = "1^0|0|1", result = 0
Output: 2
Explanation: two possible parenthesizations are 1^(0|(0|1)) and 1^((0|0)|1)

Example 2:
Input: s = "0&0&0&1^1|0", result = 1
Output: 10

Note: there are no more than 19 operators.

## 思路

区间 DP：`dp[i][j][v]` = 操作数 i..j 合法括号化后值为 v 的方案数。以每个运算符 k 为分割点合并左右两段，按运算符做计数合成：

- `&`：1 = L1×R1；0 = 其余三种组合
- `|`：0 = L0×R0；1 = 其余三种组合
- `^`：1 = L0×R1 + L1×R0；0 = L0×R0 + L1×R1

自底向上按区间长度递推，O(m³)（m ≤ 20 个操作数）。方案数上限约 Catalan(19) ≈ 1.8e9，Number 安全。

## Solution

[SourceCode](./solution.js)
