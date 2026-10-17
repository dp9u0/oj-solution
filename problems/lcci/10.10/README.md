# [面试题 10.10] 数字流的秩

## Description


```md
https://leetcode.cn/problems/rank-from-stream-lcci/description/
* lcci
* Medium (62.87%)
* Likes:    50
* Dislikes: -
* Testcase Example:  '["StreamRank", "getRankOfNumber", "track", "getRankOfNumber"]\n' +
'[[], [1], [0], [0]]'
假设你正在读取一串整数。每隔一段时间，你希望能找出数字 x 的秩(小于或等于 x 的值的个数)。请实现数据结构和算法来支持这些操作，也就是说：
实现 track(int x) 方法，每读入一个数字都会调用该方法；
实现 getRankOfNumber(int x) 方法，返回小于或等于 x 的值的个数。
注意：本题相对原题稍作改动
示例：
输入：
["StreamRank", "getRankOfNumber", "track", "getRankOfNumber"]
[[], [1], [0], [0]]
输出：
[null,0,null,1]
提示：
x <= 50000
track 和 getRankOfNumber 方法的调用次数均不超过 2000 次
Hint 1: 使用数组存在的问题是插入一个数字会比较慢。我们还能使用其他的数据结构吗？
Hint 2: 二叉搜索树效果好吗？
Hint 3: 考虑一个二叉搜索树，其中每个节点存储一些额外的数据。

```

## Description (English)

Rank from Stream. You are reading a stream of integers; from time to time you need to find the rank of a number x (the count of values less than or equal to x). Implement:
- track(int x): called once per number read.
- getRankOfNumber(int x): return the count of values less than or equal to x.

Example:
["StreamRank","getRankOfNumber","track","getRankOfNumber"], [[],[1],[0],[0]] → [null,0,null,1]

Notes: x <= 50000; track and getRankOfNumber are each called at most 2000 times.

## 思路

值域树状数组 O(log 50000)：x 上界 50000，出现次数记入 Fenwick 树（偏移到 1 基），rank 即前缀和。比 BST 节点计数实现短且常数小。

## Solution

[SourceCode](./solution.js)
