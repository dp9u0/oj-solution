# [3889] Mirror Frequency Distance

## Description

[LeetCode Problem Description](https://leetcode.com/problems/mirror-frequency-distance/description/)

* algorithms
* Medium (60.69%)
* Likes:    44
* Dislikes: 8
* Testcase Example:  '"ab1z9"'

```md
You are given a string s consisting of lowercase English letters and digits.
For each character, its mirror character is defined by reversing the order of its character set:

For letters, the mirror of a character is the letter at the same position from the end of the alphabet.

For example, the mirror of &#39;a&#39; is &#39;z&#39;, and the mirror of &#39;b&#39; is &#39;y&#39;, and so on.


For digits, the mirror of a character is the digit at the same position from the end of the range &#39;0&#39; to &#39;9&#39;.

For example, the mirror of &#39;0&#39; is &#39;9&#39;, and the mirror of &#39;1&#39; is &#39;8&#39;, and so on.



For each unique character c in the string:

Let m be its mirror character.
Let freq(x) denote the number of times character x appears in the string.
Compute the absolute difference between their frequencies, defined as:
freq(c) - freq(m)


The mirror pairs (c, m) and (m, c) are the same and must be counted only once.
Return an integer denoting the total sum of these values over all such distinct mirror pairs.

Example 1:

Input: s = 'ab1z9'
Output: 3
Explanation:
For every mirror pair:



c
m
freq(c)
freq(m)

freq(c) - freq(m)





a
z
1
1
0


b
y
1
0
1


1
8
1
0
1


9
0
1
0
1



Thus, the answer is 0 + 1 + 1 + 1 = 3.

Example 2:

Input: s = '4m7n'
Output: 2
Explanation:



c
m
freq(c)
freq(m)

freq(c) - freq(m)





4
5
1
0
1


m
n
1
1
0


7
2
1
0
1



Thus, the answer is 1 + 0 + 1 = 2.​​​​​​​

Example 3:

Input: s = 'byby'
Output: 0
Explanation:



c
m
freq(c)
freq(m)

freq(c) - freq(m)





b
y
2
2
0



Thus, the answer is 0.


Constraints:

1 <= s.length <= 5 * 105
s consists only of lowercase English letters and digits.


```

## 题目翻译

给定由小写字母和数字组成的字符串 `s`。每个字符的"镜像字符"定义为在其字符集中对称位置的字符：
- 字母：'a'↔'z', 'b'↔'y', ...
- 数字：'0'↔'9', '1'↔'8', ...

对于字符串中每个唯一字符 c，设其镜像为 m，计算 `|freq(c) - freq(m)|`。镜像对 (c, m) 和 (m, c) 只计算一次。
返回所有不同镜像对的绝对频率差之和。

## 解题思路

1. 统计每个字符的频率。
2. 对于每个出现的字符 c，计算其镜像 m。
3. 用 Set 记录已处理的对，避免重复（只处理 c <= m 的对）。
4. 对每个唯一对，累加 `|freq(c) - freq(m)|`。

时间复杂度 O(n)，空间复杂度 O(|charset|)。

## Solution

[SourceCode](./solution.js)
