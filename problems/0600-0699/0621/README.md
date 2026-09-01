# [621] Task Scheduler

## Description

[LeetCode Problem Description](https://leetcode.com/problems/task-scheduler/description/)

* algorithms
* Medium (63.72%)
* Likes:    12084
* Dislikes: 2243
* Testcase Example:  '["A","A","A","B","B","B"]\n2'

```md
You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.
Return the minimum number of CPU intervals required to complete all tasks.

Example 1:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.
Example 2:
Input: tasks = ["A","C","A","B","D","B"], n = 1
Output: 6
Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
With a cooling interval of 1, you can repeat a task after just one other task.
Example 3:
Input: tasks = ["A","A","A", "B","B","B"], n = 3
Output: 10
Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

Constraints:
1 <= tasks.length <= 104
tasks[i] is an uppercase English letter.
0 <= n <= 100
Hint 1: There are many different solutions for this problem, including a greedy algorithm.
Hint 2: For every cycle, find the most frequent letter that can be placed in this cycle. After placing, decrease the frequency of that letter by one.
Hint 3: Use Priority Queue.

```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定一个用 A 到 Z 的字母标记的 CPU 任务数组，以及一个数字 n。每个 CPU 时间间隔可以是空闲（idle）或者执行一个任务。任务可以按任意顺序完成，但有一个约束：两个相同标签的任务之间必须至少有 n 个间隔。

返回完成所有任务所需的最小 CPU 时间间隔数。

示例 1：
输入：tasks = ["A","A","A","B","B","B"], n = 2
输出：8
解释：一种可能的序列是：A -> B -> idle -> A -> B -> idle -> A -> B。完成 task A 之后必须等待 2 个间隔才能再次执行 A，task B 同理。第 3 个间隔 A 和 B 都不能执行，所以空闲。到第 4 个间隔，已经过去了 2 个间隔，可以再次执行 A。

示例 2：
输入：tasks = ["A","C","A","B","D","B"], n = 1
输出：6
解释：一种可能的序列是：A -> B -> C -> D -> A -> B。冷却间隔为 1 时，只需间隔一个其他任务即可重复执行。

示例 3：
输入：tasks = ["A","A","A","B","B","B"], n = 3
输出：10
解释：一种可能的序列是：A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B。只有 A、B 两种任务，需要间隔 3 个时间片，导致两次重复之间要空闲两次。

约束：
1 <= tasks.length <= 10^4
tasks[i] 是大写英文字母
0 <= n <= 100

## 解题思路

数学公式法（贪心，O(tasks.length) 时间，O(26) 空间）：

1. 统计每种任务的出现次数，设最大次数为 `maxFreq`，出现次数等于 `maxFreq` 的任务种类数为 `maxCount`。
2. 考虑最高频任务：它出现 `maxFreq` 次，将时间轴切成 `(maxFreq - 1)` 个完整的"帧"，每帧长度为 `(n + 1)`（任务本身 + n 个冷却位），最后再加上 `maxCount` 个最高频任务的最后一次执行。
   即框架所需时间 = `(maxFreq - 1) * (n + 1) + maxCount`。
3. 若其他任务数量足以填满所有空闲位，则不需要 idle，答案就是 `tasks.length`。
4. 最终答案 = `max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount)`。
