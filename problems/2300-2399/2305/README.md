# [2305] Fair Distribution of Cookies

## Description

[LeetCode Problem Description](https://leetcode.com/problems/fair-distribution-of-cookies/description/)

* algorithms
* Medium (69.88%)
* Likes:    2739
* Dislikes: 127
* Testcase Example:  '[8,15,10,20,8]\n2'

```md
You are given an integer array cookies, where cookies[i] denotes the number of cookies in the ith bag. You are also given an integer k that denotes the number of children to distribute all the bags of cookies to. All the cookies in the same bag must go to the same child and cannot be split up.
The unfairness of a distribution is defined as the maximum total cookies obtained by a single child in the distribution.
Return the minimum unfairness of all distributions.

Example 1:

Input: cookies = [8,15,10,20,8], k = 2
Output: 31
Explanation: One optimal distribution is [8,15,8] and [10,20]
- The 1st child receives [8,15,8] which has a total of 8 + 15 + 8 = 31 cookies.
- The 2nd child receives [10,20] which has a total of 10 + 20 = 30 cookies.
The unfairness of the distribution is max(31,30) = 31.
It can be shown that there is no distribution with an unfairness less than 31.

Example 2:

Input: cookies = [6,1,3,2,2,4,1,2], k = 3
Output: 7
Explanation: One optimal distribution is [6,1], [3,2,2], and [4,1,2]
- The 1st child receives [6,1] which has a total of 6 + 1 = 7 cookies.
- The 2nd child receives [3,2,2] which has a total of 3 + 2 + 2 = 7 cookies.
- The 3rd child receives [4,1,2] which has a total of 4 + 1 + 2 = 7 cookies.
The unfairness of the distribution is max(7,7,7) = 7.
It can be shown that there is no distribution with an unfairness less than 7.


Constraints:

2 <= cookies.length <= 8
1 <= cookies[i] <= 105
2 <= k <= cookies.length


```

## 翻译

给定 cookies 数组（cookies[i] 表示第 i 袋饼干数）和 k 个孩子。每袋饼干必须完整分给一个孩子。不公平度 = 获得最多饼干的孩子总数。返回最小不公平度。

## Approach

回溯 + 剪枝。n <= 8，k <= 8，枚举每袋饼干分给哪个孩子。

对每个孩子维护当前饼干总数，回溯分配每袋饼干。剪枝：若某个孩子总数已超过当前最优解，跳过。

时间复杂度 O(k^n)，空间复杂度 O(k)。

## Solution

[SourceCode](./solution.js)
