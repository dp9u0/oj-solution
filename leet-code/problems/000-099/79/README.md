# [79] Word Search

## Description

* algorithms
* Medium (29.61%)
* Source Code:       solving\79.js
* Total Accepted:    230.2K
* Total Submissions: 777.5K
* Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'

```md
Given a 2D board and a word, find if the word exists in the grid.
The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
Example:
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

```

## Solution

backtrace : 上下左右

[SourceCode](./solution.js)