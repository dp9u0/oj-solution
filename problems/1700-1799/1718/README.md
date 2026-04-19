# [1718] Construct the Lexicographically Largest Valid Sequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/description/)

* algorithms
* Medium (72.71%)
* Likes:    1159
* Dislikes: 183
* Testcase Example:  '3'

```md
Given an integer n, find a sequence with elements in the range [1, n] that satisfies all of the following:

The integer 1 occurs once in the sequence.
Each integer between 2 and n occurs twice in the sequence.
For every integer i between 2 and n, the distance between the two occurrences of i is exactly i.

The distance between two numbers on the sequence, a[i] and a[j], is the absolute difference of their indices,
j - i
.
Return the lexicographically largest sequence. It is guaranteed that under the given constraints, there is always a solution.
A sequence a is lexicographically larger than a sequence b (of the same length) if in the first position where a and b differ, sequence a has a number greater than the corresponding number in b. For example, [0,1,9,0] is lexicographically larger than [0,1,5,6] because the first position they differ is at the third number, and 9 is greater than 5.

Example 1:

Input: n = 3
Output: [3,1,2,3,2]
Explanation: [2,3,2,1,3] is also a valid sequence, but [3,1,2,3,2] is the lexicographically largest valid sequence.

Example 2:

Input: n = 5
Output: [5,3,1,4,3,5,2,4,2]


Constraints:

1 <= n <= 20


```

## 中文翻译

给定整数 n，构造一个序列满足：
1. 整数 1 在序列中出现恰好一次
2. 整数 2 到 n 每个出现恰好两次
3. 对于每个整数 i（2 到 n），两个 i 的位置距离恰好为 i（即间隔 i-1 个元素，下标差为 i）
4. 返回字典序最大的序列

## 解题思路

回溯（DFS）。序列长度为 2*(n-1)+1 = 2n-1。从大数往小数尝试放置（贪心保证字典序最大），对每个数尝试放在第一个空位，若距离位也空则放置，递归搜索。找到第一个合法解即为答案。

时间复杂度：最坏 O(n!)，但剪枝后很快。空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
