# [2671] Frequency Tracker

## Description

[LeetCode Problem Description](https://leetcode.com/problems/frequency-tracker/description/)

* algorithms
* Medium (31.12%)
* Likes:    346
* Dislikes: 31
* Testcase Example:  '["FrequencyTracker","add","add","hasFrequency"]\n[[],[3],[3],[2]]'

```md
Design a data structure that keeps track of the values in it and answers some queries regarding their frequencies.
Implement the FrequencyTracker class.

FrequencyTracker(): Initializes the FrequencyTracker object with an empty array initially.
void add(int number): Adds number to the data structure.
void deleteOne(int number): Deletes one occurrence of number from the data structure. The data structure may not contain number, and in this case nothing is deleted.
bool hasFrequency(int frequency): Returns true if there is a number in the data structure that occurs frequency number of times, otherwise, it returns false.


Example 1:

Input
['FrequencyTracker', 'add', 'add', 'hasFrequency']
[[], [3], [3], [2]]
Output
[null, null, null, true]
Explanation
FrequencyTracker frequencyTracker = new FrequencyTracker();
frequencyTracker.add(3); // The data structure now contains [3]
frequencyTracker.add(3); // The data structure now contains [3, 3]
frequencyTracker.hasFrequency(2); // Returns true, because 3 occurs twice

Example 2:

Input
['FrequencyTracker', 'add', 'deleteOne', 'hasFrequency']
[[], [1], [1], [1]]
Output
[null, null, null, false]
Explanation
FrequencyTracker frequencyTracker = new FrequencyTracker();
frequencyTracker.add(1); // The data structure now contains [1]
frequencyTracker.deleteOne(1); // The data structure becomes empty []
frequencyTracker.hasFrequency(1); // Returns false, because the data structure is empty

Example 3:

Input
['FrequencyTracker', 'hasFrequency', 'add', 'hasFrequency']
[[], [2], [3], [1]]
Output
[null, false, null, true]
Explanation
FrequencyTracker frequencyTracker = new FrequencyTracker();
frequencyTracker.hasFrequency(2); // Returns false, because the data structure is empty
frequencyTracker.add(3); // The data structure now contains [3]
frequencyTracker.hasFrequency(1); // Returns true, because 3 occurs once


Constraints:

1 <= number <= 105
1 <= frequency <= 105
At most, 2 *105calls will be made to add, deleteOne, and hasFrequencyin total.


```

## 中文翻译

设计数据结构 FrequencyTracker，支持 add、deleteOne 和 hasFrequency 操作，判断是否存在某数字出现恰好 frequency 次。

## 解题思路

**双哈希表**

1. cntMap：数字 → 出现次数
2. freqMap：频率 → 有几个数字具有该频率
3. add：先更新 freqMap（旧频率-1），cntMap+1，再更新 freqMap（新频率+1）
4. deleteOne：若 number 不在 cntMap 中或 cntMap[number]=0 则跳过；否则类似 add 反向操作
5. hasFrequency：直接查 freqMap[frequency] > 0

时间复杂度：O(1) 每次操作，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
