# [825] Friends Of Appropriate Ages

## Description

[LeetCode Problem Description](https://leetcode.com/problems/friends-of-appropriate-ages/description/)

* algorithms
* Medium (49.89%)
* Likes:    885
* Dislikes: 1278
* Testcase Example:  '[16,16]'

```md
There are n persons on a social media website. You are given an integer array ages where ages[i] is the age of the ith person.
A Person x will not send a friend request to a person y (x != y) if any of the following conditions is true:

age[y] <= 0.5 * age[x] + 7
age[y] > age[x]
age[y] > 100 &amp;&amp; age[x] < 100

Otherwise, x will send a friend request to y.
Note that if x sends a request to y, y will not necessarily send a request to x. Also, a person will not send a friend request to themself.
Return the total number of friend requests made.

Example 1:

Input: ages = [16,16]
Output: 2
Explanation: 2 people friend request each other.

Example 2:

Input: ages = [16,17,18]
Output: 2
Explanation: Friend requests are made 17 -> 16, 18 -> 17.

Example 3:

Input: ages = [20,30,100,110,120]
Output: 3
Explanation: Friend requests are made 110 -> 100, 120 -> 110, 120 -> 100.


Constraints:

n == ages.length
1 <= n <= 2 * 104
1 <= ages[i] <= 120


```

## 题目翻译

给定年龄数组 ages，x 不会向 y 发好友请求的条件：age[y] <= 0.5*age[x]+7、age[y] > age[x]、或 age[y]>100 且 age[x]<100。否则会发请求。返回总请求数。

## 解题思路

统计每个年龄的人数 cnt。对每对年龄 (a, b)，如果 b > 0.5*a+7 且 b <= a，则年龄 a 的人会向年龄 b 的人发请求，数量为 cnt[a]*cnt[b]（a==b 时为 cnt[a]*(cnt[a]-1)）。年龄范围 1~120，O(120^2) 枚举即可。

## Solution

[SourceCode](./solution.js)
