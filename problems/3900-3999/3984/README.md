# [3984] Divisible Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/divisible-game/description/)

* algorithms
* Medium (42.38%)
* Likes:    80
* Dislikes: 3
* Testcase Example:  '[1,4,6,8]'

```md
You are given an integer array nums of length n.
Alice and Bob are playing a game. Alice chooses:
An integer k such that k > 1.
Two integers l and r such that 0 <= l <= r < n.
Initially, both Alice's and Bob's scores are 0.
For each index i in the range [l, r] (inclusive):
If nums[i] is divisible by k, Alice's score increases by nums[i].
Otherwise, Bob's score increases by nums[i].
The score difference is Alice's score minus Bob's score.
Alice wants to maximize the score difference. If there are multiple values of k that achieve the maximum score difference, she chooses the smallest such k.
Return the product of the maximum score difference and the chosen value of k. Since the result can be large, return it modulo 109 + 7.

Example 1:
Input: nums = [1,4,6,8]
Output: 36
Explanation:
Alice can choose k = 2, l = 1, and r = 3.
All values in nums[1..3] are divisible by 2, so Alice's score is 4 + 6 + 8 = 18, while Bob's score is 0.
The score difference is 18, which is the maximum possible. Among all values of k that achieve this score difference, the smallest is 2.
Therefore, the answer is 18 * 2 = 36.
Example 2:
Input: nums = [2,1,2]
Output: 6
Explanation:
Alice can choose k = 2, l = 0, and r = 2.
The values nums[0] and nums[2] are divisible by 2, so Alice's score is 2 + 2 = 4. The value nums[1] is not divisible by 2, so Bob's score is 1.
The score difference is 4 - 1 = 3, which is the maximum possible. Among all values of k that achieve this score difference, the smallest is 2.
Therefore, the answer is 3 * 2 = 6.
Example 3:
Input: nums = [1]
Output: 1000000005
Explanation:
Alice must choose some k > 1. The smallest possible choice is k = 2.
Since nums[0] is not divisible by 2, Alice's score is 0, while Bob's score is 1.
The score difference is -1, which is the maximum possible.
Therefore, the answer is -1 * 2 = -2. Modulo 109 + 7, this equals 1000000005.

Constraints:
1 <= nums.length <= 1000
1 <= nums[i] <= 106
Hint 1: For a fixed k, transform each nums[i] into nums[i] if it is divisible by k, and into -nums[i] otherwise.
Hint 2: After this transformation, the best range [l, r] is the maximum subarray sum of the transformed array.
Hint 3: It is enough to check values of k that divide at least one element of nums. Also handle k = 2 for cases where no element is divisible by any chosen k.
Hint 4: Enumerate all divisors greater than one from the elements of nums, and run Kadane's algorithm for each candidate k.
Hint 5: When comparing candidates, maximize the score difference first, then choose the smaller k in case of a tie.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译(中文)

给你一个长度为 n 的整数数组 nums。

Alice 和 Bob 玩一个游戏。Alice 选择:
- 一个整数 k,满足 k > 1;
- 两个整数 l 和 r,满足 0 <= l <= r < n。

初始时 Alice 和 Bob 的得分都是 0。对于区间 [l, r] 中的每个下标 i:
- 如果 nums[i] 能被 k 整除,Alice 的得分增加 nums[i];
- 否则,Bob 的得分增加 nums[i]。

得分差定义为 Alice 的得分减去 Bob 的得分。Alice 想让得分差最大化。如果有多个 k 都能达到最大得分差,她选择其中最小的 k。

返回最大得分差与所选 k 的乘积。结果可能很大,返回其对 10^9 + 7 取模的结果。

示例 3 说明:nums = [1] 时,只能取 k = 2,得分差为 -1,答案为 -2,取模后为 1000000005(注意负数取模的处理)。

约束:
- 1 <= nums.length <= 1000
- 1 <= nums[i] <= 10^6

## 解题思路

**核心转化(固定 k):** 把每个 nums[i] 变换为:能被 k 整除则取 +nums[i],否则取 -nums[i]。那么得分差就是变换后数组在 [l, r] 上的子段和,最优区间就是变换后数组的最大子段和(Kadane 算法)。

**候选 k 的来源:** 只有能整除至少一个元素的 k 才有意义。任何元素 v >= 2 必有约数 k = v > 1,因此只需枚举所有元素的所有大于 1 的约数(试除到 √v)。若所有元素都是 1(没有任何候选 k),则任何 k 都整除不了任何元素,取最小的 k = 2、单元素区间,得分差 = -1,答案 = -2 mod (10^9+7) = 1000000005。

**为什么不用担心"不整除任何元素的 k"更优:** 若存在候选 k(即某元素 >= 2),该 k 下单取一个可整除元素得分差 >= 1 > 0;而整除不了任何元素的 k 得分差 <= -min(nums) <= -1,永远不可能成为最优,更不可能并列。

**压缩优化 Kadane:** 对固定 k,设可整除位置为 q_1 < ... < q_m(值 v_i = nums[q_i])。两个可整除位置之间的变换值全为负,对子段和只有拖累,所以最优子段一定以某个 q_a 开头、某个 q_b 结头(不含外围的非整除部分)。于是只需在压缩序列 [v_1, -g_1, v_2, -g_2, ..., v_m] 上跑 Kadane,其中 g_i 是 q_i 与 q_{i+1} 之间所有 nums 之和(用前缀和 O(1) 求出)。总复杂度约为 O(n√V + Σd(nums[i])),远优于对每个 k 全量 O(n) 扫描。

**并列取最小 k:** 比较时先最大化得分差,得分差相同时取更小的 k。

**取模:** bestDiff * k 最大约 10^9 * 10^6 = 10^15,在 double 精确整数范围内,直接相乘后取模,负数需加 MOD 调整:`((x % MOD) + MOD) % MOD`。
