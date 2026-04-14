# [2751] Robot Collisions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/robot-collisions/description/)

* algorithms
* Hard (61.61%)
* Likes:    1513
* Dislikes: 114
* Testcase Example:  '[5,4,3,2,1]\n[2,17,9,15,10]\n"RRRRR"'

```md
There are n 1-indexed robots, each having a position on a line, health, and movement direction.
You are given 0-indexed integer arrays positions, healths, and a string directions (directions[i] is either &#39;L&#39; for left or &#39;R&#39; for right). All integers in positions are unique.
All robots start moving on the line simultaneously at the same speed in their given directions. If two robots ever share the same position while moving, they will collide.
If two robots collide, the robot with lower health is removed from the line, and the health of the other robot decreases by one. The surviving robot continues in the same direction it was going. If both robots have the same health, they are both removed from the line.
Your task is to determine the health of the robots that survive the collisions, in the same order that the robots were given, i.e. final health of robot 1 (if survived), final health of robot 2 (if survived), and so on. If there are no survivors, return an empty array.
Return an array containing the health of the remaining robots (in the order they were given in the input), after no further collisions can occur.
Note: The positions may be unsorted.


Example 1:


Input: positions = [5,4,3,2,1], healths = [2,17,9,15,10], directions = 'RRRRR'
Output: [2,17,9,15,10]
Explanation: No collision occurs in this example, since all robots are moving in the same direction. So, the health of the robots in order from the first robot is returned, [2, 17, 9, 15, 10].

Example 2:


Input: positions = [3,5,2,6], healths = [10,10,15,12], directions = 'RLRL'
Output: [14]
Explanation: There are 2 collisions in this example. Firstly, robot 1 and robot 2 will collide, and since both have the same health, they will be removed from the line. Next, robot 3 and robot 4 will collide and since robot 4&#39;s health is smaller, it gets removed, and robot 3&#39;s health becomes 15 - 1 = 14. Only robot 3 remains, so we return [14].

Example 3:


Input: positions = [1,2,5,6], healths = [10,10,11,11], directions = 'RLRL'
Output: []
Explanation: Robot 1 and robot 2 will collide and since both have the same health, they are both removed. Robot 3 and 4 will collide and since both have the same health, they are both removed. So, we return an empty array, [].

Constraints:

1 <= positions.length == healths.length == directions.length == n <= 105
1 <= positions[i], healths[i] <= 109
directions[i] == &#39;L&#39; or directions[i] == &#39;R&#39;
All values in positions are distinct


```

## 题目翻译

有 n 个机器人（1-indexed），每个机器人有位置、生命值和移动方向。给定 0-indexed 的数组 positions、healths 和字符串 directions（'L' 或 'R'）。positions 中的整数互不相同。

所有机器人同时以相同速度开始移动。如果两个机器人在移动过程中到达同一位置，就会发生碰撞：
- 生命值较低的机器人被移除，另一方生命值减 1
- 如果生命值相同，两个机器人都被移除
- 幸存的机器人继续沿原方向移动

返回幸存机器人的生命值，按输入顺序排列。注意 positions 可能未排序。

## 解题思路

**栈模拟碰撞过程**

1. 将机器人按位置排序（从左到右）
2. 遍历排序后的机器人，使用栈来模拟碰撞：
   - 如果机器人向右（R），直接入栈（不会与前面的碰撞）
   - 如果机器人向左（L），检查栈顶是否有向右（R）的机器人：
     - 碰撞处理：比较生命值，按照规则处理
     - 循环处理直到当前 L 机器人被消灭或栈为空
3. 最后收集所有幸存机器人，按原始输入顺序输出

## Solution

[SourceCode](./solution.js)
