# [面试题 17.14] 最小K个数

## Description


```md
https://leetcode.cn/problems/smallest-k-lcci/description/
* lcci
* Medium (56.65%)
* Likes:    256
* Dislikes: -
* Testcase Example:  '[1,2,3]\n0'
设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。
示例：
输入： arr = [1,3,5,7,2,4,6,8], k = 4
输出： [1,2,3,4]
提示：
0 <= len(arr) <= 100000
0 <= k <= min(100000, len(arr))
Hint 1: 实际上有几种方法。动脑筋想一想。从简单的方法开始也没问题。
Hint 2: 考虑以某种方式重新组织数据或者使用其他数据结构。
Hint 3: 你能把这些数字排序吗?
Hint 4: 使用堆或某种树怎么样?
Hint 5: 如果你选了一个任意的元素，那么需要多长时间才能算出它的元素的排序（比它大或比它小的元素的个数）?
Hint 6: 如果你选择一个任意的元素，平均来说，就会得到一个在第50百分位数附近的元素（一半的元素比它大，一半的元素比它小）。如果反复这样做呢?
Hint 7: 回想一下前面的提示，特别是与快速排序相关的提示。
Hint 8: 如果当你选择一个元素时，你交换周围的元素（就像在快速排序中所做的那样），使它所有下方的元素都位于上方的元素之前，那会怎么样？如果你重复做这个，能找到最小的一百万个数吗？

```

## Description (English)

Design an algorithm to find the smallest k numbers in an array. Return them in any order.

Example:
Input: arr = [1,3,5,7,2,4,6,8], k = 4
Output: [1,2,3,4]

Notes: 0 <= len(arr) <= 100000; 0 <= k <= min(100000, len(arr)).

## 思路

随机基准快速选择，均摊 O(n)：partition 后基准落位 p——p === k-1 即前 k 个就位；偏左/右则单侧收缩。相比堆的 O(n log k) 与排序的 O(n log n)，快速选择无序输出场景下更快。

## Solution

[SourceCode](./solution.js)
