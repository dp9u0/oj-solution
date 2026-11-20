# [1246] 删除回文子数组

## Description


```md
https://leetcode.cn/problems/palindrome-removal/description/
* algorithms
* Hard (50.01%)
* Likes:    89
* Dislikes: -
* Testcase Example:  '[1,2]'
给你一个整数数组 arr，每一次操作你都可以选择并删除它的一个 回文 子数组 arr[i], arr[i+1], ..., arr[j]（ i <= j）。
注意，每当你删除掉一个子数组，右侧元素都会自行向前移动填补空位。
请你计算并返回从数组中删除所有数字所需的最少操作次数。

示例 1：
输入：arr = [1,2]
输出：2
示例 2：
输入：arr = [1,3,4,1,5]
输出：3
解释：先删除 [4]，然后删除 [1,3,1]，最后再删除 [5]。

提示：
1 <= arr.length <= 100
1 <= arr[i] <= 20
Hint 1: Use dynamic programming.
Hint 2: Let dp[i][j] be the solution for the sub-array from index i to index j.
Hint 3: Notice that if we have S[i] == S[j] one transition could be just dp(i + 1, j + 1) because in the last turn we would have a palindrome and we can extend this palindrome from both sides, the other transitions are not too difficult to deduce.

```

## Solution

[SourceCode](./solution.js)

## Translation

Each move removes a contiguous palindromic subarray; elements shift left. Minimize moves to empty the array.

- Example: [1,3,4,1,5] → `3` (remove [4], then [1,3,1], then [5])

## Approach

**区间 DP**。dp[i][j] = 清空 arr[i..j] 的最少操作:
1. 单删 arr[i]:1 + dp[i+1][j];
2. arr[i]==arr[i+1]:1 + dp[i+2][j];
3. arr[i]==arr[j]:末步两者同删 dp[i+1][j−1];
4. 桥接 arr[i]==arr[k]==arr[j]:最后一步连成大回文一起删 dp[i+1][k−1] + dp[k+1][j−1];
5. 通用切分 dp[i][k] + dp[k+1][j](独立删除,合法上界)。
dp[0][n−1],O(n³),n ≤ 100。
