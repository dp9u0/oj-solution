# [3884] First Matching Character From Both Ends

## Description

[LeetCode Problem Description](https://leetcode.com/problems/first-matching-character-from-both-ends/description/)

* algorithms
* Easy (81.56%)
* Testcase Example:  '"abcacbd"'

```md
You are given a string s of length n consisting of lowercase English letters.
Return the smallest index i such that s[i] == s[n - i - 1].
If no such index exists, return -1.

Example 1:
Input: s = "abcacbd"
Output: 1
Explanation:
At index i = 1, s[1] and s[5] are both 'b'.
No smaller index satisfies the condition, so the answer is 1.
Example 2:
Input: s = "abc"
Output: 1
Explanation:
​​​​​​​At index i = 1, the two compared positions coincide, so both characters are 'b'.
No smaller index satisfies the condition, so the answer is 1.
Example 3:
Input: s = "abcdab"
Output: -1
Explanation:
​​​​​​​For every index i, the characters at positions i and n - i - 1 are different.
Therefore, no valid index exists, so the answer is -1.

Constraints:
1
s consists of lowercase English letters.

```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译

给定一个长度为 n 的字符串 s，由小写英文字母组成。

返回最小的索引 i，使得 s[i] == s[n - i - 1]。如果不存在这样的索引，返回 -1。

**示例 1：**
- 输入：s = "abcacbd"
- 输出：1
- 解释：在索引 i=1 处，s[1]='b'，s[5]='b'，相等

**示例 2：**
- 输入：s = "abc"
- 输出：1
- 解释：在索引 i=1 处，两个比较的位置重合（n=3，i=1，n-i-1=1），所以都是 'b'

**示例 3：**
- 输入：s = "abcdab"
- 输出：-1
- 解释：对于每个索引 i，s[i] 和 s[n-i-1] 都不相同

## Approach (解题思路)

**一次遍历**

从左到右遍历字符串，对于每个索引 i：
- 计算对称位置 j = n - i - 1
- 检查 s[i] == s[j]
- 如果相等，直接返回 i（因为是从左到右遍历，第一个找到的就是最小索引）

如果遍历完都没找到，返回 -1。

**时间复杂度：** O(n)
**空间复杂度：** O(1)
