# [2500] Delete Greatest Value in Each Row

## Description

[LeetCode Problem Description](https://leetcode.com/problems/delete-greatest-value-in-each-row/description/)

* algorithms
* Easy (79.85%)
* Likes:    712
* Dislikes: 53
* Testcase Example:  '[[1,2,4],[3,3,1]]'

```md
You are given an m x n matrix grid consisting of positive integers.
Perform the following operation until grid becomes empty:

Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
Add the maximum of deleted elements to the answer.

Note that the number of columns decreases by one after each operation.
Return the answer after performing the operations described above.

Example 1:


Input: grid = [[1,2,4],[3,3,1]]
Output: 8
Explanation: The diagram above shows the removed values in each step.
- In the first operation, we remove 4 from the first row and 3 from the second row (notice that, there are two cells with value 3 and we can remove any of them). We add 4 to the answer.
- In the second operation, we remove 2 from the first row and 3 from the second row. We add 3 to the answer.
- In the third operation, we remove 1 from the first row and 1 from the second row. We add 1 to the answer.
The final answer = 4 + 3 + 1 = 8.

Example 2:


Input: grid = [[10]]
Output: 10
Explanation: The diagram above shows the removed values in each step.
- In the first operation, we remove 10 from the first row. We add 10 to the answer.
The final answer = 10.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
1 <= grid[i][j] <= 100


```

## 中文翻译

给定一个 m x n 正整数矩阵 grid，重复以下操作直到矩阵为空：从每行删除最大值，将所有删除值中的最大值加到答案中。返回最终答案。

## 解题思路

将每行排序（降序），然后按列遍历，每列取最大值累加即可。

时间复杂度：O(m*n*log(n))，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
