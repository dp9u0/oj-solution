# [3901] Good Subsequence Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/good-subsequence-queries/description/)

* algorithms
* Hard (20.85%)
* Likes:    44
* Dislikes: 1
* Testcase Example:  '[4,8,12,16]\n2\n[[0,3],[2,6]]'

```md
You are given an integer array nums of length n and an integer p.
A non-empty subsequence of nums is called good if:
Its length is strictly less than n.
The greatest common divisor (GCD) of its elements is exactly p.
You are also given a 2D integer array queries of length q, where each queries[i] = [indi, vali] indicates that you should update nums[indi] to vali.
After each query, determine whether there exists any good subsequence in the current array.
Return the number of queries for which a good subsequence exists.
The term gcd(a, b) denotes the greatest common divisor of a and b.

Example 1:
Input: nums = [4,8,12,16], p = 2, queries = [[0,3],[2,6]]
Output: 1
Explanation:


i
[indi, vali]
Operation
Updated nums
Any good Subsequence




0
[0, 3]
Update nums[0] to 3
[3, 8, 12, 16]
No, as no subsequence has GCD exactly p = 2


1
[2, 6]
Update nums[2] to 6
[3, 8, 6, 16]
Yes, subsequence [8, 6] has GCD exactly p = 2


Thus, the answer is 1.
Example 2:
Input: nums = [4,5,7,8], p = 3, queries = [[0,6],[1,9],[2,3]]
Output: 2
Explanation:


i
[indi, vali]
Operation
Updated nums
Any good Subsequence




0
[0, 6]
Update nums[0] to 6
[6, 5, 7, 8]
No, as no subsequence has GCD exactly p = 3


1
[1, 9]
Update nums[1] to 9
[6, 9, 7, 8]
Yes, subsequence [6, 9] has GCD exactly p = 3


2
[2, 3]
Update nums[2] to 3
[6, 9, 3, 8]
Yes, subsequence [6, 9, 3] has GCD exactly p = 3


Thus, the answer is 2.
Example 3:
Input: nums = [5,7,9], p = 2, queries = [[1,4],[2,8]]
Output: 0
Explanation:


i
[indi, vali]
Operation
Updated nums
Any good Subsequence




0
[1, 4]
Update nums[1] to 4
[5, 4, 9]
No, as no subsequence has GCD exactly p = 2


1
[2, 8]
Update nums[2] to 8
[5, 4, 8]
No, as no subsequence has GCD exactly p = 2


Thus, the answer is 0.

Constraints:
2 <= n == nums.length <= 5 * 104
1 <= nums[i] <= 5 * 104
1 <= queries.length <= 5 * 104
queries[i] = [indi, vali]
1 <= vali, p <= 5 * 104
0 <= indi <= n - 1
Hint 1: Reduce the problem to only elements divisible by p. Scale them down by /p and reason about primes on the reduced array.
Hint 2: A subsequence has GCD = p exactly when, after division, the chosen elements do not all share any common prime factor.
Hint 3: Track, for each prime factor, how many active indices contain it. If any prime covers all active elements, the answer is false.
Hint 4: Check that there is an index whose prime factors do not cover all active elements (so a subsequence of length < n can have GCD = p).

```

## 题目翻译（中文）

给你一个长度为 n 的整数数组 `nums` 和一个整数 `p`。

`nums` 的一个非空子序列称为「好子序列」，当且仅当：
- 其长度严格小于 n；
- 其所有元素的最大公约数（GCD）恰好等于 p。

再给你一个长度为 q 的二维整数数组 `queries`，其中 `queries[i] = [ind_i, val_i]` 表示把 `nums[ind_i]` 更新为 `val_i`。

每次查询后，判断当前数组中是否存在好子序列。

返回「存在好子序列」的查询数量。

## 解题思路

**关键转化**：
1. 好子序列只能由 p 的倍数组成。设这些位置为活跃集合 S，m = |S|，约减值 v = nums[i] / p。
2. 「gcd 恰好为 p」⟺ 所选约减值的 gcd 为 1，即所选元素没有公共质因子。
3. gcd 随集合增大单调不增，据此分类：
   - 若某质数整除全部 m 个活跃值（覆盖所有元素）→ 任何非空子序列 gcd 都 > p，无解；
   - 否则若 m < n → 整个 S 即好子序列（长度 m < n），有解；
   - 否则 m = n（所有元素都是 p 的倍数）→ 必须能去掉某个元素 k 后仍无公共质因子，即 k 能被所有「恰好覆盖 m-1 个活跃值的质数」整除。设这些质数的乘积为 rad，只需查询是否存在活跃值是 rad 的倍数（该质数集合规模极小，由数值 ≤ 5×10⁴ 约束在个位数）。

**维护的数据结构**（每次单点修改均摊 O(d(v))，d 为约数个数 ≤ ~100）：
- `cntPrime[q]`：质数 q 当前覆盖的活跃值个数；
- `buckets[c]`：`cntPrime == c` 的质数集合 —— `buckets[m]` 非空 ⟺ 存在全覆盖质数；`Q = buckets[m-1]` 即上述临界质数集；
- `cntDiv[d]`：约减值中 d 的倍数个数，用于 rad 整除检查；
- SPF 最小质因子筛，快速分解质因数并枚举全部约数。

复杂度：预处理 O(V log log V)，总 O((n + q) · d_max)。

## Solution

[SourceCode](./solution.js)
