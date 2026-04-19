# [754] Reach a Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reach-a-number/description/)

* algorithms
* Easy (31.23%)
* Testcase Example:  '1'

```md
You are standing at position 0 on an infinite number line.  There is a goal at position target.
On each move, you can either go left or right.  During the n-th move (starting from 1), you take n steps.
Return the minimum number of steps required to reach the destination.
Example 1:
Input: target = 3
Output: 2
Explanation:
On the first move we step from 0 to 1.
On the second step we step from 1 to 3.
Example 2:
Input: target = 2
Output: 3
Explanation:
On the first move we step from 0 to 1.
On the second move we step  from 1 to -1.
On the third move we step from -1 to 2.
Note:
target will be a non-zero integer in the range [-10^9, 10^9].
```

## Solution

观察:

* `6 = 1 + 2 + 3` 翻转其中一个数字 例如 `2` 可以到达 位置 `2= 1 - 2 + 3` 其中 `2 = 6 - 2 / 2`
* `15 = 1 + 2 + 3 + 4 + 5` 翻转其中2个数字 例如 `5` 可以到达 位置 `5 = 1 + 2 + 3 + 4 - 5` 其中 `5 = 15 - 5 / 2`

上面不可以通过只向右到达的位置可以理解为全部向右然后再往左走**两次**某个长度.

[SourceCode](./solution.js)