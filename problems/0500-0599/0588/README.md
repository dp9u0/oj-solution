# [588] 设计内存文件系统

## Description


```md
https://leetcode.cn/problems/design-in-memory-file-system/description/
* algorithms
* Hard (45.56%)
* Likes:    125
* Dislikes: -
* Testcase Example:  '["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"]\n' +
'[[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]]'
设计一个内存文件系统，模拟以下功能：
实现文件系统类:
FileSystem() 初始化系统对象
List ls(String path)

如果 path 是一个文件路径，则返回一个仅包含该文件名称的列表。
如果 path 是一个目录路径，则返回该目录中文件和 目录名 的列表。


答案应该 按字典顺序 排列。
void mkdir(String path) 根据给定的路径创建一个新目录。给定的目录路径不存在。如果路径中的中间目录不存在，您也应该创建它们。
void addContentToFile(String filePath, String content)

如果 filePath 不存在，则创建包含给定内容 content的文件。
如果 filePath 已经存在，将给定的内容 content附加到原始内容。


String readContentFromFile(String filePath) 返回 filePath下的文件内容。

示例 1:
输入:
["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"]
[[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]]
输出:
[null,[],null,null,["a"],"hello"]
解释:
FileSystem fileSystem = new FileSystem();
fileSystem.ls("/");                         // 返回 []
fileSystem.mkdir("/a/b/c");
fileSystem.addContentToFile("/a/b/c/d", "hello");
fileSystem.ls("/");                         // 返回 ["a"]
fileSystem.readContentFromFile("/a/b/c/d"); // 返回 "hello"

注意:
1 <= path.length, filePath.length <= 100
path 和 filePath 都是绝对路径，除非是根目录 ‘/’ 自身，其他路径都是以 ‘/’ 开头且 不 以 ‘/’ 结束。
你可以假定所有操作的参数都是有效的，即用户不会获取不存在文件的内容，或者获取不存在文件夹和文件的列表。
你可以假定所有文件夹名字和文件名字都只包含小写字母，且同一文件夹下不会有相同名字的文件夹或文件。
你可以假定 addContentToFile 中的文件的父目录都存在。
1 <= content.length <= 50
ls, mkdir, addContentToFile, and readContentFromFile 最多被调用 300 次

```

## Solution

[SourceCode](./solution.js)

## Translation

Design an in-memory file system: `ls(path)` returns [filename] for a file, or sorted entries of a directory; `mkdir(path)` creates directories recursively; `addContentToFile(path, content)` appends content; `readContentFromFile(path)` returns the content.

- Example: ls("/") → []; mkdir("/a/b/c"); addContentToFile("/a/b/c/d", "hello"); ls("/a/b/c/d") → ["d"]; read → "hello"

## Approach

**Trie 目录树**:节点 `{ children: Map<名称, 节点>, content, isFile }`。统一 `walk(path, create)`:按 `/` 分段逐层查找(或创建);ls 对文件返回自身文件名、对目录返回子名排序;addContent 追加 content。所有操作按段数线性。
