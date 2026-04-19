/*
 * @lc app=leetcode id=385 lang=javascript
 *
 * [385] Mini Parser
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
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
    if (s[0] !== '[') {
        const ni = new NestedInteger();
        ni.setInteger(parseInt(s));
        return ni;
    }

    const stack = [];
    let num = null;
    let negative = false;

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === '[') {
            stack.push(new NestedInteger());
        } else if (c === '-') {
            negative = true;
        } else if (c >= '0' && c <= '9') {
            num = (num === null ? 0 : num) * 10 + parseInt(c);
        } else if (c === ',' || c === ']') {
            if (num !== null) {
                const ni = new NestedInteger();
                ni.setInteger(negative ? -num : num);
                stack[stack.length - 1].add(ni);
            }
            num = null;
            negative = false;
            if (c === ']' && stack.length > 1) {
                const top = stack.pop();
                stack[stack.length - 1].add(top);
            }
        }
    }

    return stack[0];
};
// @lc code=end

// TEST:
// Mock NestedInteger for local testing
class NestedInteger {
    constructor() { this._val = null; this._list = []; }
    isInteger() { return this._list.length === 0 && this._val !== null; }
    getInteger() { return this._val; }
    setInteger(v) { this._val = v; this._list = []; }
    add(elem) { this._list.push(elem); this._val = null; }
    getList() { return this._list; }
}

const t1 = deserialize('324');
console.log(t1.isInteger() && t1.getInteger() === 324);

const t2 = deserialize('[123,[456,[789]]]');
console.log(!t2.isInteger());
console.log(t2.getList().length === 2);
console.log(t2.getList()[0].getInteger() === 123);

const t3 = deserialize('[]');
console.log(!t3.isInteger() && t3.getList().length === 0);

const t4 = deserialize('[-1]');
console.log(t4.getList()[0].getInteger() === -1);

const t5 = deserialize('[1,[2],3]');
console.log(t5.getList().length === 3);
