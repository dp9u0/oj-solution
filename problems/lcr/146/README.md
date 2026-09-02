# [LCR 146] 螺旋遍历二维数组

## Description


```md
https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/description/
* algorithms
* Easy (41.62%)
* Likes:    620
* Dislikes: -
* Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
给定一个二维数组 array，请返回「螺旋遍历」该数组的结果。
螺旋遍历：从左上角开始，按照 向右、向下、向左、向上 的顺序 依次 提取元素，然后再进入内部一层重复相同的步骤，直到提取完所有元素。

示例 1：
输入：array = [[1,2,3],[8,9,4],[7,6,5]]
输出：[1,2,3,4,5,6,7,8,9]
示例 2：
输入：array  = [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
输出：[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

限制：
0 <= array.length <= 100
0 <= array[i].length <= 100
注意：本题与主站 54 题相同：https://leetcode.cn/problems/spiral-matrix/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given a 2D array `array`, return the result of **spiral traversal**.
Spiral traversal: start from the top-left, extract elements in the order **right, down, left, up**, then enter the inner layer and repeat, until all elements are extracted.

**Example 1:** `array = [[1,2,3],[8,9,4],[7,6,5]]` → `[1,2,3,4,5,6,7,8,9]`
**Example 2:** `array = [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]` → `[1..16]`

**Constraints:** `0 <= array.length <= 100`, `0 <= array[i].length <= 100`.

Note: same as LeetCode 54.

---

## Approach

**Layer-by-layer boundary shrinking.**

- Maintain four bounds: `top`, `bottom`, `left`, `right`.
- While `top <= bottom && left <= right`: walk right across `top` row, then down along `right` col, then left across `bottom` row, then up along `left` col — each time after traversing a side, shrink the corresponding bound. Guard each traversal with the current bounds to avoid double-visiting for thin rows/columns.
- Empty / empty-row matrices yield `[]`.

Complexity: `O(m·n)` time, `O(1)` extra space (excluding output).
