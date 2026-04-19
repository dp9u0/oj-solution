# [388] Longest Absolute File Path

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-absolute-file-path/description/)

* algorithms
* Medium (49.33%)
* Likes:    1392
* Dislikes: 2606
* Testcase Example:  '"dir\\n\\tsubdir1\\n\\tsubdir2\\n\\t\\tfile.ext"'

```md
Suppose we have a file system that stores both files and directories. An example of one system is represented in the following picture:

Here, we have dir as the only directory in the root. dir contains two subdirectories, subdir1 and subdir2. subdir1 contains a file file1.ext and subdirectory subsubdir1. subdir2 contains a subdirectory subsubdir2, which contains a file file2.ext.
In text form, it looks like this (with ⟶ representing the tab character):

dir
⟶ subdir1
⟶ ⟶ file1.ext
⟶ ⟶ subsubdir1
⟶ subdir2
⟶ ⟶ subsubdir2
⟶ ⟶ ⟶ file2.ext

If we were to write this representation in code, it will look like this: 'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext'. Note that the &#39;\n&#39; and &#39;\t&#39; are the new-line and tab characters.
Every file and directory has a unique absolute path in the file system, which is the order of directories that must be opened to reach the file/directory itself, all concatenated by &#39;/&#39;s. Using the above example, the absolute path to file2.ext is 'dir/subdir2/subsubdir2/file2.ext'. Each directory name consists of letters, digits, and/or spaces. Each file name is of the form name.extension, where name and extension consist of letters, digits, and/or spaces.
Given a string input representing the file system in the explained format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.
Note that the testcases are generated such that the file system is valid and no file or directory name has length 0.

Example 1:


Input: input = 'dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext'
Output: 20
Explanation: We have only one file, and the absolute path is 'dir/subdir2/file.ext' of length 20.

Example 2:


Input: input = 'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext'
Output: 32
Explanation: We have two files:
'dir/subdir1/file1.ext' of length 21
'dir/subdir2/subsubdir2/file2.ext' of length 32.
We return 32 since it is the longest absolute path to a file.

Example 3:

Input: input = 'a'
Output: 0
Explanation: We do not have any files, just a single directory named 'a'.


Constraints:

1 <= input.length <= 104
input may contain lowercase or uppercase English letters, a new line character &#39;\n&#39;, a tab character &#39;\t&#39;, a dot &#39;.&#39;, a space &#39; &#39;, and digits.
All file and directory names have positive length.


```

## 中文翻译

给定字符串表示的文件系统（\n 分隔条目，\t 表示层级深度），返回最长文件绝对路径长度。若没有文件返回 0。

## 解题思路

按 \n 分割每行，统计前导 \t 数量得到深度。用数组 len[depth] 记录每层路径累计长度。遇到含 `.` 的文件名时更新答案。路径长度 = 父层累计 + 当前名字长度 + depth（斜杠数）。

## Solution

[SourceCode](./solution.js)
