# [1503] Last Moment Before All Ants Fall Out of a Plank

## Description

[LeetCode Problem Description](https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/description/)

* algorithms
* Medium (68.17%)
* Likes:    1581
* Dislikes: 440
* Testcase Example:  '4\n[4,3]\n[0,1]'

```md
We have a wooden plank of the length n units. Some ants are walking on the plank, each ant moves with a speed of 1 unit per second. Some of the ants move to the left, the other move to the right.
When two ants moving in two different directions meet at some point, they change their directions and continue moving again. Assume changing directions does not take any additional time.
When an ant reaches one end of the plank at a time t, it falls out of the plank immediately.
Given an integer n and two integer arrays left and right, the positions of the ants moving to the left and the right, return the moment when the last ant(s) fall out of the plank.

Example 1:


Input: n = 4, left = [4,3], right = [0,1]
Output: 4
Explanation: In the image above:
-The ant at index 0 is named A and going to the right.
-The ant at index 1 is named B and going to the right.
-The ant at index 3 is named C and going to the left.
-The ant at index 4 is named D and going to the left.
The last moment when an ant was on the plank is t = 4 seconds. After that, it falls immediately out of the plank. (i.e., We can say that at t = 4.0000000001, there are no ants on the plank).

Example 2:


Input: n = 7, left = [], right = [0,1,2,3,4,5,6,7]
Output: 7
Explanation: All ants are going to the right, the ant at index 0 needs 7 seconds to fall.

Example 3:


Input: n = 7, left = [0,1,2,3,4,5,6,7], right = []
Output: 7
Explanation: All ants are going to the left, the ant at index 7 needs 7 seconds to fall.


Constraints:

1 <= n <= 104
0 <= left.length <= n + 1
0 <= left[i] <= n
0 <= right.length <= n + 1
0 <= right[i] <= n
1 <= left.length + right.length <= n + 1
All values of left and right are unique, and each value can appear only in one of the two arrays.


```

## 翻译

长度为 n 的木板上有蚂蚁，有的向左走，有的向右走，速度都是 1。两只蚂蚁相遇时会调转方向。蚂蚁到达端点就掉下去。求最后一只蚂蚁掉下去的时刻。

## Approach

关键洞察：蚂蚁相遇后换方向，等价于它们穿过彼此继续前进（因为所有蚂蚁相同）。所以答案就是所有向左蚂蚁到达左端的时间最大值（即 left 中最大值）和所有向右蚂蚁到达右端的时间最大值（即 n - right 中最小值）中取较大者。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
