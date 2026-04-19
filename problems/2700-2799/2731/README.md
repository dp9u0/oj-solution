# [2731] Movement of Robots

## Description

[LeetCode Problem Description](https://leetcode.com/problems/movement-of-robots/description/)

* algorithms
* Medium (27.94%)
* Likes:    546
* Dislikes: 103
* Testcase Example:  '[-2,0,2]\n"RLL"\n3'

```md
Some robots are standing on an infinite number line with their initial coordinates given by a 0-indexed integer array nums and will start moving once given the command to move. The robots will move a unit distance each second.
You are given a string s denoting the direction in which robots will move on command. &#39;L&#39; means the robot will move towards the left side or negative side of the number line, whereas &#39;R&#39; means the robot will move towards the right side or positive side of the number line.
If two robots collide, they will start moving in opposite directions.
Return the sum of distances between all thepairs of robots d seconds afterthe command. Since the sum can be very large, return it modulo 109 + 7.
Note:

For two robots at the index i and j, pair (i,j) and pair (j,i) are considered the same pair.
When robots collide, they instantly change their directions without wasting any time.
Collision happenswhen two robots share the same place in amoment.

For example, if a robot is positioned in 0 going to the right and another is positioned in 2 going to the left, the next second they&#39;ll be both in 1 and they will change direction and the next second the first one will be in 0, heading left, and another will be in 2, heading right.
For example,if a robot is positioned in 0 going to the right and another is positioned in 1going to the left, the next second the first one will be in 0, heading left, and another will be in 1, heading right.




Example 1:

Input: nums = [-2,0,2], s = 'RLL', d = 3
Output: 8
Explanation:
After 1 second, the positions are [-1,-1,1]. Now, the robot at index 0 will move left, and the robot at index 1 will move right.
After 2 seconds, the positions are [-2,0,0]. Now, the robot at index 1 will move left, and the robot at index 2 will move right.
After 3 seconds, the positions are [-3,-1,1].
The distance between the robot at index 0 and 1 is abs(-3 - (-1)) = 2.
The distance between the robot at index 0 and 2 is abs(-3 - 1) = 4.
The distance between the robot at index 1 and 2 is abs(-1 - 1) = 2.
The sum of the pairs of all distances = 2 + 4 + 2 = 8.

Example 2:

Input: nums = [1,0], s = 'RL', d = 2
Output: 5
Explanation:
After 1 second, the positions are [2,-1].
After 2 seconds, the positions are [3,-2].
The distance between the two robots is abs(-2 - 3) = 5.


Constraints:

2 <= nums.length <= 105
-2 * 109<= nums[i] <= 2 * 109
0 <= d <= 109
nums.length == s.length
s consists of &#39;L&#39; and &#39;R&#39; only
nums[i]will be unique.


```

## 中文翻译

机器人在数轴上移动，给定初始位置和方向（L/R），每秒移动1单位。碰撞时两个机器人交换方向。求 d 秒后所有机器人对之间距离之和 mod 10^9+7。

## 解题思路

**关键观察：碰撞交换方向等价于穿透**

两个机器人碰撞后交换方向，和它们直接穿过对方的效果相同（因为机器人不可区分）。所以直接忽略碰撞，计算最终位置后排序，用前缀和求所有对的距离之和。

时间复杂度：O(n log n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
