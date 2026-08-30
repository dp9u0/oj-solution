# [3999] Minimum Number of String Groups Through Transformations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-string-groups-through-transformations/description/)

* algorithms
* Hard (48.06%)
* Likes:    32
* Dislikes: 3
* Testcase Example:  '["ntgwz","zwntg"]'

```md
You are given an array of strings words.
Define a transformation on a string s as follows:

Let E be the subsequence of characters at even indices of s.
Let O be the subsequence of characters at odd indices of s.
Independently cyclically shift E and O by any number of positions to the right, possibly zero.
Reconstruct the string by placing the shifted E characters back into even indices and the shifted O characters back into odd indices.

Two strings are equivalent if one can be transformed into the other by a single transformation.
Partition words into the minimum number of groups such that:

Every string belongs to exactly one group.
Every pair of strings in the same group are equivalent.

Return an integer denoting the minimum number of groups.

Example 1:

Input: words = ['ntgwz','zwntg']
Output: 1
Explanation:

For 'ntgwz', the even-index subsequence is 'ngz' and the odd-index subsequence is 'tw'.
Shift 'ngz' right by 1 position to obtain 'zng', and shift 'tw' right by 1 position to obtain 'wt'.
After reconstructing the string, we obtain 'zwntg'.
Therefore, both strings are equivalent and belong to the same group.


Example 2:

Input: words = ['abc','cab','bac','acb','bca','cba']
Output: 3
Explanation:
The strings can be partitioned into the following groups:

['abc','cba']
['cab','bac']
['acb','bca']


Example 3:

Input: words = ['leet','abb','bab','deed','edde','code','bba']
Output: 5
Explanation:
The strings can be partitioned into the following groups:

['abb','bba']
['deed','edde']
['leet']
['bab']
['code']

​​​​​​​​​​​​​​All pairs of strings in each group are equivalent.


Constraints:

1 <= words.length <= 105
1 <= words[i].length <= 5 * 105
The sum of words[i].length does not exceed 5 * 105.
words[i] consist of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个字符串数组 words。

定义对字符串 s 的一次变换如下：

- 设 E 为 s 中偶数下标位置的字符构成的子序列，O 为奇数下标位置的字符构成的子序列。
- 将 E 和 O 分别独立地循环右移任意位（可以为 0 位）。
- 将移动后的 E 放回偶数下标位置、O 放回奇数下标位置，重建字符串。

如果可以通过一次变换把一个字符串变成另一个，则称两个字符串等价。

将 words 划分成最少数量的组，使得：

- 每个字符串恰好属于一个组。
- 同一组内任意两个字符串互相等价。

返回最少组数。

示例 1：words = ["ntgwz","zwntg"]，输出 1（'ntgwz' 偶数位 'ngz' 右移 1 位得 'zng'，奇数位 'tw' 右移 1 位得 'wt'，重组后正是 'zwntg'）。

示例 2：words = ["abc","cab","bac","acb","bca","cba"]，输出 3。

示例 3：words = ["leet","abb","bab","deed","edde","code","bba"]，输出 5。

约束：

- 1 <= words.length <= 10^5
- 1 <= words[i].length <= 5 * 10^5
- 所有字符串长度之和不超过 5 * 10^5
- words[i] 仅由小写英文字母组成

## 解题思路

关键观察：一次变换就是对偶数位子序列 E 和奇数位子序列 O 各自做循环移位（右移任意位，也可移 0 位）。由于循环移位是可逆的（右移 k 位可用右移 len-k 位撤销），且两次变换可以复合成一次变换，"等价"是真正的等价关系。

因此两个字符串等价 ⟺ 它们的 E 在旋转意义下相同，且 O 在旋转意义下相同。

算法：

1. 对每个字符串拆出 E（偶数位字符）和 O（奇数位字符）。
2. 分别求 E 和 O 的最小表示（最小字典序循环移位），用 Booth 算法，O(n) 时间。
3. 用 `minRot(E) + '#' + minRot(O)` 作为该字符串所属等价类的 key。
4. 答案 = 不同 key 的个数。

复杂度：设总长度为 L，时间 O(L)，空间 O(L)。
