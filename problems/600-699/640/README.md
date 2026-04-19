# [640] Solve the Equation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/solve-the-equation/description/)

* algorithms
* Medium (46.12%)
* Likes:    549
* Dislikes: 854
* Testcase Example:  '"x+5-3+x=6+x-2"'

```md
Solve a given equation and return the value of &#39;x&#39; in the form of a string 'x=#value'. The equation contains only &#39;+&#39;, &#39;-&#39; operation, the variable &#39;x&#39; and its coefficient. You should return 'No solution' if there is no solution for the equation, or 'Infinite solutions' if there are infinite solutions for the equation.
If there is exactly one solution for the equation, we ensure that the value of &#39;x&#39; is an integer.

Example 1:

Input: equation = 'x+5-3+x=6+x-2'
Output: 'x=2'

Example 2:

Input: equation = 'x=x'
Output: 'Infinite solutions'

Example 3:

Input: equation = '2x=x'
Output: 'x=0'


Constraints:

3 <= equation.length <= 1000
equation has exactly one &#39;=&#39;.
equation consists of integers with an absolute value in the range [0, 100] without any leading zeros, and the variable &#39;x&#39;.
The input is generated that if there is a single solution, it will be an integer.


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

解一元一次方程，返回 `x=#value` 形式的字符串。方程只含 `+`、`-` 运算、变量 `x` 及其系数。无解返回 'No solution'，无穷解返回 'Infinite solutions'。

**示例 1：** "x+5-3+x=6+x-2" → "x=2"
**示例 2：** "x=x" → "Infinite solutions"
**示例 3：** "2x=x" → "x=0"

**约束：** 3 <= equation.length <= 1000

## Approach

字符串解析，分别收集等号左右两侧的 x 系数和常数项。

- 以 '=' 分割为左右两部分
- 对每部分解析：遍历字符串，提取每个 term
  - 含 'x' 的项：提取系数（无数字则系数为1，'-' 则为 -1）
  - 不含 'x' 的项：提取常数
- 合并：左侧 x 系数 - 右侧 x 系数 = coef，右侧常数 - 左侧常数 = val
- 若 coef == 0：val == 0 则无穷解，否则无解
- 否则：x = val / coef

时间复杂度 O(n)，空间复杂度 O(1)。
