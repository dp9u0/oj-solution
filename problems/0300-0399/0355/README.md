# [355] Design Twitter

## Description

[LeetCode Problem Description](https://leetcode.com/problems/design-twitter/description/)

* algorithms
* Medium (44.45%)
* Testcase Example:  '["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"]\n' +

```md
'[[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]'
Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.
Implement the Twitter class:
Twitter() Initializes your twitter object.
void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
List getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.
void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.

Example 1:
Input
["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
Output
[null, null, [5], null, null, [6, 5], null, [5]]
Explanation
Twitter twitter = new Twitter();
twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
twitter.follow(1, 2);    // User 1 follows user 2.
twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.unfollow(1, 2);  // User 1 unfollows user 2.
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.

Constraints:
1
0
All the tweets have unique IDs.
At most 3 * 10^4 calls will be made to postTweet, getNewsFeed, follow, and unfollow.
A user cannot follow himself.

```

## Solution

[SourceCode](./solution.js)

### 题目描述 (翻译)

设计一个简化的推特(Twitter)，可以让用户发布推文，关注/取消关注其他用户，并能够在用户的动态(news feed)中看到最新的10条推文。

实现 `Twitter` 类：
*   `Twitter()` 初始化推特对象。
*   `void postTweet(int userId, int tweetId)` 用户 `userId` 发布一条新推文，推文ID为 `tweetId`。每次调用该函数都会保证 `tweetId` 唯一。
*   `List<Integer> getNewsFeed(int userId)` 获取用户动态(news feed)中最新的 10 条推文的 ID。动态中的每一条推文必须是由用户关注的人或是用户自己发布的。推文必须从最新到最旧排序。
*   `void follow(int followerId, int followeeId)` ID 为 `followerId` 的用户开始关注 ID 为 `followeeId` 的用户。
*   `void unfollow(int followerId, int followeeId)` ID 为 `followerId` 的用户取消关注 ID 为 `followeeId` 的用户。

### 解题思路 (Approach)

这是一道典型的系统设计类算法题。我们需要维护以下几个核心数据：
1.  **推文 (Tweets)**：记录每个用户发过的推文，并且为了能按时间倒序排序，我们需要一个全局的时间戳或者计数器，每发一条推文时间戳自增，并绑定到推文上。
2.  **关注关系 (Follows)**：记录每个用户关注了哪些用户（通常使用 Hash Set）。

当获取动态 `getNewsFeed` 时，我们需要：
1.  获取用户自身的推文列表。
2.  获取用户关注的所有其他用户的推文列表。
3.  将这些列表合并，并取出时间戳最新的 10 条推文。

由于要求从多个有序（或无序但附带时间戳）列表中取出前 K（这里 K=10）个元素，这是一个经典的“合并 K 个有序列表”或“求 Top K”的问题。由于只需要最新的 10 条，并且题目说明推文总数可能很多，我们可以使用如下简单方法（因为K很小，且列表数量有限）：
*   收集用户自己及其关注的所有人的最近推文。
*   每个人的推文列表中，最多只取最新（即最后面）的 10 条（因为一个人提供的推文不可能超过10条在最终的 Top 10 中）。
*   将收集到的推文按照时间戳降序排序，取前 10 条的 ID 即可。
