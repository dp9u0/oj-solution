# [3484] Design Spreadsheet

## Description

[LeetCode Problem Description](https://leetcode.com/problems/design-spreadsheet/description/)

* algorithms
* Medium (74.21%)
* Likes:    331
* Dislikes: 31
* Testcase Example:  '["Spreadsheet","getValue","setCell","getValue","setCell","getValue","resetCell","getValue"]\n' +

```md
'[[3],["=5+7"],["A1",10],["=A1+6"],["B2",15],["=A1+B2"],["A1"],["=A1+B2"]]'
A spreadsheet is a grid with 26 columns (labeled from &#39;A&#39; to &#39;Z&#39;) and a given number of rows. Each cell in the spreadsheet can hold an integer value between 0 and 105.
Implement the Spreadsheet class:

Spreadsheet(int rows) Initializes a spreadsheet with 26 columns (labeled &#39;A&#39; to &#39;Z&#39;) and the specified number of rows. All cells are initially set to 0.
void setCell(String cell, int value) Sets the value of the specified cell. The cell reference is provided in the format 'AX' (e.g., 'A1', 'B10'), where the letter represents the column (from &#39;A&#39; to &#39;Z&#39;) and the number represents a 1-indexed row.
void resetCell(String cell) Resets the specified cell to 0.
int getValue(String formula) Evaluates a formula of the form '=X+Y', where X and Y are either cell references or non-negative integers, and returns the computed sum.

Note: If getValue references a cell that has not been explicitly set using setCell, its value is considered 0.

Example 1:

Input:
['Spreadsheet', 'getValue', 'setCell', 'getValue', 'setCell', 'getValue', 'resetCell', 'getValue']
[[3], ['=5+7'], ['A1', 10], ['=A1+6'], ['B2', 15], ['=A1+B2'], ['A1'], ['=A1+B2']]
Output:
[null, 12, null, 16, null, 25, null, 15]
Explanation
Spreadsheet spreadsheet = new Spreadsheet(3); // Initializes a spreadsheet with 3 rows and 26 columns
spreadsheet.getValue('=5+7'); // returns 12 (5+7)
spreadsheet.setCell('A1', 10); // sets A1 to 10
spreadsheet.getValue('=A1+6'); // returns 16 (10+6)
spreadsheet.setCell('B2', 15); // sets B2 to 15
spreadsheet.getValue('=A1+B2'); // returns 25 (10+15)
spreadsheet.resetCell('A1'); // resets A1 to 0
spreadsheet.getValue('=A1+B2'); // returns 15 (0+15)

Constraints:

1 <= rows <= 103
0 <= value <= 105
The formula is always in the format '=X+Y', where X and Y are either valid cell references or non-negative integers with values less than or equal to 105.
Each cell reference consists of a capital letter from &#39;A&#39; to &#39;Z&#39; followed by a row number between 1 and rows.
At most 104 calls will be made in total to setCell, resetCell, and getValue.


```

## 翻译

设计电子表格，26列A-Z，给定行数。支持setCell设置单元格值，resetCell重置为0，getValue解析"=X+Y"公式（X和Y可以是单元格引用或整数）并返回结果。

## 解题思路

用Map存储单元格值。getValue解析公式：跳过'='，按'+'分割两部分，每部分判断是单元格引用（首字符为字母）还是数字，求和返回。

## Solution

[SourceCode](./solution.js)
