# [2307] 检查方程中的矛盾之处

## Description


```md
https://leetcode.cn/problems/check-for-contradictions-in-equations/description/
* algorithms
* Hard (45.67%)
* Likes:    9
* Dislikes: -
* Testcase Example:  '[["a","b"],["b","c"],["a","c"]]\n[3,0.5,1.5]'
给你一个由字符串二维数组 equations 和实数数组  values ，其中 equations[i] = [Ai, Bi]，values[i] 表示 Ai / Bi = values[i].。
确定方程中是否存在矛盾。如果存在矛盾则返回 true，否则返回 false。
注意:
当检查两个数字是否相等时，检查它们的 绝对差值 是否小于 10-5.
生成的测试用例没有针对精度的用例，即使用 double 就足以解决问题。

示例 1:
输入: equations = [["a","b"],["b","c"],["a","c"]], values = [3,0.5,1.5]
输出: false
解释:
给定的方程为: a / b = 3, b / c = 0.5, a / c = 1.5
方程中没有矛盾。满足所有方程的一个可能的分配是:
a = 3, b = 1 和 c = 2.
示例 2:
输入: equations = [["le","et"],["le","code"],["code","et"]], values = [2,5,0.5]
输出: true
解释:
给定的方程为: le / et = 2, le / code = 5, code / et = 0.5
根据前两个方程，我们得到 code / et = 0.4.
因为第三个方程是 code / et = 0.5, 所以矛盾。

提示:
1 <= equations.length <= 100
equations[i].length == 2
1 <= Ai.length, Bi.length <= 5
Ai, Bi 由小写英文字母组成。
equations.length == values.length
0.0 < values[i] <= 10.0
values[i] 小数点后最多 2 位。
Hint 1: Try treating this as a graph problem.
Hint 2: Each variable is a node, and each equation is an edge.
Hint 3: Try performing DFS multiple times to find contradictions.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given equations[i] = [Ai, Bi] with values[i] meaning Ai / Bi = values[i], determine whether the equations are contradictory. Values equal if absolute difference < 1e-5.

Example 1:
Input: equations = [["a","b"],["b","c"],["a","c"]], values = [3,0.5,1.5]
Output: false

Example 2:
Input: equations = [["le","et"],["le","code"],["code","et"]], values = [2,5,0.5]
Output: true

Constraints: <= 100 equations, 0 < values[i] <= 10, two decimal places.

## Approach

Weighted union-find. Each variable stores the ratio to its set root (x = ratio * root). find with path compression accumulates the ratio. For equation a/b = v: find roots and factors (fa, fb); if same root, the implied ratio fa/fb must match v within 1e-5, else contradiction; otherwise attach one root under the other with ratio w = v * fb / fa.

Nearly O(e * alpha(e)).
