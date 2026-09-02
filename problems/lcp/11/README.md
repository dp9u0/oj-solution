# [LCP 11] 期望个数统计

## Description


```md
https://leetcode.cn/problems/qi-wang-ge-shu-tong-ji/description/
* algorithms
* Easy (73.02%)
* Likes:    42
* Dislikes: -
* Testcase Example:  '[1,2,3]'
某互联网公司一年一度的春招开始了，一共有 n 名面试者入选。每名面试者都会提交一份简历，公司会根据提供的简历资料产生一个预估的能力值，数值越大代表越有可能通过面试。
小 A 和小 B 负责审核面试者，他们均有所有面试者的简历，并且将各自根据面试者能力值从大到小的顺序浏览。由于简历事先被打乱过，能力值相同的简历的出现顺序是从它们的全排列中等可能地取一个。现在给定 n 名面试者的能力值 scores，设 X 代表小 A 和小 B 的浏览顺序中出现在同一位置的简历数，求 X 的期望。
提示：离散的非负随机变量的期望计算公式为 。在本题中，由于 X 的取值为 0 到 n 之间，期望计算公式可以是 。
示例 1：
输入：scores = [1,2,3]
输出：3
解释：由于面试者能力值互不相同，小 A 和小 B 的浏览顺序一定是相同的。X的期望是 3 。
示例 2：
输入：scores = [1,1]
输出：1
解释：设两位面试者的编号为 0, 1。由于他们的能力值都是 1，小 A 和小 B 的浏览顺序都为从全排列 [[0,1],[1,0]] 中等可能地取一个。如果小 A 和小 B 的浏览顺序都是 [0,1] 或者 [1,0] ，那么出现在同一位置的简历数为 2 ，否则是 0 。所以 X 的期望是 (2+0+2+0) * 1/4 = 1
示例 3：
输入：scores = [1,1,2]
输出：2
限制：
1 <= scores.length <= 10^5
0 <= scores[i] <= 10^6

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

An internet company's annual spring recruitment has begun, with `n` interviewees shortlisted. Each interviewee submits a resume; based on the resume the company produces an estimated ability value — the larger the value, the more likely to pass the interview.

Little A and Little B are responsible for reviewing. They each have all resumes and each browses them in **decreasing** order of ability. Since resumes were shuffled beforehand, resumes with equal ability values appear in an order chosen **uniformly at random from all permutations** of those equal-valued resumes. Given the ability values `scores` of the `n` interviewees, let `X` be the number of resumes that occupy the **same position** in both A's and B's browsing orders. Return the expectation of `X`.

**Example 1:** Input `[1,2,3]` → Output `3` (distinct values, orders identical, E=3)
**Example 2:** Input `[1,1]` → Output `1`
**Example 3:** Input `[1,1,2]` → Output `2`

**Constraints:** `1 <= scores.length <= 10^5`, `0 <= scores[i] <= 10^6`

---

## Approach

Use **linearity of expectation**. Group resumes by equal ability value.

- Resumes of the same value occupy a fixed contiguous block of positions (its location depends only on how many strictly higher values exist), and A and B each independently arrange the block's `k` resumes uniformly at random.
- For a group of size `k`, each specific resume is equally likely to appear at any of the `k` positions in A's order, and independently in B's. So P(that resume is at the same position in both) = `k · (1/k)² = 1/k`.
- Summing over all `k` resumes in the group gives an expected contribution of `k · (1/k) = 1` per group. A singleton group (unique value) trivially contributes 1.

Therefore the answer is simply the **number of distinct ability values** in `scores`.

Complexity: `O(n)` time, `O(n)` space for a `Set`.
