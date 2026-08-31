# [4036] Lexicographically Largest String After Pair Transformations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lexicographically-largest-string-after-pair-transformations/description/)

* algorithms
* Medium (40.44%)
* Likes:    25
* Dislikes: 2
* Testcase Example:  '[2,5,7]'

```md
You are given an integer array nums.
For each integer x in nums, start with a string consisting of exactly x lowercase 'a' characters.
You may perform the following operation any number of times (including zero):
Choose two adjacent equal letters and replace them with the next letter in the alphabet.
For example, "aa" can be replaced with "b", and "bb" can be replaced with "c". The pair "zz" cannot be replaced.
For each x, determine the lexicographically largest string that can be obtained.
Return an array of strings where the ith string is the answer for nums[i].
A string a is lexicographically larger than a string b if, at the first position where they differ, a contains a letter that appears later in the alphabet than the corresponding letter in b. If the first min(a.length, b.length) characters are equal, the longer string is lexicographically larger.

Example 1:
Input: nums = [2,5,7]
Output: ["b","ca","cba"]
Explanation:
nums[0] = 2: "aa" → "b".
nums[1] = 5: "aaaaa" → "baaa" → "bba" → "ca".
nums[2] = 7: "aaaaaaa" → "baaaaa" → "bbaaa" → "bbba" → "cba".
Therefore, ans = ["b", "ca", "cba"].
Example 2:
Input: nums = [3,9,1]
Output: ["ba","da","a"]
Explanation:
nums[0] = 3: "aaa" → "ba".
nums[1] = 9: "aaaaaaaaa" → "baaaaaaa" → "bbaaaaa" → "bbbaaa" → "bbbba" → "cbba" → "cca" → "da".
nums[2] = 1: No transformation can be applied, so the result is "a".
Therefore, ans = ["ba", "da", "a"].

Constraints:
1 <= nums.length <= 105
1 <= nums[i] <= 108
Hint 1: A letter that is k positions after 'a' represents a block of 2k original 'a' characters. To maximize the string lexicographically, greedily place the largest possible letter first. Remember that multiple 'z' characters may be needed because "zz" cannot be merged further.

```

## 中文翻译

给你一个整数数组 `nums`。

对于 `nums` 中的每个整数 `x`，初始有一个由恰好 `x` 个小写字母 `'a'` 组成的字符串。

你可以执行以下操作任意次（包括零次）：

- 选择两个相邻的相等字母，将它们替换为字母表中的下一个字母。
- 例如，`"aa"` 可以替换为 `"b"`，`"bb"` 可以替换为 `"c"`。`"zz"` 无法被替换。

对每个 `x`，求能得到的字典序最大的字符串。

返回一个字符串数组，其中第 `i` 个字符串是 `nums[i]` 的答案。

字符串 `a` 字典序大于 `b` 的定义：在第一个不同的位置上，`a` 的字母在字母表中出现得更晚；若前 `min(a.length, b.length)` 个字符都相等，则更长的字符串字典序更大。

示例 1：
输入：`nums = [2,5,7]`
输出：`["b","ca","cba"]`
解释：
- `nums[0] = 2`："aa" → "b"。
- `nums[1] = 5`："aaaaa" → "baaa" → "bba" → "ca"。
- `nums[2] = 7`："aaaaaaa" → "baaaaa" → "bbaaa" → "bbba" → "cba"。

示例 2：
输入：`nums = [3,9,1]`
输出：`["ba","da","a"]`
解释：
- `nums[0] = 3`："aaa" → "ba"。
- `nums[1] = 9`：经多步合并最终得到 "da"。
- `nums[2] = 1`：无法执行任何变换，结果为 "a"。

约束：
- 1 <= nums.length <= 10^5
- 1 <= nums[i] <= 10^8

## 解题思路

**关键观察：** 每个字母 `'a'+k` 恰好代表一个由 2^k 个原始 'a' 合并而成的块（`'b'` = 2 个 'a'，`'c'` = 4 个 'a'，……，`'z'` = 2^25 个 'a'）。

**可达性：** 最终字符串对应把原始的 x 个 'a' 划分成若干连续块，每块大小为 2 的幂（1 到 2^25）。块与块互不干扰，每块内部可以自底向上独立合并成单个字母，因此任意一个"和为 x 的 2 的幂序列"都是可达的。

**字典序贪心：** 首字母越大，字典序一定越大（与后续内容无关）。所以贪心地每次取不超过当前剩余值的最大 2 的幂（上限 2^25，即 'z'，超过 2^26 的数需要多个 'z'），重复直到剩余为 0。

每次取走最大幂后剩余值小于该幂，因此每个数最多产生约 2·log2(x) 个字母，总复杂度 O(n log max(nums))。

验证：
- x=5：4+1 → "ca" ✓
- x=7：4+2+1 → "cba" ✓
- x=9：8+1 → "da" ✓

## Solution

[SourceCode](./solution.js)
