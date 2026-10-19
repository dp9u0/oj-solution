# [193] 有效电话号码

## Description

```md
https://leetcode.cn/problems/valid-phone-numbers/description/
* shell
* Easy (40.86%)
* Likes:    89
* Dislikes: -
* Total Accepted:    33.4K
* Total Submissions: 81.7K
给定一个包含电话号码列表（一行一个）的文本文件 file.txt，写一个 bash 脚本输出所有有效的电话号码。
假设一个有效的电话号码必须满足以下两种格式之一：(xxx) xxx-xxxx 或 xxx-xxx-xxxx
示例：
假设 file.txt 内容如下：
987-123-4567
123 456 7890
(123) 456-7890
你的脚本应当输出下列有效的电话号码：
987-123-4567
(123) 456-7890
```

## Description (English)

Given a text file file.txt that contains a list of phone numbers (one per line), write a bash script to output all valid phone numbers. A valid phone number must be in one of the formats: (xxx) xxx-xxxx or xxx-xxx-xxxx.

Example:
Input:
987-123-4567
123 456 7890
(123) 456-7890
Output:
987-123-4567
(123) 456-7890

## 思路

grep POSIX ERE 全行锚定：`^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$`——前缀两种形态用分支表达，其余段固定；不用 grep -P，避免判题环境 Perl 正则兼容问题。O(行数)。

## Solution

[SourceCode](./solution.js)
