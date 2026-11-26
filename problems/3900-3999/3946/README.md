# [3946] 购买最多物品数目 I

## Description


```md
https://leetcode.cn/problems/maximum-number-of-items-from-sale-i/description/
* algorithms
* Medium (46.37%)
* Likes:    8
* Dislikes: -
* Testcase Example:  '[[6,2],[2,6],[3,4]]\n9'
给你一个二维整数数组 items，其中 items[i] = [factori, pricei] 表示下标为 i 的物品。同时给你一个整数 budget。
每种物品都有无限个可供购买。你可以购买任意数量的任意物品，但购买物品的总花费最多为 budget。
购买物品后，你可以根据以下规则获得免费的物品：
如果你购买了若干个物品 i，所有满足 j != i 且 factori 可以整除 factorj 的物品 j ，你都能 免费 获得一份。
重复购买物品 i 不能 再获取额外的免费物品。
如果免费物品 j 是通过购买不同种类的物品获得的，那么同一种物品 j 可以被免费获得多次。
返回你在购买物品花费最多为 budget 的前提下，能够获得的 物品最大总数 ，包括购买的物品和免费的物品。

示例 1：
输入： items = [[6,2],[2,6],[3,4]], budget = 9
输出： 4
解释：
你可以购买 2 个物品 0 和 1 个物品 2，总花费为 2 * 2 + 4 = 8，不超过 budget = 9。
购买物品 2 可以免费获得 1 个物品 0，因为 factor2 = 3 可以整除 factor0 = 6。
你最终拥有 3 个购买的物品和 1 个免费物品，总共 4 个物品。
示例 2：
输入： items = [[2,4],[3,2],[4,1],[6,4],[12,4]], budget = 8
输出： 10
解释：
你可以购买 1 个物品 0、1 个物品 1 以及 2 个物品 2，总花费为 4 + 2 + 2 * 1 = 8。
购买物品 0 可以免费获得物品 2、3 和 4 各 1 个。
购买物品 1 可以免费获得物品 3 和 4 各 1 个。
购买物品 2 可以免费获得 1 个物品 4。
因此，你获得了 6 个免费物品。你最终拥有 4 个购买的物品和 6 个免费物品，总共 10 个物品。

提示：
1 <= items.length <= 1000
items[i] = [factori, pricei]
1 <= factori, pricei <= 1500
1 <= budget <= 1500
Hint 1: Precompute for every possible factor f, how many items have a factor divisible by f.
Hint 2: Buying the first copy of item i is special: it gives the purchased copy plus one free copy of every other item whose factor is divisible by factor_i.
Hint 3: Buying more copies of the same item does not create more free copies, so after the first copy, each extra purchase only adds one item copy.
Hint 4: This suggests a knapsack-style DP over item types and remaining budget, where each item can either be skipped, bought for the first time, or bought additional times after it has already been activated.

```

## Description (English)

You are given a 2D integer array `items` where `items[i] = [factor_i, price_i]` represents the i-th item, and an integer `budget`.

Each item has infinitely many copies available for purchase. You may buy any number of copies of any items, as long as the total cost of purchases does not exceed `budget`.

After purchasing, you obtain free items according to the following rules:

- If you bought at least one copy of item `i`, then for every item `j` with `j != i` such that `factor_i` divides `factor_j`, you obtain one free copy of item `j`.
- Buying more copies of item `i` does not grant additional free items.
- If a free item `j` is obtained by purchasing different kinds of items, then item `j` can be obtained for free multiple times (once per distinct purchased kind that qualifies).

Return the maximum total number of items you can obtain (purchased plus free) given that the total cost of purchases is at most `budget`.

Example 1:

```
Input: items = [[6,2],[2,6],[3,4]], budget = 9
Output: 4
Explanation: Buy 2 copies of item 0 and 1 copy of item 2, total cost 2*2+4 = 8 <= 9.
Buying item 2 grants one free copy of item 0 since factor_2 = 3 divides factor_0 = 6.
Total: 3 purchased + 1 free = 4 items.
```

Example 2:

```
Input: items = [[2,4],[3,2],[4,1],[6,4],[12,4]], budget = 8
Output: 10
Explanation: Buy 1 of item 0, 1 of item 1 and 2 of item 2, total cost 4+2+2*1 = 8.
Activations grant 3 + 2 + 1 = 6 free items. Total: 4 purchased + 6 free = 10 items.
```

Constraints:

- `1 <= items.length <= 1000`
- `items[i] = [factor_i, price_i]`
- `1 <= factor_i, price_i <= 1500`
- `1 <= budget <= 1500`

## Approach

**Key observations:**

1. Free items come only from *activated* item kinds (bought at least once). The free count is additive and independent: total free = sum over activated kinds `i` of `cnt_i`, where `cnt_i = #{ j != i : factor_j % factor_i == 0 }`. Note items sharing the same factor as `i` still count (only `i` itself is excluded).
2. Buying `k >= 1` copies of item `i` costs `k * price_i` and yields value `k + cnt_i` (the `k` purchased copies plus the one-time `cnt_i` free bonus from the first copy).

**Algorithm:**

1. Precompute `divCount[f]` = number of items whose factor is a multiple of `f`, via a harmonic-sum sweep over a factor-count array (for `f` in `1..MAX`, add `count[m]` for `m = f, 2f, 3f, ...`). Then `cnt_i = divCount[factor_i] - 1`.
2. Knapsack DP over budget `b` (0..budget), `dp[b]` = max total items. For each item `i`, two passes:
   - **Activation pass** (0/1 knapsack, `b` descending): `dp[b] = max(dp[b], dp[b - price_i] + 1 + cnt_i)` — buys the first copy with its bonus, using pre-item values so it applies at most once.
   - **Extra-copies pass** (unbounded knapsack, `b` ascending): `dp[b] = max(dp[b], dp[b - price_i] + 1)` — each additional copy adds exactly 1 and no bonus.
3. Answer is `dp[budget]`.

**Complexity:** `O(n * MAX_FACTOR)` for the precompute (harmonic sum) plus `O(n * budget)` for the DP — about 1.5M operations for the given limits. Space `O(budget)`.

## Solution

[SourceCode](./solution.js)
