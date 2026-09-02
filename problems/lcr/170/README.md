# [LCR 170] 交易逆序对的总数

## Description


```md
https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/description/
* algorithms
* Hard (50.01%)
* Likes:    1167
* Dislikes: -
* Testcase Example:  '[7,5,6,4]'
在股票交易中，如果前一天的股价高于后一天的股价，则可以认为存在一个「交易逆序对」。请设计一个程序，输入一段时间内的股票交易记录 record，返回其中存在的「交易逆序对」总数。

示例 1：
输入：record = [9, 7, 5, 4, 6]
输出：8
解释：交易中的逆序对为 (9, 7), (9, 5), (9, 4), (9, 6), (7, 5), (7, 4), (7, 6), (5, 4)。

提示：
0 <= record.length <= 50000

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

In stock trading, if the previous day's price is higher than the next day's price, there is an "inversion pair". Given the record `record`, return the total number of inversion pairs.

**Example:** `[9,7,5,4,6]` → `8` ((9,7),(9,5),(9,4),(9,6),(7,5),(7,4),(7,6),(5,4))

**Constraints:** `0 <= record.length <= 50000`.

---

## Approach

**Merge sort** counting: when merging two sorted halves, if a left element is greater than a right element, all remaining left elements also form inversions with that right element → add the leftover-left count.

Complexity: `O(n log n)` time, `O(n)` space.
