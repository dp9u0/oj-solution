# [3853] Merge Close Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/merge-close-characters/description/)

* algorithms
* Medium (54.46%)
* Testcase Example:  '"abca"\n3'

```md
You are given a string s consisting of lowercase English letters and an integer k.
Two equal characters in the current string s are considered close if the distance between their indices is at most k.
When two characters are close, the right one merges into the left. Merges happen one at a time, and after each merge, the string updates until no more merges are possible.
Return the resulting string after performing all possible merges.
Note: If multiple merges are possible, always merge the pair with the smallest left index. If multiple pairs share the smallest left index, choose the pair with the smallest right index.

Example 1:
Input: s = "abca", k = 3
Output: "abc"
Explanation:
​​​​​​​Characters 'a' at indices i = 0 and i = 3 are close as 3 - 0 = 3
Merge them into the left 'a' and s = "abc".
No other equal characters are close, so no further merges occur.
Example 2:
Input: s = "aabca", k = 2
Output: "abca"
Explanation:
Characters 'a' at indices i = 0 and i = 1 are close as 1 - 0 = 1
Merge them into the left 'a' and s = "abca".
Now the remaining 'a' characters at indices i = 0 and i = 3 are not close as k
Example 3:
Input: s = "yybyzybz", k = 2
Output: "ybzybz"
Explanation:
Characters 'y' at indices i = 0 and i = 1 are close as 1 - 0 = 1
Merge them into the left 'y' and s = "ybyzybz".
Now the characters 'y' at indices i = 0 and i = 2 are close as 2 - 0 = 2
Merge them into the left 'y' and s = "ybzybz".
No other equal characters are close, so no further merges occur.

Constraints:
1
1
s consists of lowercase English letters.

```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译

给定一个由小写英文字母组成的字符串 s 和一个整数 k。

当前字符串 s 中两个相同的字符如果索引距离不超过 k，则称为"close"。
当两个字符 close 时，右边的合并到左边（右边被移除）。合并一次一个，每次合并后字符串更新，直到无法再合并。

合并优先级：选择左索引最小的对；如果左索引相同，选择右索引最小的。

返回所有可能的合并完成后的结果字符串。

**示例 1：** s="abca", k=3 → "abc"
**示例 2：** s="aabca", k=2 → "abca"
**示例 3：** s="yybyzybz", k=2 → "ybzybz"

## Approach (解题思路)

**模拟**

将字符串转为数组，重复执行以下步骤直到无法合并：
1. 从左到右扫描，对于每个位置 i，检查 i+1 到 i+k 范围内是否有与 arr[i] 相同的字符
2. 找到第一个可合并的对（最小左索引 + 最小右索引）
3. 移除右边的字符
4. 重新扫描

**时间复杂度：** O(n^2 * k) 最坏情况
**空间复杂度：** O(n)
