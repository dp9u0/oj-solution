# [2728] 计算一个环形街道上的房屋数量

## Description


```md
https://leetcode.cn/problems/count-houses-in-a-circular-street/description/
* algorithms
* Easy (49.44%)
* Likes:    5
* Dislikes: -
* Testcase Example:  '[0,0,0,0]\n10'
给定一个代表环形街道的类 Street 和一个正整数 k，表示街道上房屋的最大数量（也就是说房屋数量不超过 k ）。每个房屋的门初始时可以是开着的也可以是关着的。
刚开始，你站在一座房子的门前。你的任务是计算街道上的房屋数量。
Street 类包含以下函数：
void openDoor() ：打开当前房屋的门。
void closeDoor() ：关闭当前房屋的门。
boolean isDoorOpen() ：如果当前房屋的门是开着的返回 true ，否则返回 false 。
void moveRight() ：向右移动到下一座房屋。
void moveLeft() ：向左移动到上一座房屋。
返回 ans，它表示街道上的房屋数量。

示例 1：
输入：street = [0,0,0,0], k = 10
输出：4
解释：街道上有 4 座房屋，它们的门都是关着的。
房屋数量小于 k，即 10。
示例 2：
输入：street = [1,0,1,1,0], k = 5
输出：5
解释：街道上有 5 座房屋，向右移动时第 1、3 和 4 座房屋的门是开着的，其余的门都是关着的。房屋数量等于 k，即 5。

解释：
n  是房屋数量
1 <= n <= k <= 103
Hint 1: Close the door of k houses moving in one direction.
Hint 2: Open the door of the current house.
Hint 3: Move in one direction and count until you reach the house with the open door.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given a class `Street` representing a circular street and a positive integer `k`, the maximum number of houses on the street (so the count is at most `k`). Each house's door starts either open or closed. You start in front of one house. Count the number of houses using only the interface: `openDoor()`, `closeDoor()`, `isDoorOpen()`, `moveRight()`, `moveLeft()`. Return the house count `ans`.

**Constraints:**
- 1 <= n <= k <= 10^3 (n = actual house count)

## Approach

标记法:向右走 k 步并沿途关所有门(因 n ≤ k,每扇门至少被关过一次);给当前房屋开门;继续右移并计数,直到回到这扇开着的门,计数即为 n。注意先 moveRight 再检查。

时间 O(k),空间 O(1)。
