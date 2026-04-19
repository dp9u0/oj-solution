# [2515] Shortest Distance to Target String in a Circular Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/description/)

* algorithms
* Easy (50.60%)
* Likes:    618
* Dislikes: 36
* Testcase Example:  '["hello","i","am","leetcode","hello"]\n"hello"\n1'

```md
You are given a 0-indexed circular string array words and a string target. A circular array means that the array&#39;s end connects to the array&#39;s beginning.

Formally, the next element of words[i] is words[(i + 1) % n] and the previous element of words[i] is words[(i - 1 + n) % n], where n is the length of words.

Starting from startIndex, you can move to either the next word or the previous word with 1 step at a time.
Return the shortest distance needed to reach the string target. If the string target does not exist in words, return -1.

Example 1:

Input: words = ['hello','i','am','leetcode','hello'], target = 'hello', startIndex = 1
Output: 1
Explanation: We start from index 1 and can reach 'hello' by
- moving 3 units to the right to reach index 4.
- moving 2 units to the left to reach index 4.
- moving 4 units to the right to reach index 0.
- moving 1 unit to the left to reach index 0.
The shortest distance to reach 'hello' is 1.

Example 2:

Input: words = ['a','b','leetcode'], target = 'leetcode', startIndex = 0
Output: 1
Explanation: We start from index 0 and can reach 'leetcode' by
- moving 2 units to the right to reach index 2.
- moving 1 unit to the left to reach index 2.
The shortest distance to reach 'leetcode' is 1.
Example 3:

Input: words = ['i','eat','leetcode'], target = 'ate', startIndex = 0
Output: -1
Explanation: Since 'ate' does not exist in words, we return -1.


Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] and target consist of only lowercase English letters.
0 <= startIndex < words.length


```

## 题目翻译

给定循环字符串数组 `words` 和目标字符串 `target`。从 `startIndex` 出发，每步可向前或向后移动一个位置（循环）。返回到达 `target` 的最短距离。如果 `target` 不存在，返回 -1。

## 解题思路

遍历数组，对于每个 `words[i] === target`，计算从 `startIndex` 到 `i` 的最短循环距离：`min(|i - startIndex|, n - |i - startIndex|)`，取所有匹配位置的最小值。

## Solution

[SourceCode](./solution.js)
