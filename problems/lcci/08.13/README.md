# [面试题 08.13] 堆箱子

## Description


```md
https://leetcode.cn/problems/pile-box-lcci/description/
* lcci
* Hard (51.34%)
* Likes:    104
* Dislikes: -
* Testcase Example:  '[[1, 1, 1], [2, 2, 2], [3, 3, 3]]'
堆箱子。给你一堆n个箱子，箱子宽 wi、深 di、高 hi。箱子不能翻转，将箱子堆起来时，下面箱子的宽度、高度和深度必须大于上面的箱子。实现一种方法，搭出最高的一堆箱子。箱堆的高度为每个箱子高度的总和。
输入使用数组[wi, di, hi]表示每个箱子。
示例 1：
输入：box = [[1, 1, 1], [2, 2, 2], [3, 3, 3]]
输出：6
示例 2：
输入：box = [[1, 1, 1], [2, 3, 4], [2, 6, 7], [3, 4, 5]]
输出：10
提示:
箱子的数目不大于3000个。
Hint 1: 排列箱子会有什么帮助吗？
Hint 2: 我们可以按任一维度对箱子从大到小进行排序。这样我们会有箱子某一维度的局部顺序，在数组中后面的箱子必须出现在数组中前面的箱子之前。
Hint 3: 试着把它分解成子问题。
Hint 4: 想想你必须做出的第一个决定。第一个决定是哪个箱子在底部。
Hint 5: 一旦我们选择了底部的箱子，就需要选择第二个箱子，然后是第三个。
Hint 6: 实现一个基本的递归算法之后，你要考虑是否可以优化它。其中有重复的子问题吗？
Hint 7: 或者，我们可以考虑重复的选择：第一个箱子要放上去吗？第二个箱子要放上去吗？如此反复。

```

## Description (English)

Pile boxes. You are given n boxes with width w, depth d and height h. Boxes cannot be rotated. When stacking, the box below must be strictly greater than the box above in width, depth AND height. Implement a method to build the tallest stack; the height of the stack is the sum of the heights of its boxes. Each box is given as [w, d, h].

Example 1:
Input: box = [[1, 1, 1], [2, 2, 2], [3, 3, 3]]
Output: 6

Example 2:
Input: box = [[1, 1, 1], [2, 3, 4], [2, 6, 7], [3, 4, 5]]
Output: 10

Note: there are no more than 3000 boxes.

## 思路

排序 + LIS 型 DP，O(n²)：按宽度降序排序后，任何合法堆叠必然是排序结果的子序列（下方箱子的 w 严格更大；w 相等时三维不可能严格大于，不会互叠）。

`dp[i]` = 以箱子 i 为顶的最大高度：`dp[i] = h[i] + max(dp[j] | w[j]>w[i] && d[j]>d[i] && h[j]>h[i])`，答案为 max(dp)。n ≤ 3000，O(n²) ≈ 9e6 次比较，足够快。

## Solution

[SourceCode](./solution.js)
