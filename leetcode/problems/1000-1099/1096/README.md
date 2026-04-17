# [1096] Brace Expansion II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/brace-expansion-ii/description/)

* algorithms
* Hard (63.84%)
* Likes:    507
* Dislikes: 295
* Testcase Example:  '"{a,b}{c,{d,e}}"'

```md
Under the grammar given below, strings can represent a set of lowercase words. LetR(expr)denote the set of words the expression represents.
The grammar can best be understood through simple examples:

Single letters represent a singleton set containing that word.

R('a') = {'a'}
R('w') = {'w'}


When we take a comma-delimited list of two or more expressions, we take the union of possibilities.

R('{a,b,c}') = {'a','b','c'}
R('{{a,b},{b,c}}') = {'a','b','c'} (notice the final set only contains each word at most once)


When we concatenate two expressions, we take the set of possible concatenations between two words where the first word comes from the first expression and the second word comes from the second expression.

R('{a,b}{c,d}') = {'ac','ad','bc','bd'}
R('a{b,c}{d,e}f{g,h}') = {'abdfg', 'abdfh', 'abefg', 'abefh', 'acdfg', 'acdfh', 'acefg', 'acefh'}



Formally, the three rules for our grammar:

For every lowercase letter x, we have R(x) = {x}.
For expressions e1, e2, ... , ek with k >= 2, we have R({e1, e2, ...}) = R(e1) &cup; R(e2) &cup; ...
For expressions e1 and e2, we have R(e1 + e2) = {a + b for (a, b) in R(e1) &times; R(e2)}, where + denotes concatenation, and &times; denotes the cartesian product.

Given an expression representing a set of words under the given grammar, return the sorted list of words that the expression represents.

Example 1:

Input: expression = '{a,b}{c,{d,e}}'
Output: ['ac','ad','ae','bc','bd','be']

Example 2:

Input: expression = '{{a,z},a{b,c},{ab,z}}'
Output: ['a','ab','ac','z']
Explanation: Each distinct word is written only once in the final answer.


Constraints:

1 <= expression.length <= 60
expression[i] consists of &#39;{&#39;, &#39;}&#39;, &#39;,&#39;or lowercase English letters.
The givenexpressionrepresents a set of words based on the grammar given in the description.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定一个表达式，支持三种语法规则：
1. 单个小写字母表示包含该字母的集合，如 R('a') = {'a'}
2. 逗号分隔的列表（在大括号内）表示并集，如 R('{a,b}') = {'a','b'}
3. 两个表达式拼接表示笛卡尔积，如 R('{a,b}{c,d}') = {'ac','ad','bc','bd'}

返回表达式所表示的有序单词列表（去重）。

## 解题思路

递归下降解析器。文法如下：
- expr → union
- union → concat (',' concat)*  （并集）
- concat → atom+  （笛卡尔积/拼接）
- atom → letter | '{' union '}'

解析过程中用 Set 表示集合，union 操作合并两个 Set，concat 操作做笛卡尔积拼接。
最后排序输出去重结果。

时间复杂度取决于集合大小，expression.length ≤ 60，集合可能较大但可控。
