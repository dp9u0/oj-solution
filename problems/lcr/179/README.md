# [LCR 179] 查找总价格为目标值的两个商品

## Description


```md
https://leetcode.cn/problems/he-wei-sde-liang-ge-shu-zi-lcof/description/
* algorithms
* Easy (67.83%)
* Likes:    304
* Dislikes: -
* Testcase Example:  '[3, 9, 12, 15]\n18'
购物车内的商品价格按照升序记录于数组 price。请在购物车中找到两个商品的价格总和刚好是 target。若存在多种情况，返回任一结果即可。
示例 1：
输入：price = [3, 9, 12, 15], target = 18
输出：[3,15] 或者 [15,3]
示例 2：
输入：price = [8, 21, 27, 34, 52, 66], target = 61
输出：[27,34] 或者 [34,27]

提示：
1 <= price.length <= 10^5
1 <= price[i] <= 10^6
1 <= target <= 2*10^6

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Prices of items in the shopping cart are recorded in array `price` in ascending order. Find two items whose price sum equals exactly `target`. If multiple pairs exist, return any.

**Example 1:** `price = [3, 9, 12, 15], target = 18` → `[3,15]` (order irrelevant)
**Example 2:** `price = [8, 21, 27, 34, 52, 66], target = 61` → `[27,34]`

**Constraints:** `1 <= price.length <= 10^5`, `1 <= price[i] <= 10^6`, `1 <= target <= 2*10^6`.

---

## Approach

Since `price` is **sorted ascending**, use **two pointers**:

- `l` starts at `0`, `r` at the last index.
- If `price[l] + price[r] == target`, return `[price[l], price[r]]`.
- If the sum is too small, increment `l`; too large, decrement `r`.

Guaranteed to find a pair if one exists (sorted input supports the two-pointer argument).

Complexity: `O(n)` time, `O(1)` space.
