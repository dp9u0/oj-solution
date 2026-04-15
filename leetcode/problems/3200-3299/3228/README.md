# [3228] Maximum Number of Operations to Move Ones to the End

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/description/)

* algorithms
* Medium (67.11%)
* Likes:    532
* Dislikes: 38
* Testcase Example:  '"1001101"'

```md
You are given a binary string s.
You can perform the following operation on the string any number of times:

Choose any index i from the string where i + 1 < s.length such that s[i] == &#39;1&#39; and s[i + 1] == &#39;0&#39;.
Move the character s[i] to the right until it reaches the end of the string or another &#39;1&#39;. For example, for s = '010010', if we choose i = 1, the resulting string will be s = '000110'.

Return the maximum number of operations that you can perform.

Example 1:

Input: s = '1001101'
Output: 4
Explanation:
We can perform the following operations:

Choose index i = 0. The resulting string is s = '0011101'.
Choose index i = 4. The resulting string is s = '0011011'.
Choose index i = 3. The resulting string is s = '0010111'.
Choose index i = 2. The resulting string is s = '0001111'.


Example 2:

Input: s = '00111'
Output: 0


Constraints:

1 <= s.length <= 105
s[i] is either &#39;0&#39; or &#39;1&#39;.


```

## 中文翻译

给定二进制字符串 s，每次操作选择 i 使得 s[i]=='1' 且 s[i+1]=='0'，将 s[i] 右移到末尾或下一个 '1' 前。求最大操作次数。

## 解题思路

每次操作就是把一个 '1' 跳过若干个 '0'。从右往左统计：遇到 '0' 时 zeroCount++，遇到 '1' 时将当前 zeroCount 加到结果中（这个 '1' 可以跳过这些 '0'），然后 zeroCount 重置为 0（因为后面的 '1' 会挡住前面的 '1'）。但仔细想，每个 '1' 前面连续的 '0' 的个数就是它被跳过的次数。

实际上从右往左遍历，维护 zeros 计数器。遇到 '0' 则 zeros++，遇到 '1' 时如果 zeros > 0 则 ans += zeros，然后 zeros = 0。

等等，这不对。让我重新想。

实际上，每个 '1' 会向右跳过连续的 '0'。从右往左看，每遇到一个 '1'，它后面有多少个连续 '0' 就能贡献多少次操作。但关键是 '1' 不能跨越其他 '1'。

正确做法：从右往左遍历，统计连续 '0' 的个数。遇到 '1' 时，如果 zeros > 0，则 ans += zeros，然后 zeros = 0（因为下一个 '1' 的跳过被当前 '1' 挡住了... 不对，当前 '1' 移走后下一个也能移）。

再仔细想：s = "1001101"。
从右到左：1(6) -> 遇到1，0(5) -> zeros=1，1(4) -> 遇到1，ans+=1=1, zeros=0... 不对这样只得到1不是4。

让我换个思路。每次操作选择 s[i]=='1' 且 s[i+1]=='0'，把 s[i] 移到最右端（或下一个1前）。这等价于每次操作把一个 "10" 变成 "01"（不是交换，而是把 1 移到最后）。

其实更简单的思考方式：从左到右，统计遇到的 '1' 的个数 ones。当遇到 '0' 时，如果 ones > 0，说明有 ones 个 '1' 可以跳过这个 '0'，但这只产生一次操作。更精确地说，每个连续的 '0' 块，其左边有多少个 '1'，就能产生多少次操作。

用 ones 统计已遇到的 '1' 的个数。遇到 '0' 时开始累计 zeroBlock，当遇到下一个 '1'（或末尾）时，如果有 zeroBlock > 0 且 ones > 0，ans += ones。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
