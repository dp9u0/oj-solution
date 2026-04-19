# [1948] Delete Duplicate Folders in System

## Description

[LeetCode Problem Description](https://leetcode.com/problems/delete-duplicate-folders-in-system/description/)

* algorithms
* Hard (77.59%)
* Likes:    621
* Dislikes: 143
* Testcase Example:  '[["a"],["c"],["d"],["a","b"],["c","b"],["d","a"]]'

```md
Due to a bug, there are many duplicate folders in a file system. You are given a 2D array paths, where paths[i] is an array representing an absolute path to the ith folder in the file system.

For example, ['one', 'two', 'three'] represents the path '/one/two/three'.

Two folders (not necessarily on the same level) are identical if they contain the same non-empty set of identical subfolders and underlying subfolder structure. The folders do not need to be at the root level to be identical. If two or more folders are identical, then mark the folders as well as all their subfolders.

For example, folders '/a' and '/b' in the file structure below are identical. They (as well as their subfolders) should all be marked:

/a
/a/x
/a/x/y
/a/z
/b
/b/x
/b/x/y
/b/z


However, if the file structure also included the path '/b/w', then the folders '/a' and '/b' would not be identical. Note that '/a/x' and '/b/x' would still be considered identical even with the added folder.

Once all the identical folders and their subfolders have been marked, the file system will delete all of them. The file system only runs the deletion once, so any folders that become identical after the initial deletion are not deleted.
Return the 2D array ans containing the paths of the remaining folders after deleting all the marked folders. The paths may be returned in any order.

Example 1:


Input: paths = [['a'],['c'],['d'],['a','b'],['c','b'],['d','a']]
Output: [['d'],['d','a']]
Explanation: The file structure is as shown.
Folders '/a' and '/c' (and their subfolders) are marked for deletion because they both contain an empty
folder named 'b'.

Example 2:


Input: paths = [['a'],['c'],['a','b'],['c','b'],['a','b','x'],['a','b','x','y'],['w'],['w','y']]
Output: [['c'],['c','b'],['a'],['a','b']]
Explanation: The file structure is as shown.
Folders '/a/b/x' and '/w' (and their subfolders) are marked for deletion because they both contain an empty folder named 'y'.
Note that folders '/a' and '/c' are identical after the deletion, but they are not deleted because they were not marked beforehand.

Example 3:


Input: paths = [['a','b'],['c','d'],['c'],['a']]
Output: [['c'],['c','d'],['a'],['a','b']]
Explanation: All folders are unique in the file system.
Note that the returned array can be in a different order as the order does not matter.


Constraints:

1 <= paths.length <= 2 * 104
1 <= paths[i].length <= 500
1 <= paths[i][j].length <= 10
1 <= sum(paths[i][j].length) <= 2 * 105
path[i][j] consists of lowercase English letters.
No two paths lead to the same folder.
For any folder not at the root level, its parent folder will also be in the input.


```

## 中文翻译

由于一个 bug，文件系统中存在许多重复的文件夹。给你一个二维数组 `paths`，其中 `paths[i]` 表示第 i 个文件夹的绝对路径。

两个文件夹（不一定在同一层级）如果包含相同的非空子文件夹集合以及相同的子文件夹结构，则它们是相同的。如果两个或多个文件夹相同，则将这些文件夹及其所有子文件夹标记为待删除。

文件系统只会运行一次删除操作，因此在初始删除后变得相同的文件夹不会被删除。

返回删除所有标记文件夹后剩余文件夹的路径。

## 解题思路

**Trie + 子树序列化**

1. 将所有路径构建成一棵 Trie 树
2. 后序 DFS 计算每个节点的子树序列化（排序子节点名 + 子节点序列化拼接）
3. 将序列化相同的节点分组，出现次数 > 1 的序列化表示存在重复文件夹
4. 标记所有重复节点及其所有后代为待删除
5. 遍历原始路径，收集未被标记删除的路径

时间复杂度：O(n * L * log L)，其中 L 是路径最大长度，排序子节点键值
空间复杂度：O(n * L)

## Solution

[SourceCode](./solution.js)
