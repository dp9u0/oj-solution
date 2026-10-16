# [面试题 16.11] 跳水板

## Description


```md
https://leetcode.cn/problems/diving-board-lcci/description/
* lcci
* Easy (43.73%)
* Likes:    123
* Dislikes: -
* Testcase Example:  '1\n1\n0'
你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。
返回的长度需要从小到大排列。
示例 1：
输入：
shorter = 1
longer = 2
k = 3
输出：[3,4,5,6]
解释：
可以使用 3 次 shorter，得到结果 3；使用 2 次 shorter 和 1 次 longer，得到结果 4 。以此类推，得到最终结果。
提示：
0 < shorter <= longer
0 <= k <= 100000
Hint 1: 考虑制作一个跳水板。你的选择是什么？
Hint 2: 考虑递归解法。
Hint 3: 一旦有了递归算法，就考虑一下时间复杂度。能快点吗？如何进行？
Hint 4: 考虑使用缓存来优化时间复杂度。仔细想想你到底需要缓存什么。时间复杂度是什么？时间复杂度与表的最大尺寸密切相关。
Hint 5: 有一个替代的、聪明的（而且非常快速的）解决方案。实际上你可以在线性时间内不用递归求解。如何进行？
Hint 6: 这样想：你选择K块木板，其有两种不同的类型。对于第一种木板选择10个、第二种木板选择4个的所有方案，它们的和都是相同的。你能遍历所有可能的选择吗？

```

## Description (English)

You are building a diving board using a pile of planks. There are two types of planks: the shorter type has length `shorter`, the longer type has length `longer`. You must use exactly `k` planks. Write a method to generate all possible lengths of the diving board. Return the lengths sorted from smallest to largest.

Example:
Input: shorter = 1, longer = 2, k = 3
Output: [3, 4, 5, 6]
Explanation: using 3 shorter planks gives 3; 2 shorter + 1 longer gives 4; and so on.

Note:
- 0 < shorter <= longer
- 0 <= k <= 100000

## 思路

数学枚举，O(k)：设用了 i 块 longer（i = 0..k），长度 = (k-i)·shorter + i·longer = k·shorter + i·(longer-shorter)。

两个边界：k = 0 返回空数组；shorter = longer 时所有长度相同，只返回一个值（否则会输出 k+1 个重复）。longer > shorter 时结果对 i 严格递增，天然有序，无需排序。

## Solution

[SourceCode](./solution.js)
