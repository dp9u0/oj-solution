# [1111] 有效括号的嵌套深度

## Description


```md
https://leetcode.cn/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/description/
* algorithms
* Medium (77.00%)
* Likes:    186
* Dislikes: -
* Testcase Example:  '"(()())"'
如果一个字符串仅由字符 "(" 和 ")" 组成，并且满足以下条件，则称为有效括号字符串（VPS）：
它是空字符串，或
它可以表示为 AB（A 连接 B），其中 A 和 B 都是VPS，或者
它可以表示为 (A)，其中 A 是一个 VPS。
我们可以类似地定义任何 VPS S 的嵌套深度 depth(S) 如下：
depth("") = 0
depth(A + B) = max(depth(A), depth(B))，其中 A 和 B 都是 VPS
depth("(" + A + ")") = 1 + depth(A)，其中 A 是一个 VPS。
例如，""，"()()" 和 "()(()())" 都是 VPS（嵌套深度 0，1 和 2），并且 ")(" 和 "(()" 不是 VPS。
给定一个 VPS 序列，将其拆分成两个不相交的子序列 A 和 B，使得 A 和 B 都是 VPS（且 A.length + B.length = seq.length）。这些子序列不一定是连续的。
例如，对于序列 123456789，一种可能的拆分是：

A = {1, 3, 5, 7, 9}，


B = {2, 4, 6, 8}。


这对应于输出 [0, 1, 0, 1, 0, 1, 0, 1, 0]，其中 0 表示属于 A，1 表示属于 B。

现在选择 任意 这样的 A 和 B，使得 max(depth(A), depth(B)) 的值是最小的。
返回一个 answer 数组（长度为 seq.length），该数组编码了 A 和 B 的选择：如果 seq[i] 是 A 的一部分则 answer[i] = 0，否则 answer[i] = 1。请注意，尽管可能存在多种答案，但你可以返回其中任意一种。

示例 1：
输入：seq = "(()())"
输出：[0,1,1,1,1,0]
示例 2：
输入：seq = "()(())()"
输出：[0,0,0,1,1,0,1,1]
解释：本示例答案不唯一。
按此输出 A = "()()", B = "()()", max(depth(A), depth(B)) = 1，它们的深度最小。
像 [1,1,1,0,0,1,1,1]，也是正确结果，其中 A = "()()()", B = "()", max(depth(A), depth(B)) = 1 。

提示：
1 < seq.size <= 10000

有效括号字符串：
仅由 "(" 和 ")" 构成的字符串，对于每个左括号，都能找到与之对应的右括号，反之亦然。
下述几种情况同样属于有效括号字符串：
1. 空字符串
2. 连接，可以记作 AB（A 与 B 连接），其中 A 和 B 都是有效括号字符串
3. 嵌套，可以记作 (A)，其中 A 是有效括号字符串
嵌套深度：
类似地，我们可以定义任意有效括号字符串 s 的 嵌套深度 depth(S)：
1. s 为空时，depth("") = 0
2. s 为 A 与 B 连接时，depth(A + B) = max(depth(A), depth(B))，其中 A 和 B 都是有效括号字符串
3. s 为嵌套情况，depth("(" + A + ")") = 1 + depth(A)，其中 A 是有效括号字符串
例如：""，"()()"，和 "()(()())" 都是有效括号字符串，嵌套深度分别为 0，1，2，而 ")(" 和 "(()" 都不是有效括号字符串。

```

## Description (English)

A string is a valid parentheses string (VPS) if it consists only of "(" and ")" and satisfies:

- It is the empty string, or
- It can be written as AB (A concatenated with B), where A and B are VPS, or
- It can be written as (A), where A is a VPS.

The nesting depth depth(S) of any VPS S is defined similarly:

- depth("") = 0
- depth(A + B) = max(depth(A), depth(B)), where A and B are VPS
- depth("(" + A + ")") = 1 + depth(A), where A is a VPS

For example, "", "()()" and "()(()())" are VPS (with depths 0, 1 and 2), while ")(" and "(()" are not.

Given a VPS string seq, split it into two disjoint subsequences A and B such that both A and B are VPS (and A.length + B.length = seq.length). The subsequences need not be contiguous.

Choose any such A and B such that max(depth(A), depth(B)) is minimized. Return an answer array (of length seq.length) encoding this choice: answer[i] = 0 if seq[i] is part of A, else 1. Note that multiple valid answers may exist; you may return any of them.

Example 1: seq = "(()())" → output [0,1,1,1,1,0]
Example 2: seq = "()(())()" → output [0,0,0,1,1,0,1,1] (answer not unique)

Constraints: 1 < seq.length <= 10000

## Solution

[SourceCode](./solution.js)

## 思路

**核心结论**：若 seq 的最大嵌套深度为 D，则任何合法拆分都满足 max(depth(A), depth(B)) >= ⌈D/2⌉。因为 seq 中任意一条长度为 D 的嵌套链上，相邻两层括号必然分属 A、B 之一，深度之和不小于 D。

**贪心按深度奇偶分配**：让"奇数层"的括号对全部给 A，"偶数层"的括号对全部给 B，这样两半的最大深度分别为 ⌈D/2⌉ 和 ⌊D/2⌋，达到下界。

实现时无需栈，只需一个深度计数器（0-indexed 当前深度）：

- 遇到 `(`：先记录当前深度的奇偶作为答案，再深度 +1；
- 遇到 `)`：先深度 -1，再记录当前深度的奇偶作为答案。

这样同一对括号的 `(` 和 `)` 拿到相同的奇偶值（均为所在层 L-1 的奇偶），保证 A、B 各自成对匹配，都是 VPS。

时间复杂度 O(n)，空间复杂度 O(1)（不计返回数组）。
