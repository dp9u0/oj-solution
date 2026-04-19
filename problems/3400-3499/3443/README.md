# [3443] Maximum Manhattan Distance After K Changes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-manhattan-distance-after-k-changes/description/)

* algorithms
* Medium (54.16%)
* Likes:    606
* Dislikes: 69
* Testcase Example:  '"NWSE"\n1'

```md
You are given a string s consisting of the characters &#39;N&#39;, &#39;S&#39;, &#39;E&#39;, and &#39;W&#39;, where s[i] indicates movements in an infinite grid:

&#39;N&#39; : Move north by 1 unit.
&#39;S&#39; : Move south by 1 unit.
&#39;E&#39; : Move east by 1 unit.
&#39;W&#39; : Move west by 1 unit.

Initially, you are at the origin (0, 0). You can change at most k characters to any of the four directions.
Find the maximum Manhattan distance from the origin that can be achieved at any time while performing the movements in order.
The Manhattan Distance between two cells (xi, yi) and (xj, yj) is
xi - xj
+
yi - yj
.

Example 1:

Input: s = 'NWSE', k = 1
Output: 3
Explanation:
Change s[2] from &#39;S&#39; to &#39;N&#39;. The string s becomes 'NWNE'.



Movement
Position (x, y)
Manhattan Distance
Maximum




s[0] == &#39;N&#39;
(0, 1)
0 + 1 = 1
1


s[1] == &#39;W&#39;
(-1, 1)
1 + 1 = 2
2


s[2] == &#39;N&#39;
(-1, 2)
1 + 2 = 3
3


s[3] == &#39;E&#39;
(0, 2)
0 + 2 = 2
3



The maximum Manhattan distance from the origin that can be achieved is 3. Hence, 3 is the output.

Example 2:

Input: s = 'NSWWEW', k = 3
Output: 6
Explanation:
Change s[1] from &#39;S&#39; to &#39;N&#39;, and s[4] from &#39;E&#39; to &#39;W&#39;. The string s becomes 'NNWWWW'.
The maximum Manhattan distance from the origin that can be achieved is 6. Hence, 6 is the output.


Constraints:

1 <= s.length <= 105
0 <= k <= s.length
s consists of only &#39;N&#39;, &#39;S&#39;, &#39;E&#39;, and &#39;W&#39;.


```

## 翻译

给定方向字符串 s（N/S/E/W）和最多修改 k 个字符的机会，求执行移动过程中距离原点的最大曼哈顿距离。

## 解题思路

曼哈顿距离 = |x|+|y| = max(x+y, -x+y, x-y, -x-y)。尝试 4 个对角方向。

对每个目标方向，将字符分为"好的"（贡献+1）和"坏的"（贡献-1）。每个坏字符改为好字符可增益 2。贪心地修改最早出现的坏字符使增益最大化。

对每个前缀 i：最大得分 = 原始得分 + 2 * min(k, 坏字符计数)。

4 个方向取最大值，O(n) 时间。

## Solution

[SourceCode](./solution.js)
