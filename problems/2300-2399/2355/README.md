# [2355] 你能拿走的最大图书数量

## Description


```md
https://leetcode.cn/problems/maximum-number-of-books-you-can-take/description/
* algorithms
* Hard (49.28%)
* Likes:    20
* Dislikes: -
* Testcase Example:  '[8,5,2,7,9]'
给定一个长度为 n 的 下标从 0 开始 的整数数组 books，其中 books[i] 表示书架的第 i 个书架上的书的数量。
你要从书架 l 到 r 的一个 连续 的部分中取书，其中 0 <= l <= r < n。对于 l <= i < r 范围内的每个索引 i，你从书架 i 取书的数量必须 严格小于 你从书架 i + 1 取书的数量。
返回你能从书架上拿走的书的 最大 数量。

示例 1:
输入: books = [8,5,2,7,9]
输出: 19
解释:
- 从书架 1 上取 1 本书。
- 从书架 2 上取 2 本书。
- 从书架 3 上取 7 本书
- 从书架 4 上取 9 本书
你已经拿了19本书，所以返回 19。
可以证明 19 本是你所能拿走的书的最大数量。
示例 2:
输入: books = [7,0,3,4,5]
输出: 12
解释:
- 从书架 2 上取 3 本书。
- 从书架 3 上取 4 本书。
- 从书架 4 上取 5 本书。
你已经拿了 12 本书，所以返回 12。
可以证明 12 本是你所能拿走的书的最大数量。
示例 3:
输入: books = [8,2,3,7,3,4,0,1,4,3]
输出: 13
解释:
- 从书架 0 上取 1 本书。
- 从书架 1 上取 2 本书。
- 从书架 2 上取 3 本书。
- 从书架 3 上取 7 本书。
你已经拿了 13 本书，所以返回 13。
可以证明 13 本是你所能拿走的书的最大数量。

提示:
1 <= books.length <= 105
0 <= books[i] <= 105
Hint 1: Create a dp array where dp[i] is the maximum number of books you can take if you can only take books from bookshelves 0 to i and you must take books from bookshelf i.
Hint 2: Keep taking as many books as you can (i.e. starting from bookshelf i and going backwards, you take arr[i], arr[i] - 1, arr[i] - 2, … books).
Hint 3: You may reach an index j where arr[j] < arr[i] - (i - j). Have we already found the maximum number of books you can take from bookshelves 0 to j? How do we quickly find such an index j?
Hint 4: Keep a stack of possible indices for j. If x is the number at the top of the stack, keep popping from the stack while arr[x] ≥ arr[i] - (i - x). This is because if the inequality mentioned before is true, x will never be an index j as index i will run out of items first.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Choose a contiguous shelf range [l, r]; taking k books from shelf i (l <= i < r) requires k strictly less than what you take from shelf i+1. Taking maximally means the counts follow a descending staircase books[i], books[i]-1, books[i]-2, ... clamped by stock. Return the max total books.

Example 1:
Input: books = [8,5,2,7,9]
Output: 19

Example 2:
Input: books = [7,0,3,4,5]
Output: 12

Example 3:
Input: books = [8,2,3,7,3,4,0,1,4,3]
Output: 13

Constraints: 1 <= books.length <= 10^5, 0 <= books[i] <= 10^5.

## Approach

Let v[k] = books[k] - k. The staircase from rightmost shelf i has full forced amounts down to the nearest left index j with v[j] < v[i] (before j the stock caps the staircase and the best continuation is dp[j]). So dp[i] = staircaseSum(i, j+1) + dp[j], where staircaseSum = (i-j)*books[i] - (i-j)*(i-j+1)/2 (forced amounts are all >= books[i] >= 0 inside the run), and dp[j] = 0 when the stack empties (j = -1). j is found with a monotonic stack popping entries with v >= v[i]. Answer = max dp[i]. O(n).
