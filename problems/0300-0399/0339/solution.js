/*
 * @lc app=leetcode.cn id=339 lang=javascript
 *
 * [339] 嵌套列表加权和
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
 *     The result is undefined if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     The result is undefined if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {
    const dfs = (list, depth) => {
        let sum = 0;
        for (const item of list) {
            if (item.isInteger()) sum += item.getInteger() * depth;
            else sum += dfs(item.getList(), depth + 1);
        }
        return sum;
    };
    return dfs(nestedList, 1);
};
// @lc code=end

// TEST:
// mimic NestedInteger with plain structures: number = integer, array = list
const makeNI = x => ({
    isInteger: () => typeof x === 'number',
    getInteger: () => x,
    getList: () => x.map(makeNI),
});
const test = arr => depthSum(arr.map(makeNI));
console.log(test([[1, 1], 2, [1, 1]])); // 10
console.log(test([1, [4, [6]]])); // 27 (1*1 + 4*2 + 6*3 = 1+8+18)
console.log(test([[1], 2, [[3]]])); // 10
console.log(test([])); // 0
console.log(test([5])); // 5
