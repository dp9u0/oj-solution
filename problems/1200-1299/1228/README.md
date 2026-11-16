# [1228] 等差数列中缺失的数字

## Description


```md
https://leetcode.cn/problems/missing-number-in-arithmetic-progression/description/
* algorithms
* Easy (55.51%)
* Likes:    35
* Dislikes: -
* Testcase Example:  '[5,7,11,13]'
在某个数组 arr 中，值符合等差数列的数值规律：在 0 <= i < arr.length - 1 的前提下，arr[i+1] - arr[i] 的值都相等。
我们会从该数组中删除一个 既不是第一个 也 不是最后一个的值，得到一个新的数组  arr。
给你这个缺值的数组 arr，返回 被删除的那个数 。

示例 1：
输入：arr = [5,7,11,13]
输出：9
解释：原来的数组是 [5,7,9,11,13]。
示例 2：
输入：arr = [15,13,12]
输出：14
解释：原来的数组是 [15,14,13,12]。

提示：
3 <= arr.length <= 1000
0 <= arr[i] <= 105
给定的数组 保证 是一个有效的数组。
Hint 1: Assume the sequence is increasing, what if we find the largest consecutive difference?
Hint 2: Is the missing element in the middle of the segment with the largest consecutive difference?
Hint 3: For decreasing sequences, just reverse the array and do a similar process.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

An array `arr` is an arithmetic progression with one element (neither first nor last) removed. Return the removed value.

**Example 1:**
arr = [5,7,11,13] → 9 (original: [5,7,9,11,13])

**Constraints:**
- 3 <= arr.length <= 1000
- input is guaranteed to be a valid progression with one middle element removed

## Approach

数学:原数列长度 n+1(n 为当前长度),真实公差 `d = (arr[n-1] - arr[0]) / n`(整除),真实和 = (n+1) × (首+尾) / 2,减去实际和即缺失值。

时间 O(n),空间 O(1)。
