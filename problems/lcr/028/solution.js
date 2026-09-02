/*
 * @lc app=leetcode.cn id=LCR 028 lang=javascript
 *
 * [LCR 028] 扁平化多级双向链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  // flatten a segment starting at node, splicing children; returns segment tail
  const walk = (node) => {
    let cur = node;
    let tail = node;
    while (cur) {
      if (cur.child) {
        const childHead = cur.child;
        const childTail = walk(childHead);
        const next = cur.next;
        // splice child chain between cur and next
        cur.next = childHead;
        childHead.prev = cur;
        cur.child = null;
        if (next) {
          childTail.next = next;
          next.prev = childTail;
        }
        cur = childTail;
        tail = childTail;
      } else {
        tail = cur;
        cur = cur.next;
      }
    }
    return tail;
  };
  if (!head) return null;
  walk(head);
  return head;
};
// @lc code=end

// TEST:
const assert = require('assert');

// build multilevel list from arrays-of-levels style: we construct via values + child links.
function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}
// build from level arrays [level0 arr, level1 arr(with nulls aligned)...] is complex;
// simplest: build level0 list, then attach children by index. Use provided example shape manually.

// example 1 from statement: nodes with child links:
// L0: 1-2-3-4-5-6 ; 3.child = L1: 7-8-9-10 ; 8.child = L2: 11-12
function mkList(vals) { let head=null,tail=null; for(const v of vals){ const n=new Node(v,null,null,null); if(tail){tail.next=n;n.prev=tail;} else head=n; tail=n;} return {head,tail}; }
const l0 = mkList([1,2,3,4,5,6]);
const l1 = mkList([7,8,9,10]);
const l2 = mkList([11,12]);
// link: 3.child -> 7; 8.child -> 11
let n = l0.head; while (n.val !== 3) n = n.next; n.child = l1.head;
let m = l1.head; while (m.val !== 8) m = m.next; m.child = l2.head;

const flat = flatten(l0.head);
const toArr = (h) => { const a=[]; while(h){a.push(h.val); h=h.next;} return a; };
assert.deepStrictEqual(toArr(flat), [1,2,3,7,8,11,12,9,10,4,5,6]);
// prev pointers consistent
let prev=null; let cur=flat; let ok=true;
while(cur){ if(cur.prev!==prev) ok=false; prev=cur; cur=cur.next; }
assert.ok(ok);

// single node
const s = mkList([5]);
assert.deepStrictEqual(toArr(flatten(s.head)), [5]);
// empty
assert.strictEqual(flatten(null), null);

console.log('All tests passed!');
console.log('flatten example1 =', JSON.stringify(toArr(flat)));
