# [LCP 69] Hello LeetCode!

## Description


```md
https://leetcode.cn/problems/rMeRt2/description/
* algorithms
* Hard (40.52%)
* Likes:    19
* Dislikes: -
* Testcase Example:  '["hold","engineer","cost","level"]'
力扣嘉年华同样准备了纪念品展位，参观者只需要集齐 `helloleetcode` 的 `13` 张字母卡片即可获得力扣纪念章。
在展位上有一些由字母卡片拼成的单词，`words[i][j]` 表示第 `i` 个单词的第 `j` 个字母。
你可以从这些单词中取出一些卡片，但每次拿取卡片都需要消耗游戏代币，规则如下：
- 从一个单词中取一个字母所需要的代币数量，为该字母左边和右边字母数量之积
- 可以从一个单词中多次取字母，每个字母仅可被取一次
> 例如：从 `example` 中取出字母 `a`，需要消耗代币 `2*4=8`，字母取出后单词变为 `exmple`；
再从中取出字母 `m`，需要消耗代币 `2*3=6`，字母取出后单词变为 `exple`；
请返回取得 `helloleetcode` 这些字母需要消耗代币的 **最少** 数量。如果无法取得，返回 `-1`。
**注意：**
- 取出字母的顺序没有要求
- 取出的所有字母恰好可以拼成 `helloleetcode`
**示例 1：**
>输入：`words = ["hold","engineer","cost","level"]`
>
>输出：`5`
>
>解释：最优方法为：
>从 `hold` 依次取出 `h`、`o`、`l`、`d`， 代价均为 `0`
>从 `engineer` 依次取出第 `1` 个 `e` 与最后一个 `e`， 代价为 `0` 和 `5*1=5`
>从 `cost` 取出 `c`、`o`、`t`， 代价均为 `0`
>从 `level` 依次取出 `l`、`l`、`e`、`e`， 代价均为 `0`
>所有字母恰好可以拼成 `helloleetcode`，因此最小的代价为 `5`
**示例 2：**
>输入：`words = ["hello","leetcode"]`
>
>输出：`0`
**提示：**
+ `n == words.length`
+ `m == words[i].length`
+ `1 <= n <= 24`
+ `1 <= m <= 8`
+ `words[i][j]` 仅为小写字母

```

## English Description

At the LeetCode carnival there is a souvenir stall. A visitor only needs to collect the 13 letter-cards that spell `helloleetcode` to win a badge.

The stall displays words made of letter-cards; `words[i][j]` is the `j`-th letter of the `i`-th word. Cards can be taken out of words, but each take costs tokens:

- Taking one letter out of a word costs `(letters left of it) × (letters right of it)`.
- A letter may be taken from a word only once; several letters may be taken from the same word (in any order).

> Example: taking `a` out of `example` costs `2*4=8`, leaving `exmple`; then taking `m` out of `exmple` costs `2*3=6`, leaving `exple`.

Return the **minimum** number of tokens needed to obtain the letters that spell `helloleetcode`. If it is impossible, return `-1`.

**Note:** the order of taking letters does not matter, and the taken letters must be able to spell `helloleetcode` exactly.

**Example 1:** `words = ["hold","engineer","cost","level"]` → `5`
**Example 2:** `words = ["hello","leetcode"]` → `0`

**Constraints:** `1 <= words.length <= 24`, `1 <= words[i].length <= 8`, lowercase letters only.

## Approach

"Taking letters out of word w" means: choose a subset `S` of positions to extract; the others stay. The extracted letters become cards; the multiset of cards across all words must equal exactly `{e×4, l×3, o×2, h×1, t×1, c×1, d×1}` (the letters of `helloleetcode`).

**Step 1 — per-word min cost to extract a subset.** Removing a letter at current index `p` from a word of current length `len` costs `p·(len-1-p)`. Whether a target subset is cheap depends on removal **order**. Model the word positions as bits; `rm[mask]` = the minimum cost to have extracted exactly the positions in `mask`. Transition: to next add position `j`, its current index is `j − (# extracted positions < j)`, the current length is `len − popcount(mask)`, so the added cost is `left · right`. This is a subset DP over `2^len ≤ 256` states per word.

Letters not needed for the target (or exceeding the target count for their letter) make a subset infeasible — skip it. Each feasible subset yields `{counts, cost}`.

**Step 2 — exact-cover DP across words.** State = the multiset of letters still needed. Because each target letter has a tiny cap (`e≤4, l≤3, o≤2, h/t/c/d≤1`), encode the remaining-count tuple `(e,l,o,h,t,c,d)` in mixed radix (`≤ 5·4·3·2·2·2·2 = 960` states). For each word, either extract nothing, or extract one of its feasible subsets whose counts are within the remaining need:

```
ndp[remaining - subsetCounts] = min(ndp[...], dp[remaining] + subsetCost)
```

Process all words (0/1 knapsack style). Start `dp[fullTarget] = 0`; the answer is `dp[0]` (all cards gathered), or `-1` if unreachable.

**Correctness of removal cost.** The cost when removing in a given order equals the number of *pairs* of currently-surviving letters that straddle the removed letter; the subset DP explores all orders, so `rm[mask]` is the true minimum. (Verified independently in tests by a brute force that enumerates every removal permutation.)

**Complexity:** O(words · 2^len · len) for removal costs, plus O(words · states · subsets). With len ≤ 8 and states ≤ 960 this is tiny.

## Solution

[SourceCode](./solution.js)
