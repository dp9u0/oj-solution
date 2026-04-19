# [2145] Count the Hidden Sequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-hidden-sequences/description/)

* algorithms
* Medium (56.73%)
* Likes:    1041
* Dislikes: 93
* Testcase Example:  '[1,-3,4]\n1\n6'

```md
You are given a 0-indexed array of n integers differences, which describes the differences between each pair of consecutive integers of a hidden sequence of length (n + 1). More formally, call the hidden sequence hidden, then we have that differences[i] = hidden[i + 1] - hidden[i].
You are further given two integers lower and upper that describe the inclusive range of values [lower, upper] that the hidden sequence can contain.

For example, given differences = [1, -3, 4], lower = 1, upper = 6, the hidden sequence is a sequence of length 4 whose elements are in between 1 and 6 (inclusive).

[3, 4, 1, 5] and [4, 5, 2, 6] are possible hidden sequences.
[5, 6, 3, 7] is not possible since it contains an element greater than 6.
[1, 2, 3, 4] is not possible since the differences are not correct.



Return the number of possible hidden sequences there are. If there are no possible sequences, return 0.

Example 1:

Input: differences = [1,-3,4], lower = 1, upper = 6
Output: 2
Explanation: The possible hidden sequences are:
- [3, 4, 1, 5]
- [4, 5, 2, 6]
Thus, we return 2.

Example 2:

Input: differences = [3,-4,5,1,-2], lower = -4, upper = 5
Output: 4
Explanation: The possible hidden sequences are:
- [-3, 0, -4, 1, 2, 0]
- [-2, 1, -3, 2, 3, 1]
- [-1, 2, -2, 3, 4, 2]
- [0, 3, -1, 4, 5, 3]
Thus, we return 4.

Example 3:

Input: differences = [4,-7,2], lower = 3, upper = 6
Output: 0
Explanation: There are no possible hidden sequences. Thus, we return 0.


Constraints:

n == differences.length
1 <= n <= 105
-105 <= differences[i] <= 105
-105 <= lower <= upper <= 105


```

## 翻译

给定一个长度为 n 的差分数组 differences，描述一个长度为 n+1 的隐藏序列的相邻元素差值。即 differences[i] = hidden[i+1] - hidden[i]。再给定上下界 [lower, upper]，隐藏序列中所有元素必须在这个范围内。求满足条件的隐藏序列个数。

## Approach

设 hidden[0] = x，则 hidden[i] = x + prefix[i]，其中 prefix[i] = differences[0] + ... + differences[i-1]。

需要满足 lower <= x + prefix[i] <= upper 对所有 i 成立。

即 lower - prefix[i] <= x <= upper - prefix[i]。

对所有 i 取交集，得到 maxLower <= x <= minUpper，其中 maxLower = max(lower - prefix[i])，minUpper = min(upper - prefix[i])。

答案为 max(0, minUpper - maxLower + 1)。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
