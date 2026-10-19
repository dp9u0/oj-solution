# [194] 转置文件

## Description

```md
https://leetcode.cn/problems/transpose-file/description/
* shell
* Medium (45.15%)
* Likes:    84
* Dislikes: -
* Total Accepted:    20.9K
* Total Submissions: 61.3K
给定一个文件 file.txt，转置它的内容。
你可以假设每行列数相同，并且每个字段由 tab 字符分隔。
示例：
假设 file.txt 文件内容如下：
name age
alice 21
ryan 30
输出：
name alice ryan
age 21 30
```

## Description (English)

Given a text file file.txt, transpose its content. You may assume each row has the same length and each field is separated by the tab character.

Example:
Input:
name	age
alice	21
ryan	30
Output:
name	alice	ryan
age	21	30

## 思路

awk 单趟：以双下标 `(行号, 列号)` 把字段存入哈希表并记录最大列数，END 阶段按"列优先"拼接输出（字段间空格相连）。时间 O(行×列)。

注意 CN 版字段以**空格**分隔（默认 FS 即可，无需 -F'\t'；EN 版才是 tab）。

## Solution

[SourceCode](./solution.js)
