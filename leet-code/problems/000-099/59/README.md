# 59. Spiral Matrix II

## Description

Given a positive integer n, generate a square matrix filled with elements from 1 to n^2 in spiral order.

## Example

```javascript
Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```

## Solution

可以使用方向变量 `[di, dj] = [0, 1]` ,当需要变向时 : `[di, dj] = [dj, -di];`

[SourceCode](./solution.js)