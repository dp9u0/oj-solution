# [1105] Filling Bookcase Shelves

## Description

[LeetCode Problem Description](https://leetcode.com/problems/filling-bookcase-shelves/description/)

* algorithms
* Medium (68.62%)
* Likes:    2681
* Dislikes: 270
* Testcase Example:  '[[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]]\n4'

```md
You are given an array books where books[i] = [thicknessi, heighti] indicates the thickness and height of the ith book. You are also given an integer shelfWidth.
We want to place these books in order onto bookcase shelves that have a total width shelfWidth.
We choose some of the books to place on this shelf such that the sum of their thickness is less than or equal to shelfWidth, then build another level of the shelf of the bookcase so that the total height of the bookcase has increased by the maximum height of the books we just put down. We repeat this process until there are no more books to place.
Note that at each step of the above process, the order of the books we place is the same order as the given sequence of books.

For example, if we have an ordered list of 5 books, we might place the first and second book onto the first shelf, the third book on the second shelf, and the fourth and fifth book on the last shelf.

Return the minimum possible height that the total bookshelf can be after placing shelves in this manner.

Example 1:


Input: books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelfWidth = 4
Output: 6
Explanation:
The sum of the heights of the 3 shelves is 1 + 3 + 2 = 6.
Notice that book number 2 does not have to be on the first shelf.

Example 2:

Input: books = [[1,3],[2,4],[3,2]], shelfWidth = 6
Output: 4


Constraints:

1 <= books.length <= 1000
1 <= thicknessi <= shelfWidth <= 1000
1 <= heighti <= 1000


```

## 中文翻译

给定 books[i] = [厚度, 高度] 和书架宽度 shelfWidth。按顺序将书放入书架，每层书的总厚度不超过 shelfWidth，该层高度为所放书的最大高度。求最小总高度。

## 解题思路

DP。dp[i] 表示放前 i 本书的最小高度。对第 i 本书，尝试将其与前面的若干本书放在同一层：从 i 往前枚举同一层的起始书 j，累计厚度不超过 shelfWidth，dp[i] = min(dp[j-1] + maxHeight(j..i))。

时间复杂度：O(n^2)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
