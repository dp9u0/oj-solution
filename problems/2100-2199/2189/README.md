# [2189] 建造纸牌屋的方法数

## Description


```md
https://leetcode.cn/problems/number-of-ways-to-build-house-of-cards/description/
* algorithms
* Medium (56.01%)
* Likes:    6
* Dislikes: -
* Testcase Example:  '16'
给你一个整数 n，代表你拥有牌的数量。一个 纸牌屋 满足以下条件:
一个 纸牌屋 由一行或多行 三角形 和水平纸牌组成。
三角形 是由两张纸牌相互靠在一起形成的。
一张纸牌必须水平放置在一行中 所有相邻 的三角形之间。
比第一行高的任何三角形都必须放在前一行的水平纸牌上。
每个三角形都被放置在行中 最左边 的可用位置。
返回使用所有 n 张纸牌可以构建的不同纸牌屋的数量。如果存在一行两个纸牌屋包含不同数量的纸牌，那么两个纸牌屋被认为是不同的。

示例 1:
输入: n = 16
输出: 2
解释: 有两种有效的纸牌屋摆法。
图中的第三个纸牌屋无效，因为第一行最右边的三角形没有放在水平纸牌的顶部。
Example 2:
输入: n = 2
输出: 1
解释: 这是唯一可行的纸牌屋。
Example 3:
输入: n = 4
输出: 0
解释: 图中的三种纸牌都是无效的。
第一个纸牌屋需要在两个三角形之间放置一张水平纸牌。
第二个纸牌屋使用 5 张纸牌。
第三个纸牌屋使用 2 张纸牌。

提示:
1 <= n <= 500
Hint 1: If a row has k triangles, how many cards does it take to build that row? It takes 3 * k - 1 cards.
Hint 2: If you still have i cards left, and on the previous row there were k triangles, what are the possible ways to build the current row? You can start at 1 triangle and continue adding more until you run out of cards or reach k - 1 triangles.

```

## Solution

[SourceCode](./solution.js)

## English Translation

A house of cards consists of rows of triangles (2 leaning cards) with horizontal cards placed between adjacent triangles in the same row. Any triangle in a higher row must rest on the horizontal card of the row below, and every triangle sits at the leftmost available position. Given exactly `n` cards, count distinct houses (rows with different triangle counts are different). All n cards must be used.

Example 1:
Input: n = 16
Output: 2

Example 2:
Input: n = 2
Output: 1

Example 3:
Input: n = 4
Output: 0

Constraints: 1 <= n <= 500.

## Approach

A row with k triangles uses 3k - 1 cards. A row built above one with k triangles can hold at most k - 1 triangles. Memoized DFS over (cardsLeft, prevRowTriangles): try each current-row size t from 1 to min(prev - 1, (cardsLeft + 1) / 3), consuming 3t - 1 cards; the empty remainder ends a house. The top row has no restriction (prev = infinity).

n = 500 -> O(n^2) states.
