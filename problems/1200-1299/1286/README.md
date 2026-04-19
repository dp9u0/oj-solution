# [1286] Iterator for Combination

## Description

[LeetCode Problem Description](https://leetcode.com/problems/iterator-for-combination/description/)

* algorithms
* Medium (72.68%)
* Likes:    1393
* Dislikes: 108
* Testcase Example:  '["CombinationIterator","next","hasNext","next","hasNext","next","hasNext"]\n' +

```md
'[["abc",2],[],[],[],[],[],[]]'
Design the CombinationIterator class:

CombinationIterator(string characters, int combinationLength) Initializes the object with a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
next() Returns the next combination of length combinationLength in lexicographical order.
hasNext() Returns true if and only if there exists a next combination.


Example 1:

Input
['CombinationIterator', 'next', 'hasNext', 'next', 'hasNext', 'next', 'hasNext']
[['abc', 2], [], [], [], [], [], []]
Output
[null, 'ab', true, 'ac', true, 'bc', false]
Explanation
CombinationIterator itr = new CombinationIterator('abc', 2);
itr.next();    // return 'ab'
itr.hasNext(); // return True
itr.next();    // return 'ac'
itr.hasNext(); // return True
itr.next();    // return 'bc'
itr.hasNext(); // return False


Constraints:

1 <= combinationLength <= characters.length <= 15
All the characters of characters are unique.
At most 104 calls will be made to next and hasNext.
It is guaranteed that all calls of the function next are valid.


```

## 中文翻译

设计 CombinationIterator 类：
- `CombinationIterator(characters, combinationLength)`：用排序后的不同小写字母字符串和组合长度初始化
- `next()`：返回字典序下一个长度为 combinationLength 的组合
- `hasNext()`：是否存在下一个组合

## 解题思路

**位掩码预生成**：characters 长度 ≤ 15，可用位掩码枚举所有 C(n,k) 个组合，按字典序排序后用索引迭代。

时间复杂度：预处理 O(C(n,k) * k)，next/hasNext O(1)

## Solution

[SourceCode](./solution.js)
