# [1860] Incremental Memory Leak

## Description

[LeetCode Problem Description](https://leetcode.com/problems/incremental-memory-leak/description/)

* algorithms
* Medium (72.87%)
* Likes:    236
* Dislikes: 93
* Testcase Example:  '2\n2'

```md
You are given two integers memory1 and memory2 representing the available memory in bits on two memory sticks. There is currently a faulty program running that consumes an increasing amount of memory every second.
At the ith second (starting from 1), i bits of memory are allocated to the stick with more available memory (or from the first memory stick if both have the same available memory). If neither stick has at least i bits of available memory, the program crashes.
Return an array containing [crashTime, memory1crash, memory2crash], where crashTime is the time (in seconds) when the program crashed and memory1crash and memory2crash are the available bits of memory in the first and second sticks respectively.

Example 1:

Input: memory1 = 2, memory2 = 2
Output: [3,1,0]
Explanation: The memory is allocated as follows:
- At the 1st second, 1 bit of memory is allocated to stick 1. The first stick now has 1 bit of available memory.
- At the 2nd second, 2 bits of memory are allocated to stick 2. The second stick now has 0 bits of available memory.
- At the 3rd second, the program crashes. The sticks have 1 and 0 bits available respectively.

Example 2:

Input: memory1 = 8, memory2 = 11
Output: [6,0,4]
Explanation: The memory is allocated as follows:
- At the 1st second, 1 bit of memory is allocated to stick 2. The second stick now has 10 bit of available memory.
- At the 2nd second, 2 bits of memory are allocated to stick 2. The second stick now has 8 bits of available memory.
- At the 3rd second, 3 bits of memory are allocated to stick 1. The first stick now has 5 bits of available memory.
- At the 4th second, 4 bits of memory are allocated to stick 2. The second stick now has 4 bits of available memory.
- At the 5th second, 5 bits of memory are allocated to stick 1. The first stick now has 0 bits of available memory.
- At the 6th second, the program crashes. The sticks have 0 and 4 bits available respectively.


Constraints:

0 <= memory1, memory2 <= 231 - 1


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定两个内存条 memory1 和 memory2。第 i 秒分配 i bits 到剩余内存更多的内存条（相同时选第一个）。若两个都不够 i bits 则崩溃。返回 [崩溃时间, 剩余memory1, 剩余memory2]。

## 解题思路

直接模拟。每秒 i 递增，分配到更大的那个。当两者都 < i 时停止。由于 memory <= 2^31，崩溃时间约为 O(sqrt(2^32)) ≈ 65536，模拟完全可行。
