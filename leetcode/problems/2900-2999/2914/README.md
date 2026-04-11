# [2914] Minimum Number of Changes to Make Binary String Beautiful

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/description/)

* algorithms
* Medium (76.38%)
* Likes:    684
* Dislikes: 117
* Testcase Example:  '"1001"'

```md
You are given a 0-indexed binary string s having an even length.
A string is beautiful if it&#39;s possible to partition it into one or more substrings such that:

Each substring has an even length.
Each substring contains only 1&#39;s or only 0&#39;s.

You can change any character in s to 0 or 1.
Return the minimum number of changes required to make the string s beautiful.

Example 1:

Input: s = '1001'
Output: 2
Explanation: We change s[1] to 1 and s[3] to 0 to get string '1100'.
It can be seen that the string '1100' is beautiful because we can partition it into '11
00'.
It can be proven that 2 is the minimum number of changes needed to make the string beautiful.

Example 2:

Input: s = '10'
Output: 1
Explanation: We change s[1] to 1 to get string '11'.
It can be seen that the string '11' is beautiful because we can partition it into '11'.
It can be proven that 1 is the minimum number of changes needed to make the string beautiful.

Example 3:

Input: s = '0000'
Output: 0
Explanation: We don&#39;t need to make any changes as the string '0000' is beautiful already.


Constraints:

2 <= s.length <= 105
s has an even length.
s[i] is either &#39;0&#39; or &#39;1&#39;.


```

## 题目翻译

给定一个下标从 0 开始、长度为偶数的二进制字符串 `s`。
如果一个字符串可以被划分为一个或多个子串，使得每个子串长度为偶数且只包含 1 或只包含 0，则称该字符串是"美丽的"。
你可以将 `s` 中的任意字符改为 0 或 1。返回使字符串变美丽所需的最少修改次数。

**示例 1：**
输入：s = "1001"
输出：2
解释：将 s[1] 改为 1，s[3] 改为 0，得到 "1100"，可划分为 "11" 和 "00"。

**示例 2：**
输入：s = "10"
输出：1

**示例 3：**
输入：s = "0000"
输出：0

**约束：**
- 2 <= s.length <= 10^5
- s 长度为偶数
- s[i] 为 '0' 或 '1'

## 解题思路 (Approach)

贪心。将字符串按每两个字符一组划分。对于每对 (s[2i], s[2i+1])，如果两个字符不同则需要修改 1 次（改为相同）；如果已经相同则不需要修改。由于每对已经是偶数长度（2），且全为相同字符，所以这种划分一定合法且最优。

时间复杂度：O(n)，空间复杂度：O(1)。

## Solution

[SourceCode](./solution.js)
