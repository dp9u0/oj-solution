# [3016] Minimum Number of Pushes to Type Word II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/description/)

* algorithms
* Medium (79.96%)
* Likes:    782
* Dislikes: 80
* Testcase Example:  '"abcde"'

```md
You are given a string word containing lowercase English letters.
Telephone keypads have keys mapped with distinct collections of lowercase English letters, which can be used to form words by pushing them. For example, the key 2 is mapped with ['a','b','c'], we need to push the key one time to type 'a', two times to type 'b', and three times to type 'c' .
It is allowed to remap the keys numbered 2 to 9 to distinct collections of letters. The keys can be remapped to any amount of letters, but each letter must be mapped to exactly one key. You need to find the minimum number of times the keys will be pushed to type the string word.
Return the minimum number of pushes needed to type word after remapping the keys.
An example mapping of letters to keys on a telephone keypad is given below. Note that 1, *, #, and 0 do not map to any letters.


Example 1:


Input: word = 'abcde'
Output: 5
Explanation: The remapped keypad given in the image provides the minimum cost.
'a' -> one push on key 2
'b' -> one push on key 3
'c' -> one push on key 4
'd' -> one push on key 5
'e' -> one push on key 6
Total cost is 1 + 1 + 1 + 1 + 1 = 5.
It can be shown that no other mapping can provide a lower cost.

Example 2:


Input: word = 'xyzxyzxyzxyz'
Output: 12
Explanation: The remapped keypad given in the image provides the minimum cost.
'x' -> one push on key 2
'y' -> one push on key 3
'z' -> one push on key 4
Total cost is 1 * 4 + 1 * 4 + 1 * 4 = 12
It can be shown that no other mapping can provide a lower cost.
Note that the key 9 is not mapped to any letter: it is not necessary to map letters to every key, but to map all the letters.

Example 3:


Input: word = 'aabbccddeeffgghhiiiiii'
Output: 24
Explanation: The remapped keypad given in the image provides the minimum cost.
'a' -> one push on key 2
'b' -> one push on key 3
'c' -> one push on key 4
'd' -> one push on key 5
'e' -> one push on key 6
'f' -> one push on key 7
'g' -> one push on key 8
'h' -> two pushes on key 9
'i' -> one push on key 9
Total cost is 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 2 * 2 + 6 * 1 = 24.
It can be shown that no other mapping can provide a lower cost.


Constraints:

1 <= word.length <= 105
word consists of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串 word，可以自由将字母分配到 8 个按键（2-9）上。每个按键上的字母按位置需要按 1 次、2 次、3 次...。求输入 word 所需的最少按键次数。

## 解题思路

**贪心**

统计每个字母的频率，按频率降序排列。前 8 个字母各占按键第 1 位（按 1 次），接下来 8 个字母占第 2 位（按 2 次），以此类推。

每个字母的按键次数 = floor(排名 / 8) + 1。总次数 = sum(freq * pushCount)。

时间复杂度 O(n + 26 log 26)，空间复杂度 O(26)。
