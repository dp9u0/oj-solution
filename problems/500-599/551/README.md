# [551] Student Attendance Record I

## Description

* algorithms
* Easy (45.04%)
* Total Accepted:    44.2K
* Total Submissions: 98.1K
* Testcase Example:  '"PPALLP"'

```md
You are given a string representing an attendance record for a student. The record only contains the following three characters:
'A' : Absent.
'L' : Late.
 'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).
You need to return whether the student could be rewarded according to his attendance record.
Example 1:
Input: "PPALLP"
Output: True
Example 2:
Input: "PPALLL"
Output: False

```

## Solution

坑 : continuous连续的L

[SourceCode](./solution.js)