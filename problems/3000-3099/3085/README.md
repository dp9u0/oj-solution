# [3085] Minimum Deletions to Make String K-Special

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/description/)

* algorithms
* Medium (67.15%)
* Likes:    681
* Dislikes: 53
* Testcase Example:  '"aabcaba"\n0'

```md
You are given a string word and an integer k.
We consider word to be k-special if
freq(word[i]) - freq(word[j])
<= k for all indices i and j in the string.
Here, freq(x) denotes the frequency of the character x in word, and
y
denotes the absolute value of y.
Return the minimum number of characters you need to delete to make word k-special.

Example 1:

Input: word = 'aabcaba', k = 0
Output: 3
Explanation: We can make word 0-special by deleting 2 occurrences of 'a' and 1 occurrence of 'c'. Therefore, word becomes equal to 'baba' where freq(&#39;a&#39;) == freq(&#39;b&#39;) == 2.

Example 2:

Input: word = 'dabdcbdcdcd', k = 2
Output: 2
Explanation: We can make word 2-special by deleting 1 occurrence of 'a' and 1 occurrence of 'd'. Therefore, word becomes equal to 'bdcbdcdcd' where freq(&#39;b&#39;) == 2, freq(&#39;c&#39;) == 3, and freq(&#39;d&#39;) == 4.

Example 3:

Input: word = 'aaabaaa', k = 2
Output: 1
Explanation: We can make word 2-special by deleting 1 occurrence of 'b'. Therefore, word becomes equal to 'aaaaaa' where each letter&#39;s frequency is now uniformly 6.


Constraints:

1 <= word.length <= 105
0 <= k <= 105
word consists only of lowercase English letters.


```

## 题目翻译

给定字符串 `word` 和整数 `k`。如果字符串中所有字符频率的极差（最大频率 - 最小频率）不超过 k，则称该字符串为 k-special。
返回使字符串变为 k-special 所需删除的最少字符数。

## 解题思路

**枚举最终频率下界**。

1. 统计每个字符的频率，得到频率数组 `freqs`。
2. 枚举最终保留的最小频率 `target`（枚举 freqs 中的每个值作为候选）。
3. 对于每个 `target`：
   - 频率 < target 的字符：全部删除（删掉所有出现）。
   - 频率 > target + k 的字符：删掉多余的部分（删到 target + k）。
   - 频率在 [target, target+k] 内的字符：不删。
4. 取所有枚举中的最小删除数。

## Solution

[SourceCode](./solution.js)
