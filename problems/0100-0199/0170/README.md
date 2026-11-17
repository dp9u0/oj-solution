# [170] 两数之和 III - 数据结构设计

## Description


```md
https://leetcode.cn/problems/two-sum-iii-data-structure-design/description/
* algorithms
* Easy (42.57%)
* Likes:    109
* Dislikes: -
* Testcase Example:  '["TwoSum","add","add","add","find","find"]\n[[],[1],[3],[5],[4],[7]]'
设计一个接收整数流的数据结构，该数据结构支持检查是否存在两数之和等于特定值。
实现 TwoSum 类：
TwoSum() 使用空数组初始化 TwoSum 对象
void add(int number) 向数据结构添加一个数 number
boolean find(int value) 寻找数据结构中是否存在一对整数，使得两数之和与给定的值相等。如果存在，返回 true ；否则，返回 false 。

示例：
输入：
["TwoSum", "add", "add", "add", "find", "find"]
[[], [1], [3], [5], [4], [7]]
输出：
[null, null, null, null, true, false]
解释：
TwoSum twoSum = new TwoSum();
twoSum.add(1);   // [] --> [1]
twoSum.add(3);   // [1] --> [1,3]
twoSum.add(5);   // [1,3] --> [1,3,5]
twoSum.find(4);  // 1 + 3 = 4，返回 true
twoSum.find(7);  // 没有两个整数加起来等于 7 ，返回 false

提示：
-105 <= number <= 105
-231 <= value <= 231 - 1
最多调用 104 次 add 和 find

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Design a `TwoSum` class supporting `add(number)` and `find(value)` — find returns whether there exist two stored entries (distinct positions) summing to `value`.

**Constraints:**
- up to 10^4 calls, -10^5 <= number <= 10^5

## Approach

Map 值→出现次数。find 枚举每个值 x:补数 = value - x;补数与 x 相同则要求计数 ≥ 2,否则要求补数存在。

时间:add O(1),find O(n);空间 O(n)。
