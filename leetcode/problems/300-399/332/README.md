# [332] Reconstruct Itinerary

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reconstruct-itinerary/description/)

* algorithms
* Hard (43.37%)
* Likes:    6075
* Dislikes: 1902
* Testcase Example:  '[["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]'

```md
You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.
All of the tickets belong to a man who departs from 'JFK', thus, the itinerary must begin with 'JFK'. If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

For example, the itinerary ['JFK', 'LGA'] has a smaller lexical order than ['JFK', 'LGB'].

You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

Example 1:


Input: tickets = [['MUC','LHR'],['JFK','MUC'],['SFO','SJC'],['LHR','SFO']]
Output: ['JFK','MUC','LHR','SFO','SJC']

Example 2:


Input: tickets = [['JFK','SFO'],['JFK','ATL'],['SFO','ATL'],['ATL','JFK'],['ATL','SFO']]
Output: ['JFK','ATL','JFK','SFO','ATL','SFO']
Explanation: Another possible reconstruction is ['JFK','SFO','ATL','JFK','ATL','SFO'] but it is larger in lexical order.


Constraints:

1 <= tickets.length <= 300
tickets[i].length == 2
fromi.length == 3
toi.length == 3
fromi and toi consist of uppercase English letters.
fromi != toi


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你一份航班的行程表 tickets，其中 tickets[i] = [fromi, toi] 表示飞机出发和降落的机场地点。请你重新构造行程并返回。

所有这些机票都属于一个从 'JFK'（肯尼迪国际机场）出发的人，所以行程必须从 'JFK' 开始。如果存在多种有效的行程，你应该返回字典序最小的行程（当将行程读作单个字符串时）。

例如，行程 ['JFK', 'LGA'] 的字典序小于行程 ['JFK', 'LGB']。

你可以假设至少存在一种有效的行程。所有的机票必须都用一次，且只能用一次。

## 解题思路

这是一个欧拉路径问题，可以使用深度优先搜索（DFS）结合贪心算法来解决：

1. 首先，我们需要构建一个图，其中每个机场是一个节点，每张机票是一条有向边。
2. 对于每个出发机场，我们将目的地机场按照字典序排序，这样我们总是优先选择字典序较小的目的地。
3. 从'JFK'开始进行深度优先搜索，每次访问一个机场后，我们移除已使用的机票（边）。
4. 由于我们需要使用所有机票，且题目保证至少存在一个有效行程，所以我们可以使用后序遍历的方式构建结果。
5. 最后，我们需要将结果反转，因为后序遍历得到的结果是相反的。

这种方法能够确保我们找到字典序最小的有效行程。
