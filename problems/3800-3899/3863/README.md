# [3863] Minimum Operations to Sort a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-sort-a-string/description/)

* algorithms
* Medium (18.74%)
* Likes:    97
* Dislikes: 10
* Testcase Example:  '"dog"'

```md
You are given a string s consisting of lowercase English letters.
In one operation, you can select any substring of s that is not the entire string and sort it in non-descending alphabetical order.
Return the minimum number of operations required to make s sorted in non-descending order. If it is not possible, return -1.

Example 1:

Input: s = 'dog'
Output: 1
Explanation:​​​​​​​

Sort substring 'og' to 'go'.
Now, s = 'dgo', which is sorted in ascending order. Thus, the answer is 1.


Example 2:

Input: s = 'card'
Output: 2
Explanation:

Sort substring 'car' to 'acr', so s = 'acrd'.
Sort substring 'rd' to 'dr', making s = 'acdr', which is sorted in ascending order. Thus, the answer is 2.


Example 3:

Input: s = 'gf'
Output: -1
Explanation:

It is impossible to sort s under the given constraints. Thus, the answer is -1.



Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.


```

## 中文翻译

给定字符串 s，每次操作选一个非整串的子串并按非降序排序。求使 s 整体有序的最少操作次数，不可能返回 -1。

## 解题思路

分类讨论：
1. 已有序 → 0
2. n==2 且无序 → -1（只能排序单字符，无效）
3. 找到与排序后字符串不同的区域 [L,R]，若是真子串 → 1（直接排序该区域）
4. 整串都不同（L==0, R==n-1），n>=3：
   - 若 s[0] 不是唯一最大值，可用策略 B（先排 s[1..n-1]，再排前缀）→ 2
   - 若 s[n-1] 不是唯一最小值，可用策略 A（先排 s[0..n-2]，再排后缀）→ 2
   - 若 s[0] 是唯一最大值且 s[n-1] 是唯一最小值 → 3（三步策略：排 s[1..n-1]，再排 s[0..n-2]，再排 s[n-2..n-1]）

## Solution

[SourceCode](./solution.js)
