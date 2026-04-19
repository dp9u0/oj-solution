# [2018] Check if Word Can Be Placed In Crossword

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/description/)

* algorithms
* Medium (50.70%)
* Likes:    331
* Dislikes: 311
* Testcase Example:  '[["#"," ","#"],[" "," ","#"],["#","c"," "]]\n"abc"'

```md
You are given an m x n matrix board, representing the current state of a crossword puzzle. The crossword contains lowercase English letters (from solved words), &#39; &#39; to represent any empty cells, and &#39;#&#39; to represent any blocked cells.
A word can be placed horizontally (left to right or right to left) or vertically (top to bottom or bottom to top) in the board if:

It does not occupy a cell containing the character &#39;#&#39;.
The cell each letter is placed in must either be &#39; &#39; (empty) or match the letter already on the board.
There must not be any empty cells &#39; &#39; or other lowercase letters directly left or right of the word if the word was placed horizontally.
There must not be any empty cells &#39; &#39; or other lowercase letters directly above or below the word if the word was placed vertically.

Given a string word, return true if word can be placed in board, or false otherwise.

Example 1:


Input: board = [['#', ' ', '#'], [' ', ' ', '#'], ['#', 'c', ' ']], word = 'abc'
Output: true
Explanation: The word 'abc' can be placed as shown above (top to bottom).

Example 2:


Input: board = [[' ', '#', 'a'], [' ', '#', 'c'], [' ', '#', 'a']], word = 'ac'
Output: false
Explanation: It is impossible to place the word because there will always be a space/letter above or below it.
Example 3:


Input: board = [['#', ' ', '#'], [' ', ' ', '#'], ['#', ' ', 'c']], word = 'ca'
Output: true
Explanation: The word 'ca' can be placed as shown above (right to left).


Constraints:

m == board.length
n == board[i].length
1 <= m * n <= 2 * 105
board[i][j] will be &#39; &#39;, &#39;#&#39;, or a lowercase English letter.
1 <= word.length <= max(m, n)
word will contain only lowercase English letters.


```

## 中文翻译

给定一个填字游戏棋盘（'#' 为障碍、' ' 为空格、字母为已填字符），判断一个单词是否能水平或垂直放入。要求：不占用 '#' 格；每格必须为空或匹配对应字母；单词两端必须被 '#' 或边界封堵。

## 解题思路

**提取槽位 + 正反匹配**

遍历每行每列，提取所有被 '#' 或边界分隔的连续非 '#' 槽位。对每个长度等于 word 的槽位，同时检查正序和逆序是否匹配（空格可匹配任意字母）。时间复杂度 O(m*n)。

## Solution

[SourceCode](./solution.js)
