# [2819] 购买巧克力后的最小相对损失

## Description


```md
https://leetcode.cn/problems/minimum-relative-loss-after-buying-chocolates/description/
* algorithms
* Hard (54.05%)
* Likes:    10
* Dislikes: -
* Testcase Example:  '[1,9,22,10,19]\n[[18,4],[5,2]]'
现给定一个整数数组 prices，表示巧克力的价格；以及一个二维整数数组 queries，其中 queries[i] = [ki, mi]。
Alice 和 Bob 去买巧克力，Alice 提出了一种付款方式，而 Bob 同意了。
对于每个 queries[i] ，它的条件如下：
如果一块巧克力的价格 小于等于 ki，那么 Bob 为它付款。
否则，Bob 为其中 ki 部分付款，而 Alice 为 剩余 部分付款。
Bob 想要选择 恰好 mi 块巧克力，使得他的 相对损失最小 。更具体地说，如果总共 Alice 付款了 ai，Bob 付款了 bi，那么 Bob 希望最小化 bi - ai。
返回一个整数数组 ans，其中 ans[i] 是 Bob 在 queries[i] 中可能的 最小相对损失 。

示例 1：
输入：prices = [1,9,22,10,19], queries = [[18,4],[5,2]]
输出：[34,-21]
解释：对于第一个 query，Bob 选择价格为 [1,9,10,22] 的巧克力。他付了 1 + 9 + 10 + 18 = 38，Alice 付了 0 + 0 + 0 + 4 = 4。因此，Bob 的相对损失是 38 - 4 = 34。
对于第二个 query，Bob 选择价格为 [19,22] 的巧克力。他付了 5 + 5 = 10，Alice 付了 14 + 17 = 31。因此，Bob 的相对损失是 10 - 31 = -21。
可以证明这些是可能的最小相对损失。
示例 2：
输入：prices = [1,5,4,3,7,11,9], queries = [[5,4],[5,7],[7,3],[4,5]]
输出：[4,16,7,1]
解释：对于第一个 query，Bob 选择价格为 [1,3,9,11] 的巧克力。他付了 1 + 3 + 5 + 5 = 14，Alice 付了 0 + 0 + 4 + 6 = 10。因此，Bob 的相对损失是 14 - 10 = 4。
对于第二个 query，Bob 必须选择所有的巧克力。他付了 1 + 5 + 4 + 3 + 5 + 5 + 5 = 28，Alice 付了 0 + 0 + 0 + 0 + 2 + 6 + 4 = 12。因此，Bob 的相对损失是 28 - 12 = 16。
对于第三个 query，Bob 选择价格为 [1,3,11] 的巧克力。他付了 1 + 3 + 7 = 11，Alice 付了 0 + 0 + 4 = 4。因此，Bob 的相对损失是 11 - 4 = 7。
对于第四个 query，Bob 选择价格为 [1,3,7,9,11] 的巧克力。他付了 1 + 3 + 4 + 4 + 4 = 16，Alice 付了 0 + 0 + 3 + 5 + 7 = 15。因此，Bob 的相对损失是 16 - 15 = 1。
可以证明这些是可能的最小相对损失。
示例 3：
输入：prices = [5,6,7], queries = [[10,1],[5,3],[3,3]]
输出：[5,12,0]
解释：对于第一个 query，Bob 选择价格为 5 的巧克力。他付了 5，Alice 付了 0。因此，Bob 的相对损失是 5 - 0 = 5。
对于第二个 query，Bob 必须选择所有的巧克力。他付了 5 + 5 + 5 = 15，Alice 付了 0 + 1 + 2 = 3。因此，Bob 的相对损失是 15 - 3 = 12。
对于第三个 query，Bob 必须选择所有的巧克力。他付了 3 + 3 + 3 = 9，Alice 付了 2 + 3 + 4 = 9。因此，Bob 的相对损失是 9 - 9 = 0。
可以证明这些是可能的最小相对损失。

提示：
1 <= prices.length == n <= 105
1 <= prices[i] <= 109
1 <= queries.length <= 105
queries[i].length == 2
1 <= ki <= 109
1 <= mi <= n
Hint 1: First sort prices.
Hint 2: For one query, imagine mi is 1. It can be shown that Bob should select either the first one (the cheapest one) or the last one (the most expensive).
Hint 3: Now if mi > 1, separate the chocolates into two parts. The first part is chocolates having a price less than or equal to k, the rest would be in the second part.
Hint 4: Knowing how many chocolates Bob should pick from the first part is sufficient. Of course, Bob should select a prefix from this part and a suffix from the second part.
Hint 5: To find the number of chocolates from the first part, do a binary search on the first part.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Chocolate price p: Bob pays min(p, k) and Alice pays max(p - k, 0). Bob must pick exactly m chocolates minimizing bi - ai (his payment minus Alice's). Answer per query (k, m).

Approach: sort prices. Split at k: low part L (p <= k, contribution to b-a is p), high part H (p > k, contribution is 2k - p). For a fixed count x taken from L, optimal picks are the x cheapest of L and the (m-x) priciest of H (exchange argument). So f(x) = pre[x] + 2k(m-x) - suf[m-x] with pre = prefix sums of the x cheapest, suf = sums of the y priciest. Marginal f(x+1)-f(x) = p[x] + p[n-m+x] - 2k, which is non-decreasing in x, so f is convex: binary search the smallest x in [max(0, m-(n-c)), min(m, c)] (c = count of p <= k) where the marginal turns >= 0. All sums stay < 2^53 (<= ~4e14) so plain numbers are exact.

Complexity: O((n + q) log n).
