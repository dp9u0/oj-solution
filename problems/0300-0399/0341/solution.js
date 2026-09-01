/*
 * @lc app=leetcode id=341 lang=javascript
 *
 * [341] Flatten Nested List Iterator
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.stack = [];
    
    // 将嵌套列表从后往前压入栈中
    for (let i = nestedList.length - 1; i >= 0; i--) {
        this.stack.push(nestedList[i]);
    }
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    // 确保栈顶是一个整数
    while (this.stack.length > 0 && !this.stack[this.stack.length - 1].isInteger()) {
        // 如果栈顶是列表，将其展开并压入栈中
        const list = this.stack.pop().getList();
        for (let i = list.length - 1; i >= 0; i--) {
            this.stack.push(list[i]);
        }
    }
    
    return this.stack.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    // 确保栈顶是整数
    if (this.hasNext()) {
        return this.stack.pop().getInteger();
    }
    return null;
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
// @lc code=end

/*
[341] 扁平化嵌套列表迭代器

给你一个嵌套的整数列表 nestedList 。每个元素要么是一个整数，要么是一个列表；该列表的元素也可能是整数或者是其他列表。请你实现一个迭代器将其扁平化，使之能够遍历这个列表中的所有整数。

实现 NestedIterator 类:
- NestedIterator(List<NestedInteger> nestedList) 用嵌套列表 nestedList 初始化迭代器。
- int next() 返回嵌套列表的下一个整数。
- boolean hasNext() 如果仍然存在待迭代的整数，返回 true ；否则，返回 false。

你的代码将会用下述伪代码检测：
initialize iterator with nestedList
res = []
while iterator.hasNext()
    append iterator.next() to the end of res
return res

如果 res 与预期的扁平化列表匹配，那么你的代码将会被判为正确。

解题思路：
1. 使用栈来存储嵌套列表中的元素
2. 在构造函数中，将嵌套列表从后往前压入栈中（这样可以保证先进后出的顺序）
3. 在hasNext方法中，确保栈顶是一个整数：
   - 如果栈顶是列表，将其展开并压入栈中
   - 重复此过程直到栈顶是整数或栈为空
4. 在next方法中，调用hasNext确保栈顶是整数，然后弹出并返回栈顶元素

时间复杂度：
- 构造函数：O(n)，其中n是嵌套列表的元素数量
- hasNext：平均O(1)，最坏情况O(n)
- next：O(1)

空间复杂度：O(n)，用于存储栈中的元素
*/

// TEST:
// const nestedList = [[1,1],2,[1,1]];
// const i = new NestedIterator(nestedList);
// const a = [];
// while (i.hasNext()) a.push(i.next());
// console.log(a); // [1,1,2,1,1]
