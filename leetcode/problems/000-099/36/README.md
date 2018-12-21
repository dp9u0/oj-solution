# 36. Valid Sudoku

## Description

Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

A partially filled sudoku which is valid.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.

## Example

```shell
[".87654321","2........","3........","4........","5........","6........","7........","8........","9........"]
```

## Solution

检测横向 纵向 以及 九块区域

[SourceCode](./solution.js)
