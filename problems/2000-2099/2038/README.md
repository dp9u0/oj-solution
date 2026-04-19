# [2038] Remove Colored Pieces if Both Neighbors are the Same Color

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/description/)

* algorithms
* Medium (63.07%)
* Likes:    1639
* Dislikes: 127
* Testcase Example:  '"AAABABB"'

```md
There are n pieces arranged in a line, and each piece is colored either by &#39;A&#39; or by &#39;B&#39;. You are given a string colors of length n where colors[i] is the color of the ith piece.
Alice and Bob are playing a game where they take alternating turns removing pieces from the line. In this game, Alice moves first.

Alice is only allowed to remove a piece colored &#39;A&#39; if both its neighbors are also colored &#39;A&#39;. She is not allowed to remove pieces that are colored &#39;B&#39;.
Bob is only allowed to remove a piece colored &#39;B&#39; if both its neighbors are also colored &#39;B&#39;. He is not allowed to remove pieces that are colored &#39;A&#39;.
Alice and Bob cannot remove pieces from the edge of the line.
If a player cannot make a move on their turn, that player loses and the other player wins.

Assuming Alice and Bob play optimally, return true if Alice wins, or return false if Bob wins.

Example 1:

Input: colors = 'AAABABB'
Output: true
Explanation:
AAABABB -> AABABB
Alice moves first.
She removes the second &#39;A&#39; from the left since that is the only &#39;A&#39; whose neighbors are both &#39;A&#39;.
Now it&#39;s Bob&#39;s turn.
Bob cannot make a move on his turn since there are no &#39;B&#39;s whose neighbors are both &#39;B&#39;.
Thus, Alice wins, so return true.

Example 2:

Input: colors = 'AA'
Output: false
Explanation:
Alice has her turn first.
There are only two &#39;A&#39;s and both are on the edge of the line, so she cannot move on her turn.
Thus, Bob wins, so return false.

Example 3:

Input: colors = 'ABBBBBBBAAA'
Output: false
Explanation:
ABBBBBBBAAA -> ABBBBBBBAA
Alice moves first.
Her only option is to remove the second to last &#39;A&#39; from the right.
ABBBBBBBAA -> ABBBBBBAA
Next is Bob&#39;s turn.
He has many options for which &#39;B&#39; piece to remove. He can pick any.
On Alice&#39;s second turn, she has no more pieces that she can remove.
Thus, Bob wins, so return false.


Constraints:

1 <=colors.length <= 105
colorsconsists of only the letters&#39;A&#39;and&#39;B&#39;


```

## 题目翻译

n 个棋子排成一行，颜色为 'A' 或 'B'。Alice 和 Bob 轮流移除棋子，Alice 先手。Alice 只能移除两个邻居都是 'A' 的 'A'，Bob 只能移除两个邻居都是 'B' 的 'B'。不能移除边缘的棋子。无法行动者输。假设双方最优操作，判断 Alice 是否获胜。

**示例 1：** colors = "AAABABB" → true
**示例 2：** colors = "AA" → false
**示例 3：** colors = "ABBBBBBBAAA" → false

**约束：** 1 <= colors.length <= 10^5

## 解题思路 (Approach)

关键观察：移除一个棋子不会创造新的可移除位置（只会破坏连续段）。因此 Alice 和 Bob 的可移除次数是固定的。统计连续 3 个及以上 'A' 的可移除次数 countA，以及连续 3 个及以上 'B' 的可移除次数 countB。Alice 先手，所以 Alice 获胜当且仅当 countA > countB。

时间复杂度：O(n)，空间复杂度：O(1)。

## Solution

[SourceCode](./solution.js)
