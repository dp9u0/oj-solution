# [1830] Minimum Number of Operations to Make String Sorted

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/description/)

* algorithms
* Hard (50.47%)
* Likes:    191
* Dislikes: 132
* Testcase Example:  '"cba"'

```md
You are given a string s (0-indexed)​​​​​​. You are asked to perform the following operation on s​​​​​​ until you get a sorted string:

Find the largest index i such that 1 <= i < s.length and s[i] < s[i - 1].
Find the largest index j such that i <= j < s.length and s[k] < s[i - 1] for all the possible values of k in the range [i, j] inclusive.
Swap the two characters at indices i - 1​​​​ and j​​​​​.
Reverse the suffix starting at index i​​​​​​.

Return the number of operations needed to make the string sorted. Since the answer can be too large, return it modulo 109 + 7.

Example 1:

Input: s = 'cba'
Output: 5
Explanation: The simulation goes as follows:
Operation 1: i=2, j=2. Swap s[1] and s[2] to get s='cab', then reverse the suffix starting at 2. Now, s='cab'.
Operation 2: i=1, j=2. Swap s[0] and s[2] to get s='bac', then reverse the suffix starting at 1. Now, s='bca'.
Operation 3: i=2, j=2. Swap s[1] and s[2] to get s='bac', then reverse the suffix starting at 2. Now, s='bac'.
Operation 4: i=1, j=1. Swap s[0] and s[1] to get s='abc', then reverse the suffix starting at 1. Now, s='acb'.
Operation 5: i=2, j=2. Swap s[1] and s[2] to get s='abc', then reverse the suffix starting at 2. Now, s='abc'.

Example 2:

Input: s = 'aabaa'
Output: 2
Explanation: The simulation goes as follows:
Operation 1: i=3, j=4. Swap s[2] and s[4] to get s='aaaab', then reverse the substring starting at 3. Now, s='aaaba'.
Operation 2: i=4, j=4. Swap s[3] and s[4] to get s='aaaab', then reverse the substring starting at 4. Now, s='aaaab'.


Constraints:

1 <= s.length <= 3000
s​​​​​​ consists only of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个下标从 0 开始的字符串 `s`，反复执行以下操作直到 `s` 变为有序：

1. 找**最大**下标 `i`（`1 <= i < s.length`）使得 `s[i] < s[i-1]`；
2. 找**最大**下标 `j`（`i <= j < s.length`）使得对所有 `i <= k <= j` 都有 `s[k] < s[i-1]`；
3. 交换 `s[i-1]` 与 `s[j]`；
4. 反转从下标 `i` 开始的后缀。

返回使字符串有序所需的操作次数。答案可能很大，返回模 `10^9 + 7` 的结果。

示例 1：`s = "cba"` → 输出 `5`（模拟见原题）。
示例 2：`s = "aabaa"` → 输出 `2`。

约束：`1 <= s.length <= 3000`，`s` 只含小写字母。

## 解题思路

**关键洞察**：该操作恰好是多重集排列的"上一个排列"步骤（等价于 C++ 的 `prev_permutation`）。因此操作次数 = 字典序**严格小于** `s` 的不同排列个数，即 `s` 在全部排列中的排名 - 1。

验证：`"cba"` 是 `{a,b,c}` 六个排列中的最后一个，排名 6，答案 5 ✓；`"aabaa"` 在 `aaaab, aaaba, aabaa, abaaa, baaaa` 中排第 3，答案 2 ✓。

**排名计算**（逐位贡献 + 组合数）：

设 `cnt[26]` 为剩余字符计数，`perms` 为剩余多重集（长度 `L`）的排列数 = `L! / ∏ cnt[x]!`（模意义下用逆元）。从左到右遍历，在第 `i` 位（`L = n - i`）：

- 设 `smaller` = 剩余中小于 `s[i]` 的字符总数。把某个更小字符放在此位的排列数为 `perms * smaller / L`（从 perms 的分母中提出一个该字符放到当前位置），故 `ans += perms * smaller * inv(L)`；
- 然后实际放置 `s[i]`：`perms = perms * inv(L) * cnt[s[i]]`，`cnt[s[i]]--`。

**模运算准备**：线性预处理阶乘 `fact`、逆阶乘 `invFact`（费马小定理求 `fact[n]` 的逆后倒推）、线性递推逆元 `inv[i] = -(p/i)·inv[p%i] mod p`。

验证 `"cba"`：perms=6；i=0 'c' 贡献 6·2/3=4；i=1 'b' 贡献 2·1/2=1；合计 5 ✓

时间复杂度 O(26n)，空间 O(n)。

**JS 数值坑（实现修正）**：模乘中两个 ~10^9 的操作数相乘达 10^18，超出双精度 2^53 安全范围会丢精度（首版实现因此全错）。因此阶乘、逆元、快速幂全部用 **BigInt** 运算，仅最终 `Number(ans)` 转回。
