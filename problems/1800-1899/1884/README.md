# [1884] Egg Drop With 2 Eggs and N Floors

## Description

[LeetCode Problem Description](https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/description/)

* algorithms
* Medium (74.59%)
* Likes:    1544
* Dislikes: 164
* Testcase Example:  '2'

```md
You are given two identical eggs and you have access to a building with n floors labeled from 1 to n.
You know that there exists a floor f where 0 <= f <= n such that any egg dropped at a floor higher than f will break, and any egg dropped at or below floor f will not break.
In each move, you may take an unbroken egg and drop it from any floor x (where 1 <= x <= n). If the egg breaks, you can no longer use it. However, if the egg does not break, you may reuse it in future moves.
Return the minimum number of moves that you need to determine with certainty what the value of f is.

Example 1:

Input: n = 2
Output: 2
Explanation: We can drop the first egg from floor 1 and the second egg from floor 2.
If the first egg breaks, we know that f = 0.
If the second egg breaks but the first egg didn&#39;t, we know that f = 1.
Otherwise, if both eggs survive, we know that f = 2.

Example 2:

Input: n = 100
Output: 14
Explanation: One optimal strategy is:
- Drop the 1st egg at floor 9. If it breaks, we know f is between 0 and 8. Drop the 2nd egg starting from floor 1 and going up one at a time to find f within 8 more drops. Total drops is 1 + 8 = 9.
- If the 1st egg does not break, drop the 1st egg again at floor 22. If it breaks, we know f is between 9 and 21. Drop the 2nd egg starting from floor 10 and going up one at a time to find f within 12 more drops. Total drops is 2 + 12 = 14.
- If the 1st egg does not break again, follow a similar process dropping the 1st egg from floors 34, 45, 55, 64, 72, 79, 85, 90, 94, 97, 99, and 100.
Regardless of the outcome, it takes at most 14 drops to determine f.


Constraints:

1 <= n <= 1000


```

## 题目翻译

给定 2 个相同的鸡蛋和 n 层楼。存在临界楼层 f（0≤f≤n），高于 f 的楼层扔鸡蛋会碎，f 及以下不会碎。求确定 f 所需的最少操作次数。

## 解题思路

**数学公式**

2 个鸡蛋的最优策略：第 1 个鸡蛋以递减步长跳跃（第 m 层、m+(m-1)、m+(m-1)+(m-2)...），第 2 个鸡蛋线性扫描剩余范围。m 次操作最多覆盖 m(m+1)/2 层。

求最小 m 使得 m(m+1)/2 ≥ n，即 m = ⌈(√(8n+1)-1)/2⌉。

## Solution

[SourceCode](./solution.js)
