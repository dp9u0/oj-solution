# [1927] Sum Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-game/description/)

* algorithms
* Medium (49.49%)
* Likes:    543
* Dislikes: 93
* Testcase Example:  '"5023"'

```md
Alice and Bob take turns playing a game, with Alicestarting first.
You are given a string num of even length consisting of digits and &#39;?&#39; characters. On each turn, a player will do the following if there is still at least one &#39;?&#39; in num:

Choose an index i where num[i] == &#39;?&#39;.
Replace num[i] with any digit between &#39;0&#39; and &#39;9&#39;.

The game ends when there are no more &#39;?&#39; characters in num.
For Bobto win, the sum of the digits in the first half of num must be equal to the sum of the digits in the second half. For Aliceto win, the sums must not be equal.

For example, if the game ended with num = '243801', then Bobwins because 2+4+3 = 8+0+1. If the game ended with num = '243803', then Alicewins because 2+4+3 != 8+0+3.

Assuming Alice and Bob play optimally, return true if Alice will win and false if Bob will win.

Example 1:

Input: num = '5023'
Output: false
Explanation: There are no moves to be made.
The sum of the first half is equal to the sum of the second half: 5 + 0 = 2 + 3.

Example 2:

Input: num = '25??'
Output: true
Explanation: Alice can replace one of the &#39;?&#39;s with &#39;9&#39; and it will be impossible for Bob to make the sums equal.

Example 3:

Input: num = '?3295???'
Output: false
Explanation: It can be proven that Bob will always win. One possible outcome is:
- Alice replaces the first &#39;?&#39; with &#39;9&#39;. num = '93295???'.
- Bob replaces one of the &#39;?&#39; in the right half with &#39;9&#39;. num = '932959??'.
- Alice replaces one of the &#39;?&#39; in the right half with &#39;2&#39;. num = '9329592?'.
- Bob replaces the last &#39;?&#39; in the right half with &#39;7&#39;. num = '93295927'.
Bob wins because 9 + 3 + 2 + 9 = 5 + 9 + 2 + 7.


Constraints:

2 <= num.length <= 105
num.length is even.
num consists of only digits and &#39;?&#39;.


```

## 中文翻译

Alice 和 Bob 轮流将字符串中的 '?' 替换为 0-9 的数字。Alice 先手，她要让前半数字之和 ≠ 后半，Bob 要让它们相等。假设双方最优策略，判断 Alice 是否获胜。

## 解题思路

博弈论分析。设 sum1/sum2 为左右已知数字和，q1/q2 为左右 '?' 个数。
- 若 q1+q2 为奇数，Alice 必赢（她有最后一步）
- 若 q1+q2 为偶数，Bob 能赢当且仅当 sum1-sum2 == 9*(q2-q1)/2（Bob 可通过配对策略抵消 Alice 的操作）

## Solution

[SourceCode](./solution.js)
