# [251] 展开二维向量

## Description


```md
https://leetcode.cn/problems/flatten-2d-vector/description/
* algorithms
* Medium (53.79%)
* Likes:    88
* Dislikes: -
* Testcase Example:  '["Vector2D","next","next","next","hasNext","hasNext","next","hasNext"]\n' +
'[[[[1,2],[3],[4]]],[],[],[],[],[],[],[]]'
请设计并实现一个能够展开二维向量的迭代器。该迭代器需要支持 next 和 hasNext 两种操作。
实现 Vector2D 类：
Vector2D(int[][] vec) 使用二维向量 vec 初始化对象
next() 从二维向量返回下一个元素并将指针移动到下一个位置。你可以假设对 next 的所有调用都是合法的。
hasNext() 当向量中还有元素返回 true，否则返回 false。

示例 1：
输入：
["Vector2D", "next", "next", "next", "hasNext", "hasNext", "next", "hasNext"]
[[[[1, 2], [3], [4]]], [], [], [], [], [], [], []]
输出：
[null, 1, 2, 3, true, true, 4, false]
解释：
Vector2D vector2D = new Vector2D([[1, 2], [3], [4]]);
vector2D.next();    // return 1
vector2D.next();    // return 2
vector2D.next();    // return 3
vector2D.hasNext(); // return True
vector2D.hasNext(); // return True
vector2D.next();    // return 4
vector2D.hasNext(); // return False

提示：
0 <= vec.length <= 200
0 <= vec[i].length <= 500
-500 <= vec[i][j] <= 500
最多调用 next 和 hasNext 105 次。

进阶：尝试在代码中仅使用 C++ 提供的迭代器 或 Java 提供的迭代器。
Hint 1: How many variables do you need to keep track?
Hint 2: Two variables is all you need. Try with x and y.
Hint 3: Beware of empty rows. It could be the first few rows.
Hint 4: To write correct code, think about the invariant to maintain. What is it?
Hint 5: The invariant is x and y must always point to a valid point in the 2d vector. Should you maintain your invariant ahead of time or right when you need it?
Hint 6: Not sure? Think about how you would implement hasNext(). Which is more complex?
Hint 7: Common logic in two different places should be refactored into a common method.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Design a `Vector2D` iterator over a 2D vector (inner rows may be empty): `next()` returns the next element, `hasNext()` reports whether any remain.

**Constraints:**
- 0 <= total elements <= 10^5, at most 10^5 calls

## Approach

row/col 双指针,`advance()` 惰性跳过耗尽或空的行(next/hasNext 入口各调一次),避免预展平。

时间:均摊 O(1) 每次 next/hasNext,空间 O(1)。
