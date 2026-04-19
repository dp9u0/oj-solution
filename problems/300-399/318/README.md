# [318] Maximum Product of Word Lengths

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-product-of-word-lengths/description/)

* algorithms
* Medium (60.32%)
* Likes:    3562
* Dislikes: 142
* Testcase Example:  '["abcw","baz","foo","bar","xtfn","abcdef"]'

## 中文描述

给定一个字符串数组 words，返回长度(word[i]) * 长度(word[j]) 的最大值，其中两个单词不共享相同的字母。如果不存在这样的两个单词，则返回 0。

示例 1：

输入：words = ['abcw','baz','foo','bar','xtfn','abcdef']
输出：16
解释：这两个单词可以是 'abcw', 'xtfn'。

示例 2：

输入：words = ['a','ab','abc','d','cd','bcd','abcd']
输出：4
解释：这两个单词可以是 'ab', 'cd'。

示例 3：

输入：words = ['a','aa','aaa','aaaa']
输出：0
解释：没有这样的单词对。

约束条件：

2 <= words.length <= 1000
1 <= words[i].length <= 1000
words[i] 仅由小写英文字母组成。

## Solution

### 解题思路

这道题可以使用位运算来高效解决。主要思路如下：

1. 由于题目限定只包含小写字母，我们可以使用一个32位整数的低26位来表示一个单词中出现的字母
2. 对于每个单词，我们创建一个位掩码：
   - 如果单词包含字母'a'，则将第0位置为1
   - 如果包含'b'，则将第1位置为1
   - 以此类推
3. 两个单词不共享相同字母意味着它们的位掩码进行按位与运算的结果为0
4. 遍历所有单词对，找出不共享字母的单词对中长度乘积最大的值

### 复杂度分析

- 时间复杂度：O(L + n²)
  - L是所有单词的总长度，用于构建位掩码
  - n是单词数量，用于比较所有单词对
- 空间复杂度：O(n)，用于存储位掩码数组

### 代码实现要点

1. 使用数组存储每个单词的位掩码
2. 通过位运算高效判断字母是否重复
3. 使用双重循环遍历所有可能的单词对
4. 使用Math.max维护最大乘积

[查看代码实现](./solution.js)
