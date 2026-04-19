# [1202] Smallest String With Swaps

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-string-with-swaps/description/)

* algorithms
* Medium (60.44%)
* Likes:    3907
* Dislikes: 166
* Testcase Example:  '"dcab"\n[[0,3],[1,2]]'

```md
You are given a string s, and an array of pairs of indices in the stringpairswherepairs[i] =[a, b]indicates 2 indices(0-indexed) of the string.
You canswap the characters at any pair of indices in the givenpairsany number of times.
Return thelexicographically smallest string that scan be changed to after using the swaps.

Example 1:

Input: s = 'dcab', pairs = [[0,3],[1,2]]
Output: 'bacd'
Explaination:
Swap s[0] and s[3], s = 'bcad'
Swap s[1] and s[2], s = 'bacd'

Example 2:

Input: s = 'dcab', pairs = [[0,3],[1,2],[0,2]]
Output: 'abcd'
Explaination:
Swap s[0] and s[3], s = 'bcad'
Swap s[0] and s[2], s = 'acbd'
Swap s[1] and s[2], s = 'abcd'
Example 3:

Input: s = 'cba', pairs = [[0,1],[1,2]]
Output: 'abc'
Explaination:
Swap s[0] and s[1], s = 'bca'
Swap s[1] and s[2], s = 'bac'
Swap s[0] and s[1], s = 'abc'


Constraints:

1 <= s.length <= 10^5
0 <= pairs.length <= 10^5
0 <= pairs[i][0], pairs[i][1] <s.length
sonly contains lower case English letters.


```

## 翻译

给定字符串 `s` 和一组索引对 `pairs`，每对 `[a, b]` 表示可以交换 `s[a]` 和 `s[b]`，且可以无限次交换。返回能得到的字典序最小的字符串。

## Approach

**并查集 (Union-Find) + 排序。** 通过交换对可以传递地连接索引——互相可达的索引构成一个连通分量。同一连通分量内的字符可以任意排列。

1. 用并查集将所有 pairs 中的索引合并
2. 按根节点分组，收集每个连通分量中的索引和对应字符
3. 对每个连通分量的字符排序，按索引从小到大放回

时间复杂度：O(n log n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
