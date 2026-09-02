# [LCR 184] 设计自助结算系统

## Description


```md
https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof/description/
* algorithms
* Medium (48.07%)
* Likes:    538
* Dislikes: -
* Testcase Example:  '["Checkout","add","add","get_max","remove","get_max"]\n[[],[4],[7],[],[],[]]'
请设计一个自助结账系统，该系统需要通过一个队列来模拟顾客通过购物车的结算过程，需要实现的功能有：
get_max()：获取结算商品中的最高价格，如果队列为空，则返回 -1
add(value)：将价格为 value 的商品加入待结算商品队列的尾部
remove()：移除第一个待结算的商品价格，如果队列为空，则返回 -1
注意，为保证该系统运转高效性，以上函数的均摊时间复杂度均为 O(1)

示例 1：
输入:
["Checkout","add","add","get_max","remove","get_max"]
[[],[4],[7],[],[],[]]
输出: [null,null,null,7,4,7]
示例 2：
输入:
["Checkout","remove","get_max"]
[[],[],[]]
输出: [null,-1,-1]

提示：
1 <= get_max, add, remove 的总操作数 <= 10000
1 <= value <= 10^5

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Design a self-checkout system that simulates customers going through checkout with a queue:
- `get_max()`: return the maximum price in the queue, or `-1` if empty;
- `add(value)`: append a product with price `value` to the queue tail;
- `remove()`: remove the front product's price, or `-1` if empty.

All operations must be amortized `O(1)`.

**Example:** add 4, add 7 → get_max 7, remove 4, get_max 7.

**Constraints:** ≤ 10^4 total ops, `1 <= value <= 10^5`.

---

## Approach

**Monotonic deque** for the max alongside the FIFO queue.

- `queue`: the actual values in order (for `remove`).
- `maxDeque`: decreasing values; when adding `value`, pop from its back while back < value, then push `value` (so the front is always the current max).
- `remove`: pop from `queue` front; if it equals `maxDeque` front, pop the deque front too.
- `get_max`: `maxDeque` front or `-1`.

Complexity: amortized `O(1)` per op.
