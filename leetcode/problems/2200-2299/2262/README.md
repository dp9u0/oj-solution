# [2262] Total Appeal of A String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/total-appeal-of-a-string/description/)

* algorithms
* Hard (56.39%)
* Likes:    1223
* Dislikes: 35
* Testcase Example:  '"abbca"'

```md
The appeal of a string is the number of distinct characters found in the string.

For example, the appeal of 'abbca' is 3 because it has 3 distinct characters: &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;.

Given a string s, return the total appeal of all of its substrings.
A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = 'abbca'
Output: 28
Explanation: The following are the substrings of 'abbca':
- Substrings of length 1: 'a', 'b', 'b', 'c', 'a' have an appeal of 1, 1, 1, 1, and 1 respectively. The sum is 5.
- Substrings of length 2: 'ab', 'bb', 'bc', 'ca' have an appeal of 2, 1, 2, and 2 respectively. The sum is 7.
- Substrings of length 3: 'abb', 'bbc', 'bca' have an appeal of 2, 2, and 3 respectively. The sum is 7.
- Substrings of length 4: 'abbc', 'bbca' have an appeal of 3 and 3 respectively. The sum is 6.
- Substrings of length 5: 'abbca' has an appeal of 3. The sum is 3.
The total sum is 5 + 7 + 7 + 6 + 3 = 28.

Example 2:

Input: s = 'code'
Output: 20
Explanation: The following are the substrings of 'code':
- Substrings of length 1: 'c', 'o', 'd', 'e' have an appeal of 1, 1, 1, and 1 respectively. The sum is 4.
- Substrings of length 2: 'co', 'od', 'de' have an appeal of 2, 2, and 2 respectively. The sum is 6.
- Substrings of length 3: 'cod', 'ode' have an appeal of 3 and 3 respectively. The sum is 6.
- Substrings of length 4: 'code' has an appeal of 4. The sum is 4.
The total sum is 4 + 6 + 6 + 4 = 20.


Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

字符串的 appeal 是其中不同字符的数量。给定字符串 s，返回所有子串的 appeal 总和。

## 解题思路

贡献法。对每个位置 i，计算 s[i] 作为"子串中该字符首次出现"时贡献了多少子串：
- 子串起点必须在 (last[s[i]], i] 之间，共 (i - last[s[i]]) 种
- 子串终点必须在 [i, n-1] 之间，共 (n - i) 种

总 appeal = Σ (i - last[s[i]]) × (n - i)

时间复杂度 O(n)。
