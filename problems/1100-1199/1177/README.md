# [1177] Can Make Palindrome from Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/can-make-palindrome-from-substring/description/)

* algorithms
* Medium (41.52%)
* Likes:    880
* Dislikes: 282
* Testcase Example:  '"abcda"\n[[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]'

```md
You are given a string s and array queries where queries[i] = [lefti, righti, ki]. We may rearrange the substring s[lefti...righti] for each query and then choose up to ki of them to replace with any lowercase English letter.
If the substring is possible to be a palindrome string after the operations above, the result of the query is true. Otherwise, the result is false.
Return a boolean array answer where answer[i] is the result of the ith query queries[i].
Note that each letter is counted individually for replacement, so if, for example s[lefti...righti] = 'aaa', and ki = 2, we can only replace two of the letters. Also, note that no query modifies the initial string s.

Example :

Input: s = 'abcda', queries = [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]
Output: [true,false,false,true,true]
Explanation:
queries[0]: substring = 'd', is palidrome.
queries[1]: substring = 'bc', is not palidrome.
queries[2]: substring = 'abcd', is not palidrome after replacing only 1 character.
queries[3]: substring = 'abcd', could be changed to 'abba' which is palidrome. Also this can be changed to 'baab' first rearrange it 'bacd' then replace 'cd' with 'ab'.
queries[4]: substring = 'abcda', could be changed to 'abcba' which is palidrome.

Example 2:

Input: s = 'lyb', queries = [[0,1,0],[2,2,1]]
Output: [false,true]


Constraints:

1 <= s.length, queries.length <= 105
0 <= lefti <= righti < s.length
0 <= ki <= s.length
s consists of lowercase English letters.


```

## 翻译

给定字符串 s 和查询数组 queries，每个查询 [left, right, k]：可以重排子串 s[left..right]，然后最多替换 k 个字符为任意小写字母。判断是否能变成回文串。

## Approach

位掩码前缀异或。26 个小写字母用 26 位整数表示，prefix[i] = s[0..i-1] 中各字母出现奇偶性的掩码。

子串 s[left..right] 的奇偶掩码 = prefix[right+1] ^ prefix[left]，其中 1 的个数 = 奇数频率的字符数 odd_count。

需要 floor(odd_count / 2) <= k 次替换即可构造回文。

时间复杂度 O(n + q)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
