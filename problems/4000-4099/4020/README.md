# [4020] Elevator Requests I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/elevator-requests-i/description/)

* algorithms
* Easy (83.96%)
* Likes:    29
* Dislikes: 1
* Testcase Example:  '5\n[2,1,4,3]'

```md
You are given an integer n denoting the number of floors in a building, where the floors are numbered from 0 to n - 1.
You are also given an integer array requests, where requests represents the sequence of floor requests.
An elevator starts at floor 0 and follows these rules:

The elevator moves one floor per second.
The elevator serves requests in the given order.
If the elevator is already on the requested floor, no movement is needed.
After serving a request, the elevator immediately starts moving toward the next request.

Return the total time in seconds required to serve all requests.

Example 1:

Input: n = 5, requests = [2,1,4,3]
Output: 7
Explanation:

requests[0] = 2: Moving from floor 0 to floor 2 takes 2 seconds.
requests[1] = 1: Moving from floor 2 to floor 1 takes 1 second.
requests[2] = 4: Moving from floor 1 to floor 4 takes 3 seconds.
requests[3] = 3: Moving from floor 4 to floor 3 takes 1 second.

The total time required is 2 + 1 + 3 + 1 = 7 seconds.

Example 2:

Input: n = 3, requests = [2,0,0]
Output: 4
Explanation:

requests[0] = 2: Moving from floor 0 to floor 2 takes 2 seconds.
requests[1] = 0: Moving from floor 2 to floor 0 takes 2 seconds.
requests[2] = 0: No movement is needed.

The total time required is 2 + 2 + 0 = 4 seconds.


Constraints:

1 <= n <= 100
1 <= requests.length <= 100
0 <= requests[i] <= n - 1


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

大楼层数 n（0..n−1），电梯从 0 层出发按给定顺序响应 `requests`，每秒移动一层，同层无需移动。返回服务全部请求的总秒数。

示例：`5, [2,1,4,3]` → `7`；`3, [2,0,0]` → `4`

## 解题思路

直接模拟：累计相邻楼层差的绝对值。O(|requests|)。
