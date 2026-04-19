# [901] Online Stock Span

## Description

[LeetCode Problem Description](https://leetcode.com/problems/online-stock-span/description/)

* algorithms
* Medium (68.90%)
* Likes:    7252
* Dislikes: 503
* Testcase Example:  '["StockSpanner","next","next","next","next","next","next","next"]\n' +

```md
'[[],[100],[80],[60],[70],[60],[75],[85]]'
Design an algorithm that collects daily price quotes for some stock and returns the span of that stock&#39;s price for the current day.
The span of the stock&#39;s price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.

For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.
Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8, then the span of today is 3 because starting from today, the price of the stock was less than or equal 8 for 3 consecutive days.

Implement the StockSpanner class:

StockSpanner() Initializes the object of the class.
int next(int price) Returns the span of the stock&#39;s price given that today&#39;s price is price.


Example 1:

Input
['StockSpanner', 'next', 'next', 'next', 'next', 'next', 'next', 'next']
[[], [100], [80], [60], [70], [60], [75], [85]]
Output
[null, 1, 1, 1, 2, 1, 4, 6]
Explanation
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today&#39;s price of 75) were less than or equal to today&#39;s price.
stockSpanner.next(85);  // return 6


Constraints:

1 <= price <= 105
At most 104 calls will be made to next.


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

设计一个算法，收集股票每日价格并返回当天股票价格的跨度。跨度定义为从当天开始向过去连续多少天的价格都 <= 当天价格。

实现 StockSpanner 类：
- `StockSpanner()` 初始化
- `next(price)` 返回当天价格的跨度

**示例：** next 依次调用 [100,80,60,70,60,75,85] → 输出 [1,1,1,2,1,4,6]

**约束：** 1 <= price <= 10^5, 最多 10^4 次 next 调用

## Approach

单调栈。栈中存储 [price, span] 对。

- 每次 next(price) 时，初始化 span = 1
- 当栈顶的 price <= 当前 price 时，弹出栈顶并将其 span 累加到当前 span
- 将 [price, span] 压入栈，返回 span

本质：合并所有比当前价格小的连续区间的跨度。

时间复杂度均摊 O(1)，空间复杂度 O(n)。
