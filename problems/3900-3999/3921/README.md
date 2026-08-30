# [3921] Score Validator

## Description

[LeetCode Problem Description](https://leetcode.com/problems/score-validator/description/)

* algorithms
* Easy (72.81%)
* Likes:    21
* Dislikes: 2
* Testcase Example:  '["1","4","W","6","WD"]'

```md
You are given a string array events.
Initially, score = 0 and counter = 0. Each element in events is one of the following:
"0", "1", "2", "3", "4", "6": Add that value to the total score.
"W": Increase the counter by 1. No score is added.
"WD": Add 1 to the total score.
"NB": Add 1 to the total score.
Process the array from left to right. Stop processing when either:
All elements in events have been processed, or
The counter becomes 10.
Return an integer array [score, counter], where:
score is the final total score.
counter is the final counter value.

Example 1:
Input: events = ["1","4","W","6","WD"]
Output: [12,1]
Explanation:


Event
Score
Counter


"1"
1
0


"4"
5
0


"W"
5
1


"6"
11
1


"WD"
12
1


Final result: [12, 1].
Example 2:
Input: events = ["WD","NB","0","4","4"]
Output: [10,0]
Explanation:


Event
Score
Counter


"WD"
1
0


"NB"
2
0


"0"
2
0


"4"
6
0


"4"
10
0


Final result: [10, 0].
Example 3:
Input: events = ["W","W","W","W","W","W","W","W","W","W","W"]
Output: [0,10]
Explanation:
After 10 occurrences of "W", the counter reaches 10, so processing stops. The remaining events are ignored.

Constraints:
1 <= events.length <= 1000
events[i] is one of "0", "1", "2", "3", "4", "6", "W", "WD", or "NB".

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给你一个字符串数组 events。

初始时，score = 0 且 counter = 0。events 中的每个元素是以下之一：

- "0", "1", "2", "3", "4", "6"：将该数值加到总分上。
- "W"：counter 增加 1，不加分数。
- "WD"：总分加 1。
- "NB"：总分加 1。

从左到右处理数组，当满足以下任一条件时停止处理：

- events 中所有元素都已处理完毕；或
- counter 变为 10。

返回一个整数数组 [score, counter]，其中 score 是最终总分，counter 是最终计数器的值。

示例 1：
输入：events = ["1","4","W","6","WD"]
输出：[12,1]
解释："1"→score=1；"4"→score=5；"W"→counter=1；"6"→score=11；"WD"→score=12。最终结果 [12, 1]。

示例 2：
输入：events = ["WD","NB","0","4","4"]
输出：[10,0]
解释："WD"→score=1；"NB"→score=2；"0"→score=2；"4"→score=6；"4"→score=10。最终结果 [10, 0]。

示例 3：
输入：events = ["W","W","W","W","W","W","W","W","W","W","W"]
输出：[0,10]
解释：当 "W" 出现 10 次后 counter 达到 10，处理停止，后面的事件被忽略。

约束：
1 <= events.length <= 1000
events[i] 是 "0", "1", "2", "3", "4", "6", "W", "WD", "NB" 之一。

## 解题思路

纯模拟题，一次遍历即可：

1. 维护 score 和 counter 两个变量，初始均为 0。
2. 从左到右遍历 events：
   - 若元素为 "W"：counter 加 1；若 counter 达到 10，立即停止遍历（后续事件忽略）。
   - 若元素为 "WD" 或 "NB"：score 加 1。
   - 否则（"0"/"1"/"2"/"3"/"4"/"6"）：score 加上对应的数值。
   - 注意判断顺序：必须先用全等 `=== "W"` 判断，再判断 "WD"，避免前缀匹配问题（"WD" 以 "W" 开头）。
3. 返回 [score, counter]。

时间复杂度 O(n)，空间复杂度 O(1)。
