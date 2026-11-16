# [3581] 计算数字中的奇数字母数量

## Description


```md
https://leetcode.cn/problems/count-odd-letters-from-number/description/
* algorithms
* Easy (83.80%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '41'
你被给定一个整数 n，执行以下步骤：
将 n 的每个数位转换为它的小写英文单词（例如 4 → "four", 1 → "one"）。
将那些单词按照 原始数字顺序 连接 起来形成一个字符串 s。
返回字符串 s 中出现 奇数 次的 不同 字符的数量。

示例 1：
输入：n = 41
输出：5
解释：
41 → "fourone"
出现奇数次的字母：'f'，'u'，'r'，'n'，'e'。因此，答案为 5。
示例 2：
输入：n = 20
输出：5
解释：
20 → "twozero"
出现奇数次的字母：'t'，'w'，'z'，'e'，'r'。因此，答案为 5。

提示：
1 <= n <= 109
Hint 1: Simulate as described

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given an integer `n`. Convert each digit of `n` to its lowercase English word (e.g. 4 → "four", 1 → "one"), then concatenate the words in the original digit order to form a string `s`. Return the number of **distinct** letters that appear an **odd** number of times in `s`.

**Example 1:**
Input: n = 41
Output: 5
Explanation: 41 → "fourone"; letters appearing an odd number of times: 'f','u','r','n','e'.

**Constraints:**
- 1 <= n <= 10^9

## Approach

按数位映射到英文单词拼接成字符串,26 数组统计频率,统计奇数频率的字母个数。

时间 O(位数 × 单词长度),空间 O(26)。
