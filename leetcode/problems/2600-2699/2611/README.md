# [2611] Mice and Cheese

## Description

[LeetCode Problem Description](https://leetcode.com/problems/mice-and-cheese/description/)

* algorithms
* Medium (48.64%)
* Likes:    678
* Dislikes: 74
* Testcase Example:  '[1,1,3,4]\n[4,4,1,1]\n2'

```md
There are two mice and n different types of cheese, each type of cheese should be eaten by exactly one mouse.
A point of the cheese with index i (0-indexed) is:

reward1[i] if the first mouse eats it.
reward2[i] if the second mouse eats it.

You are given a positive integer array reward1, a positive integer array reward2, and a non-negative integer k.
Return the maximum points the mice can achieve if the first mouse eats exactly k types of cheese.

Example 1:

Input: reward1 = [1,1,3,4], reward2 = [4,4,1,1], k = 2
Output: 15
Explanation: In this example, the first mouse eats the 2nd(0-indexed) and the 3rdtypes of cheese, and the second mouse eats the 0thand the 1st types of cheese.
The total points are 4 + 4 + 3 + 4 = 15.
It can be proven that 15 is the maximum total points that the mice can achieve.

Example 2:

Input: reward1 = [1,1], reward2 = [1,1], k = 2
Output: 2
Explanation: In this example, the first mouse eats the 0th(0-indexed) and 1sttypes of cheese, and the second mouse does not eat any cheese.
The total points are 1 + 1 = 2.
It can be proven that 2 is the maximum total points that the mice can achieve.


Constraints:

1 <= n == reward1.length == reward2.length <= 105
1 <= reward1[i],reward2[i] <= 1000
0 <= k <= n


```

## 翻译

有两只老鼠和 n 种不同的奶酪，每种奶酪只能被一只老鼠吃掉。第 i 种奶酪的分值：第一只老鼠吃得 `reward1[i]` 分，第二只老鼠吃得 `reward2[i]` 分。给定 `reward1`、`reward2` 和整数 `k`，返回第一只老鼠恰好吃 k 种奶酪时的最大总分。

## Approach

**贪心。** 先假设所有奶酪都由第二只老鼠吃，总分为 `sum(reward2)`。然后我们需要从 n 个奶酪中选 k 个给第一只老鼠吃，每选一个第 i 个奶酪给第一只老鼠，收益变化为 `reward1[i] - reward2[i]`（即用 reward1 替换 reward2）。为了最大化总分，按 `reward1[i] - reward2[i]` 降序排列，选前 k 个即可。

时间复杂度：O(n log n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
