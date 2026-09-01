# [326] Power of Three

## Description

* algorithms
* Easy (41.17%)
* Total Accepted:    159.2K
* Total Submissions: 386.8K
* Testcase Example:  '27'

```md
Given an integer, write a function to determine if it is a power of three.
Example 1:
Input: 27
Output: true
Example 2:
Input: 0
Output: false
Example 3:
Input: 9
Output: true
Example 4:
Input: 45
Output: false
Follow up:
Could you do it without using any loop / recursion?

```

## Solution

3 是个质数,因此可以根据 `1162261467 % n === 0` 判断是否是 `powof3`

[SourceCode](./solution.js)