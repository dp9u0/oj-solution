# [LCR 128] 库存管理 I

## Description


```md
https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/description/
* algorithms
* Easy (49.58%)
* Likes:    878
* Dislikes: -
* Testcase Example:  '[4,5,8,3,4]'
仓库管理员以数组 stock 形式记录商品库存表。stock[i] 表示商品 id，可能存在重复。原库存表按商品 id 升序排列。现因突发情况需要进行商品紧急调拨，管理员将这批商品 id 提前依次整理至库存表最后。请你找到并返回库存表中编号的 最小的元素 以便及时记录本次调拨。

示例 1：
输入：stock = [4,5,8,3,4]
输出：3
示例 2：
输入：stock = [5,7,9,1,2]
输出：1

提示：
1 <= stock.length <= 5000
-5000 <= stock[i] <= 5000

注意：本题与主站 154 题相同：https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array-ii/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

The inventory array `stock` was ascending then rotated (some leading elements moved to the end). Values may repeat. Return the **minimum** element.

**Example:** `[4,5,8,3,4]` → 3; `[5,7,9,1,2]` → 1.

**Constraints:** ≤ 5000. Note: same as LeetCode 154.

---

## Approach

**Binary search** over the rotated array with duplicates: compare `mid` with `hi`:
- `stock[mid] < stock[hi]` → min in left half (`hi=mid`);
- `stock[mid] > stock[hi]` → min in right half (`lo=mid+1`);
- equal → cannot decide side; decrement `hi` (safe since equal values).

Return `stock[lo]`.

Complexity: `O(log n)` average, `O(n)` worst with many duplicates.
