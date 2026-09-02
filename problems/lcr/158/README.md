# [LCR 158] 库存管理 II

## Description


```md
https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/description/
* algorithms
* Easy (69.71%)
* Likes:    422
* Dislikes: -
* Testcase Example:  '[6,1,3,1,1,1]'
仓库管理员以数组 stock 形式记录商品库存表。stock[i] 表示商品 id，可能存在重复。请返回库存表中数量大于 stock.length / 2 的商品 id。

示例 1：
输入：stock = [6, 1, 3, 1, 1, 1]
输出：1

提示：
1 <= stock.length <= 50000
给定数组为非空数组，且存在结果数字

注意：本题与主站 169 题相同：https://leetcode.cn/problems/majority-element/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

`stock[i]` records product ids (may repeat). Return the id that appears **more than `stock.length / 2`** times (majority guaranteed to exist).

**Example:** `[6,1,3,1,1,1]` → `1`

**Constraints:** length ≤ 5*10^4. Note: same as LeetCode 169.

---

## Approach

**Boyer–Moore majority vote** (O(1) space): maintain a candidate and a count; increment on match else decrement; when count hits 0 switch candidate. Since a majority exists it survives.

Complexity: `O(n)` time, `O(1)` space.
