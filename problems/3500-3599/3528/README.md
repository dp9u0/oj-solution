# [3528] Unit Conversion I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/unit-conversion-i/description/)

* algorithms
* Medium (54.13%)
* Likes:    42
* Dislikes: 20
* Testcase Example:  '[[0,1,2],[1,2,3]]'

```md
There are n types of units indexed from 0 to n - 1. You are given a 2D integer array conversions of length n - 1, where conversions[i] = [sourceUniti, targetUniti, conversionFactori]. This indicates that a single unit of type sourceUniti is equivalent to conversionFactori units of type targetUniti.
Return an array baseUnitConversion of length n, where baseUnitConversion[i] is the number of units of type i equivalent to a single unit of type 0. Since the answer may be large, return each baseUnitConversion[i] modulo 109 + 7.

Example 1:

Input: conversions = [[0,1,2],[1,2,3]]
Output: [1,2,6]
Explanation:

Convert a single unit of type 0 into 2 units of type 1 using conversions[0].
Convert a single unit of type 0 into 6 units of type 2 using conversions[0], then conversions[1].


Example 2:

Input: conversions = [[0,1,2],[0,2,3],[1,3,4],[1,4,5],[2,5,2],[4,6,3],[5,7,4]]
Output: [1,2,3,8,10,6,30,24]
Explanation:

Convert a single unit of type 0 into 2 units of type 1 using conversions[0].
Convert a single unit of type 0 into 3 units of type 2 using conversions[1].
Convert a single unit of type 0 into 8 units of type 3 using conversions[0], then conversions[2].
Convert a single unit of type 0 into 10 units of type 4 using conversions[0], then conversions[3].
Convert a single unit of type 0 into 6 units of type 5 using conversions[1], then conversions[4].
Convert a single unit of type 0 into 30 units of type 6 using conversions[0], conversions[3], then conversions[5].
Convert a single unit of type 0 into 24 units of type 7 using conversions[1], conversions[4], then conversions[6].



Constraints:

2 <= n <= 105
conversions.length == n - 1
0 <= sourceUniti, targetUniti < n
1 <= conversionFactori <= 109
It is guaranteed that unit 0 can be converted into any other unit through a unique combination of conversions without using any conversions in the opposite direction.


```

## 翻译

给定n-1条单位转换关系[source, target, factor]，表示1个source单位等于factor个target单位。转换关系构成以0为根的树（DAG）。求从单位0到每个单位的转换系数，结果对10^9+7取模。

## 解题思路

以单位0为根的树，BFS遍历。建邻接表，从0出发，每个子节点的转换系数=父节点转换系数×边上的factor，取模。

## Solution

[SourceCode](./solution.js)
