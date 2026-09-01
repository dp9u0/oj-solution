# [433] Minimum Genetic Mutation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-genetic-mutation/description/)

* algorithms
* Medium (56.52%)
* Likes:    3316
* Dislikes: 347
* Testcase Example:  '"AACCGGTT"\n"AACCGGTA"\n["AACCGGTA"]'

```md
A gene string can be represented by an 8-character long string, with choices from &#39;A&#39;, &#39;C&#39;, &#39;G&#39;, and &#39;T&#39;.
Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.

For example, 'AACCGGTT' --> 'AACCGGTA' is one mutation.

There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.
Given the two gene strings startGene and endGene and the gene bank bank, return the minimum number of mutations needed to mutate from startGene to endGene. If there is no such a mutation, return -1.
Note that the starting point is assumed to be valid, so it might not be included in the bank.

Example 1:

Input: startGene = 'AACCGGTT', endGene = 'AACCGGTA', bank = ['AACCGGTA']
Output: 1

Example 2:

Input: startGene = 'AACCGGTT', endGene = 'AAACGGTA', bank = ['AACCGGTA','AACCGCTA','AAACGGTA']
Output: 2


Constraints:

0 <= bank.length <= 10
startGene.length == endGene.length == bank[i].length == 8
startGene, endGene, and bank[i] consist of only the characters [&#39;A&#39;, &#39;C&#39;, &#39;G&#39;, &#39;T&#39;].


```

## 题目翻译

基因字符串由 'A', 'C', 'G', 'T' 组成，长度为 8。一次变异定义为改变一个字符。给定起始基因、目标基因和有效基因库，求从起始变异到目标的最少变异次数。无法达到返回 -1。

## 解题思路

BFS 求最短路径：从 startGene 开始，每次尝试变异一个字符（4 种碱基 × 8 个位置），如果变异结果在 bank 中且未访问过，加入队列。

时间复杂度：O(8 × 4 × N) = O(N)，空间复杂度：O(N)

## Solution

[SourceCode](./solution.js)
