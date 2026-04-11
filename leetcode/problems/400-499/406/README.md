# [406] Queue Reconstruction by Height

## Description

[LeetCode Problem Description](https://leetcode.com/problems/queue-reconstruction-by-height/description/)

* algorithms
* Medium (74.66%)
* Likes:    7248
* Dislikes: 754
* Testcase Example:  '[[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]'

```md
You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order). Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki other people in front who have a height greater than or equal to hi.
Reconstruct and return the queue that is represented by the input array people. The returned queue should be formatted as an array queue, where queue[j] = [hj, kj] is the attributes of the jth person in the queue (queue[0] is the person at the front of the queue).

Example 1:

Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
Explanation:
Person 0 has height 5 with no other people taller or the same height in front.
Person 1 has height 7 with no other people taller or the same height in front.
Person 2 has height 5 with two persons taller or the same height in front, which is person 0 and 1.
Person 3 has height 6 with one person taller or the same height in front, which is person 1.
Person 4 has height 4 with four people taller or the same height in front, which are people 0, 1, 2, and 3.
Person 5 has height 7 with one person taller or the same height in front, which is person 1.
Hence [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] is the reconstructed queue.

Example 2:

Input: people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]
Output: [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]


Constraints:

1 <= people.length <= 2000
0 <= hi <= 106
0 <= ki < people.length
It is guaranteed that the queue can be reconstructed.


```

## 翻译

给定一个数组 `people`，`people[i] = [hi, ki]` 表示第 i 个人身高为 `hi`，前面恰好有 `ki` 个身高大于等于 `hi` 的人。

重构并返回队列。返回的队列应为一个数组 `queue`，其中 `queue[j] = [hj, kj]` 是队列中第 j 个人的属性。

## Approach

**贪心 + 插入排序。** 先按身高降序排列（身高相同的按 k 升序），然后依次将每个人插入到结果数组的第 k 个位置。

身高高的人先插入，不影响已插入的人的 k 值。身高相同时 k 小的先插入，保证正确性。

时间复杂度：O(n^2)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
