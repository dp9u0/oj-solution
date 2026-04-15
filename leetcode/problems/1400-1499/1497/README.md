# [1497] Check If Array Pairs Are Divisible by k

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/description/)

* algorithms
* Medium (46.16%)
* Likes:    2627
* Dislikes: 157
* Testcase Example:  '[1,2,3,4,5,10,6,7,8,9]\n5'

```md
Given an array of integers arr of even length n and an integer k.
We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k.
Return true If you can find a way to do that or false otherwise.

Example 1:

Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5
Output: true
Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).

Example 2:

Input: arr = [1,2,3,4,5,6], k = 7
Output: true
Explanation: Pairs are (1,6),(2,5) and(3,4).

Example 3:

Input: arr = [1,2,3,4,5,6], k = 10
Output: false
Explanation: You can try all possible pairs to see that there is no way to divide arr into 3 pairs each with sum divisible by 10.


Constraints:

arr.length == n
1 <= n <= 105
n is even.
-109 <= arr[i] <= 109
1 <= k <= 105


```

## 中文翻译

给定偶数长度数组 arr 和整数 k，判断能否将数组分成 n/2 对，每对的和能被 k 整除。

## 解题思路

统计每个元素对 k 取余后的余数个数。余数 r 需要与余数 (k-r) % k 配对。所以 count[r] == count[(k-r)%k]。注意余数 0 需要自身配对，所以 count[0] 必须是偶数。

时间复杂度：O(n)，空间复杂度：O(k)

## Solution

[SourceCode](./solution.js)
