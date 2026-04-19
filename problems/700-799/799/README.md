# [799] Champagne Tower

## Description

[LeetCode Problem Description](https://leetcode.com/problems/champagne-tower/description/)

* algorithms
* Medium (64.12%)
* Likes:    4160
* Dislikes: 235
* Testcase Example:  '1\n1\n1'

```md
We stack glasses in a pyramid, where the first row has 1 glass, the second row has 2 glasses, and so on until the 100th row. Each glass holds one cupof champagne.
Then, some champagne is poured into the first glass at the top. When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it. When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on. (A glass at the bottom row has its excess champagne fall on the floor.)
For example, after one cup of champagne is poured, the top most glass is full. After two cups of champagne are poured, the two glasses on the second row are half full. After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now. After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full, as pictured below.

Now after pouring some non-negative integer cups of champagne, return how full the jth glass in the ith row is (both i and j are 0-indexed.)

Example 1:

Input: poured = 1, query_row = 1, query_glass = 1
Output: 0.00000
Explanation: We poured 1 cup of champange to the top glass of the tower (which is indexed as (0, 0)). There will be no excess liquid so all the glasses under the top glass will remain empty.

Example 2:

Input: poured = 2, query_row = 1, query_glass = 1
Output: 0.50000
Explanation: We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange.

Example 3:

Input: poured = 100000009, query_row = 33, query_glass = 17
Output: 1.00000


Constraints:

0 <=poured <= 109
0 <= query_glass <= query_row< 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

将玻璃杯堆成金字塔形状：第 1 行 1 个杯，第 2 行 2 个杯，依此类推直到第 100 行。每个杯子容量为 1 杯香槟。从顶部倒入香槟后，杯子满了会均等溢出到左下和右下两个杯子。给定倒入的香槟杯数 poured，查询第 query_row 行第 query_glass 个杯子的充满程度。

## Approach

模拟法（DP）。用二维数组 dp[i][j] 表示第 i 行第 j 个杯子中经过的香槟量。

从顶部开始，dp[0][0] = poured。对每个杯子，如果 dp[i][j] > 1，则溢出量 overflow = dp[i][j] - 1，均等地流向 dp[i+1][j] 和 dp[i+1][j+1]，每个各加 overflow / 2。

逐行向下模拟到 query_row 即可，最终结果为 min(dp[query_row][query_glass], 1)。

时间复杂度 O(query_row²)，空间复杂度 O(query_row)。
