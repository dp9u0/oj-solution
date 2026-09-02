# [LCR 093] 最长的斐波那契子序列的长度

## Description


```md
https://leetcode.cn/problems/Q91FMA/description/
* algorithms
* Medium (56.61%)
* Likes:    95
* Dislikes: -
* Testcase Example:  '[1,2,3,4,5,6,7,8]'
如果序列 X_1, X_2, ..., X_n 满足下列条件，就说它是 斐波那契式 的：
n >= 3
对于所有 i + 2 <= n，都有 X_i + X_{i+1} = X_{i+2}
给定一个严格递增的正整数数组形成序列 arr ，找到 arr 中最长的斐波那契式的子序列的长度。如果一个不存在，返回  0 。
（回想一下，子序列是从原序列  arr 中派生出来的，它从 arr 中删掉任意数量的元素（也可以不删），而不改变其余元素的顺序。例如， [3, 5, 8] 是 [3, 4, 5, 6, 7, 8] 的一个子序列）

示例 1：
输入: arr = [1,2,3,4,5,6,7,8]
输出: 5
解释: 最长的斐波那契式子序列为 [1,2,3,5,8] 。
示例 2：
输入: arr = [1,3,7,11,12,14,18]
输出: 3
解释: 最长的斐波那契式子序列有 [1,11,12]、[3,11,14] 以及 [7,11,18] 。

提示：
3 <= arr.length <= 1000

1 <= arr[i] < arr[i + 1] <= 10^9


注意：本题与主站 873 题相同： https://leetcode.cn/problems/length-of-longest-fibonacci-subsequence/

```

## English Translation

A sequence `X_1, X_2, ..., X_n` is *Fibonacci-like* if:
- `n >= 3`
- `X_i + X_{i+1} = X_{i+2}` for all `i + 2 <= n`

Given a strictly increasing array `arr` of positive integers, return the length of the longest Fibonacci-like subsequence of `arr`. If one does not exist, return `0`.

(A subsequence is derived from another sequence `arr` by deleting any number of elements (including none) without changing the order of the remaining elements. For example, `[3, 5, 8]` is a subsequence of `[3, 4, 5, 6, 7, 8]`.)

**Example 1:**
```
Input: arr = [1,2,3,4,5,6,7,8]
Output: 5
Explanation: The longest Fibonacci-like subsequence is [1,2,3,5,8].
```

**Example 2:**
```
Input: arr = [1,3,7,11,12,14,18]
Output: 3
Explanation: The longest Fibonacci-like subsequences are [1,11,12], [3,11,14] and [7,11,18].
```

**Constraints:**
- `3 <= arr.length <= 1000`
- `1 <= arr[i] < arr[i + 1] <= 10^9`

## Solution

### Approach: DP (index-pair state)

Since `arr` is strictly increasing, each value maps to a unique index. Use a hash map `value -> index`.

Define `dp[i][j]` (where `i < j`) as the length of the longest Fibonacci-like subsequence ending with `arr[i], arr[j]` as its last two elements (minimum length is `2`).

For each pair `(a, b)` with `a < b`, the element before them must be `prev = arr[b] - arr[a]`. Because the array is strictly increasing, `prev < arr[a]` guarantees `prev`'s index is `< a`, so `dp[index[prev]][a]` is already computed when we iterate `b` from small to large. Then:

```
dp[a][b] = dp[index[prev]][a] + 1
```

Track the maximum `ans`. Finally return `ans` if `ans >= 3`, otherwise `0`.

- **Time**: O(n²)
- **Space**: O(n²)

[SourceCode](./solution.js)
