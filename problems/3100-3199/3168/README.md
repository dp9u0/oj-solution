# [3168] Minimum Number of Chairs in a Waiting Room

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/description/)

* algorithms
* Easy (79.29%)
* Likes:    157
* Dislikes: 16
* Testcase Example:  '"EEEEEEE"'

```md
You are given a string s. Simulate events at each second i:

If s[i] == &#39;E&#39;, a person enters the waiting room and takes one of the chairs in it.
If s[i] == &#39;L&#39;, a person leaves the waiting room, freeing up a chair.

Return the minimum number of chairs needed so that a chair is available for every person who enters the waiting room given that it is initially empty.

Example 1:

Input: s = 'EEEEEEE'
Output: 7
Explanation:
After each second, a person enters the waiting room and no person leaves it. Therefore, a minimum of 7 chairs is needed.

Example 2:

Input: s = 'ELELEEL'
Output: 2
Explanation:
Let&#39;s consider that there are 2 chairs in the waiting room. The table below shows the state of the waiting room at each second.




Second
Event
People in the Waiting Room
Available Chairs


0
Enter
1
1


1
Leave
0
2


2
Enter
1
1


3
Leave
0
2


4
Enter
1
1


5
Enter
2
0


6
Leave
1
1



Example 3:

Input: s = 'ELEELEELLL'
Output: 3
Explanation:
Let&#39;s consider that there are 3 chairs in the waiting room. The table below shows the state of the waiting room at each second.




Second
Event
People in the Waiting Room
Available Chairs


0
Enter
1
2


1
Leave
0
3


2
Enter
1
2


3
Enter
2
1


4
Leave
1
2


5
Enter
2
1


6
Enter
3
0


7
Leave
2
1


8
Leave
1
2


9
Leave
0
3




Constraints:

1 <= s.length <= 50
s consists only of the letters &#39;E&#39; and &#39;L&#39;.
s represents a valid sequence of entries and exits.


```

## 题目翻译

给定字符串 s，`E` 表示有人进入等候室占一把椅子，`L` 表示有人离开释放一把椅子。求等候室最初为空时，最少需要多少把椅子才能满足所有人需求。

## 解题思路

模拟计数：维护当前在场人数 count 和历史最大值 max。E 时 count++，L 时 count--。最终返回 max。

## Solution

[SourceCode](./solution.js)
