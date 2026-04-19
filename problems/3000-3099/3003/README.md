# [3003] Maximize the Number of Partitions After Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations/description/)

* algorithms
* Hard (53.47%)
* Likes:    441
* Dislikes: 88
* Testcase Example:  '"accca"\n2'

```md
You are given a string s and an integer k.
First, you are allowed to change at most one index in s to another lowercase English letter.
After that, do the following partitioning operation until s is empty:

Choose the longest prefix of s containing at most k distinct characters.
Delete the prefix from s and increase the number of partitions by one. The remaining characters (if any) in s maintain their initial order.

Return an integer denoting the maximum number of resulting partitions after the operations by optimally choosing at most one index to change.

Example 1:

Input: s = 'accca', k = 2
Output: 3
Explanation:
The optimal way is to change s[2] to something other than a and c, for example, b. then it becomes 'acbca'.
Then we perform the operations:

The longest prefix containing at most 2 distinct characters is 'ac', we remove it and s becomes 'bca'.
Now The longest prefix containing at most 2 distinct characters is 'bc', so we remove it and s becomes 'a'.
Finally, we remove 'a' and s becomes empty, so the procedure ends.

Doing the operations, the string is divided into 3 partitions, so the answer is 3.

Example 2:

Input: s = 'aabaab', k = 3
Output: 1
Explanation:
Initiallyscontains 2 distinct characters, so whichever character we change, it will contain at most 3 distinct characters, so the longest prefix with at most 3 distinct characters would always be all of it, therefore the answer is 1.

Example 3:

Input: s = 'xxyz', k = 1
Output: 4
Explanation:
The optimal way is to changes[0]ors[1]to something other than characters ins, for example, to changes[0]tow.
Thensbecomes 'wxyz', which consists of 4 distinct characters, so as k is 1, it will divide into 4 partitions.


Constraints:

1 <= s.length <= 104
s consists only of lowercase English letters.
1 <= k <= 26


```

## 题目翻译

给定字符串 s 和整数 k。可修改最多一个字符。然后重复操作：取最长的含至多 k 种不同字符的前缀作为分区。求最大分区数。

## 解题思路

**记忆化搜索 DP**

状态：(i, mask, changed)，表示从位置 i 开始，当前分区字符集为 mask，是否已用修改。

转移：
- 不修改：将 s[i] 加入当前 mask，若超过 k 则分区+1 并重新开始
- 若未修改：尝试将 s[i] 改为已在 mask 中的字符（mask 不变）或不在 mask 中的字符

关键优化：changed=true 后路径完全确定性（贪心），无分支。changed=false 的状态数 ≤ n。对每个 changed=false 状态，尝试至多 26 个修改选项，每个进入 changed=true 的确定性路径。

总状态数可控，使用 Map 记忆化。

## Solution

[SourceCode](./solution.js)
