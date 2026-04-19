# [2001] Number of Pairs of Interchangeable Rectangles

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/description/)

* algorithms
* Medium (52.51%)
* Likes:    581
* Dislikes: 49
* Testcase Example:  '[[4,8],[3,6],[10,20],[15,30]]'

```md
You are given n rectangles represented by a 0-indexed 2D integer array rectangles, where rectangles[i] = [widthi, heighti] denotes the width and height of the ith rectangle.
Two rectangles i and j (i < j) are considered interchangeable if they have the same width-to-height ratio. More formally, two rectangles are interchangeable if widthi/heighti == widthj/heightj (using decimal division, not integer division).
Return the number of pairs of interchangeable rectangles in rectangles.

Example 1:

Input: rectangles = [[4,8],[3,6],[10,20],[15,30]]
Output: 6
Explanation: The following are the interchangeable pairs of rectangles by index (0-indexed):
- Rectangle 0 with rectangle 1: 4/8 == 3/6.
- Rectangle 0 with rectangle 2: 4/8 == 10/20.
- Rectangle 0 with rectangle 3: 4/8 == 15/30.
- Rectangle 1 with rectangle 2: 3/6 == 10/20.
- Rectangle 1 with rectangle 3: 3/6 == 15/30.
- Rectangle 2 with rectangle 3: 10/20 == 15/30.

Example 2:

Input: rectangles = [[4,5],[7,8]]
Output: 0
Explanation: There are no interchangeable pairs of rectangles.


Constraints:

n == rectangles.length
1 <= n <= 105
rectangles[i].length == 2
1 <= widthi, heighti <= 105


```

## 中文翻译

给定 n 个矩形 [width, height]，求有多少对矩形具有相同的宽高比。

## 解题思路

**GCD + 哈希计数**

用 gcd(w, h) 约分得到最简比 w/g:h/g 作为 key，用 Map 统计每种比的个数。答案 = 所有组中 C(cnt, 2) = cnt*(cnt-1)/2 之和。

时间复杂度：O(n * log(max_val))，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
