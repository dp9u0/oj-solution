# [1598] Crawler Log Folder

## Description

[LeetCode Problem Description](https://leetcode.com/problems/crawler-log-folder/description/)

* algorithms
* Easy (71.65%)
* Likes:    1551
* Dislikes: 99
* Testcase Example:  '["d1/","d2/","../","d21/","./"]'

```md
The Leetcode file system keeps a log each time some user performs a change folder operation.
The operations are described below:

'../' : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
'./' : Remain in the same folder.
'x/' : Move to the child folder named x (This folder is guaranteed to always exist).

You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.
The file system starts in the main folder, then the operations in logs are performed.
Return the minimum number of operations needed to go back to the main folder after the change folder operations.

Example 1:


Input: logs = ['d1/','d2/','../','d21/','./']
Output: 2
Explanation: Use this change folder operation '../' 2 times and go back to the main folder.

Example 2:


Input: logs = ['d1/','d2/','./','d3/','../','d31/']
Output: 3

Example 3:

Input: logs = ['d1/','../','../','../']
Output: 0


Constraints:

1 <= logs.length <= 103
2 <= logs[i].length <= 10
logs[i] contains lowercase English letters, digits, &#39;.&#39;, and &#39;/&#39;.
logs[i] follows the format described in the statement.
Folder names consist of lowercase English letters and digits.


```

## 题目翻译

给定一组文件夹操作日志。`../` 返回上级（已在根目录则不动），`./` 停留在当前目录，`x/` 进入子目录。从根目录开始执行所有操作后，返回回到根目录最少需要几步。

## 解题思路

用深度计数器 depth 模拟：`../` 则 depth = max(0, depth-1)，`./` 不变，其他 depth++。最终 depth 即为答案。

## Solution

[SourceCode](./solution.js)
