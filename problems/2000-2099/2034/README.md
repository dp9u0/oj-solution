# [2034] Stock Price Fluctuation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/stock-price-fluctuation/description/)

* algorithms
* Medium (48.95%)
* Likes:    1281
* Dislikes: 71
* Testcase Example:  '["StockPrice","update","update","current","maximum","update","maximum","update","minimum"]\n' +

```md
'[[],[1,10],[2,5],[],[],[1,3],[],[4,2],[]]'
You are given a stream of records about a particular stock. Each record contains a timestamp and the corresponding price of the stock at that timestamp.
Unfortunately due to the volatile nature of the stock market, the records do not come in order. Even worse, some records may be incorrect. Another record with the same timestamp may appear later in the stream correcting the price of the previous wrong record.
Design an algorithm that:

Updates the price of the stock at a particular timestamp, correcting the price from any previous records at the timestamp.
Finds the latest price of the stock based on the current records. The latest price is the price at the latest timestamp recorded.
Finds the maximum price the stock has been based on the current records.
Finds the minimum price the stock has been based on the current records.

Implement the StockPrice class:

StockPrice() Initializes the object with no price records.
void update(int timestamp, int price) Updates the price of the stock at the given timestamp.
int current() Returns the latest price of the stock.
int maximum() Returns the maximum price of the stock.
int minimum() Returns the minimum price of the stock.


Example 1:

Input
['StockPrice', 'update', 'update', 'current', 'maximum', 'update', 'maximum', 'update', 'minimum']
[[], [1, 10], [2, 5], [], [], [1, 3], [], [4, 2], []]
Output
[null, null, null, 5, 10, null, 5, null, 2]
Explanation
StockPrice stockPrice = new StockPrice();
stockPrice.update(1, 10); // Timestamps are [1] with corresponding prices [10].
stockPrice.update(2, 5);  // Timestamps are [1,2] with corresponding prices [10,5].
stockPrice.current();     // return 5, the latest timestamp is 2 with the price being 5.
stockPrice.maximum();     // return 10, the maximum price is 10 at timestamp 1.
stockPrice.update(1, 3);  // The previous timestamp 1 had the wrong price, so it is updated to 3.
// Timestamps are [1,2] with corresponding prices [3,5].
stockPrice.maximum();     // return 5, the maximum price is 5 after the correction.
stockPrice.update(4, 2);  // Timestamps are [1,2,4] with corresponding prices [3,5,2].
stockPrice.minimum();     // return 2, the minimum price is 2 at timestamp 4.


Constraints:

1 <= timestamp, price <= 109
At most 105 calls will be made in total to update, current, maximum, and minimum.
current, maximum, and minimum will be called only after update has been called at least once.


```

## 题目翻译

设计一个股票价格类，支持：
- `update(timestamp, price)`: 更新某时间戳的价格（可能覆盖之前的价格）
- `current()`: 返回最新时间戳对应的价格
- `maximum()`: 返回当前所有价格中的最大值
- `minimum()`: 返回当前所有价格中的最小值

## 解题思路

用 HashMap 存储 timestamp -> price，记录最大时间戳。用两个优先队列（最大堆和最小堆）维护价格的最大值和最小值。更新时如果覆盖了旧价格，在堆中加入新价格。查询时跳过与 HashMap 不匹配的堆顶元素（延迟删除）。

由于 JS 没有内置堆，用排序数组+延迟删除或直接维护有序结构。这里用简单方式：维护价格计数的 TreeMap 模拟。

时间复杂度：update O(1) 均摊，其余 O(1) 均摊

## Solution

[SourceCode](./solution.js)
