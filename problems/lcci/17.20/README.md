# [面试题 17.20] 连续中值

## Description


```md
https://leetcode.cn/problems/continuous-median-lcci/description/
* lcci
* Hard (59.82%)
* Likes:    41
* Dislikes: -
* Testcase Example:  '["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]\n' +
'[[],[1],[2],[],[3],[]]'
随机产生数字并传递给一个方法。你能否完成这个方法，在每次产生新值时，寻找当前所有值的中间值（中位数）并保存。
中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。
例如，
[2,3,4] 的中位数是 3
[2,3] 的中位数是 (2 + 3) / 2 = 2.5
设计一个支持以下两种操作的数据结构：
void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。
示例：
addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3)
findMedian() -> 2
Hint 1: 回想一下，中位数是指比一半数字更大、一半数字更小的数字。
Hint 2: 注意，必须存储见过的所有元素。即使是前100个元素中最小的元素也可以成为中间值。你不能抛弃较大或较小的元素。
Hint 3: 另一种思考方法是：你能维护元素的下半部分和上半部分吗?
Hint 4: 如果使用堆呢？或是两个堆？

```

## Description (English)

Numbers are produced randomly and passed to a method. Complete the method so that each time a new value arrives, it finds (and reports) the median of all values so far. The median is the middle number of an ordered list; for an even-length list it is the average of the two middle numbers.

For example, the median of [2,3,4] is 3, and the median of [2,3] is (2+3)/2 = 2.5. Design a data structure supporting:
- void addNum(int num) - add an integer from the data stream.
- double findMedian() - return the median of all elements so far.

Example:
addNum(1), addNum(2), findMedian() -> 1.5, addNum(3), findMedian() -> 2

## 思路

对顶堆：下半部分放**大根堆**、上半部分放**小根堆**，保持 lower.size == upper.size 或多 1。addNum 先入 lower，把 lower 的堆顶弹给 upper，若 upper 反超则再归还堆顶——每次 O(log n)；findMedian 取 lower 堆顶或两堆顶均值，O(1)。JS 无内置堆，手写二叉堆 + 比较器翻转向。

## Solution

[SourceCode](./solution.js)
