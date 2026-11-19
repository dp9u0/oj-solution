# [1101] 彼此熟识的最早时间

## Description


```md
https://leetcode.cn/problems/the-earliest-moment-when-everyone-become-friends/description/
* algorithms
* Medium (69.24%)
* Likes:    51
* Dislikes: -
* Testcase Example:  '[[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]]\n' +
'6'
在一个社交圈子当中，有 n 个人。每个人都有一个从 0 到 n - 1 的唯一编号。我们有一份日志列表 logs，其中 logs[i] = [timestampi, xi, yi] 表示 xi 和 yi 将在同一时间 timestampi 成为朋友。
友谊是 相互 的。也就是说，如果 a 和 b 是朋友，那么 b 和 a 也是朋友。同样，如果 a 和 b 是朋友，或者 a 是 b 朋友的朋友 ，那么 a 和 b 认识。
返回圈子里所有人之间都认识的最早时间。如果找不到最早时间，就返回 -1 。

示例 1：
输入：logs = [[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]], N = 6
输出：20190301
解释：
第一次结交发生在 timestamp = 20190101，0 和 1 成为好友，社交朋友圈如下 [0,1], [2], [3], [4], [5]。
第二次结交发生在 timestamp = 20190104，3 和 4 成为好友，社交朋友圈如下 [0,1], [2], [3,4], [5].
第三次结交发生在 timestamp = 20190107，2 和 3 成为好友，社交朋友圈如下 [0,1], [2,3,4], [5].
第四次结交发生在 timestamp = 20190211，1 和 5 成为好友，社交朋友圈如下 [0,1,5], [2,3,4].
第五次结交发生在 timestamp = 20190224，2 和 4 已经是好友了。
第六次结交发生在 timestamp = 20190301，0 和 3 成为好友，大家都互相熟识了。
示例 2:
输入: logs = [[0,2,0],[1,0,1],[3,0,3],[4,1,2],[7,3,1]], n = 4
输出: 3

提示：
2 <= n <= 100
1 <= logs.length <= 104
logs[i].length == 3
0 <= timestampi <= 109
0 <= xi, yi <= n - 1
xi != yi
timestampi 中的所有时间戳 均不同
所有的对 (xi, yi) 在输入中最多出现一次
Hint 1: Sort the log items by their timestamp.
Hint 2: How can we model this problem as a graph problem?
Hint 3: Let's use a union-find data structure. At the beginning we have a graph with N nodes but no edges.
Hint 4: Then we loop through the events and unite each node until the number of connected components reach to 1. Notice that each time two different connected components are united the number of connected components decreases by 1.

```

## Solution

[SourceCode](./solution.js)

## Translation

Logs give friendship timestamps; everyone comes to know everyone transitively. Return the earliest time when the whole group is one connected component, else -1.

- Example: see LeetCode 1101 sample 1 → `20190301`

## Approach

**排序 + 并查集**。logs 按时间戳升序排序,逐条 union,连通分量数从 n 递减,减到 1 时返回当前时间戳;处理完仍 >1 返回 -1。路径减半压缩,近 O(m α(n))。
