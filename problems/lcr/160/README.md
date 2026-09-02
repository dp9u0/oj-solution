# [LCR 160] 数据流中的中位数

## Description


```md
https://leetcode.cn/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/description/
* algorithms
* Hard (58.24%)
* Likes:    483
* Dislikes: -
* Testcase Example:  '["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]\n' +
'[[],[1],[2],[],[3],[]]'
中位数 是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。
例如，
[2,3,4] 的中位数是 3
[2,3] 的中位数是 (2 + 3) / 2 = 2.5
设计一个支持以下两种操作的数据结构：
void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。
示例 1：
输入：
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
输出：[null,null,null,1.50000,null,2.00000]
示例 2：
输入：
["MedianFinder","addNum","findMedian","addNum","findMedian"]
[[],[2],[],[3],[]]
输出：[null,null,2.00000,null,2.50000]

提示：
最多会对 addNum、findMedian 进行 50000 次调用。
注意：本题与主站 295 题相同：https://leetcode.cn/problems/find-median-from-data-stream/

```

## English Translation

The **median** is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

- For example, the median of `[2,3,4]` is `3`.
- The median of `[2,3]` is `(2 + 3) / 2 = 2.5`.

Design a data structure that supports the following two operations:
- `void addNum(int num)` — Add an integer from the data stream to the data structure.
- `double findMedian()` — Return the median of all elements so far.

**Example 1:**
```
Input:  ["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
        [[],[1],[2],[],[3],[]]
Output: [null,null,null,1.50000,null,2.00000]
```

**Example 2:**
```
Input:  ["MedianFinder","addNum","findMedian","addNum","findMedian"]
        [[],[2],[],[3],[]]
Output: [null,null,2.00000,null,2.50000]
```

**Constraints:**
- At most `50000` calls will be made to `addNum` and `findMedian`.
- Note: This problem is the same as LeetCode 295. Find Median from Data Stream.

## Solution Approach

**双堆 (Two Heaps) 思路:**

维护两个堆来划分数据流:
- **大顶堆 `maxHeap`**: 存放数据流中**较小的一半**,堆顶是这部分的最大值。
- **小顶堆 `minHeap`**: 存放数据流中**较大的一半**,堆顶是这部分的最小值。

**平衡性约束:** `maxHeap` 的大小始终等于 `minHeap` 或比它多 1(即左堆不瘦于右堆,且最多多 1 个)。

**addNum(num):**
1. 将 `num` 先插入 `maxHeap`(较小半区)。
2. 如果 `maxHeap` 堆顶大于 `minHeap` 堆顶(即最大堆里的最大值反而大于最小堆里的最小值,说明有元素放错了半区),或 `maxHeap` 比 `minHeap` 多出超过 1 个,则把 `maxHeap` 堆顶移到 `minHeap`,恢复平衡。

**findMedian():**
- 如果两个堆大小相等,中位数为两个堆顶的平均值。
- 如果 `maxHeap` 比 `minHeap` 多 1 个,中位数为 `maxHeap` 堆顶。

**复杂度:** 每次操作 `O(log n)`,总空间 `O(n)`。使用数组手写堆,避免额外依赖。
