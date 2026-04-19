# [1320] Minimum Distance to Type a Word Using Two Fingers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/description/)

* algorithms
* Hard (59.48%)
* Likes:    1192
* Dislikes: 49
* Testcase Example:  '"CAKE"'

```md

You have a keyboard layout as shown above in the X-Y plane, where each English uppercase letter is located at some coordinate.

For example, the letter &#39;A&#39; is located at coordinate (0, 0), the letter &#39;B&#39; is located at coordinate (0, 1), the letter &#39;P&#39; is located at coordinate (2, 3) and the letter &#39;Z&#39; is located at coordinate (4, 1).

Given the string word, return the minimum total distance to type such string using only two fingers.
The distance between coordinates (x1, y1) and (x2, y2) is
x1 - x2
+
y1 - y2
.
Note that the initial positions of your two fingers are considered free so do not count towards your total distance, also your two fingers do not have to start at the first letter or the first two letters.

Example 1:

Input: word = 'CAKE'
Output: 3
Explanation: Using two fingers, one optimal way to type 'CAKE' is:
Finger 1 on letter &#39;C&#39; -> cost = 0
Finger 1 on letter &#39;A&#39; -> cost = Distance from letter &#39;C&#39; to letter &#39;A&#39; = 2
Finger 2 on letter &#39;K&#39; -> cost = 0
Finger 2 on letter &#39;E&#39; -> cost = Distance from letter &#39;K&#39; to letter &#39;E&#39; = 1
Total distance = 3

Example 2:

Input: word = 'HAPPY'
Output: 6
Explanation: Using two fingers, one optimal way to type 'HAPPY' is:
Finger 1 on letter &#39;H&#39; -> cost = 0
Finger 1 on letter &#39;A&#39; -> cost = Distance from letter &#39;H&#39; to letter &#39;A&#39; = 2
Finger 2 on letter &#39;P&#39; -> cost = 0
Finger 2 on letter &#39;P&#39; -> cost = Distance from letter &#39;P&#39; to letter &#39;P&#39; = 0
Finger 1 on letter &#39;Y&#39; -> cost = Distance from letter &#39;A&#39; to letter &#39;Y&#39; = 4
Total distance = 6


Constraints:

2 <= word.length <= 300
word consists of uppercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

你有一个键盘布局，每个大写英文字母位于 X-Y 平面上的某个坐标位置。

键盘布局如下（6列）：
```
Row 0: A(0,0) B(0,1) C(0,2) D(0,3) E(0,4) F(0,5)
Row 1: G(1,0) H(1,1) I(1,2) J(1,3) K(1,4) L(1,5)
Row 2: M(2,0) N(2,1) O(2,2) P(2,3) Q(2,4) R(2,5)
Row 3: S(3,0) T(3,1) U(3,2) V(3,3) W(3,4) X(3,5)
Row 4: Y(4,0) Z(4,1)
```

给定字符串 word，用两根手指打出这个字符串，返回最小的总移动距离。
- 两根手指的初始位置是自由的（不计入距离）
- 两根手指不必从第一个或前两个字母开始
- 距离为曼哈顿距离：|x1-x2| + |y1-y2|

## 解题思路

**动态规划（DP）**

状态定义：`dp[i][j]` 表示打完前 i+1 个字符后，其中一根手指在 `word[i]` 位置，另一根手指在位置 j 时的最小总距离。j = 0~25 表示字母 A~Z 的位置，j = 26 表示该手指尚未使用。

转移方程：
- **同一根手指移动**：从 `word[i-1]` 移到 `word[i]`，另一根手指位置不变，代价 = dist(word[i-1], word[i])
- **另一根手指移动**：从位置 j 移到 `word[i]`，如果 j=26（未使用）则代价为 0，否则代价 = dist(j, word[i])

最终答案为 `min(dp[n-1][j])` 对所有 j。

时间复杂度 O(n * 27)，空间复杂度 O(27)。
