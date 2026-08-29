# [3995] Minimum Cost to Convert String III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-to-convert-string-iii/description/)

* algorithms
* Hard (55.11%)
* Likes:    28
* Dislikes: 3
* Testcase Example:  '"hello"\n"world"\n[["he","wo"],["llo","rld"]]\n[3,4]'

```md
You are given two strings, source and target.
You are also given a 2D string array rules, where rules[i] = [patterni, replacementi], and an integer array costs, where costs[i] is the base cost of applying rules[i]. Both arrays have the same length. Additionally, patterni and replacementi have the same length.
You may apply any rule any number of times. Each rule application works as follows:

Choose an index l such that the range of positions from l to l + patterni.length - 1 exists in the current string and none of these positions has been used in a previous rule application.
For each index j, the character patterni[j] must either be equal to the current character at position l + j, or be &#39;*&#39;.
Replace the characters in this range with replacementi. The replacement is used exactly as given and does not contain wildcards.
The cost of this rule application is costs[i] plus the number of &#39;*&#39; characters in patterni.
Once a character position has been used in a rule application, it cannot be used in any later rule application.

Since every patterni and replacementi have the same length, character positions are preserved after every rule application.
Return the minimum total cost required to transform source into target. If it is impossible, return -1.

Example 1:

Input: source = 'hello', target = 'world', rules = [['he','wo'],['llo','rld']], costs = [3,4]
Output: 7
Explanation:

Apply rules[0] to replace 'he' with 'wo' at cost 3, so the string becomes 'wollo'.
Apply rules[1] to replace 'llo' with 'rld' at cost 4, so the string becomes 'world'.
The total cost is 3 + 4 = 7.


Example 2:

Input: source = 'cat', target = 'dog', rules = [['c*t','dog']], costs = [2]
Output: 3
Explanation:

Apply rules[0] to replace 'cat' with 'dog'. The wildcard &#39;*&#39; matches &#39;a&#39;, adding 1 to the base cost 2.
The total cost is 2 + 1 = 3.


Example 3:

Input: source = 'test', target = 'next', rules = [['*e*t','next']], costs = [4]
Output: 6
Explanation:

Apply rules[0] to replace 'test' with 'next'. The first wildcard matches &#39;t&#39; and the second wildcard matches &#39;s&#39;, adding 2 to the base cost 4.
The total cost is 4 + 2 = 6.


Example 4:

Input: source = 'ab', target = 'bc', rules = [['a*','bd']], costs = [9]
Output: -1
Explanation:
No sequence of rule applications can transform source into target, so the answer is -1.


Constraints:

1 <= source.length == target.length <= 5000
source and target consist of lowercase English letters.
1 <= rules.length == costs.length <= 200
rules[i] = [patterni, replacementi]
1 <= patterni.length == replacementi.length <= 20
patterni contains at least one lowercase English letter and at most 5 &#39;*&#39; characters.
replacementi contains only lowercase English letters.
1 <= costs[i] <= 1000


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

把 `source` 变成 `target`。规则 `[pattern, replacement]`（等长，pattern 可含 ≤5 个 `*` 通配）可任意次使用：在未被占用过的连续区间上匹配并替换，每次花费 `cost + pattern 中 * 的个数`，区间一经使用永久占用（位置保持不变）。返回最小总花费，不可行 −1。

示例 1：`'hello','world',[['he','wo'],['llo','rld']],[3,4]` → `7`；示例 2：`'cat','dog',[['c*t','dog']],[2]` → `3`；示例 3：`'test','next',[['*e*t','next']],[4]` → `6`

约束：n ≤ 5000，规则 ≤ 200，长度 ≤ 20

## 解题思路

区间划分 DP：`dp[i]` = 前 i 位变好 的最小花费：`dp[i] = min(dp[i−1]（若该位本已相同）, dp[i−L] + 规则花费（若某规则能在 [i−L, i) 应用且 replacement == target 对应段、pattern 匹配 source 段）)`。规模小直接暴力匹配。O(n·rules·L) ≈ 2×10^7。