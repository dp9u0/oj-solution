# [2075] Decode the Slanted Ciphertext

## Description

[LeetCode Problem Description](https://leetcode.com/problems/decode-the-slanted-ciphertext/description/)

* algorithms
* Medium (67.60%)
* Likes:    530
* Dislikes: 118
* Testcase Example:  '"ch   ie   pr"\n3'

```md
A string originalText is encoded using a slanted transposition cipher to a string encodedText with the help of a matrix having a fixed number of rows rows.
originalText is placed first in a top-left to bottom-right manner.

The blue cells are filled first, followed by the red cells, then the yellow cells, and so on, until we reach the end of originalText. The arrow indicates the order in which the cells are filled. All empty cells are filled with &#39; &#39;. The number of columns is chosen such that the rightmost column will not be empty after filling in originalText.
encodedText is then formed by appending all characters of the matrix in a row-wise fashion.

The characters in the blue cells are appended first to encodedText, then the red cells, and so on, and finally the yellow cells. The arrow indicates the order in which the cells are accessed.
For example, if originalText = 'cipher' and rows = 3, then we encode it in the following manner:

The blue arrows depict how originalText is placed in the matrix, and the red arrows denote the order in which encodedText is formed. In the above example, encodedText = 'ch ie pr'.
Given the encoded string encodedText and number of rows rows, return the original string originalText.
Note: originalText does not have any trailing spaces &#39; &#39;. The test cases are generated such that there is only one possible originalText.

Example 1:

Input: encodedText = 'ch   ie   pr', rows = 3
Output: 'cipher'
Explanation: This is the same example described in the problem description.

Example 2:


Input: encodedText = 'iveo    eed   l te   olc', rows = 4
Output: 'i love leetcode'
Explanation: The figure above denotes the matrix that was used to encode originalText.
The blue arrows show how we can find originalText from encodedText.

Example 3:


Input: encodedText = 'coding', rows = 1
Output: 'coding'
Explanation: Since there is only 1 row, both originalText and encodedText are the same.


Constraints:

0 <= encodedText.length <= 106
encodedText consists of lowercase English letters and &#39; &#39; only.
encodedText is a valid encoding of some originalText that does not have trailing spaces.
1 <= rows <= 1000
The testcases are generated such that there is only one possible originalText.


```

## 中文翻译

原始文本沿对角线放入 rows 行的矩阵（空位填空格），编码文本按行拼接。给定编码文本和行数，还原原始文本（去掉尾部空格）。

## 解题思路

**按对角线还原**

cols = encodedText.length / rows。编码文本按行存储在矩阵中。原始文本沿对角线放置，即从每个起始列 startCol 开始，读取 (r, startCol+r) 位置的字符。

枚举 startCol = 0..cols-1，沿对角线读字符拼接，最后 trimEnd 去掉尾部空格。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
