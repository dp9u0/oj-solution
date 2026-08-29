# [3782] Last Remaining Integer After Alternating Deletion Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/last-remaining-integer-after-alternating-deletion-operations/description/)

* algorithms
* Hard (49.17%)
* Likes:    40
* Dislikes: 5
* Testcase Example:  '8'

```md
You are given an integer n.
We write the integers from 1 to n in a sequence from left to right. Then, alternately apply the following two operations until only one integer remains, starting with operation 1:

Operation 1: Starting from the left, delete every second number.
Operation 2: Starting from the right, delete every second number.

Return the last remaining integer.

Example 1:

Input: n = 8
Output: 3
Explanation:

Write [1, 2, 3, 4, 5, 6, 7, 8] in a sequence.
Starting from the left, we delete every second number: [1, 2, 3, 4, 5, 6, 7, 8]. The remaining integers are [1, 3, 5, 7].
Starting from the right, we delete every second number: [1, 3, 5, 7]. The remaining integers are [3, 7].
Starting from the left, we delete every second number: [3, 7]. The remaining integer is [3].


Example 2:

Input: n = 5
Output: 1
Explanation:

Write [1, 2, 3, 4, 5] in a sequence.
Starting from the left, we delete every second number: [1, 2, 3, 4, 5]. The remaining integers are [1, 3, 5].
Starting from the right, we delete every second number: [1, 3, 5]. The remaining integers are [1, 5].
Starting from the left, we delete every second number: [1, 5]. The remaining integer is [1].


Example 3:

Input: n = 1
Output: 1
Explanation:

Write [1] in a sequence.
The last remaining integer is 1.



Constraints:

1 <= n <= 1015


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

把 1..n 从左到右排成一列，交替执行两操作直到剩一个数（从操作 1 开始）：操作 1 从**左**起删除每个第二数；操作 2 从**右**起删除每个第二数。返回最后剩下的数。

示例 1：`n=8` → `3`；示例 2：`n=5` → `1`

## 解题思路

与 LC390 同族但方向约定不同（本题为"删除每个第二数"，首元素在左删时保留）：

维护剩余序列的首元素 `head`、公差 `step`、剩余个数 `count`、当前方向。每轮：

- **左删**：head 永远保留（它是左起第 1 个）；
- **右删**：`count` 为偶数时最左端是右起第偶数个 → 被删，`head += step`；奇数则保留；
- `step *= 2`，`count = ⌈count/2⌉`，方向翻转。

O(log n)。注意与 390 的 `if (left || odd)` 公式**方向相反**，混淆即错——本地用 n≤2000 全量模拟对拍验证。