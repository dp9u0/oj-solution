/*
 * @lc app=leetcode.cn id=1634 lang=javascript
 *
 * [1634] 求两个多项式链表的和
 */

// @lc code=start
/**
 * Definition for polynomial singly-linked list.
 * function PolyNode(x=0, y=0, next=null) {
 *     this.coefficient = x;
 *     this.power = y;
 *     this.next = next;
 * }
 */

/**
 * @param {PolyNode} poly1
 * @param {PolyNode} poly2
 * @return {PolyNode}
 */
var addPoly = function(poly1, poly2) {
    const dummy = new PolyNode();
    let tail = dummy, a = poly1, b = poly2;
    while (a && b) {
        if (a.power === b.power) {
            const c = a.coefficient + b.coefficient;
            if (c !== 0) {
                tail.next = new PolyNode(c, a.power);
                tail = tail.next;
            }
            a = a.next;
            b = b.next;
        } else if (a.power > b.power) {
            tail.next = new PolyNode(a.coefficient, a.power);
            tail = tail.next;
            a = a.next;
        } else {
            tail.next = new PolyNode(b.coefficient, b.power);
            tail = tail.next;
            b = b.next;
        }
    }
    tail.next = a || b;
    return dummy.next;
};
// @lc code=end

// TEST:
function PolyNode(x, y, next) {
    this.coefficient = x === undefined ? 0 : x;
    this.power = y === undefined ? 0 : y;
    this.next = next === undefined ? null : next;
}
const build = (pairs) => {
    const dummy = new PolyNode();
    let t = dummy;
    for (const [c, p] of pairs) { t.next = new PolyNode(c, p); t = t.next; }
    return dummy.next;
};
const show = (node) => {
    const out = [];
    for (let n = node; n; n = n.next) out.push([n.coefficient, n.power]);
    return JSON.stringify(out);
};
console.log(show(addPoly(build([[1,1]]), build([[1,0]])))); // [[1,1],[1,0]]
console.log(show(addPoly(build([[2,2],[4,1],[3,0]]), build([[3,2],[-4,1],[-1,0]])))); // [[5,2],[2,0]]
console.log(show(addPoly(build([[1,2]]), build([[-1,2]])))); // []
