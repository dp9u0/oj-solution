# [LCR 123] 图书整理 I

## Description


```md
https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/description/
* algorithms
* Easy (73.86%)
* Likes:    495
* Dislikes: -
* Testcase Example:  '[3,6,4,1]'
书店店员有一张链表形式的书单，每个节点代表一本书，节点中的值表示书的编号。为更方便整理书架，店员需要将书单倒过来排列，就可以从最后一本书开始整理，逐一将书放回到书架上。请倒序返回这个书单链表。

示例 1：
输入：head = [3,6,4,1]
输出：[1,4,6,3]

提示：
0 <= 链表长度 <= 10000

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

The bookstore clerk has a linked list of book numbers. To shelve from the last book, return the values in **reverse** order.

**Example:** `head=[3,6,4,1]` → `[1,4,6,3]`

**Constraints:** length ≤ 10000.

---

## Approach

Iterate the list; collect values and reverse (or use `unshift`). Recursion also works but iterative is safer for length.

Complexity: `O(n)`.
