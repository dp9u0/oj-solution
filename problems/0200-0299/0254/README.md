# [254] 因子的组合

## Description


```md
https://leetcode.cn/problems/factor-combinations/description/
* algorithms
* Medium (58.06%)
* Likes:    194
* Dislikes: -
* Testcase Example:  '1'
整数可以被看作是其因子的乘积。
例如：
8 = 2 x 2 x 2;
= 2 x 4.
请实现一个函数，该函数接收一个整数 n 并返回该整数所有的因子组合。
注意：
你可以假定 n 为永远为正数。
因子必须大于 1 并且小于 n。
示例 1：
输入: 1
输出: []
示例 2：
输入: 37
输出: []
示例 3：
输入: 12
输出:
[
[2, 6],
[2, 2, 3],
[3, 4]
]
示例 4:
输入: 32
输出:
[
[2, 16],
[2, 2, 8],
[2, 2, 2, 4],
[2, 2, 2, 2, 2],
[2, 4, 4],
[4, 8]
]

提示：
1 <= n <= 107

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an integer `n`, return all possible unique combinations of its factors (factors > 1 and < n, each combination in ascending order).

**Example:**
n = 12 → [[2,6],[2,2,3],[3,4]]

**Constraints:**
- 1 <= n <= 12^7? (practical bound: n <= 10^7)

## Approach

回溯:对剩余值 remaining 枚举因子 f ∈ [start, √remaining] 且整除——每个 f 直接产出完整组合 `path + [f, remaining/f]`(保证升序且去重),并递归分解 remaining/f(f 作为下一层的 start,非降序约束)。

时间 O(√n × 结果数),空间 O(组合深度)。
