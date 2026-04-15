# [3857] Minimum Cost to Split into Ones

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-to-split-into-ones/description/)

* algorithms
* Medium (83.26%)
* Likes:    57
* Dislikes: 9
* Testcase Example:  '3'

```md
You are given an integer n.
In one operation, you may split an integer x into two positive integers a and b such that a + b = x.
The cost of this operation is a * b.
Return an integer denoting the minimum total cost required to split the integer n into n ones.

Example 1:

Input: n = 3
Output: 3
Explanation:
One optimal set of operations is:



x
a
b
a + b
a * b
Cost


3
1
2
3
2
2


2
1
1
2
1
1



Thus, the minimum total cost is 2 + 1 = 3.

Example 2:

Input: n = 4
Output: 6
Explanation:

One optimal set of operations is:



x
a
b
a + b
a * b
Cost


4
2
2
4
4
4


2
1
1
2
1
1


2
1
1
2
1
1



Thus, the minimum total cost is 4 + 1 + 1 = 6.



Constraints:

1 <= n <= 500


```

## 中文翻译

将整数 n 分裂成 n 个 1。每次操作将 x 分成 a+b=x，代价 a*b。求最小总代价。

## 解题思路

**DP**

dp[i] = 将 i 分裂成 i 个 1 的最小代价。dp[1] = 0。dp[i] = min(dp[j] + dp[i-j] + j*(i-j)) for j from 1 to i-1。

但注意到 j*(i-j) 在 j=i/2 时最大，而 dp[j]+dp[i-j] 是对称的。实际上 dp[i] = i*(i-1)/2（恒等式可证），因为无论怎么分，总代价 = n(n-1)/2。

验证：dp[1]=0, dp[2]=1, dp[3]=min(dp[1]+dp[2]+2, dp[2]+dp[1]+2)=3. 3*2/2=3 ✓
dp[4]=6. 4*3/2=6 ✓

所以答案直接返回 n*(n-1)/2。

时间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
