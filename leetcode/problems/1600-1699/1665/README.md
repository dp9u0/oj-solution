# [1665] Minimum Initial Energy to Finish Tasks

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/description/)

* algorithms
* Hard (60.72%)
* Likes:    616
* Dislikes: 40
* Testcase Example:  '[[1,2],[2,4],[4,8]]'

```md
You are given an array tasks where tasks[i] = [actuali, minimumi]:

actuali is the actual amount of energy you spend to finish the ith task.
minimumi is the minimum amount of energy you require to begin the ith task.

For example, if the task is [10, 12] and your current energy is 11, you cannot start this task. However, if your current energy is 13, you can complete this task, and your energy will be 3 after finishing it.
You can finish the tasks in any order you like.
Return the minimum initial amount of energy you will need to finish all the tasks.

Example 1:

Input: tasks = [[1,2],[2,4],[4,8]]
Output: 8
Explanation:
Starting with 8 energy, we finish the tasks in the following order:
- 3rd task. Now energy = 8 - 4 = 4.
- 2nd task. Now energy = 4 - 2 = 2.
- 1st task. Now energy = 2 - 1 = 1.
Notice that even though we have leftover energy, starting with 7 energy does not work because we cannot do the 3rd task.
Example 2:

Input: tasks = [[1,3],[2,4],[10,11],[10,12],[8,9]]
Output: 32
Explanation:
Starting with 32 energy, we finish the tasks in the following order:
- 1st task. Now energy = 32 - 1 = 31.
- 2nd task. Now energy = 31 - 2 = 29.
- 3rd task. Now energy = 29 - 10 = 19.
- 4th task. Now energy = 19 - 10 = 9.
- 5th task. Now energy = 9 - 8 = 1.
Example 3:

Input: tasks = [[1,7],[2,8],[3,9],[4,10],[5,11],[6,12]]
Output: 27
Explanation:
Starting with 27 energy, we finish the tasks in the following order:
- 5th task. Now energy = 27 - 5 = 22.
- 2nd task. Now energy = 22 - 2 = 20.
- 3rd task. Now energy = 20 - 3 = 17.
- 1st task. Now energy = 17 - 1 = 16.
- 4th task. Now energy = 16 - 4 = 12.
- 6th task. Now energy = 12 - 6 = 6.


Constraints:

1 <= tasks.length <= 105
1 <= actual​i<= minimumi<= 104


```

## 题目翻译

给定任务数组 tasks，每个任务 [actual, minimum] 表示完成消耗 actual 能量，但开始时至少需要 minimum 能量。可以任意顺序完成任务。求完成所有任务所需的最少初始能量。

## 解题思路

**贪心排序**。

- 考虑两个任务 A 和 B，决定谁先做。
- 任务 A: 消耗 a, 门槛 ma；任务 B: 消耗 b, 门槛 mb。
- 先 A 后 B：需要 max(ma, a + mb) 能量开始 A。
- 先 B 后 A：需要 max(mb, b + ma) 能量开始 B。
- 先 A 后 B 更优 ⟺ max(ma, a + mb) <= max(mb, b + ma)。
- 即排序比较函数：比较 (minimum - actual) 的差值，差值大的先做。
- 即按 (minimum - actual) 降序排列。
- 排序后，模拟计算所需初始能量：初始能量 = sum(actual) + max(0, 各位置的 minimum - 剩余能量 的最大值)。

更简洁：排序后，从后往前推。设剩余能量 cur = 0，从最后一个任务开始反推：
- 要完成任务 i，需要 max(minimum_i, actual_i + cur) 的能量。
- 完成后剩余 = 上式 - actual_i。
- 即 cur = max(minimum_i - actual_i, cur) + actual_i... 不对，让我重新推导。

从前往后模拟：初始能量 E，做完所有任务后剩余 E - sum(actual)。
在每个任务 i 处，需要 E - sum(actual of previous tasks) >= minimum_i。
即 E >= minimum_i + sum(actual of previous tasks)。
所以 E >= max over all i of (minimum_i + sum(actual_0..actual_{i-1}))。
E = max(minimum_i + prefix_sum[i]) for all i。

排序后按 (minimum - actual) 降序，然后计算 E = max(minimum_i + prefix_actual_before_i)。

## Solution

[SourceCode](./solution.js)
