# [839] Similar String Groups

## Description

[LeetCode Problem Description](https://leetcode.com/problems/similar-string-groups/description/)

* algorithms
* Hard (56.58%)
* Likes:    2483
* Dislikes: 217
* Testcase Example:  '["tars","rats","arts","star"]'

```md
Two strings, X and Y, are considered similar if either they are identical or we can make them equivalent by swapping at most two letters (in distinct positions) within the string X.
For example, 'tars'and 'rats'are similar (swapping at positions 0 and 2), and 'rats' and 'arts' are similar, but 'star' is not similar to 'tars', 'rats', or 'arts'.
Together, these form two connected groups by similarity: {'tars', 'rats', 'arts'} and {'star'}. Notice that 'tars' and 'arts' are in the same group even though they are not similar. Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.
We are given a list strs of strings where every string in strs is an anagram of every other string in strs. How many groups are there?

Example 1:

Input: strs = ['tars','rats','arts','star']
Output: 2

Example 2:

Input: strs = ['omv','ovm']
Output: 1


Constraints:

1 <= strs.length <= 300
1 <= strs[i].length <= 300
strs[i] consists of lowercase letters only.
All words in strs have the same length and are anagrams of each other.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

两个字符串 X 和 Y 被认为是"相似"的，当且仅当它们完全相同，或者可以通过交换 X 中两个不同位置上的字母（即至多一次交换）使得 X 与 Y 相等。

例如，`tars` 和 `rats` 相似（交换位置 0 和 2），`rats` 和 `arts` 相似，但 `star` 与 `tars`、`rats`、`arts` 都不相似。

由此按相似关系构成两个连通组：`{"tars", "rats", "arts"}` 和 `{"star"}`。注意 `tars` 和 `arts` 虽然不相似，但它们属于同一组。形式化地：一个单词属于某个组，当且仅当它至少与该组中的一个其他单词相似（组是相似关系的连通分量）。

给定字符串列表 `strs`，其中所有字符串互为变位词（anagram）。求共有多少个组。

示例 1：
- 输入：`strs = ["tars","rats","arts","star"]`
- 输出：`2`

示例 2：
- 输入：`strs = ["omv","ovm"]`
- 输出：`1`

约束：
- `1 <= strs.length <= 300`
- `1 <= strs[i].length <= 300`
- `strs[i]` 仅由小写字母组成
- 所有单词长度相同且互为变位词

## 解题思路

**并查集（Union-Find）求连通分量。**

关键观察：由于所有单词互为变位词，两个单词"相似"当且仅当它们**恰好有 0 个或 2 个不同位置**：
- 0 个不同 → 完全相同，相似；
- 2 个不同 → 由于字符多重集相同，两个差异位置上的字符必然交叉相等（`x[a] === y[b] && x[b] === y[a]`），一次交换即可相等，相似；
- 其他数量的差异位置 → 不相似。

因此"相似"判定的复杂度与字符串长度成正比。

算法步骤：
1. 初始化并查集，每个字符串自成一个集合；
2. 枚举所有字符串对 `(i, j)`，若相似则合并（附带路径压缩 + 按大小合并）；
3. 统计不同根节点的数量，即为组的数量。

复杂度分析：
- 相似判定：`O(L)`，其中 `L` 为单词长度；
- 总时间：`O(n² · L · α(n))`，`n ≤ 300`、`L ≤ 300`，约 1.3×10⁷ 次字符比较，完全可行；
- 空间：`O(n)`。
