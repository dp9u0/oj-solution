# [3433] Count Mentions Per User

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-mentions-per-user/description/)

* algorithms
* Medium (50.77%)
* Likes:    393
* Dislikes: 251
* Testcase Example:  '2\n[["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","71","HERE"]]'

```md
You are given an integer numberOfUsers representing the total number of users and an array events of size n x 3.
Each events[i] can be either of the following two types:

Message Event: ['MESSAGE', 'timestampi', 'mentions_stringi']

This event indicates that a set of users was mentioned in a message at timestampi.
The mentions_stringi string can contain one of the following tokens:

id<number>: where <number> is an integer in range [0,numberOfUsers - 1]. There can be multiple ids separated by a single whitespace and may contain duplicates. This can mention even the offline users.
ALL: mentions all users.
HERE: mentions all online users.




Offline Event: ['OFFLINE', 'timestampi', 'idi']

This event indicates that the user idi had become offline at timestampi for 60 time units. The user will automatically be online again at time timestampi + 60.



Return an array mentions where mentions[i] represents the number of mentions the user with id i has across all MESSAGE events.
All users are initially online, and if a user goes offline or comes back online, their status change is processed before handling any message event that occurs at the same timestamp.
Note that a user can be mentioned multiple times in a single message event, and each mention should be counted separately.

Example 1:

Input: numberOfUsers = 2, events = [['MESSAGE','10','id1 id0'],['OFFLINE','11','0'],['MESSAGE','71','HERE']]
Output: [2,2]
Explanation:
Initially, all users are online.
At timestamp 10, id1 and id0 are mentioned. mentions = [1,1]
At timestamp 11, id0 goes offline.
At timestamp 71, id0 comes back online and 'HERE' is mentioned. mentions = [2,2]

Example 2:

Input: numberOfUsers = 2, events = [['MESSAGE','10','id1 id0'],['OFFLINE','11','0'],['MESSAGE','12','ALL']]
Output: [2,2]
Explanation:
Initially, all users are online.
At timestamp 10, id1 and id0 are mentioned. mentions = [1,1]
At timestamp 11, id0 goes offline.
At timestamp 12, 'ALL' is mentioned. This includes offline users, so both id0 and id1 are mentioned. mentions = [2,2]

Example 3:

Input: numberOfUsers = 2, events = [['OFFLINE','10','0'],['MESSAGE','12','HERE']]
Output: [0,1]
Explanation:
Initially, all users are online.
At timestamp 10, id0 goes offline.
At timestamp 12, 'HERE' is mentioned. Because id0 is still offline, they will not be mentioned. mentions = [0,1]


Constraints:

1 <= numberOfUsers <= 100
1 <= events.length <= 100
events[i].length == 3
events[i][0] will be one of MESSAGE or OFFLINE.
1 <= int(events[i][1]) <= 105
The number of id<number> mentions in any 'MESSAGE' event is between 1 and 100.
0 <= <number> <= numberOfUsers - 1
It is guaranteed that the user id referenced in the OFFLINE event is online at the time the event occurs.


```

## 题目翻译

给定用户数 `numberOfUsers` 和事件数组 `events`。事件有两种：
- MESSAGE：在 timestamp 时提及某些用户，mentions_string 可以包含 `id<number>`、`ALL`（所有用户）、`HERE`（所有在线用户）
- OFFLINE：用户 id 在 timestamp 时下线 60 时间单位，到 timestamp+60 自动上线

返回每个用户被提及的次数数组。初始所有用户在线。同一时间戳下，先处理下线/上线状态变化，再处理消息。

## 解题思路

**事件排序 + 模拟**。

1. 将所有事件按 timestamp 排序，同一时间戳 OFFLINE 优先于 MESSAGE（因为状态变化先于消息处理）。
2. 维护每个用户的在线截止时间 `onlineTime[i]`（初始为 0，表示始终在线；下线时设为 timestamp+60）。
3. 遍历排序后的事件：
   - OFFLINE：更新对应用户的上线时间。
   - MESSAGE：根据 mentions_string 处理——ALL 提及所有人，HERE 提及当前在线的人（timestamp >= onlineTime[i]），id<N> 提及指定用户。
4. 注意 id 提及中可能有重复，每个都算一次。

## Solution

[SourceCode](./solution.js)
