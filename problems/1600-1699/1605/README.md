# [1605] Find Valid Matrix Given Row and Column Sums

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/description/)

* algorithms
* Medium (82.62%)
* Likes:    2199
* Dislikes: 98
* Testcase Example:  '[3,8]\n[4,7]'

```md
You are given two arrays rowSum and colSum of non-negative integers where rowSum[i] is the sum of the elements in the ith row and colSum[j] is the sum of the elements of the jth column of a 2D matrix. In other words, you do not know the elements of the matrix, but you do know the sums of each row and column.
Find any matrix of non-negative integers of size rowSum.length x colSum.length that satisfies the rowSum and colSum requirements.
Return a 2D array representing any matrix that fulfills the requirements. It&#39;s guaranteed that at least one matrix that fulfills the requirements exists.

Example 1:

Input: rowSum = [3,8], colSum = [4,7]
Output: [[3,0],
[1,7]]
Explanation:
0th row: 3 + 0 = 3 == rowSum[0]
1st row: 1 + 7 = 8 == rowSum[1]
0th column: 3 + 1 = 4 == colSum[0]
1st column: 0 + 7 = 7 == colSum[1]
The row and column sums match, and all matrix elements are non-negative.
Another possible matrix is: [[1,2],
[3,5]]

Example 2:

Input: rowSum = [5,7,10], colSum = [8,6,8]
Output: [[0,5,0],
[6,1,0],
[2,0,8]]


Constraints:

1 <= rowSum.length, colSum.length <= 500
0 <= rowSum[i], colSum[i] <= 108
sum(rowSum) == sum(colSum)


```

## 中文翻译

给定行和数组 rowSum 和列和数组 colSum，构造一个非负整数矩阵使其满足给定的行和与列和。保证有解。

## 解题思路

贪心。从左上角开始逐格填写，每个格子填 min(rowSum[i], colSum[j])，然后从对应的行和与列和中减去该值。这保证非负且不超额。

## Solution

[SourceCode](./solution.js)
