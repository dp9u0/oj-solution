# [2782] 唯一类别的数量

## Description


```md
https://leetcode.cn/problems/number-of-unique-categories/description/
* algorithms
* Medium (51.05%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '6\n[1,1,2,2,3,3]'
现给定一个整数 n 和一个 CategoryHandler 类的对象 categoryHandler 。
有 n  个元素，编号从 0 到 n - 1。每个元素都有一个类别，你的任务是找出唯一类别的数量。
CategoryHandler 类包含以下方法，可能对你有帮助：
boolean haveSameCategory(integer a, integer b)：如果 a 和 b 属于相同的类别，则返回 true，否则返回 false。同时，如果 a 或 b 不是有效的数字（即大于等于 n 或小于 0），它也会返回 false。
返回 唯一类别的数量。

示例 1：
输入：n = 6, categoryHandler = [1,1,2,2,3,3]
输出：3
解释：这个示例中有 6 个元素。前两个元素属于类别 1，接下来两个属于类别 2，最后两个元素属于类别 3。所以有 3 个唯一类别。
示例 2：
输入：n = 5, categoryHandler = [1,2,3,4,5]
输出：5
解释：这个示例中有 5 个元素。每个元素属于一个唯一的类别。所以有 5 个唯一类别。
示例 3：
输入：n = 3, categoryHandler = [1,1,1]
输出：1
解释：这个示例中有 3 个元素。它们全部属于同一个类别。所以只有 1 个唯一类别。

提示：
1 <= n <= 100
Hint 1: It can be proven that all pairs should be asked from the helper function.
Hint 2: Iterate from the first element. For each element `i`, ask the helper function `i` with all `j < i`.
Hint 3: If there is some `j < i` that `i` and `j` belong to the same group, go to next `i`. Otherwise, add one to the current number of groups.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): n elements (n <= 100), an interactive handler haveSameCategory(a, b). Count the number of distinct categories.

Approach: keep a list of category representatives. For each element i, query haveSameCategory(i, r) against every representative r; if any matches, i joins an existing category; otherwise increment the count and add i as a new representative. At most n(n-1)/2 queries, trivial for n <= 100.

Complexity: O(n^2) handler calls.
