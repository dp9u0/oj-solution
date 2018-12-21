# [73] Set Matrix Zeroes

## Description

* algorithms
* Medium (38.27%)
* Total Accepted:   176.2K
* Total Submissions:460.5K
* Testcase Example: '[[1,1,1],[1,0,1],[1,1,1]]'

```md
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.
Example 1:
Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:
Input:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:
A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
```

## Solution

O(m + n) 使用两个数组,用来记录哪一行或者哪一列需要被设置为 0,可以考虑使用:

```js
matrix[0][j] = 0;
matrix[i][0] = 0;
```

[SourceCode](./solution.js)