# [2927] 给小朋友们分糖果 III

## Description


```md
https://leetcode.cn/problems/distribute-candies-among-children-iii/description/
* algorithms
* Hard (31.17%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '5\n2'
你被给定两个正整数 n 和 limit。
返回 在每个孩子得到不超过 limit 个糖果的情况下，将 n 个糖果分发给 3 个孩子的 总方法数。

示例 1:
输入：n = 5, limit = 2
输出：3
解释：有 3 种方式将 5 个糖果分发给 3 个孩子，使得每个孩子得到不超过 2 个糖果：(1, 2, 2), (2, 1, 2) 和 (2, 2, 1)。
示例 2:
输入：n = 3, limit = 3
输出：10
解释：有 10 种方式将 3 个糖果分发给 3 个孩子，使得每个孩子得到不超过 3 个糖果：(0, 0, 3), (0, 1, 2), (0, 2, 1), (0, 3, 0), (1, 0, 2), (1, 1, 1), (1, 2, 0), (2, 0, 1), (2, 1, 0) 和 (3, 0, 0)。

提示：
1 <= n <= 108
1 <= limit <= 108
Hint 1: Try to solve the problem using combinatorics.
Hint 2: If the limit didn’t exist, the problem would be distributing n candies between 3 children.
Hint 3: The answer to the above problem would be C(n + 2, 2).
Hint 4: Now try to combine this with the Inclusion-exclusion principle.
Hint 5: Apart from the above solution, there are other mathematical solutions that you can think of.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Count triples (a, b, c) with a+b+c = n and 0 <= a, b, c <= limit. n, limit up to 1e8.

Approach: inclusion-exclusion. Without the cap: C(n+2, 2). Subtract triples where a chosen child exceeds: -3*C(n-(limit+1)+2, 2); add back pairs: +3*C(n-2(limit+1)+2, 2); subtract all three: -C(n-3(limit+1)+2, 2). Each term is C(x, 2) = x(x-1)/2 for x >= 2 else 0. Max value ~5e15 < 2^53: exact in doubles.

Verified: n=5,limit=2 -> 3; n=3,limit=3 -> 10.
