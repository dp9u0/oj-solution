# [LCR 003] 比特位计数

## Description


```md
https://leetcode.cn/problems/w3tCBm/description/
* algorithms
* Easy (78.30%)
* Likes:    165
* Dislikes: -
* Testcase Example:  '2'
给定一个非负整数 n ，请计算 0 到 n 之间的每个数字的二进制表示中 1 的个数，并输出一个数组。

示例 1:
输入: n = 2
输出: [0,1,1]
解释:
0 --> 0
1 --> 1
2 --> 10
示例 2:
输入: n = 5
输出: [0,1,1,2,1,2]
解释:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

说明 :
0 <= n <= 105

进阶:
给出时间复杂度为 O(n*sizeof(integer)) 的解答非常容易。但你可以在线性时间 O(n) 内用一趟扫描做到吗？
要求算法的空间复杂度为 O(n) 。
你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount ）来执行此操作。

注意：本题与主站 338 题相同：https://leetcode.cn/problems/counting-bits/

```

## Solution

[SourceCode](./solution.js)

---

## English Description

Given a non-negative integer `n`, count the number of `1` bits in the binary representation of every number from `0` to `n` (inclusive), and return them as an array.

**Example 1:**
```
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
```

**Example 2:**
```
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
```

**Constraints:**
- `0 <= n <= 10^5`

**Follow up:**
- It is easy to come up with a solution with a runtime of `O(n * sizeof(integer))`. But can you do it in linear time `O(n)` with a single pass?
- The overall complexity of the algorithm should be `O(n)` space.
- Can you solve it without using any built-in functions (e.g. `__builtin_popcount` in C++)?

Note: This problem is the same as LeetCode 338 (Counting Bits).

---

## Approach

**Dynamic Programming — lowest bit reuse.**

For any integer `i >= 1`, the number of set bits is:

```
ans[i] = ans[i >> 1] + (i & 1)
```

- `i >> 1` removes the lowest bit; its popcount is already computed in `ans`.
- `(i & 1)` tells whether the removed lowest bit was `1`.

This gives a single pass in `O(n)` time and `O(n)` space.

- Time: O(n)
- Space: O(n)
