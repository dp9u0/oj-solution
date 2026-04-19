# [1233] Remove Sub-Folders from the Filesystem

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/description/)

* algorithms
* Medium (78.60%)
* Likes:    1661
* Dislikes: 231
* Testcase Example:  '["/a","/a/b","/c/d","/c/d/e","/c/f"]'

```md
Given a list of folders folder, return the folders after removing all sub-folders in those folders. You may return the answer in any order.
If a folder[i] is located within another folder[j], it is called a sub-folder of it. A sub-folder of folder[j] must start with folder[j], followed by a '/'. For example, '/a/b' is a sub-folder of '/a', but '/b' is not a sub-folder of '/a/b/c'.
The format of a path is one or more concatenated strings of the form: &#39;/&#39; followed by one or more lowercase English letters.

For example, '/leetcode' and '/leetcode/problems' are valid paths while an empty string and '/' are not.


Example 1:

Input: folder = ['/a','/a/b','/c/d','/c/d/e','/c/f']
Output: ['/a','/c/d','/c/f']
Explanation: Folders '/a/b' is a subfolder of '/a' and '/c/d/e' is inside of folder '/c/d' in our filesystem.

Example 2:

Input: folder = ['/a','/a/b/c','/a/b/d']
Output: ['/a']
Explanation: Folders '/a/b/c' and '/a/b/d' will be removed because they are subfolders of '/a'.

Example 3:

Input: folder = ['/a/b/c','/a/b/ca','/a/b/d']
Output: ['/a/b/c','/a/b/ca','/a/b/d']


Constraints:

1 <= folder.length <= 4 * 104
2 <= folder[i].length <= 100
folder[i] contains only lowercase letters and &#39;/&#39;.
folder[i] always starts with the character &#39;/&#39;.
Each folder name is unique.


```

## 翻译

给定一个文件夹路径列表 `folder`，移除其中所有子文件夹后返回剩余的文件夹。可以以任意顺序返回结果。

如果 `folder[i]` 位于 `folder[j]` 内，则称其为子文件夹。子文件夹必须以父文件夹路径开头，后面紧跟 `/`。例如 `/a/b` 是 `/a` 的子文件夹，但 `/b` 不是 `/a/b/c` 的子文件夹。

## Approach

排序法：将所有路径按字典序排序后遍历。维护当前前缀 `prev`，如果当前路径以 `prev + '/'` 开头，说明是子文件夹，跳过；否则加入结果并更新 `prev`。

排序保证父文件夹一定在子文件夹之前出现。时间复杂度 O(n log n × L)，空间 O(1) 额外。

## Solution

[SourceCode](./solution.js)
