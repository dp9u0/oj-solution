# [4021] Minimum Operations to Make a Rotated Palindrome I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-a-rotated-palindrome-i/description/)

* algorithms
* Medium (63.81%)
* Likes:    50
* Dislikes: 4
* Testcase Example:  '"abc"\r'

```md
You are given a string s consisting of lowercase English letters.
You can perform the following operations any number of times (including zero) and in any order:

Increment: Choose any index i and replace s[i] with the next lowercase English letter. The letter after &#39;z&#39; is &#39;a&#39;.
Left rotate: Move the first character of the string to the end.

Return the minimum number of operations required to make s a palindrome.

Example 1:

Input: s = 'abc'
Output: 2
Explanation:
One optimal solution:

Left rotate the string: 'abc' -> 'bca'.
Increment &#39;a&#39; to &#39;b&#39;: 'bca' -> 'bcb'.
'bcb' is a palindrome. Thus, the answer is 2.


Example 2:

Input: s = 'yb'
Output: 3
Explanation:

Increment the first character three times: 'yb' -> 'zb' -> 'ab' -> 'bb'.
'bb' is a palindrome. Thus, the answer is 3.



Constraints:

2 <= s.length <= 2000
s consists only of lowercase English letters.


```

## 中文翻译

给定一个由小写英文字母组成的字符串 s。你可以按任意顺序、任意次数（包括零次）执行以下操作：

- 递增：选择任意下标 i，将 s[i] 替换为下一个英文字母（'z' 之后的字母是 'a'）。
- 左旋转：将字符串的第一个字符移到末尾。

返回使 s 变成回文串所需的最少操作次数。

示例 1：s = 'abc'，输出 2（先左旋转得 'bca'，再把 'a' 递增为 'b' 得 'bcb'）。
示例 2：s = 'yb'，输出 3（把第一个字符递增三次得 'bb'）。

约束：2 <= s.length <= 2000，s 只含小写英文字母。

## 解题思路

关键观察：无论操作顺序如何，最终状态都可以唯一参数化为——

1. 整体左旋转了 r 次（0 <= r < n），代价 r；
2. 每个原始字符 j 被递增了 inc[j] 次（mod 26 意义下），代价 Σ inc[j]。

递增和旋转互不干扰（递增作用于字符本身，旋转只移动位置），所以答案 = min over r of [r + 该旋转下的配对修正代价]。

回文约束：旋转后的串 t 中，t[i] 必须等于 t[n-1-i]。一对字符 a、b 要通过递增变成相等（mod 26），设 d = (a - b) mod 26，最小递增次数之和为 min(d, 26 - d)（即字母环上的最短距离，最多 13）。

算法：枚举每个旋转量 r（共 n 种），O(n) 计算该旋转下所有配对的代价和，取最小值。总复杂度 O(n²)，n <= 2000，约 2·10⁶ 次运算。

验证：
- 'abc'：r=0 时 (a,c) 距离 2，共 2；r=1 时 1 + (b,a) 距离 1 = 2。答案 2 ✓
- 'yb'：r=0 时 (y,b) 距离 3，共 3；r=1 时 1 + 3 = 4。答案 3 ✓

## Solution

[SourceCode](./solution.js)
