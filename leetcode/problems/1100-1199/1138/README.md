# [1138] Alphabet Board Path

## Description

[LeetCode Problem Description](https://leetcode.com/problems/alphabet-board-path/description/)

* algorithms
* Medium (51.82%)
* Likes:    936
* Dislikes: 187
* Testcase Example:  '"leet"'

```md
On an alphabet board, we start at position (0, 0), corresponding to characterboard[0][0].
Here, board = ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy', 'z'], as shown in the diagram below.

We may make the following moves:

&#39;U&#39; moves our position up one row, if the position exists on the board;
&#39;D&#39; moves our position down one row, if the position exists on the board;
&#39;L&#39; moves our position left one column, if the position exists on the board;
&#39;R&#39; moves our position right one column, if the position exists on the board;
&#39;!&#39;adds the character board[r][c] at our current position (r, c)to theanswer.

(Here, the only positions that exist on the board are positions with letters on them.)
Return a sequence of moves that makes our answer equal to targetin the minimum number of moves. You may return any path that does so.

Example 1:
Input: target = "leet"
Output: "DDR!UURRR!!DDD!"
Example 2:
Input: target = "code"
Output: "RR!DDRR!UUL!R!"


Constraints:

1 <= target.length <= 100
target consists only of English lowercase letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

在字母板上从 (0,0) 出发，每个字母位置为 (ch-'a') 的行和列（每行5个字母，z 在第5行第0列）。求到达目标字符串每个字符的最短路径（UDLR移动，!选取）。

## 解题思路

每个字符位置为 row = (ch-'a')/5, col = (ch-'a')%5。从当前位置移到目标位置，注意 z 在 (5,0)，所以到 z 要先左再下，从 z 出发要先上再右。安全做法：先移 U/L（远离 z），再移 D/R（靠近 z）。O(n)。
