# [2950] 可整除子串的数量

## Description


```md
https://leetcode.cn/problems/number-of-divisible-substrings/description/
* algorithms
* Medium (35.57%)
* Likes:    4
* Dislikes: -
* Testcase Example:  '"asdf"'
每个英文字母都被映射到一个数字，如下所示。
如果字符串的字符的映射值的总和可以被字符串的长度整除，则该字符串是 可整除 的。
给定一个字符串 s，请返回 s 的 可整除子串 的数量。
子串 是字符串内的一个连续的非空字符序列。

示例 1：


Substring
Mapped
Sum
Length
Divisible?


a
1
1
1
Yes


s
7
7
1
Yes


d
2
2
1
Yes


f
3
3
1
Yes


as
1, 7
8
2
Yes


sd
7, 2
9
2
No


df
2, 3
5
2
No


asd
1, 7, 2
10
3
No


sdf
7, 2, 3
12
3
Yes


asdf
1, 7, 2, 3
13
4
No


输入：word = "asdf"
输出：6
解释：上表包含了有关 word 中每个子串的详细信息，我们可以看到其中有 6 个是可整除的。
示例 2:
输入：word = "bdh"
输出：4
解释：4 个可整除的子串是："b"，"d"，"h"，"bdh"。
可以证明 word 中没有其他可整除的子串。
示例 3:
输入：word = "abcd"
输出：6
解释：6 个可整除的子串是："a"，"b"，"c"，"d"，"ab"，"cd"。
可以证明 word 中没有其他可整除的子串。

提示：
1 <= word.length <= 2000
word 仅包含小写英文字母。
Hint 1: Iterate over all substrings in O(n * n).
Hint 2: For each substring, try to calculate the sum of the mapped values in O(1).
Hint 3: To do the above, use a partial sum array.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Each letter maps to a digit per old-phone keypad: 1=ab, 2=cde, 3=fgh, 4=ijk, 5=lmn, 6=opq, 7=rst, 8=uvw, 9=xyz (mapping recovered from the problem's image old_phone_digits.png). A substring is divisible if its digit sum is divisible by its length. Count divisible substrings. n <= 2000.

Approach: prefix sums; for each pair (i, j) check (prefix[j+1]-prefix[i]) % (j-i+1) == 0. O(n^2).

Verified on "asdf" -> 6 (a=1,s=7,d=2,f=3: a, s, d, f, as=8, sdf=12) and "abcd" -> 6 (a, b, c, d, ab=2, cd=4).
