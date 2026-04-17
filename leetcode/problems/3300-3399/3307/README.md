# [3307] Find the K-th Character in String Game II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/description/)

* algorithms
* Hard (48.47%)
* Likes:    528
* Dislikes: 31
* Testcase Example:  '5\n[0,0,0]'

```md
Alice and Bob are playing a game. Initially, Alice has a string word = 'a'.
You are given a positive integer k. You are also given an integer array operations, where operations[i] represents the type of the ith operation.
Now Bob will ask Alice to perform all operations in sequence:

If operations[i] == 0, append a copy of word to itself.
If operations[i] == 1, generate a new string by changing each character in word to its next character in the English alphabet, and append it to the original word. For example, performing the operation on 'c' generates 'cd' and performing the operation on 'zb' generates 'zbac'.

Return the value of the kth character in word after performing all the operations.
Note that the character &#39;z&#39; can be changed to &#39;a&#39; in the second type of operation.

Example 1:

Input: k = 5, operations = [0,0,0]
Output: 'a'
Explanation:
Initially, word == 'a'. Alice performs the three operations as follows:

Appends 'a' to 'a', word becomes 'aa'.
Appends 'aa' to 'aa', word becomes 'aaaa'.
Appends 'aaaa' to 'aaaa', word becomes 'aaaaaaaa'.


Example 2:

Input: k = 10, operations = [0,1,0,1]
Output: 'b'
Explanation:
Initially, word == 'a'. Alice performs the four operations as follows:

Appends 'a' to 'a', word becomes 'aa'.
Appends 'bb' to 'aa', word becomes 'aabb'.
Appends 'aabb' to 'aabb', word becomes 'aabbaabb'.
Appends 'bbccbbcc' to 'aabbaabb', word becomes 'aabbaabbbbccbbcc'.



Constraints:

1 <= k <= 1014
1 <= operations.length <= 100
operations[i] is either 0 or 1.
The input is generated such that word has at least k characters after all operations.


```

## 题目翻译

初始字符串 word = "a"。依次执行 operations 中的操作：op=0 则复制 word 追加到自身；op=1 则将 word 每个字符变为下一个字母后追加。求最终字符串第 k 个字符。

## 解题思路

**逆向追踪**

每次操作字符串长度翻倍。从后往前处理：
- 操作 i 之前字符串长度 = 2^i
- 若 k > 2^i（在后半部分）：k = k - 2^i，若 op=1 则记录一次偏移
- 若 k <= 2^i（在前半部分）：不变

最终 k 追溯到 1（原始 'a'），答案 = 'a' 偏移 shifts 次。

时间 O(n)，空间 O(1)。

## Solution

[SourceCode](./solution.js)
