# [1702] Maximum Binary String After Change

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-binary-string-after-change/description/)

* algorithms
* Medium (48.02%)
* Likes:    529
* Dislikes: 64
* Testcase Example:  '"000110"'

```md
You are given a binary string binary consisting of only 0&#39;s or 1&#39;s. You can apply each of the following operations any number of times:

Operation 1: If the number contains the substring '00', you can replace it with '10'.

For example, '00010' -> '10010'


Operation 2: If the number contains the substring '10', you can replace it with '01'.

For example, '00010' -> '00001'



Return the maximum binary string you can obtain after any number of operations. Binary string x is greater than binary string y if x&#39;s decimal representation is greater than y&#39;s decimal representation.

Example 1:

Input: binary = '000110'
Output: '111011'
Explanation: A valid transformation sequence can be:
'000110' -> '000101'
'000101' -> '100101'
'100101' -> '110101'
'110101' -> '110011'
'110011' -> '111011'

Example 2:

Input: binary = '01'
Output: '01'
Explanation:'01' cannot be transformed any further.


Constraints:

1 <= binary.length <= 105
binary consist of &#39;0&#39; and &#39;1&#39;.


```

## 翻译

给定二进制字符串，可执行操作："00"→"10"或"10"→"01"。求能得到的最大二进制字符串。

## 解题思路

k个0通过操作2聚拢到第一个0的位置，再用操作1将k个连续0变为k-1个1和1个0。结果：前p0+k-1个1，然后1个0，然后全1。若0的个数<=1则无需变换。

## Solution

[SourceCode](./solution.js)
