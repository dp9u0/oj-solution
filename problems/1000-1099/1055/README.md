# [1055] 形成字符串的最短路径

## Description


```md
https://leetcode.cn/problems/shortest-way-to-form-string/description/
* algorithms
* Medium (61.85%)
* Likes:    146
* Dislikes: -
* Testcase Example:  '"abc"\n"abcbc"'
对于任何字符串，我们可以通过删除其中一些字符（也可能不删除）来构造该字符串的 子序列 。(例如，“ace” 是 “abcde” 的子序列，而 “aec” 不是)。
给定源字符串 source 和目标字符串 target，返回 源字符串 source 中能通过串联形成目标字符串 target 的 子序列 的最小数量 。如果无法通过串联源字符串中的子序列来构造目标字符串，则返回 -1。

示例 1：
输入：source = "abc", target = "abcbc"
输出：2
解释：目标字符串 "abcbc" 可以由 "abc" 和 "bc" 形成，它们都是源字符串 "abc" 的子序列。
示例 2：
输入：source = "abc", target = "acdbc"
输出：-1
解释：由于目标字符串中包含字符 "d"，所以无法由源字符串的子序列构建目标字符串。
示例 3：
输入：source = "xyz", target = "xzyxz"
输出：3
解释：目标字符串可以按如下方式构建： "xz" + "y" + "xz"。

提示：
1 <= source.length, target.length <= 1000
source 和 target 仅包含英文小写字母。
Hint 1: Which conditions have to been met in order to be impossible to form the target string?
Hint 2: If there exists a character in the target string which doesn't exist in the source string then it will be impossible to form the target string.
Hint 3: Assuming we are in the case which is possible to form the target string, how can we assure the minimum number of used subsequences of source?
Hint 4: For each used subsequence try to match the leftmost character of the current subsequence with the leftmost character of the target string, if they match then erase both character otherwise erase just the subsequence character whenever the current subsequence gets empty, reset it to a new copy of subsequence and increment the count, do this until the target sequence gets empty. Finally return the count.

```

## Solution

[SourceCode](./solution.js)

## Translation

Given source and target strings, return the minimum number of concatenated subsequences of source needed to form target, or -1 if impossible (a char in target missing from source).

- Example: source = "xyz", target = "xzyxz" → `3` ("xz" + "y" + "xz")

## Approach

**后继跳表 + 贪心**。预计算 next[i][c] = i 起源串中字符 c 的最小下标(倒序递推,表长 n+1)。先判存在性:target 任一字符 next[0][c] = -1 则 -1。然后贪心:每个 pass 从当前 pos 起,逐个 target 字符查 next[pos][c];查不到(-1)则开新 pass(count++),从 next[0][c] 重启。每步 O(1),总 O(26n + |target|)。贪心最优性:每 pass 尽量多吃是交换论证下不劣的。
