# [1352] 最后 K 个数的乘积

## Description


```md
https://leetcode.cn/problems/product-of-the-last-k-numbers/description/
* algorithms
* Medium (52.79%)
* Likes:    137
* Dislikes: -
* Testcase Example:  '["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"]\n' +
'[[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]'
设计一个算法，该算法接受一个整数流并检索该流中最后 k 个整数的乘积。
实现 ProductOfNumbers 类：
ProductOfNumbers() 用一个空的流初始化对象。
void add(int num) 将数字 num 添加到当前数字列表的最后面。
int getProduct(int k) 返回当前数字列表中，最后 k 个数字的乘积。你可以假设当前列表中始终 至少 包含 k 个数字。
题目数据保证：任何时候，任一连续数字序列的乘积都在 32 位整数范围内，不会溢出。

示例：
输入：
["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"]
[[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]
输出：
[null,null,null,null,null,null,20,40,0,null,32]
解释：
ProductOfNumbers productOfNumbers = new ProductOfNumbers();
productOfNumbers.add(3);        // [3]
productOfNumbers.add(0);        // [3,0]
productOfNumbers.add(2);        // [3,0,2]
productOfNumbers.add(5);        // [3,0,2,5]
productOfNumbers.add(4);        // [3,0,2,5,4]
productOfNumbers.getProduct(2); // 返回 20 。最后 2 个数字的乘积是 5 * 4 = 20
productOfNumbers.getProduct(3); // 返回 40 。最后 3 个数字的乘积是 2 * 5 * 4 = 40
productOfNumbers.getProduct(4); // 返回  0 。最后 4 个数字的乘积是 0 * 2 * 5 * 4 = 0
productOfNumbers.add(8);        // [3,0,2,5,4,8]
productOfNumbers.getProduct(2); // 返回 32 。最后 2 个数字的乘积是 4 * 8 = 32

提示：
0 <= num <= 100
1 <= k <= 4 * 104
add 和 getProduct 最多被调用 4 * 104 次。
在任何时间点流的乘积都在 32 位整数范围内。

进阶：您能否 同时 将 GetProduct 和 Add 的实现改为 O(1) 时间复杂度，而不是 O(k) 时间复杂度？
Hint 1: Keep all prefix products of numbers in an array, then calculate the product of last K elements in O(1) complexity.
Hint 2: When a zero number is added, clean the array of prefix products.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译 (English)

Design an algorithm that accepts a stream of integers and retrieves the product of the last k integers of that stream.

Implement the ProductOfNumbers class:

- ProductOfNumbers() Initializes the object with an empty stream.
- void add(int num) Appends the integer num to the stream.
- int getProduct(int k) Returns the product of the last k integers in the current list. You can assume that the current list always contains at least k numbers.

The test cases are generated so that, at all times, the product of any contiguous sequence of numbers will fit in a 32-bit integer without overflowing.

Example:
Input: ["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"], [[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]
Output: [null,null,null,null,null,null,20,40,0,null,32]

Constraints:
- 0 <= num <= 100
- 1 <= k <= 4 * 10^4
- At most 4 * 10^4 calls will be made to add and getProduct.
- The product of the stream is guaranteed to fit in a 32-bit integer at any time.

Follow-up: Can you implement both GetProduct and Add to work in O(1) time complexity instead of O(k) time complexity?

## 解题思路

**前缀积 + 零重置（双 O(1)）**

- 维护前缀积数组 pre，pre[0] = 1，pre[i] = 前 i 个数的乘积。
- add(num)：
  - 若 num === 0，则其后任意区间乘积都为 0，直接清空前缀积数组（pre = [1]），之后 getProduct(k) 只需判断 k 是否超出数组长度即可返回 0。
  - 否则 push(pre[pre.length - 1] * num)。
- getProduct(k)：
  - 若 k >= pre.length，说明区间内含 0，返回 0。
  - 否则返回 pre[n] / pre[n - k]（n 为当前前缀积数组末尾下标）。
- 复杂度：add O(1)，getProduct O(1)。题目保证任意连续段乘积在 32 位整数范围内，故前缀积均可用 JS Number 精确表示，除法结果必为精确整数。
