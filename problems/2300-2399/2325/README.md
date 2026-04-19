# [2325] Decode the Message

## Description

[LeetCode Problem Description](https://leetcode.com/problems/decode-the-message/description/)

* algorithms
* Easy (85.80%)
* Likes:    1132
* Dislikes: 114
* Testcase Example:  '"the quick brown fox jumps over the lazy dog"\n"vkbs bs t suepuv"'

```md
You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
Align the substitution table with the regular English alphabet.
Each letter in message is then substituted using the table.
Spaces &#39; &#39; are transformed to themselves.


For example, given key = 'happy boy' (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of (&#39;h&#39; -> &#39;a&#39;, &#39;a&#39; -> &#39;b&#39;, &#39;p&#39; -> &#39;c&#39;, &#39;y&#39; -> &#39;d&#39;, &#39;b&#39; -> &#39;e&#39;, &#39;o&#39; -> &#39;f&#39;).

Return the decoded message.

Example 1:


Input: key = 'the quick brown fox jumps over the lazy dog', message = 'vkbs bs t suepuv'
Output: 'this is a secret'
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in 'the quick brown fox jumps over the lazy dog'.

Example 2:


Input: key = 'eljuxhpwnyrdgtqkviszcfmabo', message = 'zwx hnfx lqantp mnoeius ycgk vcnjrdb'
Output: 'the five boxing wizards jump quickly'
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in 'eljuxhpwnyrdgtqkviszcfmabo'.


Constraints:

26 <= key.length <= 2000
key consists of lowercase English letters and &#39; &#39;.
key contains every letter in the English alphabet (&#39;a&#39; to &#39;z&#39;) at least once.
1 <= message.length <= 2000
message consists of lowercase English letters and &#39; &#39;.


```

## 中文翻译

给定密钥 key 和密文 message。key 中每个字母首次出现的顺序对应替换表（第1个字母→a，第2个→b...），空格不变。解码 message。

## 解题思路

遍历 key 建立映射表 map（去重，按首次出现顺序映射到 a-z），然后遍历 message 替换即可。

时间复杂度：O(n)，空间复杂度：O(26)

## Solution

[SourceCode](./solution.js)
