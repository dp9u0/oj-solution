# [920] Number of Music Playlists

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-music-playlists/description/)

* algorithms
* Hard (60.02%)
* Likes:    2469
* Dislikes: 206
* Testcase Example:  '3\n3\n1'

```md
Your music player contains n different songs. You want to listen to goal songs (not necessarily different) during your trip. To avoid boredom, you will create a playlist so that:

Every song is played at least once.
A song can only be played again only if k other songs have been played.

Given n, goal, and k, return the number of possible playlists that you can create. Since the answer can be very large, return it modulo 109 + 7.

Example 1:

Input: n = 3, goal = 3, k = 1
Output: 6
Explanation: There are 6 possible playlists: [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], and [3, 2, 1].

Example 2:

Input: n = 2, goal = 3, k = 0
Output: 6
Explanation: There are 6 possible playlists: [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2, 1], [2, 1, 2], and [1, 2, 2].

Example 3:

Input: n = 2, goal = 3, k = 1
Output: 2
Explanation: There are 2 possible playlists: [1, 2, 1] and [2, 1, 2].


Constraints:

0 <= k < n <= goal <= 100


```

## 中文翻译

音乐播放器有 n 首不同的歌，要听 goal 首歌。每首歌至少播放一次，且一首歌重复播放前必须有 k 首其他歌被播放过。求合法播放列表数量，mod 10^9+7。

## 解题思路

DP。dp[i][j] = 长度为 i、恰好用了 j 首不同歌的播放列表数。转移：选新歌 dp[i-1][j-1] * (n-j+1)；重复旧歌 dp[i-1][j] * max(0, j-k)。

## Solution

[SourceCode](./solution.js)
