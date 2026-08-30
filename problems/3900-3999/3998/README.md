# [3998] Transform Binary String Using Subsequence Sort

## Description

[LeetCode Problem Description](https://leetcode.com/problems/transform-binary-string-using-subsequence-sort/description/)

* algorithms
* Medium (37.96%)
* Likes:    72
* Dislikes: 6
* Testcase Example:  '"101"\n["1?1","0?1","0?0"]'

```md
You are given a binary string s.
You are also given an array of strings strs, where each strs[i] has the same length as s and consists of characters &#39;0&#39;, &#39;1&#39;, and &#39;?&#39;. Each &#39;?&#39; can be replaced by either &#39;0&#39; or &#39;1&#39;.
You may perform the following operation any number of times (including zero):

Choose any subsequence sub of s.
Sort sub in non-decreasing order.
Replace the chosen subsequence in s with the sorted sub, keeping all other characters unchanged.

Return a boolean array ans, where ans[i] is true if it&#39;s possible to replace all &#39;?&#39; in strs[i] with &#39;0&#39; or &#39;1&#39; and transform s into the resulting string using the allowed operation above, otherwise return false.

Example 1:

Input: s = '101', strs = ['1?1','0?1','0?0']
Output: [true,true,false]
Explanation:



i
strs[i]
Replacement
Result strs[i]
Operation(s)
Result


0
'1?1'
? &rarr; 0
'101'
Matches s.
true


1
'0?1'
? &rarr; 1
'011'
Select thesubsequence at indices [0..2] of s &rarr; '101'.
Sort '101' to get '011' = strs[i].
true


2
'0?0'
? &rarr; 0 or 1
'000' or '010'
Not feasible.
false



Thus, ans = [true, true, false].

Example 2:

Input: s = '1100', strs = ['0011','11?1','1?1?']
Output: [true,false,true]
Explanation:



i
strs[i]
Replacement
Result strs[i]
Operation(s)
Result


0
'0011'
-
'0011'
Select thesubsequence at indices [0..3] of s &rarr; '1100'.
Sort '1100' to get '0011' = strs[i].
true


1
'11?1'
? &rarr; 0
'1101'
Not feasible.
false


2
'1?1?'
First ? &rarr; 0
Second ? &rarr; 0
'1010'
Select thesubsequence at indices [1, 2] of s &rarr; '10'.
Sort '10' to get '01', so s = '1010'.
true



Thus, ans = [true, false, true].

Example 3:

Input: s = '1010', strs = ['0011']
Output: [true]
Explanation:



i
strs[i]
Replacement
Result strs[i]
Operation(s)
Result


0
'0011'
-
'0011'
Select thesubsequence at indices [0, 2, 3] of s &rarr; '110'.
Sort '110' to get '011', so s = '0011' = strs[i].
true



Thus, ans = [true].


Constraints:

1 <= n == s.length <= 2000
s[i] is either &#39;0&#39; or &#39;1&#39;.
1 <= strs.length <= 2000
strs[i].length == n
strs[i] is either &#39;0&#39;, &#39;1&#39;, or &#39;?&#39;​​​​​​​.

Hint 1: Sorting a binary subsequence can only move '0' characters to the left and '1' characters to the right.
Hint 2: Therefore, a binary string t is reachable from s if both strings contain the same number of '1' characters and, for every prefix, t contains no more '1' characters than the corresponding prefix of s.
Hint 3: For each string in strs, determine how many '?' characters must become '1'. To minimize the number of ones in every prefix, assign these ones to the rightmost possible '?' positions.
Hint 4: After this assignment, check the prefix condition against s.

```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你一个二进制字符串 `s`。

再给你一个字符串数组 `strs`，其中每个 `strs[i]` 与 `s` 等长，仅由字符 `'0'`、`'1'`、`'?'` 组成。每个 `'?'` 可以替换成 `'0'` 或 `'1'`。

你可以执行以下操作任意次（包括零次）：

- 选出 `s` 的任意子序列 `sub`；
- 将 `sub` 按非降序排序；
- 用排序后的结果替换 `s` 中被选中的那些位置，其余字符保持不变。

返回布尔数组 `ans`，其中 `ans[i]` 为 `true` 表示：存在一种把 `strs[i]` 中所有 `'?'` 替换成 `'0'`/`'1'` 的方案，使得 `s` 能通过上述操作变成替换后的字符串；否则为 `false`。

示例 1：
输入：`s = "101"`, `strs = ["1?1","0?1","0?0"]`
输出：`[true,true,false]`
- `"1?1"`：`?`→`0` 得 `"101"`，与 `s` 相同 → true
- `"0?1"`：`?`→`1` 得 `"011"`，选整个 `s="101"` 排序得 `"011"` → true
- `"0?0"`：无论怎么替换都不可达 → false

示例 2：
输入：`s = "1100"`, `strs = ["0011","11?1","1?1?"]`
输出：`[true,false,true]`

示例 3：
输入：`s = "1010"`, `strs = ["0011"]`
输出：`[true]`

约束：
- `1 <= n == s.length <= 2000`
- `s[i]` 为 `'0'` 或 `'1'`
- `1 <= strs.length <= 2000`
- `strs[i].length == n`
- `strs[i]` 仅含 `'0'`、`'1'`、`'?'`

## 解题思路

**核心结论（可达性判定）：** 二进制字符串 `t` 可以由 `s` 经过若干次"子序列排序"操作得到，当且仅当：

1. 两者 `'1'` 的总数相同；
2. 对任意前缀，`t` 的前缀中 `'1'` 的个数不超过 `s` 对应前缀中 `'1' 的个数。

必要性：对某个子序列排序后，前 `j` 个被选位置获得的是子序列中最小的 `j` 个值，其中 `1` 的个数为 `max(0, j - zero(sub))`，不超过操作前这些位置上 `1` 的个数（`j - 前 j 个位置中的 0 数`），因此任何前缀的 `1` 数永不增加；总数显然不变。

充分性：该条件等价于 `t` 的第 `i` 个 `1` 的位置不早于 `s` 的第 `i` 个 `1`，通过选取相邻的 `"10"` 作为子序列排序成 `"01"`，即可把 `1` 逐步右移到目标位置。

**处理 `'?'`：** 设 `s` 中 `1` 的总数为 `T`，某个查询串中固定的 `1` 有 `c` 个、`?` 有 `q` 个。总数必须等于 `T`，故恰好 `k = T - c` 个 `?` 要变成 `1`；若 `k < 0` 或 `k > q` 直接为 `false`。为了在所有前缀处同时最小化 `1` 的个数，应把这 `k` 个 `1` 分配给**最右边**的 `k` 个 `?`（把 `1` 放得更靠右只会让更少的前缀计数增大）。若这种最优分配都无法满足前缀条件，则任何分配都不满足。

**复杂度：** 预处理 `s` 的前缀 `1` 计数 `O(n)`；每个查询贪心分配 + 扫一遍前缀检查 `O(n)`。总复杂度 `O(n · strs.length)`，最多约 4×10^6 次操作。
