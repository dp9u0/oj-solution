# [面试题 17.07] 婴儿名字

## Description


```md
https://leetcode.cn/problems/baby-names-lcci/description/
* lcci
* Medium (42.98%)
* Likes:    79
* Dislikes: -
* Testcase Example:  '["John(15)","Jon(12)","Chris(13)","Kris(4)","Christopher(19)"]\n' +
'["(Jon,John)","(John,Johnny)","(Chris,Kris)","(Chris,Christopher)"]'
每年，政府都会公布一万个最常见的婴儿名字和它们出现的频率，也就是同名婴儿的数量。有些名字有多种拼法，例如，John 和 Jon 本质上是相同的名字，但被当成了两个名字公布出来。给定两个列表，一个是名字及对应的频率，另一个是本质相同的名字对。设计一个算法打印出每个真实名字的实际频率。注意，如果 John 和 Jon 是相同的，并且 Jon 和 Johnny 相同，则 John 与 Johnny 也相同，即它们有传递和对称性。
在结果列表中，选择 字典序最小 的名字作为真实名字。

示例：
输入：names = ["John(15)","Jon(12)","Chris(13)","Kris(4)","Christopher(19)"], synonyms = ["(Jon,John)","(John,Johnny)","(Chris,Kris)","(Chris,Christopher)"]
输出：["John(27)","Chris(36)"]

提示：
names.length <= 100000
Hint 1: 讨论一下简单方法:当它们是同义词时将名称合并到一起。你如何确定传递关系?A == B, A == C, C == D 表示 A == D == B == C。
Hint 2: 该问题的核心是将名字分组成不同的拼写。基于此，计算出频率就相对容易了。
Hint 3: 你要尝试的一件事是维护每个名称到其“真正”拼写的映射。你还需要从真正的拼写映射到所有同义词。有时，你可能要合并两组不同的名称。运行一下这个算法，看看你能否让它工作。然后看看是否能简化/优化它。
Hint 4: 使用上述方法的一种简单方式是将每个名称映射到一个备选拼写列表。当一个组中的一个名称设置为等于另一个组中的名称时会发生什么?
Hint 5: 如果每个名称都映射到其替代拼写的列表，那么在将 X 和 Y 设置为同义词时，你可能需要更新许多列表。如果 X 是{A, B, C}的同义词，而 Y 是{D, E, F}的同义词，那么你需要将{Y, D, E, F}添加到 A 的同义词列表、B 的同义词列表、C 的同义词列表和 X 的同义词列表中。{Y, D, E, F}同理。有更快的方法么?
Hint 6: 相反，X、A、B 和 C 应该映射到同一个集合{X, A, B, C}。Y、D、E 和 F 应该映射到同一个集合{Y, D, E, F}。当我们将 X 和 Y 设置为同义词时，可以将其中一个集合复制到另一个集合中(例如，将{Y, D, E, F}添加到{X, A, B, C}中)。散列表还需进行其他更改么?
Hint 7: 另一种方法是把它看作一幅图。应该怎么做?
Hint 8: 可以把将 X, Y 记为同义词看作是在 X 节点和 Y 节点之间添加一条边。那么如何算一组同义词有哪些呢?
Hint 9: 每个连通子图表示一组同义词。要找到每个组，可以重复广度优先(或深度优先)搜索。

```

## Description (English)

Every year the government publishes the ten thousand most common baby names with their frequencies. Some names have multiple spellings (e.g. John and Jon are essentially the same name but published separately). Given a list of names with frequencies and a list of synonym pairs, design an algorithm to print the true frequency of each real name. Synonymy is transitive and symmetric (John=Jon and Jon=Johnny implies John=Johnny). In the result, choose the lexicographically smallest name as the real name.

Example:
Input: names = ["John(15)","Jon(12)","Chris(13)","Kris(4)","Christopher(19)"], synonyms = ["(Jon,John)","(John,Johnny)","(Chris,Kris)","(Chris,Christopher)"]
Output: ["John(27)","Chris(36)"]

Note: names.length <= 100000.

## 思路

并查集：同义词对建边，合并时把字典序较小的名字作为根（组代表）；names 中各名解析频次后按根聚合。输出按 names 中首次出现该组的顺序（与样例一致），synonyms 里未出现在 names 的拼写只参与合并不带频次。

## Solution

[SourceCode](./solution.js)
