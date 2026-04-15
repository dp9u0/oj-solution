# [1656] Design an Ordered Stream

## Description

[LeetCode Problem Description](https://leetcode.com/problems/design-an-ordered-stream/description/)

* algorithms
* Easy (82.61%)
* Likes:    572
* Dislikes: 3639
* Testcase Example:  '["OrderedStream","insert","insert","insert","insert","insert"]\n' +

```md
'[[5],[3,"ccccc"],[1,"aaaaa"],[2,"bbbbb"],[5,"eeeee"],[4,"ddddd"]]'
There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.
Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.
Implement the OrderedStream class:

OrderedStream(int n) Constructs the stream to take n values.
String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.


Example:


Input
['OrderedStream', 'insert', 'insert', 'insert', 'insert', 'insert']
[[5], [3, 'ccccc'], [1, 'aaaaa'], [2, 'bbbbb'], [5, 'eeeee'], [4, 'ddddd']]
Output
[null, [], ['aaaaa'], ['bbbbb', 'ccccc'], [], ['ddddd', 'eeeee']]
Explanation
// Note that the values ordered by ID is ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee'].
OrderedStream os = new OrderedStream(5);
os.insert(3, 'ccccc'); // Inserts (3, 'ccccc'), returns [].
os.insert(1, 'aaaaa'); // Inserts (1, 'aaaaa'), returns ['aaaaa'].
os.insert(2, 'bbbbb'); // Inserts (2, 'bbbbb'), returns ['bbbbb', 'ccccc'].
os.insert(5, 'eeeee'); // Inserts (5, 'eeeee'), returns [].
os.insert(4, 'ddddd'); // Inserts (4, 'ddddd'), returns ['ddddd', 'eeeee'].
// Concatentating all the chunks returned:
// [] + ['aaaaa'] + ['bbbbb', 'ccccc'] + [] + ['ddddd', 'eeeee'] = ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee']
// The resulting order is the same as the order above.


Constraints:

1 <= n <= 1000
1 <= id <= n
value.length == 5
valueconsists only of lowercase letters.
Each call to insertwill have a unique id.
Exactly n calls will be made to insert.


```

## 中文翻译

设计一个有序流，插入 (idKey, value) 对后返回从当前指针开始连续的值块。维护一个指针 ptr，插入后从 ptr 开始收集连续非空值。

## 解题思路

**数组模拟**

用数组存储值，ptr 从 1 开始。每次插入后，从 ptr 开始收集连续的非空值并推进 ptr。

时间复杂度：O(n) 总计，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
