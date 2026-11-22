# [2802] 找出第 K 个幸运数字

## Description


```md
https://leetcode.cn/problems/find-the-k-th-lucky-number/description/
* algorithms
* Medium (27.29%)
* Likes:    4
* Dislikes: -
* Testcase Example:  '4'
我们知道 4 和 7 是 幸运 数字。同时，如果一个数字只包含幸运数字，那么它被称为幸运数字。
给定一个整数 k，返回第 k 个幸运数字，并将其表示为一个 字符串 。

示例 1：
输入：k = 4
输出："47"
解释：第一个幸运数字是 4，第二个是 7，第三个是 44，第四个是 47。
示例 2：
输入：k = 10
输出："477"
解释：按递增顺序列出的幸运数字为：
4, 7, 44, 47, 74, 77, 444, 447, 474, 477。 因此第10个幸运数字是477。
示例 3：
输入：k = 1000
输出："777747447"
解释：第 1000 个幸运数字是 777747447。

提示：
1 <= k <= 109
Hint 1: The number of lucky numbers with exactly n digits is equal to 2n.
Hint 2: We can obtain how many digits the kth lucky number has.
Hint 3: Imagine we know that kth lucky number has c digits. Then calculate how many numbers with c digits exist before the kth lucky number.
Hint 4: Imagine the number from the previous hint is x. Now look at the binary representation of x and add some leading zero to make its length equal to c.
Hint 5: Replace 0 and 1 with 4 and 7 in the number you've obtained from the previous hint.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Lucky numbers are strings over {4, 7}, ordered by length then lexicographically. Return the k-th (1-indexed) as a string, k up to 1e9.

Approach: there are 2^c lucky numbers with exactly c digits, cumulative 2^(c+1) - 2. Find the smallest c with 2^(c+1) - 2 >= k; the 0-based offset within length c is idx = k - (2^c - 2) - 1. Write idx in binary padded to c bits; map 0 -> '4', 1 -> '7'. k <= 1e9 fits in 30 bits, so plain numbers suffice.

Complexity: O(log k).
